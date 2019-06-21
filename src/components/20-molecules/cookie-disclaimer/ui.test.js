import { Selector, ClientFunction } from 'testcafe';

const host = process.env.TEST_HOST_STORYBOOK_URL || 'http://localhost:9999';

fixture('Cookie disclaimer - basic functionality').page(
  `${host}/iframe.html?id=molecules-cookie-disclaimer--cookie-disclaimer-default`
);

const TAG = 'axa-cookie-disclaimer';
const CLASS = '.m-cookie-disclaimer';

test('should render cookie-disclaimer', async t => {
  const $axaElem = await Selector(TAG);
  await t.expect($axaElem.exists).ok();
  const $axaElemShadow = await Selector(
    () => document.querySelector('axa-cookie-disclaimer').shadowRoot
  );
  const $axaElemShadowEl = await $axaElemShadow.find(CLASS);
  await t.expect($axaElemShadowEl.exists).ok();
});

test('should store in localStorage the date of when accepted', async t => {
  const $axaElem = await Selector(TAG);
  await t.expect($axaElem.exists).ok();
  const $axaBtnShadow = await Selector(() =>
    document
      .querySelector('axa-cookie-disclaimer')
      .shadowRoot.querySelector('axa-button')
  );
  await t.click($axaBtnShadow);
  const timeStamp = await ClientFunction(() => {
    const time = window.localStorage.getItem(
      'axa-ch-cookie-disclaimer-accepted'
    );
    return time;
  });
  const time = new Date().getTime();
  await t
    .expect(parseInt(await timeStamp(), 10))
    .within(time - 1000, time + 1000);
});

test('should not render once accepted', async t => {
  const $axaElem = await Selector(TAG);
  await t.expect($axaElem.exists).ok();
  const $axaBtnShadow = await Selector(() =>
    document
      .querySelector('axa-cookie-disclaimer')
      .shadowRoot.querySelector('axa-button')
  );
  await t.click($axaBtnShadow);
  await t.expect($axaElem.exists).notOk();
});
import 'storybook-readme/register';
import './addons/changelog/register.js';
import '@storybook/addon-knobs/register';
import './addons/codepreview/register.js';
import { STORIES_CONFIGURED, STORY_MISSING } from '@storybook/core-events';
import addonAPI from '@storybook/addons';

addonAPI.register('axa-ch/defaultpage', storybookAPI => {
  storybookAPI.on(STORIES_CONFIGURED, (kind, story) => {
    if (storybookAPI.getUrlState().path === '/story/*') {
      storybookAPI.selectStory('Welcome', 'to Pattern Library')
    }
  });
  storybookAPI.on(STORY_MISSING, (kind, story) => {
    storybookAPI.selectStory('Welcome', 'to Pattern Library')
  })
});

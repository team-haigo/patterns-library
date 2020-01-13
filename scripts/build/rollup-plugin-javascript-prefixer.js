/**
 * The javascript prefixer is a rollup plugin, that processes the javascript
 * files and enriches the css-class references within those files with
 * versioned prefixes. For this to work properly, the ./sass-prefixer.js file
 * has to be executed as well, which does the same for all scss files during
 * the build step.
 */

const path = require('path');
/* eslint-disable import/no-dynamic-require */
const componentPackageJson = require(`${process.cwd()}${path.sep}package.json`);
const elementMapping = new Map();
elementMapping.set('10-atoms', 'a-');
elementMapping.set('20-molecules', 'm-');
elementMapping.set('30-organisms', 'o-');

const cwdAsStringArray = process.cwd().split(path.sep);

const parentDirIndex = cwdAsStringArray.length - 2; // 2: penultimate directory level index
const customElementCategory = cwdAsStringArray[parentDirIndex]; // E.g.: "/patterns-library/src/components/10-atoms/button" -> "10-atoms"
const customElementName = componentPackageJson.name.replace('@axa-ch/', '');
// atom (a-) / molecule (m-) / organism (o-)
const customElementTypePrefix = elementMapping.get(customElementCategory);
const newPrefix = `nva${componentPackageJson.version.replace(/\./g, '-')}`;

export const componentInfo = {
  prefix: newPrefix, // 'nva1-2-3'
  standardComponentClassPrefix: customElementTypePrefix + customElementName, // a-button-link
  cssPrefix: `${newPrefix}_${customElementTypePrefix}${customElementName}`, // .nva1-2-3_a-button-link
};

export default function jsPrefixer() {
  return {
    name: 'js-prefixer',
    transform: code => {
      // Look for all classes and replace all that start with the BEM prefix and add
      // the versioned prefix.
      const afterReplace = code
        .split(`"${componentInfo.standardComponentClassPrefix}`)
        .join(`"${componentInfo.cssPrefix}`)
        .split(`'${componentInfo.standardComponentClassPrefix}`)
        .join(`'${componentInfo.cssPrefix}`)
        .split(` ${componentInfo.standardComponentClassPrefix}`)
        .join(` ${componentInfo.cssPrefix}`);
      return { code: afterReplace };
    },
  };
}

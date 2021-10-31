'use strict';

const stylelint = require('stylelint');

function formatter(results, returnValue) {
  for (const result of results) {
    for (const warning of result.warnings) {
      if (
        warning.rule === 'declaration-property-value-disallowed-list' &&
        (warning.text.includes('property "margin') || warning.text.includes('property "padding'))
      ) {
        const prop = warning.text.match(/property "(.*?)"/)[1];
        const value = warning.text.match(/value "(.*?)"/)[1];
        warning.text = `Unexpected unaligned pixel value "${value}" for property "${prop}". Please use a multiple of 8px (or 2px, 4px)`
      }

      if (warning.rule === 'plugin-color/color-types') {
        warning.text += '. Please use a variable from the _colors.scss file'
      }

      if (warning.rule === 'selector-class-pattern') {
        const className = warning.text.match(/class selector "(.*?)" to/)[1];
        const kebabified = className.replaceAll(/([A-Z])/g, "-$1").toLowerCase();
        warning.text = warning.text.replace(/to match pattern ".*?"/, `to use kebab-case (suggested: "${kebabified}")`);
      }
    }
  }

  return stylelint.formatters.string(results);
}

module.exports = formatter;

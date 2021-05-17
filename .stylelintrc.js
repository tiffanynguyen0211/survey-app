/**
 * @param {String} block
 * @param {Object} [presetOptions]
 * @param {String} [presetOptions.namespace]
 * @returns {RegExp}
 */
function bemSelector(block, presetOptions) {
  const ns =
    presetOptions && presetOptions.namespace
      ? `${presetOptions.namespace}-`
      : '';
  const WORD = '[a-zA-Z0-9]+(?:-[a-zA-Z0-9]+)*';
  const element = `(?:__${WORD})?`;
  const modifier = `(?:--${WORD}){0,2}`;
  const attribute = '(?:\\[.+\\])?';
  return new RegExp(`^\\.${ns}${block}${element}${modifier}${attribute}$`);
}

module.exports = {
  extends: [
    'stylelint-config-idiomatic-order',
    './node_modules/prettier-stylelint/config.js',
  ],
  plugins: ['stylelint-selector-bem-pattern'],
  rules: {
    'declaration-empty-line-before': null,
    'rule-empty-line-before': [
      'always',
      {
        except: ['first-nested'],
        ignore: ['after-comment'],
      },
    ],
    'at-rule-empty-line-before': [
      'always',
      {
        except: ['after-same-name', 'first-nested'],
        ignore: ['after-comment'],
      },
    ],
    'max-empty-lines': 1,
    'max-nesting-depth': 2,
    'selector-nested-pattern': '^(?!&__|&--).*$',
    'plugin/selector-bem-pattern': {
      preset: 'bem',
      componentSelectors: bemSelector,
    },
  },
};

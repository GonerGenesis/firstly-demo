const {
  //plugins,
  ...prettierConfig
} = require('@kitql/eslint-config/.prettierrc.cjs')

module.exports = {
  ...prettierConfig,
  // Your overrides here
}
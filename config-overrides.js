const { override, fixBabelImports, addLessLoader } = require('customize-cra');


module.exports = override(
  fixBabelImports('import', {
      libraryName: 'antd',
      libraryDirectory: 'es',
      style: true,
   }),
  addLessLoader({
    javascriptEnabled: true,
    modifyVars: {
      // -------- Colors -----------
      '@primary-color': '#1a73e8',
      '@info-color': '#1a73e8',
      '@success-color': '#488500',
      '@processing-color': '#1a73e8',
      '@error-color': '#d14836',
      '@highlight-color': '#f18400',
      '@warning-color': '#f9edbe',
      '@normal-color': '#dedede',
      '@white': '#fff',
      '@black': '#000;',

      // Background color for `<body>`
      '@text-color': '#3c4043',
      '@text-color-secondary': '#5f6368',
      '@icon-color-hover': '#5f6368',
      '@font-size-base': '16px',

      // LINK
      '@link-hover-color': '#174ea6',

      // Border color
      '@border-color-base': '#dadce0',

      // Buttons
      '@btn-text-shadow': 'none',
      '@btn-height-base': '36px',

      // Checkbox
      '@checkbox-size': '20px',

      // Radio
      '@radio-size': '20px',

      // Input
      // ---
      '@input-height-base': '42px',
      '@input-padding-horizontal': '@control-padding-horizontal',
      '@input-padding-vertical-base': '8px',
      '@input-color': '#3c4043',
      '@input-placeholder-color': '#bdc1c6',

      // Select
      // ---
      '@select-item-selected-bg': '#eee',
      '@select-item-active-bg': '#eee',
    },
  }),
);
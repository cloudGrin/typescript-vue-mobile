const LocalConfig = require('./src/config.json');
const NODE_ENV = process.env.NODE_ENV || 'development';
const IS_PRO = NODE_ENV === 'production';

const plugins = [
  ['lodash'],
  [
    'import',
    {
      libraryName: 'vant',
      libraryDirectory: 'es',
      style: true
    },
    'vant'
  ]
];

module.exports = {
  plugins,
  presets: ['@vue/app']
};

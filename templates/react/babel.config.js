module.exports = api => {
  console.log(api.env('production'))
  api.cache(true)
  const presets = [
    '@babel/react'
  ]
  const plugins = [
    ['@babel/proposal-decorators', { legacy: true }],
    ['@babel/proposal-class-properties', { loose: true }],
    ['styled-jsx/babel', { plugins: ['styled-jsx-plugin-sass'] }],
    'react-hot-loader/babel'
  ]
  return {
    presets,
    plugins
  }
} 

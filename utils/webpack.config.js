/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-require-imports */
const { merge } = require('webpack-merge');
const singleSpaDefaults = require('webpack-config-single-spa-react-ts');
const Dotenv = require('dotenv-webpack');
const path = require('path');
const ESLintPlugin = require('eslint-webpack-plugin');
const webpack = require('webpack');

module.exports = (env, argv) => {
  const dotEnvFile = {
    production: '.env',
  };
  const defaultConfig = singleSpaDefaults({
    orgName: 'poliedro',
    projectName: 'lib-test-utils',
    orgPackagesAsExternal: false,
    webpackConfigEnv: env,
    argv,
  });

  return merge(defaultConfig, {
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
      },
    },
    module: {
      rules: [
        {
          test: /\.svg$/, // Adicionando suporte para SVG
          use: ['@svgr/webpack'], // Usando o loader @svgr/webpack
        },
      ],
    },
    plugins: [
      new Dotenv({
        path: dotEnvFile.production,
      }),
      new ESLintPlugin({
        extensions: ['js', 'jsx', 'ts', 'tsx'],
        fix: false,
        emitError: true,
        emitWarning: true,
        failOnError: false,
      }),
      new webpack.ProvidePlugin({
        FroalaEditor: 'froala-editor',
      }),
    ],
    externals: [],
  });
};

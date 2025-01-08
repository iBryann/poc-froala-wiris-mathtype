/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/no-require-imports */
const path = require('path');
const { merge } = require('webpack-merge');
const singleSpaDefaults = require('webpack-config-single-spa-react-ts');
const Dotenv = require('dotenv-webpack');
const webpack = require('webpack');

module.exports = (env, argv) => {
  const dotEnvFile = {
    production: '.env',
  };
  const defaultConfig = singleSpaDefaults({
    orgName: 'poliedro',
    projectName: 'lib-test',
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
          test: /\.(js|jsx|ts|tsx)$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
          },
        },
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
      new webpack.ProvidePlugin({
        FroalaEditor: 'froala-editor',
      }),
    ],
    externals: ['@poliedro/lib-test-utils'],
  });
};

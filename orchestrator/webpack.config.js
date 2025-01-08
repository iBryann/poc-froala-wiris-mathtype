const path = require("path");
const { merge } = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa-ts");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const Dotenv = require("dotenv-webpack");
require("dotenv").config();

module.exports = (env, argv) => {
  const dotEnvFile = {
    production: ".env",
  };
  const orgName = "poliedro";
  const defaultConfig = singleSpaDefaults({
    orgName,
    projectName: "orchestrator",
    webpackConfigEnv: env,
    argv,
    disableHtmlGeneration: true,
  });

  return merge(defaultConfig, {
    plugins: [
      new Dotenv({
        path: dotEnvFile.production,
      }),
      new HtmlWebpackPlugin({
        inject: false,
        template: "src/index.ejs",
        favicon: "public/favicon.ico",
        URL_BASE: process.env.URL_BASE,
        ENVIRONMENT: process.env.ENVIRONMENT,
        templateParameters: {
          orgName,
        },
      }),
    ],
  });
};

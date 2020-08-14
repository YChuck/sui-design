const VueLoaderPlugin = require('vue-loader/lib/plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin')
const TerserWebpackPlugin = require('terser-webpack-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
  .BundleAnalyzerPlugin

const path = require('path')

const resolve = dir => path.join(__dirname, '..', dir)

const libConfig = {
  mode: 'none',
  entry: {
    sui: './src/index.js',
    'sui.min': './src/index.js',
  },
  output: {
    path: resolve('lib'),
    filename: '[name].js',
    library: 'sui',
    libraryExport: 'default',
    libraryTarget: 'umd',
    umdNamedDefine: true,
  },
  resolve: {
    extensions: ['.js', '.vue', '.scss'],
    alias: {
      '@': resolve('src'),
    },
  },
  optimization: {
    minimize: true,
    minimizer: [
      new TerserWebpackPlugin({
        include: /\.min\.js$/,
      }),
    ],
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      },
      {
        test: /\.js$/,
        loader: ['babel-loader', 'eslint-loader'],
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          'sass-loader',
        ],
      },
      // {
      //   test: /\.css$/,
      //   use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader'],
      // },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new VueLoaderPlugin(),
    new OptimizeCssAssetsWebpackPlugin({
      assetNameRegExp: /\.css$/g,
      cssProcessor: require('cssnano'),
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css',
    }),
  ],
  // 防止将某些 import 的包(package)打包到 bundle 中，而是在运行时(runtime)再去从外部获取这些扩展依赖(external dependencies)
  externals: [/^iview\/.+$/, /^element-ui\/.+$/, 'vue', 'moment'],
  // {
  //   iview: {
  //     root: 'iview',
  //     commonjs: 'iview',
  //     commonjs2: 'iview',
  //     amd: 'iview',
  //   },
  //   'element-ui': {
  //     root: 'element-ui',
  //     commonjs: 'element-ui',
  //     commonjs2: 'element-ui',
  //     amd: 'element-ui',
  //   },
  //   vue: {
  //     root: 'vue',
  //     commonjs: 'vue',
  //     commonjs2: 'vue',
  //     amd: 'vue',
  //   },
  //   moment: {
  //     root: 'moment',
  //     commonjs: 'moment',
  //     commonjs2: 'moment',
  //     amd: 'moment',
  //   },
  // },
}

module.exports = (env, argv) => {
  if (env && env.report) {
    libConfig.plugins.push(new BundleAnalyzerPlugin())
  }
  return libConfig
}

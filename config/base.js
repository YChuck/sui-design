const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
  .BundleAnalyzerPlugin
const webpack = require('webpack')
const merge = require('webpack-merge')

const path = require('path')

const resolve = dir => path.join(__dirname, '..', dir)

const dev = require('./dev')
const prod = require('./prod')

const buildConfig = env => {
  let isProd = env && env.production
  let base = {
    entry: './example/main.js',
    output: {
      // 指定在浏览器中所引用的「此输出目录对应的公开 URL」
      publicPath: '/',
      path: resolve('dist'),
      filename: 'js/[name].js',
      chunkFilename: 'js/[name]_[chunkhash:8].js',
    },
    resolve: {
      extensions: ['.js', '.vue', '.scss'],
      alias: {
        '@': resolve('src'),
        example: resolve('example'),
      },
    },
    devServer: {
      contentBase: resolve('dist'),
      open: true,
      port: 9090,
      hot: true,
      hotOnly: true,
      // use h5 history and run index.html when 404
      historyApiFallback: true,
    },
    optimization: {
      splitChunks: {
        chunks: 'all',
        cacheGroups: {
          vendors: {
            name: 'chunk-vendors',
            test: /[\\/]node_modules[\\/]/,
            priority: -10,
            chunks: 'initial',
          },
          ui: {
            name: 'chunk-ui',
            test: /[\\/]node_modules[\\/](element-ui|iview|sui-design)[\\/]/,
            priority: -5,
          },
          commons: {
            name: 'chunk-commons',
            minChunks: 2,
            priority: -20,
            reuseExistingChunk: true,
          },
        },
      },
    },
    module: {
      rules: [
        {
          test: /\.vue$/,
          loader: 'vue-loader',
        },
        {
          test: /\.scss$/,
          use: [
            !isProd ? 'vue-style-loader' : MiniCssExtractPlugin.loader,
            'css-loader',
            'postcss-loader',
            'sass-loader',
          ],
        },
        {
          test: /\.(woff|woff2|ttf|svg)$/,
          use: [
            {
              loader: 'url-loader',
              options: {
                limit: 2048,
              },
            },
          ],
        },
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: ['babel-loader', 'eslint-loader'],
        },
      ],
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new VueLoaderPlugin(),
      new CleanWebpackPlugin(),
      new OptimizeCssAssetsWebpackPlugin({
        assetNameRegExp: /\.css$/g,
        cssProcessor: require('cssnano'),
      }),
      new MiniCssExtractPlugin({
        // MiniCssExtractPlugin 使用 [contenthash]
        filename: 'css/[name]_[contenthash:8].css',
      }),
      new HtmlWebpackPlugin({
        title: 'SUI-DESIGN',
        filename: 'index.html',
        template: resolve('./example/public/index.html'),
        inject: true,
        chunks: 'all',
        minify: {
          html5: true,
          collapseWhitespace: true,
          preserveLineBreaks: false,
          minifyCSS: true,
          minifyJS: true,
          removeComments: false,
        },
      }),
    ],
  }
  if (env && env.report) {
    base.plugins.push(new BundleAnalyzerPlugin())
  }
  if (isProd) return merge(base, prod)
  else return merge(base, dev)
}

module.exports = env => buildConfig(env)

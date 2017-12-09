module.exports = options => {
  return {
    entry: {
        App: './src/components/App/App.js',
    },
    output: {
      filename: './public/javascripts/[name].js',
    },
    externals: {
      react: 'React',
      'react-dom': 'ReactDOM',
    },
    module: {
      rules: [
        {
          test: /.js$/,
          exclude: /node_modules/,
          use: [
            {
              loader: 'babel-loader',
              options: {
                cacheDirectory: true,
              },
            },
          ],
        },
      ],
    },
  }
}

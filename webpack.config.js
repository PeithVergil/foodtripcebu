const webpack = require('webpack');
const path = require('path');

module.exports = {
    entry: {
        index: './src/index.js',
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            [
                                '@babel/preset-env',
                                {
                                    debug: true,
                                    targets: {
                                        'browsers': ['last 2 versions', 'not dead', '> 0.5%'],
                                    }
                                }
                            ],
                            ['@babel/preset-react'],
                        ],
                    },
                },
                include: [
                    path.resolve(__dirname, 'src'),
                ],
            },
        ],
    },
    devtool: 'cheap-source-map',
    optimization: {
        splitChunks: {
            name: 'vendors',
            chunks: 'all',
        },
    },
};

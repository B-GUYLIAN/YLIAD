

module: {
    rules: [
        // ... 생략 ...
        {
            test: /\.(mp3|ogg)$/,
            loader: 'file-loader', // 또는 'url-loader'
            options: {
               name: "assets/media/[name].[ext]?[hash]"
            }
        },
    ]
},
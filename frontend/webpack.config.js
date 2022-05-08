
var path = require('path');
// var HtmlWebpackPlugin = require('html-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin'); 


module.exports = {
    mode: 'development',  // production, development, none  배포할 때는 production
    entry: './src/index.tsx',
    // 웹 자원을 변환하기위해 필요한 최초 진입점이자 자바스크립트 파일경로
    // entry 속성에 지정된 파일에는 웹 에플리케이션의 전반적인 구조와 내용이 담겨져 있어야 함.

    output: {
    // 웹팩을 돌리고 난 결과물의 파일 경로
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
    // 웹팩으로 변환할 때 적용되는 loader들을 추가할 수 있다. 
        rules: [
            {
			test: /\.(mp3|ogg)$/,      // 로더를 적용할 파일 유형
			exclude: /(node_modules|bower_components)/,
			use: {    // 해당 파일에 적용할 로더의 이름 
				loader: 'file-loader',
                // 로더는 오른쪽에서 왼쪽 순서로 적용.
				options: {
                    name: "assets/media/[name].[ext]?[hash]"

				}
			}
		},
        {
            test: /\.(ts|tsx)$/,
            use: [
              'babel-loader',
              {
                loader: 'ts-loader',
                options: {
                  transpileOnly: true,
                },
              },
            ],
            exclude: /node_modules/,
          },
          {
            test: /\.(png|jpe?g|gif|woff|woff2|ttf|svg|ico)$/i,
            exclude: /(node_modules|bower_components)/,
            use: [
              {
                loader: 'file-loader',
              },
            ],
          },
          {
            test: /\.css$/i,
            use: ['style-loader', 'css-loader'],
          }
        
    ]
    },
    plugins: [
        // new HtmlWebpackPlugin({
        //     // index.html 템플릿을 기반으로 빌드 결과물을 추가해줌
        //     template: './src/index.html',
        //     filename: 'index.html',
        //   }),
        new ForkTsCheckerWebpackPlugin(),
    ],
    // 플러그인은 웹팩의 기본적인 동작에 추가적인 기능을 제공하는 속성
    // 로더랑 비교하면 로더는 파일을 해석하고 변환하는 과정에 관여하는 반면,
    // 플러그인은 해당 결과물의 형태를 바꾸는 역할 

    devServer: {
        historyApiFallback:true,
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js'],
        alias: {
          '@': path.resolve(__dirname, '../src/'),
        },
      },
    devtool: "source-map"
    // resolve: {
    //     alias: {
    //       'vue$': 'vue/dist/vue.esm.js'
    //     },
    //     extensions: ['*', '.js', '.vue', '.json']
    //   },
    // 파일간의 관계를 해석할 때, 해석하는 방법


//웹팩 데브 서버는 웹 애플리케이션을 개발하는 과정에서 유용하게 쓰이는 도구
// 웹팩의 빌드 대상 파일이 변경 되었을 때 웹팩 명령어를 실행하지 않아도 코드만 변경하고 저장하면 브라우저를 새로고침 해줌
// 새로 고침 뿐만아니라 웹팩 빌드 시간 또한 줄여주기 때문에 웹팩 기반의 앱 개발에 필수

}
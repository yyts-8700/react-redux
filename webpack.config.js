const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const htmlPlugin = new HtmlWebpackPlugin({
	template : path.join(__dirname,'./src/index.html'),  //源文件位置
	filename : 'index.html'      //生成的内存中首页名称
})
module.exports = {
    mode: 'development',
    entry: path.join(__dirname,"/src","/index.js"),
    output: {
        path: path.join(__dirname,'dist'),
        filename: "build.js"
    },
    plugins:[htmlPlugin],
    module:{
        rules:[
            {
                test: /\.js|jsx$/,  // 加载成js或jsx结尾的文件
				use: 'babel-loader',
				exclude: /node_modules/ //一定要加exclude排除项
            },
            {
                test: /\.css$/,
                use: [
                    {loader: "style-loader"},   
                    {
                        loader: "css-loader",
                        options:{
                            // modules:{
                            //     localIdentName:"[path][name]__[local]--[hash:base64:5]"
                            // },
                        }
                    }
                ],
                exclude: /node_modules/ //一定要加exclude排除项
            },
            {
                test: /\.scss$/,
                use: [
                    {loader: "style-loader"},   
                    {
                        loader: "css-loader",
                        // options:{
                        //     modules:{
                        //         localIdentName:"[path][name]__[local]--[hash:base64:5]"
                        //     },
                        // }
                    },
                    {loader: "sass-loader"}
                ],
                exclude: /node_modules/ //一定要加exclude排除项
            }
        ]
    },
    resolve:{
        extensions:['.js','.jsx','.json'], //这几个文件名后缀可以不写
        alias:{
            "@" : path.join(__dirname,'./src')
        }
     }

}
/* export a json object with 
    - a mode (production or dev) to determine if the bundle.js file should be human readable or not
    - the entry point for the application 
    - an output destination that the ./build/index.html file will be looking for
*/
module.exports = {
    mode: 'development',
    entry: ['./app/index.js'],
    output: {
        path: '/Users/annamalchowperryman/src/github.com/udemy_es6/build',
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                loader: 'babel-loader',
                test: /\.js$/,
                exclude: /node_modules/
            }
        ]
    },
    devServer: {
        port: 3000, 
        contentBase: './build',
        inline: true
    }
}

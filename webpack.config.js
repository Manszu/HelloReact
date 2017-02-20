module.exports= {
    entry: './public/app.jsx', //this tells webpack where it should start processing code
    output: {
        path: __dirname,
        filename: './public/bundle.js'
    },
    resolve:{
        root : _dirname,  //dirname get you a file for whatever file that you are in, dirname leads to HelloReact folder
        alias: {
            Greeter:
        }
        extensions: ['','.js','.jsx']
    },
    module:{
        loaders: [ //we will telling the babel loader to take our files, parse them to react, get the output, and run them through es2015
            {
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015'] //it tells the compiler to compile our code for react and es 2015
                },
                test: /\.jsx?$/, //matching any file with .jsx extension
                exclude: /(node_modules|bower_components)/ //which files should be excluded from parsing
            }
        ]
    }
};
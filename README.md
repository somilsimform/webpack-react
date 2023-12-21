# webpack-react

Initialize a node project
Create directory and run (here directory name is react-webpack5).

    cd react-webpack5
    yarn init -y

Run following command to install webpack as dev dependency


    yarn add -D webpack webpack-dev-server webpack-cli

Open package.json and add following:

    "scripts": {
        "start": "webpack serve --config ./webpack.config.js --mode development",
        "build": "webpack --config ./webpack.config.js --mode production"
    }

Setup Babel
Run following command to install babel as dev dependency

    yarn add -D @babel/core @babel/preset-env @babel/preset-react babel-loader

create new file in root .babelrc and add

    {
        "presets": [
            "@babel/preset-env",
            "@babel/preset-react"
        ]
    }

Setup React
Run this command and install

        yarn add react react-dom

Adding Hot Module Replacement

    yarn install react-hot-loader as dev dependency
    yarn add -D react-hot-loader

Add TypeScript
run this command in root directory

    yarn add -D typescript ts-loader @types/node @types/react @types/react-dom @types/webpack-env

Add SCSS
install following as dev dependencies

    yarn add -D sass-loader node-sass style-loader css-loader

Add optimization by enabling dyamic imports
Add following webpack plugin to inject dyynamic bundle scripts into html

    yarn add -D html-webpack-plugin

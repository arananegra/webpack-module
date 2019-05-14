# Webpack (also Parcel) module assignment

## Webpack
Inside the [webpack folder](./webpack) you will find:

- A hello world React App
- That app is bundled with Webpack 4.
- Is using typescript throught babel-loader.
- Its hello world is styled using SCSS (modules).
- Its hello world show a image/logo from lemoncode.
- It loads also a dog from https://dog.ceo/dog-api/ using [dotenv-webpack](https://www.npmjs.com/package/dotenv-webpack).
    - If the select.ed environment is development you will see any kind of dog breed
    - Otherwise, (production env) you will only see Pugs 🐶
- You can analyze the production bundle sizes 

In order to run this example you just have to clone this repo and install deps

```
cd webpack && npm install
```
Here is a list of npm commands you can use (the apps is always listening at port 3002)

```
npm run start:dev # Start webpack dev server on dev env.
npm run start:pro # Start webpack dev server on production env.
npm run build:pro # Use webpack to build the project into ./dist using the production config
npm run build:dev # Use webpack to build the project into ./dist using the dev config
npm run build:dev # Use webpack bundle analyzer to analyze the bundle
```

## Parcel


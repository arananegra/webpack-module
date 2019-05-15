# Webpack (also Parcel) module assignment

## Webpack
Inside the [webpack folder](./webpack) you will find:

- A hello world React App.
- That app is bundled with Webpack 4.
- Is using typescript throught babel-loader.
- Its hello world is styled using SCSS (modules).
- Its hello world show a image/logo from lemoncode.
- It also loads a dog from https://dog.ceo/dog-api/ using [dotenv-webpack](https://www.npmjs.com/package/dotenv-webpack).
    - If the select.ed environment is development you will see any kind of dog breed
    - Otherwise, (production env) you will only see Pugs 🐶
- You can analyze the production bundle sizes.

### Extra points 👻
- A working generated PWA manifest using [webpack-pwa-manifest](https://github.com/arthurbergmz/webpack-pwa-manifest).
- Service worker is made also on the fly using [sw-precache-webpack-plugin](https://github.com/goldhand/sw-precache-webpack-plugin)
- Favicons are directly injected into index.html through html-webpack-plugin using [favicons-webpack-plugin](https://github.com/jantimon/favicons-webpack-plugin)

If you take the generated prod. bundle and serve it using a static server with https enabled and then navigate to that same web using Chrome, it will ask you if you want to add the app to the homescreen 📲

You can check that the service worker and the manifest are loaded using the dev tools -> Application tab -> Service Workers | Manifest.



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

Inside the [parcel folder](./parcel) you will find:

- A hello world React App
- That app is bundled with Parcel.
- Is using typescript (although you better don't make mistakes, Parcel doesn't give a f*** 🤭 about them).
- Its hello world is styled using SCSS.
- Its hello world show a image/logo from lemoncode.
- It also loads a dog from https://dog.ceo/dog-api/ but Parcel (again) doesn't support env variables (they suggest something really hacky https://github.com/parcel-bundler/parcel/issues/255 🤔) so expect only Pug photos.
- You can analyze the production bundle sizes using a plugin (it does what it can https://github.com/gregtillbrook/parcel-plugin-bundle-visualiser). When building the production script it will add a report.html.

In order to run this example you just have to clone this repo and install deps

```
cd parcel && npm install
```

Here is a list of npm commands you can use:

```
npm run build:dev # Start the parcel server using non-production build.
npm run build:pro # Use parcel to build the project into ./dist using the default production settings by Parcel.
```

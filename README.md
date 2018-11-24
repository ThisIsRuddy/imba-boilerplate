# imba-boilerplate

Boilerplate built with IMBA & SASS. Configured with `webpack` & `webpack-dev-server` for local development and production bundling combined with `simple-server` for quick testing static deployment locally.

## Install dependencies
Standard command for install required dependencies, be sure to run `yarn upgrade` from time to time to be sure all dependencies are up to date.

```
yarn
```

### Serve app in development mode
Uses `webpack-dev-server` to compile, watch and serve the app during development. The app will hot reload, update on file changes and is served at: `http://localhost:8080`.

```
yarn serve
```

### Build app for production
Uses webpack in production mode to bundle and compress all assets ready for static deployment.
Bundled output is sent to the `build` directory.

```
yarn build

generates:
    build/
        app.css
        app.js
        index.html
        ...{STATIC_ASSETS}
```

### Run production app locally
Uses simple-server to server host the `build` directory as a static folder which is served at `http://localhost:3000`.
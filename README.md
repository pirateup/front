# pirateup-front

> Front for our marvelous app

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

## Backend connection

### Mock (Dev)

```
    npm run mock-back
```

All mocked data are contained in ```./config/back-mock.json```. Mock server runs on :3000

### Dev

Specified as envariomental variable in ```./config/dev.env.js```

### Production

Specified as envariomental variable in ```./config/prod.env.js```

> Styleguide is located in ```./docs/stylguide.md```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

# pirateup-front

[![codebeat badge](https://codebeat.co/badges/2572ce8d-8317-49c8-8461-cdc904ddb322)](https://codebeat.co/projects/github-com-pirateup-front-master)
[![BCH compliance](https://bettercodehub.com/edge/badge/pirateup/front?branch=master)](https://bettercodehub.com/)
[![Known Vulnerabilities](https://snyk.io/test/github/pirateup/front/badge.svg)](https://snyk.io/test/github/pirateup/front)
[![Dependency Status](https://gemnasium.com/badges/github.com/pirateup/front.svg)](https://gemnasium.com/github.com/pirateup/front)
[![Dev-dependency Status](https://david-dm.org/pirateup/front/dev-status.svg)](https://david-dm.org/pirateup/front?type=dev)

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

### Dev (mocked backend)

```sh

    npm run mock-back
```

All mocked data are randomly created via ```./config/mock-api-data.js```.     
Mock server runs on port 3000   

Resource manifest is generated upon starting

### Dev

Specified as envariomental variable in ```./config/dev.env.js```

### Production

Specified as envariomental variable in ```./config/prod.env.js```

## Styleguide

Styleguide is located in ```./docs/stylguide.md```

---
For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

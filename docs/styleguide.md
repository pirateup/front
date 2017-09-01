# Frontend styleguide

## Vue

### Smart components

Initially everything should be written as a smart component and then moved to store if necessary. We encourage usage of smart parent component containg child dumb components when possible.

Good usage of smart component: registration data input models

Resources:
- [Forum discussion](https://forum.vuejs.org/t/vuex-distinction-between-data-store-and-ui-state-store/6748/4)

### Custom wrappers for 3rd party libraries

All 3rd party libraries should be wrapped to seperate their API from our application code

## JS

### Linter disclaimer

We're starting off from airbnb preset
All explicit linter rules are defined in ```.eslintrc.js```
Every explicit rule contains an explenation on why it was set

### Abbreviation in variable/parameter names

No abbrevitation shall exist. "event" is much more readable than "e".
Exception is made for technology names, eg. HTTP

Good example:

```js
    eventHandler(event)
    {
        const HTTP = ...
        // some code
    }
```

Bad example:

```js
    eventHandler(e)
    {
        const HyperTextTransferProtocol = ...
        // some code
    }
```

# Frontend styleguide

## Vue

### Smart components

Initially everything should be written as a smart component and then moved to store if necessary. We encourage usage of smart parent component containg child dumb components when possible.

Good usage of smart component: registration data input models

Resources:
- [0](https://forum.vuejs.org/t/vuex-distinction-between-data-store-and-ui-state-store/6748/4)

### Custom wrappers for 3rd party libraries

## JS

### Linter disclaimer

All explicit linter rules are defined in ```.eslintrc.js```
<!-- explanation is in comments -->
<!-- contact us if you think they're dumb -->

### Abbreviation in variable/parameter names

No abbrevitation shall exist. "event" is much more readable than "e".

Good example:

```js
    eventHandler(event)
    {
        // some code
    }
```

Bad example:

```js
    eventHandler(e)
    {
        // some code
    }
```

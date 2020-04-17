[![npm version](https://badge.fury.io/js/%40netsells%2Fvue-wrapped-styles.svg)](https://badge.fury.io/js/%40netsells%2Fvue-wrapped-styles)
[![Build Status](https://travis-ci.com/netsells/vue-wrapped-styles.svg?branch=master)](https://travis-ci.com/netsells/vue-wrapped-styles)
[![codecov](https://codecov.io/gh/netsells/vue-wrapped-styles/branch/master/graph/badge.svg)](https://codecov.io/gh/netsells/vue-wrapped-styles)
[![Mutation testing badge](https://badge.stryker-mutator.io/github.com/netsells/vue-wrapped-styles/master)](https://stryker-mutator.github.io)

# Vue Wrapped Styles

Wraps a component to add styles or change the default props. Useful for styling
libraries of components such as bootstrap components.

## Installation

```sh
yarn add @netsells/vue-wrapped-styles
```

## Usage

```
<script>
    import wrapComponent from '@netsells/vue-wrapped-styles';
    import { BButton } from 'bootstrap-vue';

    export default wrapComponent(BButton, {
        props: {
            variant: {
                type: String,
                default: 'primary', // Changing prop default values
            },
        },
    });
</script>

<style lang="scss">
    .btn {
        // styles
    }
</style>
```

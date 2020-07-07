# Hash plugin

> PHP hash manifest file writer plugin

Quickly generated PHP hash variables for updated CSS, JS and more. Forked from [xpepermint](https://github.com/xpepermint/hash-webpack-plugin).

## Setup

```js
npm install --save-dev @awdltd/hash-webpack-plugin
```

## Example

```js
...
var HashPlugin = require('hash-webpack-plugin');

module.exports = {
  ...
  plugins: [
    new HashPlugin({
      path: './dist/js/',
      fileName: 'hash.php',
      assetType: 'JS'
    })
  ]
};
```

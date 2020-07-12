# Hash plugin

> PHP hash manifest file writer plugin

Quickly generated PHP hash variables for updated CSS, JS and more. Forked from [xpepermint](https://github.com/xpepermint/hash-webpack-plugin).

## Setup

```js
npm install --save-dev @awdltd/hash-plugin
```

## Example

```js
const FileHashSave = require('hash-plugin');

// Webpack.config
module.exports = {
  ...
  plugins: [
    new FileHashSave({
      path: './dist/js/',
      fileName: 'hash.php',
      assetType: 'JS'
    })
  ]
};
```

```js
const {fileHashReplace} = require('hash-webpack-plugin');

// Generate hash (or use Gulp plugin)
let hash = Math.random().toString(36).substring(2, 7);

// Gulp task
gulp
  .src(`./dist/style.scss`)
  .pipe(
    ...
  )
  .on('end', function(){
    fileHashReplace('dist/css/hash.php', hash, 'CSS');
  };
```

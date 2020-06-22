var fs = require('fs');
var path = require('path');
var mkdirp = require('mkdirp');

module.exports = function(options) {
  return function() {

    var outputPath = options.path || './';
    var fileName = options.fileName || 'hash.php';

    mkdirp(outputPath, function(err) {
      if (err) return console.log('Error creating folder:', err);

      this.plugin('done', function(stats) {
        fs.writeFileSync(
          path.join(outputPath, fileName),
          `<?php

const HASH = '${stats.hash}';

// EOF`
        );
      });
    }.bind(this));
  };
};

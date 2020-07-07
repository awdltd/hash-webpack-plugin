const replaceContent = require('./replace.js');
const path = require('path');
const mkdirp = require('mkdirp');

module.exports = function(options){
  return function(){
    let outputPath = options.path || './';
    let fileName = options.fileName || 'hash.php';

    mkdirp(
      outputPath,
      function(err){
        if (err) return console.log('Error creating folder:', err);

        // Get filename
        const fileNameWithPath = path.join(outputPath, fileName);

        // Write to file
        this.plugin('done', function(stats){
          let hash = stats.hash.substring(0, options.hashLength);

          // Replace content within file
          replaceContent(fileNameWithPath, hash, 'JS');
        });
      }.bind(this)
    );
  };
};

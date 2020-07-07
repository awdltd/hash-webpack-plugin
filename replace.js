const fs = require('fs');

module.exports = function(filename = 'hash.php', hash, assetType = 'JS'){
  // Check file exists, and create one if it does not
  if (!fs.existsSync(filename)) {
    let defaultFileContent = `<?php

// Save hash as constant
const ${assetType}_HASH = '00000';
            
// EOF`;

    // Write contents to file
    fs.writeFile(filename, defaultFileContent, 'utf8', function(err){
      if (err) return console.error(err);
    });
  }

  // Replace relevant content within file
  fs.readFile(filename, 'utf8', function(err, data){
    if (err) {
      return console.error(err);
    }

    // Create regex pattern
    let pattern = new RegExp(`(${assetType}_HASH = ')\\w{5}(';)`);

    // Replace relevant string
    let fileContent = data.replace(pattern, `$1${hash}$2`);

    // Re-write file
    fs.writeFile(filename, fileContent, 'utf8', function(err){
      if (err) return console.error(err);
    });
  });
};

function processLs(done) {
  const fs = require('fs');
  fs.readdir('./', 'utf8', (err, files) => {
    if (err) {
      done('Something went wrong!');
    } else {
      done(files.join('\n'));
    }
  })
}

module.exports = processLs;

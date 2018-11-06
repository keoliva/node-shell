function cat(fileName, done) {
    const fs = require('fs');
    fs.readFile(fileName, 'utf8', (err, data) => {
      if (err) {
        done('Something went wrong!');
      } else {
        done(data);
      }
    });
  }

module.exports = cat;

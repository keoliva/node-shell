function curl(url, done) {
  const request = require('request');
  request(url, function(error, response, body) {
    console.log("statusCode: ", response && response.statusCode);
    if (error) {
      done('Something went wrong');
    } else {
      done(body);
    }
  });
}

module.exports = curl;

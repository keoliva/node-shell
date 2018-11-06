function curl(url) {
  const request = require('request');
  request(url, function(error, response, body) {
    console.log("statusCode: ", response && response.statusCode);
    if (error) {
      throw error;
    } else {
      process.stdout.write(body + '\n');
      process.stdout.write("prompt>");
    }
  });
}

module.exports = curl;

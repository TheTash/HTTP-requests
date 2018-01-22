var https = require('https');

module.exports = function getHTML (options, callback) {
    var inputStorage = '';

    https.get(options, function (response) {
      response.setEncoding('utf-8');

      response.on('data', function(data) {
        inputStorage+= console.log('Chunk Received. Length: ' + data + ' \n');
      });
      response.on('end', function() {
        inputStorage+= console.log('Repsonse stream complete.');
        callback(inputStorage);
      });
    });
};

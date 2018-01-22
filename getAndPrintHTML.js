var https = require('https');

function getAndPrintHTML() {
  var inputStorage = {};

  var requestOptions = {
    host: 'sytantris.github.io',
    path: 'http-examples/step2.html'
  };
    https.get(requestOptions, function(response) {
      response.setEncoding('utf-8');

      response.on('data', function(data) {
        inputStorage+= console.log('Chunk Received. Length: ' + data.length + '\n');
      });

      response.end('end', function() {
        inputStorage+= console.log('Repsonse stream complete.');
      });
    });
  }
getAndPrintHTML();

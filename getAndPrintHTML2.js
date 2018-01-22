var https = require('https');

function getAndPrintHTML(options) {

  var inputStorage = {};


    https.get(options, function (response) {
      response.setEncoding('utf-8');

      response.on('data', function(data) {
        console.log('Chunk Received. Length: ' + data.length + ' \n');
      });
      response.end('end', function() {
        console.log('Repsonse stream complete.');
      });

    });


}

var requestOptions = {
  host: 'sytantris.github.io',
  path: 'http-examples/step2.html'
};

getAndPrintHTML(requestOptions);

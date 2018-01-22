var https = require('https');

function getAndPrintHTML(options) {

  var inputStorage = '';


    https.get(options, function (response) {
      response.setEncoding('utf-8');

      response.on('data', function(data) {
        inputStorage+= console.log('Chunk Received. Length: ' + data + ' \n');
      });
      response.on('end', function() {
        inputStorage+= console.log('Repsonse stream complete.');
      });

    });


}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step2.html'
};

getAndPrintHTML(requestOptions);

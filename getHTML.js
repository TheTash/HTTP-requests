var https = require('https');


function getHTML(options, callback) {

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


}

function PrintHTML(html){
  console.log(html);
}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step4.html'
};

getHTML(requestOptions, PrintHTML)

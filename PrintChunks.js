var http = require('http');
console.log(http, "you are there, right")


function getAndPrintHTMLChunks() {
  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step1.html'
  };



  http.get(requestOptions, function (response) {
    response.setEncoding('utf-8');
  });


  response.on('data', function(data) {
    console.log('Chunk Received. Length: ' + data.length);
  });
  response.end('end', function() {
    console.log('Repsonse stream complete.');
  });
}

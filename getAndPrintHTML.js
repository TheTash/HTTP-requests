function getAndPrintHTML() {
  var inputStorage = '';

  var requestOptions = {
    host: 'sytantris.github.io',
    path: 'http-examples/step2.html'
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

var getHTML = require('./http-functions');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step5.html'
};

function PrintHTML(html){
  console.log(html);
}

getHTML(requestOptions, PrintHTML);

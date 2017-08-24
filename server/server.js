'use strict';

var loopback = require('loopback');
var boot = require('loopback-boot');

var app = module.exports = loopback();

app.start = function() {
  // start the web server
  return app.listen(function() {
    app.emit('started');
    var baseUrl = app.get('url').replace(/\/$/, '');
    console.log('Web server listening at: %s', baseUrl);
    if (app.get('loopback-component-explorer')) {
      var explorerPath = app.get('loopback-component-explorer').mountPath;
      console.log('Browse your REST API at %s%s', baseUrl, explorerPath);
    }

    app.models.Note.create([
      {
        key: getRandomString(3),
        creator: 'test'
      },
      {
        key: getRandomString(3),
        creator: 'test'
      },
      {
        key: getRandomString(3),
        creator: 'test'
      },
      {
        key: getRandomString(3),
        creator: 'test'
      },
      {
        key: getRandomString(3),
        creator: 'test'
      },
      {
        key: getRandomString(3),
        creator: 'test'
      },
      {
        key: getRandomString(3),
        creator: 'test'
      },
      {
        key: getRandomString(3),
        creator: 'test'
      }
    ], (err, result) => {
      console.error(err);
      console.log(result);
    });

    function getRandomString(length) {
      let text = '';
      let possible = 'abcdefghijklmnopqrstuvwxyz';

      for (let i = 0; i < length; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
      }

      return text;
    }
  });
};

// Bootstrap the application, configure models, datasources and middleware.
// Sub-apps like REST API are mounted via boot scripts.
boot(app, __dirname, function(err) {
  if (err) throw err;

  // start the server if `$ node server.js`
  if (require.main === module)
    app.start();
});

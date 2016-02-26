Package.describe({
  name: 'selaias:meteor-mollie',
  version: '0.2.0',
  summary: 'Wrapper for Mollie Payments node api',
  git: 'https://github.com/selaias/meteor-mollie.git',
  documentation: 'README.md'
});

Npm.depends({"mollie-api-node": "1.0.4"});

Package.onUse(function(api) {
  api.versionsFrom('1.2.0.2');
  api.addFiles('meteor-mollie.js', 'server');
  api.export('MollieClient', 'server');
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('selaias:meteor-mollie');
  api.addFiles('meteor-mollie-tests.js');
});

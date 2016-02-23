Package.describe({
  name: 'selaias:meteor-mollie',
  version: '0.0.1',
  summary: 'Wrapper for Mollie Payments node api',
  git: 'https://github.com/selaias/meteor-mollie.git',
  documentation: 'README.md'
});

Npm.depends({"mollie-api-node": "1.0.4"});

Package.onUse(function(api) {
  api.versionsFrom('1.2.0.2');
  api.use('ecmascript');
  api.addFiles('meteor-mollie.js');
  
  api.export('Mollie', 'server');
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('selaias:meteor-mollie');
  api.addFiles('meteor-mollie-tests.js');
});

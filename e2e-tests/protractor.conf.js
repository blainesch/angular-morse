exports.config = {
  allScriptsTimeout: 11000,

  specs: [
    '*.js'
  ],

  // Some computers block the default port
  // seleniumAddress: 'http://localhost:4444/wd/hub',

  capabilities: {
    'browserName': 'chrome'
  },

  baseUrl: 'http://localhost:8000/',

  framework: 'jasmine',

  jasmineNodeOpts: {
    defaultTimeoutInterval: 30000
  }
};

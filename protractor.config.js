exports.config = {
    framework: 'jasmine2',
    seleniumServerJar: './tools/selenium-server-standalone-2.48.2.jar',
    chromeDriver: './tools/chromedriver_mac32/chromedriver',
    directConnect: true,
    specs: ['*.spec.js'],

    onPrepare: function () {
        var SpecReporter = require('jasmine-spec-reporter');
        jasmine.getEnv().addReporter(new SpecReporter({displayStacktrace: 'all'}));
    },

    baseUrl: 'http://juliemr.github.io',

    capabilities: {
        'browserName': 'chrome'
    },

    allScriptsTimeout: 30000,

    jasmineNodeOpts: {
        showColors: true,
        defaultTimeoutInterval: 300000,
        print: function () {}

    }
};
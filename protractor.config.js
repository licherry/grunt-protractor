var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');
var SpecReporter = require('jasmine-spec-reporter');
var today = new Date(),
months = today.getMonth() + 1;
dates = today.getDate();
years = today.getFullYear();
hours = today.getHours();
minutes = today.getMinutes();
seconds = today.getSeconds();
timeStamp = years + '-' + months + '-' + dates + ' ' + hours + ':' + minutes + ':' + seconds;

exports.config = {
    framework: 'jasmine2',
    seleniumServerJar: './tools/selenium-server-standalone-2.48.2.jar',
    chromeDriver: './tools/chromedriver_mac32/chromedriver',
    directConnect: true,
    specs: ['*.spec.js'],

    onPrepare: function () {

        jasmine.getEnv().addReporter(new SpecReporter({displayStacktrace: 'all'}));
        jasmine.getEnv().addReporter(
            new Jasmine2HtmlReporter({
                    savePath: './results/reports_' + timeStamp,
                    filePrefix: 'result_' + timeStamp
                }
            ));
    },

    baseUrl: 'http://juliemr.github.io',

    capabilities: {
        'browserName': 'chrome'
    },

    allScriptsTimeout: 30000,

    jasmineNodeOpts: {
        showColors: true,
        defaultTimeoutInterval: 300000,
        print: function () {
        }

    }
};
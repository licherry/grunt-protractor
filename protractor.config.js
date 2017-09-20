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
    seleniumServerJar: './tools/selenium-server-standalone-3.5.1.jar',
    chromeDriver: './tools/chromedriver_mac32/chromedriver_2.31',
    directConnect: true,
    specs: ['*.spec.js'],

    onPrepare: function () {

        jasmine.getEnv().addReporter(new SpecReporter({displayStacktrace: 'all'}));
        jasmine.getEnv().addReporter(
            new Jasmine2HtmlReporter({
                    savePath: './test_result/reports/',
                    filePrefix: 'my-test_' + timeStamp,
                    screenshotsFolder: 'images_' + timeStamp,
                    takeScreenshotsOnlyOnFailures: true,
                    showPassed: false
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

    },
    onComplete: function () {
        console.log('all done');
        browser.driver.close();
    }

};
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
                //在report后面添加时间戳,截图无法展示
                    // savePath: './results/reports_' + timeStamp,
                    // filePrefix: 'result_' + timeStamp
                //默认配置,可以展示截图,默认截图文件名为screenshots
                savePath: './test_result/reports/' 
                // screenshotsFolder: 'images'
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
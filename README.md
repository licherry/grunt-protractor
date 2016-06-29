# grunt-protractor

##generate a package.json file

`npm init`

##Install Protractor
```
npm install -g protractor

webdriver-manager update

npm install --save-dev protractor (write into package.json)
```

####Config protractor.config.js file

+ connect browser directly
```js
exports.config = {
  framework: 'jasmine2',
  seleniumServerJar: './tools/selenium-server-standalone-2.48.2.jar',
  chromeDriver: './tools/chromedriver_mac32/chromedriver',
  directConnect: true,
  specs: ['*.spec.js'],
  ...
  }

```
##Install grunt

`npm install --save-dev grunt`

##Install grunt-protractor

`npm install --save-dev grunt-protractor-runner`

##Install other plugins

+ make console report pretty
`npm install --save-dev jasmine-spec-reporter`

+ validate files with JSHint
`npm install --save-dev grunt-contrib-jshint`

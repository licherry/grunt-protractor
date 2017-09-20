/**
 * Created by chenli on 9/20/17.
 */
describe('Super Calculator : History', function() {
    var firstNumber = element(by.model('first'));
    var secondNmuber = element(by.model('second'));
    var goButton = element(by.id('gobutton'));
    var result = element(by.binding('latest'));
    var history = element.all(by.repeater('result in memory'));
    var signOptions = element.all(by.options('value for (key, value) in operators'));

    function caculate(num1,id,num2) {
        firstNumber.sendKeys(num1);
        signOptions.then(function (Iterms) {
            Iterms[id].click();
        });
        secondNmuber.sendKeys(num2);
        goButton.click();
    }

    beforeEach(function () {
        browser.get('/protractor-demo/');
    });

    it('Should has a history.',function() {
        caculate(2,0,2);
        caculate(4,0,5);
        expect(history.count()).toEqual(2);
        caculate(1,0,0);
        expect(result.getText()).toEqual('1');
        expect(history.count()).toEqual(3);
    });

});
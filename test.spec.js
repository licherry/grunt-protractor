describe('Super Calculator demo :', function() {
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
    };

    beforeEach(function () {
        browser.get('/protractor-demo/');
    });

    it('Add functionality should correct.',function() {
        caculate(4,0,8);
        expect(result.getText()).toEqual('12');
    });

    it('Substraction functionality should correct.',function() {
        caculate(8,4,8);
        expect(result.getText()).toEqual('0');
    });

    it('Division functionality should correct.',function() {
        caculate(12,1,5);
        expect(result.getText()).toEqual('2.4');
    });

    it('Should has a history.',function() {
        caculate(3,0,2);
        caculate(4,0,5);
        expect(history.count()).toEqual(2);
        caculate(1,0,0);
        expect(result.getText()).toEqual('1');
        expect(history.count()).toEqual(3);
    });

});
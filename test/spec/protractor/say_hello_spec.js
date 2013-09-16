var util = require('util');

describe('Say Hello', function() {
  var ptor;

  beforeEach(function() {
    ptor = protractor.getInstance();
    ptor.get('#/');
    button = ptor.findElement(protractor.By.className('btn-say-hello'))
    button.click();
  });

  it('says hello', function() {
    ptor = protractor.getInstance();
    message = ptor.findElement(protractor.By.className('message'))
    expect(message.getText()).toEqual('Hello!');
  });
});

var util = require('util');

describe('Say Hello', function() {
  ptor = protractor.getInstance();

  beforeEach(function() {
    ptor.get('#/');
    button = ptor.findElement(protractor.By.className('btn-say-hello'));
    button.click();
  });

  it('says hello', function() {
    message = ptor.findElement(protractor.By.className('message'));
    expect(message.getText()).toEqual('Hello!');
  });
});

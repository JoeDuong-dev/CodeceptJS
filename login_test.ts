Feature('Login Test');

const username:string = 'texternalauth@iserviceauto.com';
const password:string = 'test';

Scenario('test something', ({ I }) => {
  I.amOnPage('https://member.staging.iserviceauto.com/');
  I.see('iService');

  //I.seeElement({name: 'username'});
  I.fillField('username', username);
  I.fillField('password', secret(password));
  I.click('Log In');
  pause(); 
});
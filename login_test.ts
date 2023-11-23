Feature('Login Test');

Scenario('test something', ({ I }) => {
  I.amOnPage('https://member.staging.iserviceauto.com/');
  I.see('iService');
  pause(); 
});
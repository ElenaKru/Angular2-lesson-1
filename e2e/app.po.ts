import { browser, element, by } from 'protractor';

export class NgLessonsProjectPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('codestack-root h1')).getText();
  }
}

import { NgLessonsProjectPage } from './app.po';

describe('ng-lessons-project App', () => {
  let page: NgLessonsProjectPage;

  beforeEach(() => {
    page = new NgLessonsProjectPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('codestack works!');
  });
});

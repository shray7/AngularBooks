import { AngularBooksPage } from './app.po';

describe('angular-books App', () => {
  let page: AngularBooksPage;

  beforeEach(() => {
    page = new AngularBooksPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});

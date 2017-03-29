import { Angular4CRUDPage } from './app.po';

describe('angular4-crud App', () => {
  let page: Angular4CRUDPage;

  beforeEach(() => {
    page = new Angular4CRUDPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

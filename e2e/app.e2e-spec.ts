import { BkFrontPage } from './app.po';

describe('bk-front App', () => {
  let page: BkFrontPage;

  beforeEach(() => {
    page = new BkFrontPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

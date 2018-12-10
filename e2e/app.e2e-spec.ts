import { MCartPage } from './app.po';

describe('m-cart App', () => {
  let page: MCartPage;

  beforeEach(() => {
    page = new MCartPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});

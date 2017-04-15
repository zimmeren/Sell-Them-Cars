import { SellThemCarsPage } from './app.po';

describe('sell-them-cars App', () => {
  let page: SellThemCarsPage;

  beforeEach(() => {
    page = new SellThemCarsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

import { ExpressHerokuQuickstartPage } from './app.po';

describe('express-heroku-quickstart', () => {
  let page: ExpressHerokuQuickstartPage;

  beforeEach(() => {
    page = new ExpressHerokuQuickstartPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

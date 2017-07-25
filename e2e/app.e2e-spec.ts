import { AppaPage } from './app.po';

describe('appa App', () => {
  let page: AppaPage;

  beforeEach(() => {
    page = new AppaPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});

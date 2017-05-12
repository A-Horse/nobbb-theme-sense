import { SensePage } from './app.po';

describe('sense App', () => {
  let page: SensePage;

  beforeEach(() => {
    page = new SensePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

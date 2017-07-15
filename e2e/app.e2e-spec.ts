import { YaleInnovationToImpactPage } from './app.po';

describe('yale-innovation-to-impact App', () => {
  let page: YaleInnovationToImpactPage;

  beforeEach(() => {
    page = new YaleInnovationToImpactPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});

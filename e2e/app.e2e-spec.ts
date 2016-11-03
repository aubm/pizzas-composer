import { PizzasComposerPage } from './app.po';

describe('pizzas-composer App', function() {
  let page: PizzasComposerPage;

  beforeEach(() => {
    page = new PizzasComposerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

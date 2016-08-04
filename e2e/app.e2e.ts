import { AvantlinkTasksPage } from './app.po';

describe('avantlink-tasks App', function() {
  let page: AvantlinkTasksPage;

  beforeEach(() => {
    page = new AvantlinkTasksPage();
  })

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('avantlink-tasks works!');
  });
});

export class AvantlinkTasksPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('avantlink-tasks-app h1')).getText();
  }
}

import { ImageComponent } from './components/image.js';
import { PageComponent } from './components/page.js';
class App {
    constructor(appRoot) {
        this.page = new PageComponent();
        this.page.attachTo(appRoot);
        this.img = new ImageComponent();
        this.img.attatchTo(appRoot);
    }
}
new App(document.querySelector('.document'));

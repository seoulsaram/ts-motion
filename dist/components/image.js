import { BaseComponent } from './component.js';
export class ImageComponent extends BaseComponent {
    constructor(title, url) {
        super(`<section class="image">
                <div class="image__holer"><img class="image__thumnail"></div>
                <p class="image__title"></p>
                </section>`);
        const imageElement = this.element.querySelector('.image__thumnail');
        imageElement.src = url;
        imageElement.alt = title;
        const tilteElement = this.element.querySelector('.image__title');
        tilteElement.textContent = title;
    }
}

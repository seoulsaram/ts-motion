export class ImageComponent {
    constructor() {
        this.element = document.createElement('img');
        this.element.setAttribute('class', 'img');
        this.element.setAttribute('alt', 'img');
        this.element.setAttribute('src', '../../assets/background.png');
    }
    attatchTo(parent, position = 'afterbegin') {
        parent.insertAdjacentElement(position, this.element);
    }
}

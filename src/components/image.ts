export class ImageComponent {
  private element: HTMLImageElement;
  constructor() {
    this.element = document.createElement('img');
    this.element.setAttribute('class', 'img');
    this.element.setAttribute('alt', 'img');
    this.element.setAttribute('src', '../../assets/background.png');
  }
  attatchTo(parent: HTMLElement, position: InsertPosition = 'afterbegin') {
    parent.insertAdjacentElement(position, this.element);
  }
}

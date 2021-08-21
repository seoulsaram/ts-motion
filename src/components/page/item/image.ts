import {BaseComponent} from '../../component.js';

export class ImageComponent extends BaseComponent<HTMLElement> {
  constructor(title: string, url: string) {
    super(`<section class="image">
                <div class="image__holer"><img class="image__thumbnail"></div>
                <h2 class="page-item__title image__title"></h2>
                </section>`);

    const imageElement = this.element.querySelector('.image__thumbnail')! as HTMLImageElement;
    imageElement.src = url;
    imageElement.alt = title;
    //innerHTML 안에 바로 ${title}, ${url}로 작성해주지 않은 이유는, 만약 사용자가 title, url을 html코드형식으로
    //입력했을 경우, innerHTML로 인해서 html이 변경될 수 있기 때문임.

    const tilteElement = this.element.querySelector('.image__title')! as HTMLParagraphElement;
    tilteElement.textContent = title;
  }
}

import {BaseComponent, Component} from '../component.js';

class PageItemComponent extends BaseComponent<HTMLElement> {
  constructor() {
    super(`<li class="page-item">
                    <section class="page-item__body"></section>
                    <div class="page-item__controles">
                      <button class="close">&times;</button>
                    </div>
                </li>`);
  }
  addChild(child: Component) {
    const container = this.element.querySelector('.page-item__body')! as HTMLElement;
    child.attachTo(container);
  }
}
export class PageComponent extends BaseComponent<HTMLUListElement> {
  constructor() {
    super('<ul class="page">This is PageComponent!</ul>');
  }
  addChild(section: Component) {
    const item = new PageItemComponent();
    item.addChild(section);
    item.attachTo(this.element, 'beforebegin');
  }
}

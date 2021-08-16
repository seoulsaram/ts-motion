export interface Component {
  attachTo(parent: HTMLElement, position?: InsertPosition): void;
}

/**
 * HTML Element를 캡슐화 한다.
 *  */

export class BaseComponent<T extends HTMLElement> implements Component {
  protected readonly element: T;
  constructor(htmlString: string) {
    const template = document.createElement('template');
    template.innerHTML = htmlString;
    this.element = template.content.firstElementChild! as T;
    //template 안에있는 첫번째 자식은 위의 html코드
  }

  attachTo(parent: HTMLElement, position: InsertPosition = 'afterbegin') {
    parent.insertAdjacentElement(position, this.element);
    //InsertPosition : "beforebegin | afterbegin | beforeend | afterend" 인 union 타입
    //insertAdjacentElement : parent 컨테이너 안에 있는 어딘가에 쇽 추가할 수 있는 api
  }
}

export class PageComponent {
  private element: HTMLUListElement;
  //class 로컬 프로퍼티로, 타입은 HTMLUListElement이다.
  //HTMLUListElement는 ul리스트 엘리먼트임 (<ul>)
  constructor() {
    this.element = document.createElement('ul');
    this.element.setAttribute('class', 'page');
    this.element.textContent = 'This is PageComponent';
  }
  attachTo(parent: HTMLElement, position: InsertPosition = 'afterbegin') {
    parent.insertAdjacentElement(position, this.element);
    //InsertPosition : "beforebegin | afterbegin | beforeend | afterend" 인 union 타입
    //insertAdjacentElement : parent 컨테이너 안에 있는 어딘가에 쇽 추가할 수 있는 api
  }
}

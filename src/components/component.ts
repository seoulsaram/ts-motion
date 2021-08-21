export interface Component {
  attachTo(parent: HTMLElement, position?: InsertPosition): void;
  removeFrom(parent: HTMLElement): void;
}

/**
 * Encapsulate the HTML element creation
 */
export class BaseComponent<T extends HTMLElement> implements Component {
  protected readonly element: T;

  constructor(htmlString: string) {
    const template = document.createElement('template');
    //일단 도큐먼트에 template 엘리먼트 생성
    template.innerHTML = htmlString;
    //내부 내용은 instance가 받게 되는 string형태의 노드
    this.element = template.content.firstElementChild! as T;
    //this.element에 template의 첫번째 element를 삽입(=htmlString)

    //firstElementChild는 첫번째 자식 노드에 대한 접근이 가능하도록, 첫번째 자식 노드를 element로 반환한다.
    //firstChild와의 차이는 firstChild는 element note나 text node, comment node 등으로 반환하는데 반해
    //firstElementChild는 element로 반환하므로, firstElementChild.textContent 처럼 html 코드에 반영을 위한 접근을 할 수 있다.
  }

  //html element와 position정보를 받아온 뒤 html element에 이 클래스가 갖고있는 프로퍼티인 element(=template.content.firstElement)를 붙여줌
  attachTo(parent: HTMLElement, position: InsertPosition = 'afterbegin') {
    parent.insertAdjacentElement(position, this.element);
    //InsertPosition : "beforebegin | afterbegin | beforeend | afterend" 인 union 타입
    //beforebegin : element 앞에
    //afterbegin : element 안에 가장 첫번째 child
    //beforeend : element 안에 가장 마지막 child
    //afterend : element 뒤에
    //afterbegin / beforeend는 꼭 부모가 있어야 함
    //insertAdjacentElement : 엘리먼트 특정 위치에 노드를 삽입하는 메소드
  }

  removeFrom(parent: HTMLElement) {
    if (parent !== this.element.parentElement) {
      throw new Error('Parent mismatch!');
    }
    parent.removeChild(this.element);
  }
}

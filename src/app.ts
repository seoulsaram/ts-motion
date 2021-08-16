import {VideoComponent} from './components/page/item/video.js';
import {TodoComponent} from './components/page/item/todo.js';
import {NoteComponent} from './components/page/item/note.js';
import {ImageComponent} from './components/page/item/image.js';
import {PageComponent} from './components/page/page.js';

class App {
  private readonly page: PageComponent;

  constructor(appRoot: HTMLElement) {
    this.page = new PageComponent(); //인스턴스를 만들고
    this.page.attachTo(appRoot); //이 인스턴스 안의 attatchTo메소드로 element추가

    const image = new ImageComponent('Image Title', 'https://picsum.photos/600/300');
    image.attachTo(appRoot, 'beforeend');

    const note = new NoteComponent('Note Title', 'Note Body');
    note.attachTo(appRoot, 'beforeend');

    const todo = new TodoComponent('Todo Title', 'Todo Item');
    todo.attachTo(appRoot, 'beforeend');

    const video = new VideoComponent('Vodei Title', 'https://www.youtube.com/embed/T7h8O7dpJIg');
    video.attachTo(appRoot, 'beforeend');
  }
}

new App(document.querySelector('.document')! as HTMLElement);
/* querySelector는 HTMLElement나 null을 리턴할 수 있는 api이다.
우리는 querySelector안에 동적인 요소를 넣을 것이 아니라 확실하게 정해져있는
index.html 안에 있는 <div class="document">에 넣을 것이기 때문에
! as HTMLElement로 타입을 확정지어준다(type assertion). (안 하면 에러발생)  */

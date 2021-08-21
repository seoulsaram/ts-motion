import {VideoComponent} from './components/page/item/video.js';
import {TodoComponent} from './components/page/item/todo.js';
import {NoteComponent} from './components/page/item/note.js';
import {ImageComponent} from './components/page/item/image.js';
import {Composable, PageComponent, PageItemComponent} from './components/page/page.js';
import {Component} from './components/component.js';
import {InputDialog} from './components/dialog/dialog.js';

class App {
  private readonly page: Component & Composable; //page는 Component중에 하나이고, Composable이라는 interface를 구현한 것이다.
  constructor(appRoot: HTMLElement) {
    this.page = new PageComponent(PageItemComponent); //인스턴스를 만들고
    this.page.attachTo(appRoot); //이 인스턴스 안의 attatchTo메소드로 element추가

    const image = new ImageComponent('Image Title', 'https://picsum.photos/600/300');
    this.page.addChild(image);

    const video = new VideoComponent('Video Title', 'https://youtu.be/K3-jG52XwuQ');
    this.page.addChild(video);

    const note = new NoteComponent('Note Title', 'Note Body');
    this.page.addChild(note);

    const todo = new TodoComponent('Todo Title', 'Todo Item');
    this.page.addChild(todo);

    const imageBtn = document.querySelector('#new-image')! as HTMLButtonElement;
    imageBtn.addEventListener('click', () => {
      const dialog = new InputDialog();
      dialog.setOnCloseListener(() => {
        dialog.removeFrom(document.body);
      });
      dialog.setOnSubmitListener(() => {
        //섹션을 만들어서 페이지에 추가 해준다.
        dialog.removeFrom(document.body);
      });

      dialog.attachTo(document.body);
    });
  }
}

new App(document.querySelector('.document')! as HTMLElement);
/* querySelector는 HTMLElement나 null을 리턴할 수 있는 api이다.
우리는 querySelector안에 동적인 요소를 넣을 것이 아니라 확실하게 정해져있는
index.html 안에 있는 <div class="document">에 넣을 것이기 때문에
! as HTMLElement로 타입을 확정지어준다(type assertion). (안 하면 에러발생)  */

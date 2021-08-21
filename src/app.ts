import {TextSectionInput} from './components/dialog/input/text-input.js';
import {VideoComponent} from './components/page/item/video.js';
import {TodoComponent} from './components/page/item/todo.js';
import {NoteComponent} from './components/page/item/note.js';
import {ImageComponent} from './components/page/item/image.js';
import {Composable, PageComponent, PageItemComponent} from './components/page/page.js';
import {Component} from './components/component.js';
import {InputDialog, MediaData, TextData} from './components/dialog/dialog.js';
import {MediaSectionInput} from './components/dialog/input/media-input.js';

type InputComponentConstructor<T = (MediaData | TextData) & Component> = {
  new (): T;
};
class App {
  private readonly page: Component & Composable; //page는 Component중에 하나이고, Composable이라는 interface를 구현한 것이다.
  constructor(appRoot: HTMLElement, private dialogRoot: HTMLElement) {
    this.page = new PageComponent(PageItemComponent); //인스턴스를 만들고
    this.page.attachTo(appRoot); //이 인스턴스 안의 attatchTo메소드로 element추가

    this.bindElementToDialog<MediaSectionInput>(
      '#new-image',
      MediaSectionInput,
      (input: MediaSectionInput) => new ImageComponent(input.title, input.url)
    );

    this.bindElementToDialog<MediaSectionInput>(
      '#new-video',
      MediaSectionInput,
      (input: MediaSectionInput) => new VideoComponent(input.title, input.url)
    );

    this.bindElementToDialog<TextSectionInput>(
      '#new-note',
      TextSectionInput,
      (input: TextSectionInput) => new NoteComponent(input.title, input.body)
    );

    this.bindElementToDialog<TextSectionInput>(
      '#new-todo',
      TextSectionInput,
      (input: TextSectionInput) => new TodoComponent(input.title, input.body)
    );
  }

  private bindElementToDialog<T extends (MediaData | TextData) & Component>(
    //MediaData 또는 TextData를 가질 수 있고 Component를 구현한 아이를 인자로 받는다.
    selector: string,
    InputComponent: InputComponentConstructor<T>,
    makeSection: (input: T) => Component
  ) {
    const element = document.querySelector(selector)! as HTMLButtonElement;
    element.addEventListener('click', () => {
      const dialog = new InputDialog();
      const input = new InputComponent();
      dialog.addChild(input);
      dialog.attachTo(this.dialogRoot);

      dialog.setOnCloseListener(() => {
        dialog.removeFrom(this.dialogRoot);
      });
      dialog.setOnSubmitListener(() => {
        const image = makeSection(input);
        this.page.addChild(image);
        dialog.removeFrom(this.dialogRoot);
      });
    });
  }
}

new App(document.querySelector('.document')! as HTMLElement, document.body);
/* querySelector는 HTMLElement나 null을 리턴할 수 있는 api이다.
우리는 querySelector안에 동적인 요소를 넣을 것이 아니라 확실하게 정해져있는
index.html 안에 있는 <div class="document">에 넣을 것이기 때문에
! as HTMLElement로 타입을 확정지어준다(type assertion). (안 하면 에러발생)  */

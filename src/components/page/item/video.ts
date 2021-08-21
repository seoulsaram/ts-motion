import {BaseComponent} from '../../component.js';

export class VideoComponent extends BaseComponent<HTMLElement> {
  constructor(title: string, url: string) {
    super(`<section class="video">
                        <div class="video__player"><iframe class="video__iframe"></iframe></div>
                        <h2 class="page-item__title video__title"></h2>
                    </section>`);

    const iframe = this.element.querySelector('.video__iframe')! as HTMLIFrameElement;
    iframe.src = this.convertToEmbeddedUrl(url); // url -> videoId만 추출하기

    const titleElement = this.element.querySelector('.video__title')! as HTMLHeadingElement;
    titleElement.textContent = title;
  }

  // 사용자가 비디오 url을 가져올 때의 형태가 어디서 copy하냐에 따라 다를 수 있다.
  // ex 1. https://www.youtube.com/watch?v=uXsdXHK_nsI&t=3305s
  // ex 2. https://youtu.be/uXsdXHK_nsI
  //desired output : https://www.youtube.com/embed/uXsdXHK_nsI
  private convertToEmbeddedUrl(url: string): string {
    const regExp =
      /^(?:https?:\/\/)?(?:www\.)?(?:(?:youtube.com\/(?:(?:watch\?v=)|(?:embed\/))([a-zA-Z0-9-]{11}))|(?:youtu.be\/([a-zA-Z0-9-]{11})))/;
    /**
     * 정규표현식 설명
     * https로 시작할 수도 있고(?), www로 시작할 수도 있다(?).
     * youtube.com으로 되는 경우 또는 (|) youtube.be로 시작하는 경우가 있는데
     * watch또는 embed가 될 수도 있다. (|)
     * 여기서 영소문자 대문자 a-z와 숫자 0-9로 된 문자 11개를 캡쳐링 할 거다.
     * */
    const match = url.match(regExp); //match는 match하는게 있다면 배열 형태로 리턴됨
    const videoId = match ? match[1] || match[2] : undefined;
    if (videoId) {
      return `https://www.youtube.com/embed/${videoId}`;
    }
    return url;
  }
}

const IFRAME_ATTRIBUTES = {
  loading: 'lazy',
  src: 'https://www.youtube.com/embed/9TZXsZItgdw?autoplay=1',
  frameborder: '0',
  allow: 'accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture',
  allowfullscreen: 'true',
};
const WAITING_TIME = 5000;
const videoWrapper = document.querySelector('.about__video-preview');
const buttonPlay = videoWrapper.querySelector('.about__play-button');
const previewImage = videoWrapper.querySelector('picture');

const createIframe = (attributes) => {
  const iframe = document.createElement('iframe');
  iframe.setAttribute('loading', attributes.loading);
  iframe.setAttribute('src', attributes.src);
  iframe.setAttribute('frameborder', attributes.frameborder);
  iframe.setAttribute('allow', attributes.allow);
  iframe.setAttribute('allowfullscreen', attributes.allowfullscreen);
  iframe.style.position = 'relative';
  iframe.style.zIndex = '2';
  iframe.style.display = 'block';
  iframe.style.width = '100%';
  iframe.style.height = '100%';
  return iframe;
};

const checkIframe = (time) => {
  setTimeout(() => {
    const iframe = videoWrapper.querySelector('iframe');
    if (!iframe) {
      buttonPlay.removeAttribute('disabled');
      previewImage.style.display = 'block';
    }
  }, time);
};

const onButtonPlayClick = () => {
  buttonPlay.setAttribute('disabled', 'true');
  previewImage.style.display = 'none';
  checkIframe(WAITING_TIME);
  const iframe = createIframe(IFRAME_ATTRIBUTES);
  videoWrapper.append(iframe);
};

buttonPlay.addEventListener('click', onButtonPlayClick);

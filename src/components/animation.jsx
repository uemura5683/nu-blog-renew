
//import '../assets/css/component/animation.css';

import Logo from '../components/logo';
export default function Animation() {

  const close = () => {
    document.getElementById('root').removeChild(document.getElementById('top_animation'));
    document.querySelector('.c_anime_close').classList.add('js_close');
    document.body.classList.add('js_lift');
  }  

  return (
    <>
      <div id="top_animation" class="c_animation" onClick={() => {close()}}>
      </div>
      <button class="c_anime_close" onClick={() => {close()}}>CLOSE</button>
    </>
  );
}  
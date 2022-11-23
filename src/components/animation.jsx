
import '../assets/css/component/animation.css';

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
        <div class="c_animation_inner">
          <div class="step1">
            <div class="c_beans"></div>
          </div>
          <div class="step2">
            <div class="c_konagonapot">
              <div class="c_konagonapot_body"></div>
              <div class="c_konagonapot_bottom_middle"></div>          
              <div class="c_konagonapot_bottom"></div>
            </div>
          </div>
          <div class="step3">
            <div class="c_gutugutupot">
              <div class="c_gutugutupot_head">
                <div class="c_gutugutuentry"></div>
              </div>
              <div class="c_gutugutupot_body">
                <div class="c_gutugutupot_body_center"></div>
              </div>
              <div class="c_fire">
                <div class="c_fire-inner"></div>
                <div class="c_fire-inner"></div>
                <div class="c_fire-inner"></div>
                <div class="c_fire-inner"></div>
                <div class="c_fire-inner"></div>
              </div>
            </div>
          </div>
          <div class="step4">
            <div class="c_botoboto"></div>
            <div class="c_hera_wrap"><div class="c_hera"></div></div>
            <div class="c_dump"></div>
            <div class="c_gutugutupot inner">
              <div class="c_gutugutupot_head">
                <div class="c_gutugutuentry"></div>
                <div class="c_gutugutupot_yuge"></div>
              </div>
              <div class="c_gutugutupot_body"></div>
            </div>
            <div class="c_otama"></div>
            <div class="c_dump2"></div>
          </div>
          <div class="step5">
            <div class="c_boxbase">
              <div class="c_boxbase_top"></div>
              <div class="c_boxbase_bottom"></div>
              <div class="c_boxbase_front"></div>
              <div class="c_boxbase_back"></div>
              <div class="c_boxbase_left"></div>
              <div class="c_boxbase_right"></div>
            </div>
          </div>
          <div class="step6">
            <div class="c_boxbase">
              <div class="c_boxbase_lid"></div>
              <div class="c_boxbase_top"></div>
              <div class="c_boxbase_bottom"></div>
              <div class="c_boxbase_front"></div>
              <div class="c_boxbase_back"></div>
              <div class="c_boxbase_left"></div>
              <div class="c_boxbase_right"></div>
            </div>
          </div>
          <div class="step7">
            <div class="c_tofu">
              <div class="c_tofu_top"></div>
              <div class="c_tofu_bottom"></div>
              <div class="c_tofu_front"></div>
              <div class="c_tofu_back"></div>
              <div class="c_tofu_left"></div>
              <div class="c_tofu_right"></div>
            </div>
          </div>
          <div class="step8">
            <div class="c_tofu_small">
              <div class="c_tofu_small_top"></div>
              <div class="c_tofu_small_bottom"></div>
              <div class="c_tofu_small_front"></div>
              <div class="c_tofu_small_back"></div>
              <div class="c_tofu_small_left"></div>
              <div class="c_tofu_small_right"></div>
            </div>
          </div> 
          <Logo />
        </div>
      </div>
      <button class="c_anime_close" onClick={() => {close()}}>CLOSE</button>
    </>
  );
}  
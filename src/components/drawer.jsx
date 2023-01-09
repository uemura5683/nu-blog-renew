import styles from '../assets/css/module/App.module.css';
import { createSignal, onMount, For  } from 'solid-js';

export default function Drawer() {
  const [cats, setCats] = createSignal([
    { link: 'index.html', text: 'トップ' },
    { link: 'business.html', text: 'ビジネス' },
    { link: 'portfolio.html', text: 'ポートフォリオ' },
    { link: 'profile.html', text: '自己紹介' },
    { link: 'contact.html', text: 'お問合せ' }
  ]);
  return (
    <div class={styles.c_drawer}>
      <ul class={styles.c_drawer_ul}>
        <For each={cats()}>{(cat, i) =>
          <li class={styles.c_drawer_li}>
            <a href={`/${cat.link}`} class={styles.c_drawer_a}>
              {cat.text}
            </a>
          </li>
        }</For>
      </ul>
      <div class={styles.c_drawer_bg}></div>
    </div>
  );
}  
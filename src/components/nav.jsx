import styles from '../assets/css/module/App.module.css';
import { createSignal, onMount, For } from 'solid-js';
import { HacoCmsClient, SortQuery } from 'hacocms-js-sdk';

const PROJECT_SUBDOMAIN = import.meta.env.VITE_HACOCMS
const PROJECT_ACCESS_TOKEN = import.meta.env.VITE_HACOCMS_API

export default function Nav() {
  const [cats, setCats] = createSignal([
    { link: 'index.html', text: 'トップ' },
    { link: 'business.html', text: 'ビジネス' },
    { link: 'portfolio.html', text: 'ポートフォリオ' },
    { link: 'profile.html', text: '自己紹介' },
    { link: 'contact.html', text: 'お問合せ' }
  ]);
  return (
    <nav class={styles.c_header_nav}>
      <ul class={styles.c_header_nav_ul}>
        <For each={cats()}>{(cat, i) =>
          <li class={styles.c_header_nav_li}>
            <a href={`/${cat.link}`} class={styles.c_header_nav_a}>
              {cat.text}
            </a>
          </li>
        }</For>
      </ul>
    </nav>
  );
}  
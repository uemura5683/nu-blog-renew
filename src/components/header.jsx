import styles from '../assets/css/module/App.module.css';
import Logo from '../components/logo';
import Nav from '../components/nav';
import Drawer from '../components/drawer';
import { HacoCmsClient } from 'hacocms-js-sdk';
import { createSignal } from 'solid-js';

const PROJECT_SUBDOMAIN = import.meta.env.VITE_HACOCMS
const PROJECT_ACCESS_TOKEN = import.meta.env.VITE_HACOCMS_API

export async function request() {
  const id = 'dMsGGb';
  const client = new HacoCmsClient(`https://${PROJECT_SUBDOMAIN}.hacocms.com`, PROJECT_ACCESS_TOKEN)
  const res = await client.getContent(Object, '/site', id)
  return res
}
const requestsite = await request().catch((code) => { console.error(); });

if( document.getElementById("favicon") !== null ) {
  document.getElementById("favicon").href = requestsite.favicon;
}

export default function Header() {

  const [current, setCurrent] = createSignal("js_close");
  return (
    <>
      <header class={styles.header}>
        <h1 class={styles.c_header_h1}><Logo /></h1>
        <Nav />
        <button
          class={current() === 'js_open' ? `${styles.c_hunberger_menu} ${styles.js_open}` : styles.c_hunberger_menu}
          onClick={() => current() === 'js_open' ?  setCurrent('js_close') : setCurrent('js_open')}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </header>
      <div id="drawer" class={current() === 'js_open' ? styles.js_drawer_open : null}>
        <Drawer />
      </div>
    </>
  );
}


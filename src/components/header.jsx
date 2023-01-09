import styles from '../assets/css/module/App.module.css';
import Logo from '../components/logo';
import Nav from '../components/nav';
import Drawer from '../components/drawer';
import { createSignal } from 'solid-js';

export default function Header() {

  const [current, setCurrent] = createSignal("js_close");
  return (
    <>
      <header class={styles.header}>
        <h1 class={styles.c_header_h1}><Logo /></h1>
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


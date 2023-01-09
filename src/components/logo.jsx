import styles from '../assets/css/module/App.module.css';
import logo from '../assets/images/logo.png';

export default function Logo() {
  return (
    <a href="/" class={styles.c_header_logo}>
      <img
        class={styles.c_header_logoimg}
        src={logo}
      />
    </a>
  );
}  
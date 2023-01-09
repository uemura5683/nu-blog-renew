
import styles from '../assets/css/module/App.module.css';

export default function Footer() {
  return (
    <footer class={styles.footer}>
      <div class={styles.c_footerlink}><a href="/privacy.html">プライバシーポリシー</a></div>
      <div class={styles.c_copyright}>(c) {new Date().getFullYear()} nu-blogsite</div>
    </footer>
  );
}  
/* @refresh reload */
import { render } from 'solid-js/web';
import Header from '../components/header';
import Footer from '../components/footer';
import styles from '../assets/css/module/App.module.css';
import '../assets/css/page/item.css';

const requestsite = '';
document.title = requestsite ? 'ポートフォリオ | ' + requestsite.name : 'ポートフォリオ';

function Portfolio() {
  return (
    <>
      <Header />
      <div class={styles.l_container}>
        <main class={styles.l_main}>
        </main>
      </div>
      <Footer />
    </>
  );
}
render(() => <Portfolio />, document.getElementById('root'));
/* @refresh reload */
import { render } from 'solid-js/web';
import Header from '../components/header';
import Footer from '../components/footer';
import styles from '../assets/css/module/App.module.css';
import '../assets/css/page/profile.css';

const requestsite = '';
document.title = requestsite ? '自己紹介 | ' + requestsite.name : '自己紹介';

function Profile() {
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
render(() => <Profile />, document.getElementById('root'));
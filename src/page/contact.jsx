/* @refresh reload */
import { render } from 'solid-js/web';
import Header from '../components/header';
import Footer from '../components/footer';
import Form from '../components/contact/form';
import styles from '../assets/css/module/App.module.css';
import '../assets/css/page/contact.css';

const requestsite = '';
document.title = requestsite ? 'お問い合わせ | ' + requestsite.name : 'お問い合わせ';

function Contact() {
  return (
    <>
      <Header />
      <div class={styles.l_container}>
        <main class={styles.l_main}>
          <Form />
        </main>
      </div>
      <Footer />
    </>
  );
}
render(() => <Contact />, document.getElementById('root'));
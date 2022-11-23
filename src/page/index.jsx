/* @refresh reload */
import { render } from 'solid-js/web';
import Header from '../components/header';
import Footer from '../components/footer';
import Animation from '../components/animation';
import MainVisual from '../components/mainvisual';
import styles from '../assets/css/module/App.module.css';
import ItemList from '../components/topitemextend';
import { HacoCmsClient } from 'hacocms-js-sdk';
import '../assets/css/page/index.css';

const PROJECT_SUBDOMAIN = import.meta.env.VITE_HACOCMS
const PROJECT_ACCESS_TOKEN = import.meta.env.VITE_HACOCMS_API

export async function request() {
  const id = 'dMsGGb';
  const client = new HacoCmsClient(`https://${PROJECT_SUBDOMAIN}.hacocms.com`, PROJECT_ACCESS_TOKEN)
  const res = await client.getContent(Object, '/site', id)
  return res
}
const requestsite = await request().catch((code) => { console.error(); });

export async function requestbanner() {
  const id = 'zBsoo7';
  const client = new HacoCmsClient(`https://${PROJECT_SUBDOMAIN}.hacocms.com`, PROJECT_ACCESS_TOKEN)
  const res = await client.getContent(Object, '/banner', id)
  return res
}
const mainvisual = await requestbanner().catch((code) => { console.error(); });

document.title = requestsite ? 'トップ | ' + requestsite.name : 'トップ';

function Index() {
  return (
    <>
      <Header />
      <MainVisual data={{id_add:"t_main_visual", data: mainvisual}} />
      <div class={`${styles.l_container} ${styles.l_container_top}`}>
        <ul class={styles.c_itemslide}>
          <ItemList data={{none:true}} />
          <ItemList data={{none:true}} />
        </ul>
      </div>
      <Footer />
      <Animation />
    </>
  );
}
render(() => <Index />, document.getElementById('root'));
/* @refresh reload */
import { render } from 'solid-js/web';
import Header from '../components/header';
import Side from '../components/side';
import Footer from '../components/footer';
import MainVisual from '../components/mainvisual';
import ItemList from '../components/itemextend';
import { HacoCmsClient } from 'hacocms-js-sdk';
import styles from '../assets/css/module/App.module.css';
import '../assets/css/page/item.css';

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
  const id = 'BLs33X';
  const client = new HacoCmsClient(`https://${PROJECT_SUBDOMAIN}.hacocms.com`, PROJECT_ACCESS_TOKEN)
  const res = await client.getContent(Object, '/banner', id)
  return res
}
const mainvisual = await requestbanner().catch((code) => { console.error(); });

document.title = requestsite ? '商品一覧 | ' + requestsite.name : '商品一覧';

function Item() {
  return (
    <>
      <Header />
      <MainVisual data={{data: mainvisual}} />
      <div class={styles.l_container}>
        <main class={styles.l_main}>
          <ul class={styles.c_itemlist}>
            <ItemList />
          </ul>
        </main>
        <Side />
      </div>
      <Footer />
    </>
  );
}
render(() => <Item />, document.getElementById('root'));
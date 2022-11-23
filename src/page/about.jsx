/* @refresh reload */
import { render } from 'solid-js/web';
import Header from '../components/header';
import Side from '../components/side';
import Footer from '../components/footer';
import MainVisual from '../components/mainvisual';
import { HacoCmsClient } from 'hacocms-js-sdk';
import styles from '../assets/css/module/App.module.css';
import '../assets/css/page/about.css';

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
  const id = 'PBs992';
  const client = new HacoCmsClient(`https://${PROJECT_SUBDOMAIN}.hacocms.com`, PROJECT_ACCESS_TOKEN)
  const res = await client.getContent(Object, '/banner', id)
  return res
}
const mainvisual = await requestbanner().catch((code) => { console.error(); });

export async function requestabout() {
  const id = '2dswwL';
  const client = new HacoCmsClient(`https://${PROJECT_SUBDOMAIN}.hacocms.com`, PROJECT_ACCESS_TOKEN)
  let res = await client.getContent(Object, '/nakayatofu', id)
  return res
}
const about = await requestabout().catch((code) => { console.error(); });

document.title = requestsite ? '中屋豆腐店 | ' + requestsite.name : '中屋豆腐店';

function About() {
  return (
    <>
      <Header />
      <MainVisual data={{data: mainvisual}} />
      <div class={styles.l_container}>
        <main class={styles.l_main}>
          <div id="about_inner" class={styles.c_lead}>
            <pre>{about ? about.description : null}</pre>
          </div>
          <table class={styles.c_tablewrap}>
            <tbody class={styles.c_tablebody}>
              <tr class={styles.c_tabletr}>
                <th class={styles.c_tableth}>店名</th>
                <td class={styles.c_tabletd}>{about ? about.name : null}</td>
              </tr>
              <tr class={styles.c_tabletr}>
                <th class={styles.c_tableth}>創業</th>
                <td class={styles.c_tabletd}>{about ? about.founding : null}</td>
              </tr>
              <tr class={styles.c_tabletr}>
                <th class={styles.c_tableth}>住所</th>
                <td class={styles.c_tabletd}>{about ? about.address : null}</td>
              </tr>
              <tr class={styles.c_tabletr}>
                <th class={styles.c_tableth}>電話番号</th>
                <td class={styles.c_tabletd}>{about ? about.tel : null}</td>
              </tr>
              <tr class={styles.c_tabletr}>
                <th class={styles.c_tableth}>最寄駅</th>
                <td class={styles.c_tabletd}>{about ? about.station : null}</td>
              </tr>
              <tr class={styles.c_tabletr}>
                <th class={styles.c_tableth}>最寄り駅からの距離</th>
                <td class={styles.c_tabletd}>{about ? about.root : null}</td>
              </tr>
              <tr class={styles.c_tabletr}>
                <th class={styles.c_tableth}>ウェブサイト</th>
                <td class={styles.c_tabletd}><a href={about ? about.site : null} class={styles.u_link}>{about ? about.site : null}</a></td>
              </tr>
            </tbody>
          </table>
        </main>
        <Side />
      </div>
      <Footer />
    </>
  );
}
render(() => <About />, document.getElementById('root'));
/* @refresh reload */
import { render } from 'solid-js/web';
import Header from '../components/header';
import Side from '../components/side';
import Footer from '../components/footer';
import MainVisual from '../components/mainvisual';
import { HacoCmsClient } from 'hacocms-js-sdk';
import styles from '../assets/css/module/App.module.css';
import '../assets/css/page/profile.css';

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
  const id = 'Ozs44z';
  const client = new HacoCmsClient(`https://${PROJECT_SUBDOMAIN}.hacocms.com`, PROJECT_ACCESS_TOKEN)
  const res = await client.getContent(Object, '/banner', id)
  return res
}
const mainvisual = await requestbanner().catch((code) => { console.error(); });

export async function requestprofile() {
  const id = 'XpsBB9';
  const client = new HacoCmsClient(`https://${PROJECT_SUBDOMAIN}.hacocms.com`, PROJECT_ACCESS_TOKEN)
  const res = await client.getContent(Object, '/profile', id)
  return res
}
const profile = await requestprofile().catch((code) => { console.error(); });

document.title = requestsite ? '自己紹介 | ' + requestsite.name : '自己紹介';

function Index() {
  return (
    <>
      <Header />
      <MainVisual data={{data: mainvisual}} />
      <div class={styles.l_container}>
        <main class={styles.l_main}>
          <div class={styles.c_lead}>
            <pre>{profile ? profile.description : null}</pre>            
          </div>
          <table class={styles.c_tablewrap}>
            <tbody class={styles.c_tablebody}>
              <tr class={styles.c_tabletr}>
                <th class={styles.c_tableth}>名前</th>
                <td class={styles.c_tabletd}>{profile ? profile.name : null}</td>
              </tr>
              <tr class={styles.c_tabletr}>
                <th class={styles.c_tableth}>職業</th>
                <td class={styles.c_tabletd}>{profile ? profile.job : null}</td>
              </tr>
              <tr class={styles.c_tabletr}>
                <th class={styles.c_tableth}>出身・在住</th>
                <td class={styles.c_tabletd}>{profile ? profile.address: null}</td>
              </tr>
              <tr class={styles.c_tabletr}>
                <th class={styles.c_tableth}>趣味</th>
                <td class={styles.c_tabletd}>{profile ? profile.hobby : null}</td>
              </tr>
              <tr class={styles.c_tabletr}>
                <th class={styles.c_tableth}>関連リンク</th>
                <td class={styles.c_tabletd}>
                  <a href={profile ? profile.site : null} target="_blank" rel="noreferrer" class={styles.u_link}>{profile ? profile.site : null}</a><br />
                  <a href={profile ? profile.site2 : null} target="_blank" rel="noreferrer" class={styles.u_link}>{profile ? profile.site2 : null}</a><br />
                  <a href={requestsite ? requestsite.twitter : null} target="_blank" rel="noreferrer" class={styles.u_link}>Twitter</a>
                </td>
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
render(() => <Index />, document.getElementById('root'));
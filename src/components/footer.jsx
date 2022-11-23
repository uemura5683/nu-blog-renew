
import styles from '../assets/css/module/App.module.css';
import { HacoCmsClient } from 'hacocms-js-sdk';

const PROJECT_SUBDOMAIN = import.meta.env.VITE_HACOCMS
const PROJECT_ACCESS_TOKEN = import.meta.env.VITE_HACOCMS_API

export async function request() {
  const id = 'dMsGGb';
  const client = new HacoCmsClient(`https://${PROJECT_SUBDOMAIN}.hacocms.com`, PROJECT_ACCESS_TOKEN)
  const res = await client.getContent(Object, '/site', id)
  return res
}
const site = await request().catch((code) => { console.error(); });

export default function Footer() {
  return (
    <footer class={styles.footer}>
      <div class={styles.c_footerlink}><a href="/privacy.html">プライバシーポリシー</a></div>
      <div class={styles.c_copyright}>(c) {new Date().getFullYear()} {site ? site.copyright : null}</div>
    </footer>
  );
}  
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
const requestsite = await request().catch((code) => { console.error(); });

export default function Logo() {
  return (
    <a href="/" class={styles.c_header_logo}>
      <img
        class={styles.c_header_logoimg}
        src={requestsite ? requestsite.logo : null}
        alt={requestsite ? requestsite.name : null}
      />
    </a>
  );
}  
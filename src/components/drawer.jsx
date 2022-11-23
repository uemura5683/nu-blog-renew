import styles from '../assets/css/module/App.module.css';
import { createSignal, onMount, For  } from 'solid-js';
import { HacoCmsClient, SortQuery } from 'hacocms-js-sdk';

const PROJECT_SUBDOMAIN = import.meta.env.VITE_HACOCMS
const PROJECT_ACCESS_TOKEN = import.meta.env.VITE_HACOCMS_API

export default function Drawer() {

  const [cats, setCats] = createSignal();

  onMount(async () => {
    const client = new HacoCmsClient(`https://${PROJECT_SUBDOMAIN}.hacocms.com`, PROJECT_ACCESS_TOKEN)
    const res = await client.getList(Object, '/navigation', { s: SortQuery.build(['createdAt', 'desc']), limit: 30 });
    const data = await res.data
    setCats(await data);
  });

  return (
    <div class={styles.c_drawer}>
      <ul class={styles.c_drawer_ul}>
        <For each={cats()}>{(cat, i) =>
          <li class={styles.c_drawer_li}>
            <a href={`/${cat.link}`} class={styles.c_drawer_a}>
              {cat.text}
            </a>
          </li>
        }</For>
      </ul>
      <div class={styles.c_drawer_bg}></div>
    </div>
  );
}  
import styles from '../assets/css/module/App.module.css';
import { createSignal, onMount, For } from 'solid-js';
import { HacoCmsClient, SortQuery } from 'hacocms-js-sdk';

const PROJECT_SUBDOMAIN = import.meta.env.VITE_HACOCMS
const PROJECT_ACCESS_TOKEN = import.meta.env.VITE_HACOCMS_API

export default function ItemExtend() {

  const [cats, setCats] = createSignal()
      , [data, setData] = createSignal();

  onMount(async () => {
    const client = new HacoCmsClient(`https://${PROJECT_SUBDOMAIN}.hacocms.com`, PROJECT_ACCESS_TOKEN)
    const res = await client.getList(Object, '/tofulist', { s: SortQuery.build(['createdAt', 'desc']), limit: 30 });
    const data = await res.data
    setCats(await data);
  });
  
  return (
    <>
      <For each={cats()}>{(cat, i) =>
        <li class={styles.Itemlistli}>
          <button onClick={() => setData(cat)}>
            { !data.data ?
              <>
                <img
                  src={`${cat.image}`}
                  alt={cat.name}
                  loading="lazy"
                />
                <p class={styles.Itemlistname}>{cat.name}</p>
                <p class={styles.Itemlistdesc}>{cat.price}</p>
              </>
              : null
            }
          </button>
        </li>
      }</For>
    </>
  );
}


import styles from '../assets/css/module/App.module.css';
import { render } from 'solid-js/web';
import { createSignal, onMount, For, createEffect } from 'solid-js';
import { HacoCmsClient, SortQuery } from 'hacocms-js-sdk';

const PROJECT_SUBDOMAIN = import.meta.env.VITE_HACOCMS
const PROJECT_ACCESS_TOKEN = import.meta.env.VITE_HACOCMS_API
export default function ItemExtend() {

  const [cats, setCats] = createSignal()
      , [data, setData] = createSignal()
      , [current, setCurrent] = createSignal("is_disabled");

  onMount(async () => {
    const client = new HacoCmsClient(`https://${PROJECT_SUBDOMAIN}.hacocms.com`, PROJECT_ACCESS_TOKEN)
    const res = await client.getList(Object, '/tofulist', { s: SortQuery.build(['createdAt', 'desc']), limit: 30 });
    const data = await res.data
    setCats(await data);
  });

  createEffect(() => {
    if( current() === 'is_anabled' ) {
      render(() => <Modal data={data()} />, document.getElementById('modal'));
    }
  });

  const close = () => {
    setCurrent('is_disabled');
    document.getElementById('modal').removeChild(document.getElementById('modalinner'));
  }

  const Modal = (data) => {
    if( data.data !== null ) {
      return (
        <>
          <div id="modalinner">
            <div class={styles.m_modal}>
              <button class={styles.m_modal_close} onClick={() => {close()}}>CLOSE</button>
              <figure class={styles.m_modal_figure}>
                <img
                  src={data.data.image}
                  class={styles.m_modal_img}
                  alt={data.data.name}
                  loading="lazy"
                />
                <figcaption class={styles.m_modal_detail}>
                  <p class={styles.m_modal_name}>{data.data.name}</p>
                  <p class={styles.m_modal_price}>{data.data.price}</p>
                  <p class={styles.m_modal_description}>{data.data.description}</p>
                </figcaption>
              </figure>
            </div>
            <div class={styles.m_background} onClick={() => {close()}}></div>
          </div>
        </>
      );
    }
  }
  return (
    <>
      <For each={cats()}>{(cat, i) =>
        <li class={styles.c_itemlistli}>
          <button class={styles.c_itemlistbutton} onClick={() => {setData(cat); setCurrent('is_anabled');}}>
            { !data.data ?
              <>
                <img
                  class={styles.c_itemlistimage}
                  src={`${cat.image}`}
                  loading="lazy"
                  alt={styles.c_itemlistname}
                />
                <p class={styles.c_itemlistname}>{cat.name}</p>
                <p class={styles.c_itemlistdesc}>{cat.price}</p>
              </>
              : null
            }
          </button>
        </li>
      }</For>
    </>
  );
}


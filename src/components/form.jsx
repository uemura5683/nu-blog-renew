import { render } from 'solid-js/web';
import { createSignal, createEffect } from "solid-js";
import axios from "axios";
import { HacoCmsClient } from 'hacocms-js-sdk';
import styles from '../assets/css/module/App.module.css';
import FormError from '../components/contact/formerror';
import FormComplete from '../components/contact/formcomplete';

const PROJECT_SUBDOMAIN = import.meta.env.VITE_HACOCMS
const PROJECT_ACCESS_TOKEN = import.meta.env.VITE_HACOCMS_API

export async function request() {
  const id = 'dMsGGb';
  const client = new HacoCmsClient(`https://${PROJECT_SUBDOMAIN}.hacocms.com`, PROJECT_ACCESS_TOKEN)
  const res = await client.getContent(Object, '/site', id)
  return res
}
const requestsite = await request().catch((code) => { console.error(); });

export default function ContactForm() {

  const [email, setEmail] = createSignal("")
      , [name, setName]   = createSignal("")
      , [title, setTitle] = createSignal("")
      , [body, setBody]   = createSignal("")
      , [current, setCurrent] = createSignal("is_disabled")
      , [alertcurrent, setalertCurrent] = createSignal("is_alert_disabled");

  const handleSubmit = e => {
    e.preventDefault();
    if( name() != "" && email() != "" && title() != "" && body() != "" ) {
      isSubmit(name(), email(), title(), body());
    } else {
      alertModal(name(), email(), title(), body());
    }
  };

  function isSubmit(name, email, title, body) {
    const datas = { email: email, name: name, title: title, body: body };
    axios({
      method: "post",
      url: import.meta.env.VITE_MICROCMS,
      data: datas,
      headers: {
        "Content-Type": "application/json",
        "X-MICROCMS-API-KEY": import.meta.env.VITE_NU_POST_API_KEY
      }
    })
    .then(() => {
      setCurrent('is_anabled');
    })
    .catch(err => {
      console.log(err);
    });
  }

  function alertModal() {
    setalertCurrent("is_alert_anabled");
  }

  createEffect(() => {
    if( alertcurrent() === 'is_alert_anabled' ) {
      render(() => <OpenAlertModal />, document.getElementById('modal'));
    }
    if( current() === 'is_anabled' ) {
      render(() => <OpenModal />, document.getElementById('modal'));
    }
  });

  const OpenAlertModal = () => {
    return (
      <>
        <div id="modalinner">
          <div class={styles.m_modal}>
            <button class={styles.m_modal_close} onClick={() => {close()}}>CLOSE</button>
            <FormError name={name()} mail={email()} title={title()} body={body()} />
          </div>
          <div class={styles.m_background} onClick={() => {close()}}></div>
        </div>
      </>
    );
  }

  const OpenModal = () => {
    return (
      <>
        <div id="modalinner">
          <div class={styles.m_modal}>
            <button class={styles.m_modal_close} onClick={() => {close()}}>CLOSE</button>
            <FormComplete />
          </div>
          <div class={styles.m_background} onClick={() => {close()}}></div>
        </div>
      </>
    );
  }
  
  const close = () => {
    setCurrent('is_disabled');
    setalertCurrent("is_alert_disabled");
    document.getElementById('modal').removeChild(document.getElementById('modalinner'));
  }
  return (
    <>
      <div class={styles.c_contact_inner}>
        <p class={styles.c_lead}>
          どんな些細でもいいですので気軽にお問い合わせください。<br/>
          <a href={requestsite.twitter} target="_blank" rel="noreferrer" class={styles.u_link}>Twitter</a>でも受け付けております。
        </p>
        <div class={styles.c_alert}></div>
        <form class={styles.c_form}>
          <div class={styles.c_form_wrap}>
            <label class={styles.c_form_label}>あなたの名前</label>
            <input
              type="text"
              class={styles.c_input}
              placeholder="名前を入力してください"
              id="name"
              name="name"
              value={name()}
              onChange={e => setName(e.target.value)}
              required
            />
          </div>
          <div class={styles.c_form_wrap}>
            <label class={styles.c_form_label}>メールアドレス</label>
            <input
              type="email"
              class={styles.c_input}
              placeholder="メールアドレスを入力してください"
              id="email"
              name="email"
              value={email()}
              onChange={e => setEmail(e.target.value)}
              required
            />
          </div>
          <div class={styles.c_form_wrap}>
            <label class={styles.c_form_label}>お問い合わせ内容</label>
            <input
              type="text"
              class={styles.c_input}
              placeholder="タイトルを入力してください"
              id="title"
              name="title"
              value={title()}
              onChange={e => setTitle(e.target.value)}
              required
            />
          </div>
          <div class={styles.c_form_wrap}>
            <label class={styles.c_form_label}>お問い合わせ詳細</label>
            <textarea
              placeholder="本文を入力してください"
              class={styles.c_textarea}
              name="body"
              value={body()}
              onChange={e => setBody(e.target.value)}
              required
            />
          </div>
          <div class={styles.c_btn_form}>
            <button
              class={styles.c_btn}
              type="submit"
              onClick={handleSubmit}
            >
              送信内容を確認する
            </button>
          </div>
        </form>
      </div>
      <div id="modalArea"></div>
    </>
  );
}  
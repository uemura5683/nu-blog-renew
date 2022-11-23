import styles from '../../assets/css/module/App.module.css';

export default function Greeting(props) {
  return (
    <div class={styles.m_modal_alert}>
      <h3 class={styles.m_modal_title}>エラー発生しました</h3>
      {props.name == '' ? <p class={styles.m_modal_alert_txt}>名前を入力してくださいね</p> : null}
      {props.mail == '' ? <p class={styles.m_modal_alert_txt}>メールアドレスを入力してください</p> : null}
      {props.title == '' ? <p class={styles.m_modal_alert_txt}>タイトルを入力してください</p> : null}
      {props.body == '' ? <p class={styles.m_modal_alert_txt}>本文を入力してください</p> : null}
    </div>
  )
}
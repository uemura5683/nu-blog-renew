import styles from '../../assets/css/module/App.module.css';

export default function Greeting() {
  return (
    <div class={styles.m_modal_complete}>
      <h3 class={styles.m_modal_title}>お問い合わせありがとうございました。</h3>
      この度はお問い合わせメールをお送りいただきありがとうございます。<br />
      今しばらくお待ちくださいますようよろしくお願い申し上げます。<br />
      なお、しばらくたっても返信、返答がない場合は、<br />
      お客様によりご入力いただいたメールアドレスに誤りがある場合がございます。<br />
      その際は、お手数ですが再度お問い合わせいただけますと幸いです。<br />
    </div>
  )
}
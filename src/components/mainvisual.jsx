import styles from '../assets/css/module/App.module.css';

export default function Iframe(data) {
  let imgdata = '', txtdata = '', ttldata = '', addid = '';
  if( data.data != undefined ) {
    imgdata = data.data.data.image;
    txtdata = data.data.data.subtitle;
    ttldata = data.data.data.title;
    if (data.data != data.data.id_add) {
      addid = data.data.id_add;
    }
  }
  return (
    <figure class={styles.c_mainvisual} id={addid}>
      <img src={imgdata} class={styles.c_mainvisual_img} loading="lazy" alt={txtdata} />
      <h2 class={styles.c_mainvisual_ttl}>{ttldata}</h2>
      <figcaption class={styles.c_mainvisual_txt}>{txtdata}</figcaption>
    </figure>
  );
}  
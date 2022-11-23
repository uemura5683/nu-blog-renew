/* @refresh reload */
import { render } from 'solid-js/web';
import Animation from '../components/topanimation';

function Index() {
  return (
    <>
      <Animation />
    </>
  );
}
render(() => <Index />, document.getElementById('root'));
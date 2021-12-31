import { store } from '../redux/store';
import { Provider } from 'react-redux';
import '../styles/globals.css';
import "nprogress/nprogress.css";
import dynamic from 'next/dynamic';

const NprogressBar = dynamic(
  () => {
    return import("../components/NprogressBar");
  },
  { ssr: false },
);

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Provider store={store}>
        <NprogressBar />
        <Component {...pageProps} />
      </Provider>
    </>
  )
}

export default MyApp

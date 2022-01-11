import '../../styles/globals.css';
import { AuthProvider } from '../contexts/AuthContext';
import { storeWrapper } from "../store";

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
  )
}

export default storeWrapper.withRedux(MyApp);

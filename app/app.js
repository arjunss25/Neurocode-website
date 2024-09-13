import { AnimatePresence } from "framer-motion";
import 'locomotive-scroll/dist/locomotive-scroll.css';
function MyApp({ Component, pageProps }) {
  return (
    <AnimatePresence mode="wait">
      <Component {...pageProps} />
    </AnimatePresence>
  );
}

export default MyApp;
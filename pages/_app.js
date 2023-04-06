import "../styles/globals.css";

import { AnimatePresence } from "framer-motion";

function MyApp({ Component, pageProps, router }) {
  return (
    <div className="font-latoBold relative h-screen overflow-hidden">
      {/* <Navbar /> */}
      <AnimatePresence initial={true} mode="wait">
        <Component key={router.pathname} {...pageProps} />
      </AnimatePresence>
    </div>
  );
}

export default MyApp;

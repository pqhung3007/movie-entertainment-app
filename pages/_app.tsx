import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { useState, useEffect } from "react";
import Layout from "../components/Layout";
import { store } from "../app/store";

function MyApp({ Component, pageProps }: AppProps) {
  //? fix failed hydration error: https://stackoverflow.com/questions/71706064/react-18-hydration-failed-because-the-initial-ui-does-not-match-what-was-render/71797054#71797054?newreg=cb3b7c4a22c645d28b58efed17c2f4de

  const [showChild, setShowChild] = useState(false);
  useEffect(() => {
    setShowChild(true);
  }, []);

  if (!showChild) {
    return null;
  }

  if (typeof window === "undefined") {
    return <></>;
  } else {
    return (
      <Provider store={store}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Provider>
    );
  }
}

export default MyApp;

import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Header } from "../components/Header";
import { useRouter } from "next/router";
import supabase from "../lib/api/supabase";

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  return (
    <div>
      {router.pathname !== "/signin" && router.pathname !== "/signup" ? (
        <Header />
      ) : null}
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;

import React, { useEffect } from "react";
import "../assets/css/new.css";
import "../assets/css/default.css";
import "../assets/css/bootstrap.min.css";
import "../assets/css/font-awesome.min.css";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";
import Script from "next/script";
const ErrorBoundary = dynamic(() => import("@/Component/ErrorBoundary"), { ssr: false });
const AOSWrapper = dynamic(() => import("@/Component/SubComponent/AosWrapper"), { ssr: false });
const webLayout = dynamic(() => import("@/Component/Layout/Layout"), { ssr: false });

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  const { pathname } = router;

  const displaylayout = pathname.startsWith("/online-admin/dashboard");
  const Layout = webLayout;

  return (
    <ErrorBoundary>
        <div className={`${displaylayout && "setdisplay"}`}>
          <Layout>
            <AOSWrapper>
              <Component {...pageProps} />
            </AOSWrapper>
          </Layout>
        </div>
    </ErrorBoundary>
  );
}

export default MyApp;

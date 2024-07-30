import React from "react";
import image from "../assets/images/logo.webp";
import Head from "next/head";

const Seo = ({ title, pagedescription, keywords }) => {
  let url = "https://www.softstorm.in";
  let lasttitle =
    "SoftStorm - Custom Software Development Service Provider Company in Surat, India";
  let defaultpagedescription =
    "Trusted Service Provider for AI Tool & iOT Service | Web Application | Mobile Application | Enterprise Solution | Digital Marketing ";
  let defaultKey = "It Company";

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <title>{title ? title : lasttitle}</title>
        <meta name="title" content={title ? title : lasttitle} />
        <meta
          name="description"
          content={pagedescription ? pagedescription : defaultpagedescription}
        />
        <meta name="keywords" content={keywords ? keywords : defaultKey} />

        <meta property="og:type" content="Website" />
        <meta property="og:title" content={title ? title : lasttitle} />
        <meta
          property="og:description"
          content={pagedescription ? pagedescription : defaultpagedescription}
        />
        <meta property="og:site_name" content="SoftStorm Technosys" />
        <meta name="og:keyword" content={keywords ? keywords : defaultKey} />
        <meta property="og:url" content={url} />
        <meta property="og:image" content={image} />

        <meta name="site" content="SoftStorm Technosys Private Limited" />
        <meta name="copyright" content="SoftStorm Technosys Pvt. Ltd." />
        <meta name="author" content="SoftStorm Technosys" />
        <meta name="page-topic" content="SoftStorm Technosys" />
        <meta name="Rating" content="General" />
        <meta name="Robots" content="INDEX,FOLLOW" />
        <meta name="Revisit-after" content="7 Days" />
        <link rel="canonical" href="softstorm.in" />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={title ? title : lasttitle} />
        <meta
          name="twitter:description"
          content={pagedescription ? pagedescription : defaultpagedescription}
        />
        <meta name="twitter:site" content={url} />
        <meta name="twitter:creator" content={url} />
        <link rel="icon" href="/favicon.ico" />

        {/* <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
          integrity="sha384-k6RqeWeci5ZR/Lv4MR0sA0FfDOM8V9IOYvIVh5pVlvMZ4+K4S9o4FZ2JfGT5D1ym"
          crossorigin
        /> */}
        {/* <meta name="google-site-verification" content="dTL5N67zsh_JdPUzgOM_q7BMlDHMaScJcQ7R8PyHJGI" /> */}
      </Head>
    </>
  );
};

export default Seo;

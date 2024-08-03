import React from "react";
import image from "../assets/images/logo.webp";
import Head from "next/head";

const Seo = ({ title, pagedescription, keywords }) => {
  let url = "https://rudsinfotech.github.io/News/";
  let lasttitle =
    "Gujarati News, Breaking News in Gujarati, ગુજરાતી ન્યૂઝ, ગુજરાતીમાં ટોપ હેડલાઈન્સ";
  let defaultpagedescription =
    "ગુજરાતી ન્યૂઝ, Breaking News in Gujarati, Top Headlines in Gujarati (ગુજરાતીમાં ટોપ હેડલાઈન્સ), Gujarati Latest News (ગુજરાતી લેટેસ્ટ ન્યૂઝ), Today Top News (આજના ટોપ ન્યૂઝ), Gujarati News Today (આજના ગુજરાતી ન્યૂઝ), ગુજરાતી સમાચાર, ગુજરાતી લેટેસ્ટ સમાચાર, આજના ટોપ સમાચાર";
  let defaultKey =
    "Gujarati news, Latest Gujarati News, Latest News in Gujarati, Gujarati news live, News Gujarati, Breaking News in Gujarati, Live Gujarati News, News in Gujarati";

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
        <meta property="og:site_name" content="Latest Gujarati News" />
        <meta name="og:keyword" content={keywords ? keywords : defaultKey} />
        <meta property="og:url" content={url} />
        <meta property="og:image" content={image} />

        <meta name="site" content="Gujarati News" />
        <meta name="copyright" content="ગુજરાતી ન્યૂઝ" />
        <meta name="author" content="rudsinfotech" />
        <meta name="page-topic" content="ગુજરાતી ન્યૂઝ" />
        <meta name="Rating" content="General" />
        <meta name="Robots" content="INDEX,FOLLOW" />
        <meta name="Revisit-after" content="7 Days" />
        <link rel="canonical" href={url} />

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

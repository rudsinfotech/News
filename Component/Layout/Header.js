import React, { useEffect, useState } from "react";
import Link from "next/link";
import logo from "../../assets/images/logo.webp";

import Image from "next/image";
import StickyMenu from "../SubComponent/lib/StickyMenu";
import { socialMediaLinks } from "../SubComponent/FooterLink";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import style from "./Layout.module.css";
const HeadermainLink = dynamic(() =>
  import("../SubComponent/FooterLink").then((module) => module.HeadermainLink)
);
const SocialLink = dynamic(() =>
  import("../SubComponent/FooterLink").then((module) => module.SocialLink)
);

const Header = ({ action, cartToggle }) => {
  const [selectedLogo, setSelectedLogo] = useState("");
  const [fields, setFields] = useState([]);

  const router = useRouter();

  const { pathname } = router;
  const isNotFound = pathname === "/404";

  function getCurrentFormattedDate() {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = String(currentDate.getMonth() + 1).padStart(2, "0");
    const day = String(currentDate.getDate()).padStart(2, "0");
    return `${month}-${day}`;
  }
  useEffect(() => {
    StickyMenu();
  }, []);

  useEffect(() => {
    if (isNotFound) {
      // document.querySelector(`.${style.softstormweb_header_1}`).style.display = "none";
      document.querySelector(
        `.${style.rudsinfotech_header_area}`
      ).style.display = "none";
    } else {
      // document.querySelector(`.${style.softstormweb_header_1}`).style.display = "flex";
      document.querySelector(
        `.${style.rudsinfotech_header_area}`
      ).style.display = "block";
    }
  });

  return (
    <>
      <header
        className={`${style.rudsinfotech_header_area} rudsinfotech-header_sticky`}
      >
        <div className="container">
          <div className={style.menu_header}>
            <div className={style.dskt_logo}>
              <Link className={style.nav_brand} href="/">
                <Image src={logo} alt="Logo" layout="responsive" className={style.max_width_web} width={250} height={100} />
              </Link>{" "}
            </div>
            <div
              className={`softstrom_header  ${style.handlenavigation}`}
              role="navigation"
            >
              <ul className="nav-list">
                <li className={`megamenu `}>
                  <HeadermainLink href="/">Home</HeadermainLink>
                </li>
                <li className="megamenu">
                  <HeadermainLink href="/sport">Sports</HeadermainLink>
                </li>
                <li className="megamenu">
                  <HeadermainLink href="/business"> Business</HeadermainLink>
                </li>
                <li className="megamenu">
                  <HeadermainLink href="/world"> world </HeadermainLink>
                </li>
                <li className="megamenu">
                  <HeadermainLink href="/entertainment">
                    Entertainment{" "}
                  </HeadermainLink>
                </li>
              </ul>
            </div>
            <div className="softstormweb-header_btn_box text-right handlebtnmobil">
              <div
                onClick={(e) => action(e)}
                className="toggle-btn ml-30 mr-30 canvas_open d-lg-none d-block"
              >
                <i className="fa fa-bars" />
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;

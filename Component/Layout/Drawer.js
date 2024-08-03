/* eslint-disable react/jsx-no-target-blank */
import React, { useEffect, useState } from "react";
import logo from "../../assets/images/logo.webp";

import Link from "next/link";
import Image from "next/image";
import { SocialLink, socialMediaLinks } from "../SubComponent/FooterLink";
import style from "./drawer.module.css";
function Drawer({ drawer, action, cartToggle }) {
  const [size, setSize] = useState("0px");
  const [item, setItem] = useState("home");
  const [fields, setFields] = useState([]);

  const handler = (e, value, sizes) => {
    e.preventDefault();
    if (sizes > "0px") {
      setSize("0px");
    } else {
      if (value !== "about") {
        action(e);
      }

      const getItems = document.querySelectorAll(`#${value} li`).length;

      if (getItems > 0) {
        setSize(`${43 * getItems}px`);
        setItem(value);
      }
    }
  };
  const handleaction = (e) => {
    action(e);
  };

  return (
    <>
      <div
        onClick={handleaction}
        className={`off_canvars_overlay ${drawer ? "active" : ""}`}
      ></div>
      <div className={style.offcanvas_menu}>
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <div
                className={`${style.offcanvas_menu_wrapper} ${
                  drawer ? `${style.active}` : ""
                }`}
              >
                <div className="offcanvas-brand text-center mb-40">
                  <Image src={logo} alt="" style={{ maxWidth: "100px" }} />
                </div>
                <div id="menu" className="text-left ">
                  <ul className="offcanvas_main_menu">
                    <li
                      onClick={(e) => handler(e, "home", size)}
                      id="home"
                      className="menu-item-has-children active"
                    >
                      <Link scroll={false} href="/">
                        Home
                      </Link>
                    </li>
                    <li
                      onClick={(e) => handler(e, "sport", size)}
                      id="sport"
                      className="menu-item-has-children active"
                    >
                      <Link scroll={false} href="/sport">
                        Sports
                      </Link>
                    </li>
                    <li
                      onClick={(e) => handler(e, "business", size)}
                      id="business"
                      className="menu-item-has-children active"
                    >
                      <Link scroll={false} href="/business">
                        Business
                      </Link>
                    </li>
                    <li
                      onClick={(e) => handler(e, "world", size)}
                      id="world"
                      className="menu-item-has-children active"
                    >
                      <Link scroll={false} href="/world">
                      world
                      </Link>
                    </li>
                    <li
                      onClick={(e) => handler(e, "entertainment", size)}
                      id="entertainment"
                      className="menu-item-has-children active"
                    >
                      <Link scroll={false} href="/entertainment">
                        Entertainment
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="offcanvas-social">
                  <ul className="text-center">
                    {socialMediaLinks.map((link, index) => (
                      <React.Fragment key={index}>
                        <li>
                          <SocialLink
                            href={{ pathname: link.href }}
                            className={link.className}
                          >
                            <i
                              className={link.iconClass}
                              style={{ color: "#4f4f4f " }}
                            />
                          </SocialLink>
                        </li>
                      </React.Fragment>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Drawer;

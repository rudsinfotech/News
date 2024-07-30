import React, { useEffect, useState } from "react";
import Image from "next/image";
import logo from "../../assets/images/logo.webp";
import Link from "next/link";
import { SocialLink, socialMediaLinks } from "../SubComponent/FooterLink";
import style from "./Layout.module.css";
const CommonLowerFooter = () => {
  const [selectedLogo, setSelectedLogo] = useState("");
  const [fields, setFields] = useState([]);
  const [recentYear, setRecentYear] = useState("");

  useEffect(() => {
    const d = new Date();
    let year = d.getFullYear();
    setRecentYear(year);
  }, []);

  return (
    <>
      <section>
        <div className="container ">
          <div className="row">
            <div className="col-lg-12">
              <div className="footer-about-widget d-flex justify-content-center mb-2">
                <div style={{ width: "100px" }}>
                  <Link scroll={false} href="/">
                    <Image src={selectedLogo ? selectedLogo : logo} alt="" />
                  </Link>
                </div>
              </div>
              <div className="col-lg-12 d-flex justify-content-center align-items-center mb-2">
                {socialMediaLinks.map((link, index) => (
                  <React.Fragment key={index}>
                    <SocialLink
                      href={{ pathname: link.href }}
                      className={link.className}
                    >
                      <i
                        className={link.iconClass}
                        style={{ color: link.color }}
                      />
                    </SocialLink>
                    {index < socialMediaLinks.length - 1 && <span> | </span>}
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>

          <div className={`row ${style.footer_copyright} mt-2 pt-3  pb-2`}>
            <div className="col-lg-6 col-md-12 col-sm-12"></div>
            <div className="col-lg-6 col-md-12 col-sm-12 ">
              <div className={`${style.copyright_text} `}>
                <p>
                  Copyright © 2018 - {recentYear} news. All rights reserved.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CommonLowerFooter;

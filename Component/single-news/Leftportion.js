import React from "react";
import blogImg1 from "../../assets/images/singlemiddle.webp";
import blogImg from "../../assets/images/news.webp";
import Image from "next/image";
import { data } from "../news";
import { useRouter } from "next/router";

const LeftPortion = () => {
  const router = useRouter();
  let { id } = router.query;
  return (
    <>
      <div className="single-post-area">
        {data.map((e) => {
          if (e.id == id) {
            return (
              <>
                <h3 className="article-title mb-3">{e.title}</h3>
                <Image
                  src={e.image}
                  className="mb-3"
                  style={{ width: "100%" }}
                  width={800}
                  height={450}
                  alt="Center Image"
                />
                {e.paragraphs.map((data, index) => {
                  if (index === 2) {
                    return (
                      <>
                        <Image
                          src={e.centerImage}
                          className="post-thumb my-4 d-flex justify-content-center"
                        />{" "}
                        <div dangerouslySetInnerHTML={{ __html: data }}></div>
                      </>
                    );
                  } else {
                    const regex = /^<[^>]+>/;
                    const isTegAppliyed = regex.test(data)
                    return (
                      <div dangerouslySetInnerHTML={{ __html: data }} className={`${isTegAppliyed ? "" : 'my-3'}`}></div>
                    );
                  }
                })}
                <div className="my-5" style={{ clear: "both" }}>
                  <div className="post-tags">
                    <h5>Tags:</h5>
                    {e.tag.map((data, index) => {
                      return <span className="tags"> {data}</span>;
                    })}
                  </div>
                </div>
              </>
            );
          }
        })}
      </div>
    </>
  );
};

export default LeftPortion;

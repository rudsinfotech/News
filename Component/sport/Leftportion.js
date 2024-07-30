import React from "react";
import Image from "next/image";
import { data } from "../news";
import { useRouter } from "next/router";

const LeftPortion = () => {
  const router = useRouter();

  const perticulerNews = (id) => {
    router.push(`/sport/${id}`)
  }

  return (
    <>
      <div className="row">
        {data.map((e) => {
          if (e.category === "sport") {
            return (
              <div className="col-lg-6" >
                <div className="post-item-1" onClick={() => perticulerNews(e.id)}>
                  <Image
                    src={e.image}
                    alt=""
                    className="object-fill max-h-80"
                    style={{ objectFit: "fill", maxHeight: "350px" }}
                  />
                  <div className="b-post-details">
                    <div className="bp-meta">
                      <a href="#">
                        <i className="fal fa-clock"></i>
                        {e.time}
                      </a>
                      <a href="#">
                        <i className="fal fa-comments"></i>
                        {e.comment} Comments
                      </a>
                    </div>
                    <h3>
                      <a href={`/sport/${e.id}`}>{e.title}</a>
                    </h3>
                    <a className="read-more" href={`/sport/${e.id}`}>
                      Read More<i className="fal fa-arrow-right"></i>
                    </a>
                  </div>
                </div>
              </div>
            );
          }
        })}
      </div>
    </>
  );
};

export default LeftPortion;

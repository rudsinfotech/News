import React from "react";
import Image from "next/image";
import { data } from "../news";
import { useRouter } from "next/router";

const LeftPortion = () => {
  const router = useRouter();
  const perticulerNews = (category, id) => {
    router.push(`/${category}/${id}`);
  };

  const truncateText = (text, limit) => {
    if (text.length > limit) {
        return text.substring(0, limit) + '...';
    }
    return text;
};

  return (
    <>
      <div className="row">
        {data.map((e) => {
          return (
            <div className="col-lg-6 col-md-12 col-sm-6">
              <div
                className="post-item-1"
                onClick={() => perticulerNews(e.category, e.id)}
              >
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
                    <a href={`/${e.category}/${e.id}`}>{truncateText(e.title, 60)}</a>
                  </h3>
                  <a className="read-more" href={`/${e.category}/${e.id}`}>
                    Read More<i className="fal fa-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default LeftPortion;
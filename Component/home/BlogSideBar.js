import React from "react";
import Image from "next/image";
import { data } from "@/Component/news";
import { useRouter } from "next/router";

function BlogSideBar() {
  const router = useRouter();

  const particularNews = (category, id) => {
    router.push(`/${category}/${id}`);
  };

  const truncateText = (text, limit) => {
    if (text.length > limit) {
      return text.substring(0, limit) + "...";
    }
    return text;
  };

  return (
    <div className="blog-sidebar">
      <aside className="widget widget-trend-post ">
        <h3 className="widget-title">Popular Posts</h3>
        {data.map((data) => {
          if (data.important === 1) {
            return (
              <>
                <div className="popular-post">
                  <Image src={data.image} alt="" />
                  <h5>
                    <p
                      className="importantTitle"
                      onClick={() => particularNews(data.category, data.id)}
                    >
                      {truncateText(data.title, 60)}
                    </p>
                  </h5>
                  <span>{data.time}</span>
                </div>
              </>
            );
          }
        })}
      </aside>
    </div>
  );
}

export default BlogSideBar;
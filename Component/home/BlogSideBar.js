import React from "react";
import BlogImg1 from "../../assets/images/blog-1.jpg";
import BlogImg2 from "../../assets/images/blog-1.jpg";
import BlogImg3 from "../../assets/images/blog-1.jpg";
import BlogImg4 from "../../assets/images/blog-1.jpg";
import Image from "next/image";
import { RightSideData, data } from "@/Component/news";

function BlogSideBar() {
  return (
    <div className="blog-sidebar">
      <aside className="widget widget-trend-post ">
        <h3 className="widget-title">Popular Posts</h3>
        {data.map((data) => {
            if(data.important === 1){
                return (
                  <>
                    <div className="popular-post">
                      <a href="single-post.html">
                        {RightSideData.map((e) => {
                          if (e.category === data.category) {
                            return (
                              <Image
                                src={e.image}
                                alt=""
                                style={{ width: "70px" }}
                              />
                            );
                          }
                        })}
                      </a>
                      <h5>
                        <a href="single-post.html">Using creative problem Solving</a>
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

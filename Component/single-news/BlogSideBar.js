import React from "react";
import BlogImg1 from "../../assets/images/single_news2.png";
import Image from "next/image";

function BlogSideBar() {
  return (
    <div className="blog-sidebar" >
      <aside className="widget widget-categories" style={{padding:"0"}}>
        <Image src={BlogImg1} alt="test image" style={{width:"100%"}}/>
      </aside>
    </div>
  );
}

export default BlogSideBar;
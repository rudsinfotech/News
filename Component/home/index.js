import React, { Suspense, lazy, useEffect, useState } from "react";
import LeftPortion from "./Leftportion";
import Loader from "@/Component/loader";
import BlogSideBar from "./BlogSideBar";

// const Home = lazy(() => import("./Home"));

const HomeIndex = ({ apidata }) => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 200);
  });
  return (
    <>
      {/* {loading && <Loader />} */}
      <div className={`sstpl-visible ${loading === false ? "active" : ""}`}>
        <Suspense fallback={<Loader />}>
          <section className="websitecssarea">
            <div className="container">
              <div className="row">
                <div className="col-lg-8 col-md-7 ">
                  <LeftPortion />
                </div>
                <div className="col-lg-4 col-md-5">
                  <BlogSideBar />
                </div>
              </div>
            </div>
          </section>
        </Suspense>
      </div>
    </>
  );
};

export default HomeIndex;

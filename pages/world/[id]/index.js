import React, { Suspense, lazy } from "react";
import Seo from "@/Component/Seo";
import Loader from "@/Component/loader";
const SingleIndex = lazy(() => import("@/Component/single-news"));

const index = () => {
  return (
    <>
      <Seo
        title={
          "World News, Latest World News Today, Live News updates from World"
        }
        pagedescription={
          "World - Get latest news on World. Read Breaking News on World updated and published at દુનિયા "
        }
        keywords={
          "World, News on World, stories on World, articles on World, World stories at દુનિયા, World news, World latest news"
        }
      />{" "}
      <Suspense fallback={<Loader />}>
        <SingleIndex />
      </Suspense>
    </>
  );
};

export default index;

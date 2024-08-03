import React, { Suspense, lazy } from "react";
import Seo from "@/Component/Seo";
import Loader from "@/Component/loader";
const SingleIndex = lazy(() => import("@/Component/single-news"));

const index = () => {
  return (
    <>
 <Seo
        title={
          "Entertainment News, Latest Entertainment News Today, Live News updates from Entertainment"
        }
        pagedescription={
          "Entertainment - Get latest news on Entertainment. Read Breaking News on Entertainment updated and published at મનોરંજન "
        }
        keywords={
          "Entertainment, News on Entertainment, stories on Entertainment, articles on Entertainment, Entertainment stories at મનોરંજન, Entertainment news, Entertainment latest news"
        }
      />      <Suspense fallback={<Loader />}>
        <SingleIndex />
      </Suspense>
    </>
  );
};

export default index;

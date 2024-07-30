import React, { Suspense, lazy } from "react";
import Seo from "@/Component/Seo";
import Loader from "@/Component/loader";
const SingleIndex = lazy(() => import("@/Component/single-news"));

const index = () => {
  return (
    <>
      <Seo title={""} pagedescription={""} keywords={""} />
      <Suspense fallback={<Loader />}>
        <SingleIndex />
      </Suspense>
    </>
  );
};

export default index;

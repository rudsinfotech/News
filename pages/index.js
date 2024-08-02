import React, { Suspense, lazy } from "react";
import Seo from "@/Component/Seo";
import Loader from "@/Component/loader";
const HomeIndex = lazy(() => import("@/Component/home"));


const index = () => {
  return (
    <>
      <Seo title={""} pagedescription={""} keywords={""} />
      <Suspense fallback={<Loader />}>
        <HomeIndex />
      </Suspense>
    </>
  );
};

export default index;

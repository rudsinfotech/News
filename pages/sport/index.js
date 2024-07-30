import React, { Suspense, lazy } from "react";
import Seo from "@/Component/Seo";
import Loader from "@/Component/loader";
const SportIndex = lazy(() => import("@/Component/sport"));

const index = () => {
  return (
    <>
      <Seo title={""} pagedescription={""} keywords={""} />
      <Suspense fallback={<Loader />}>
        <SportIndex />
      </Suspense>
    </>
  );
};

export default index;

import React, { Suspense, lazy } from "react";
import Seo from "@/Component/Seo";
import Loader from "@/Component/loader";
const BusinessIndex = lazy(() => import("@/Component/business"));

const index = () => {
  return (
    <>
      <Seo title={""} pagedescription={""} keywords={""} />
      <Suspense fallback={<Loader />}>
        <BusinessIndex />
      </Suspense>
    </>
  );
};

export default index;

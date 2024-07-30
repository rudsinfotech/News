import React, { Suspense, lazy } from "react";
import Seo from "@/Component/Seo";
import Loader from "@/Component/loader";
const EntertainmentIndex = lazy(() => import("@/Component/entertainment"));

const index = () => {
  return (
    <>
      <Seo title={""} pagedescription={""} keywords={""} />
      <Suspense fallback={<Loader />}>
        <EntertainmentIndex />
      </Suspense>
    </>
  );
};

export default index;

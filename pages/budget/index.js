import React, { Suspense, lazy } from "react";
import Seo from "@/Component/Seo";
import Loader from "@/Component/loader";
const BudgetIndex = lazy(() => import("@/Component/budget"));

const index = () => {
  return (
    <>
      <Seo title={""} pagedescription={""} keywords={""} />
      <Suspense fallback={<Loader />}>
        <BudgetIndex />
      </Suspense>
    </>
  );
};

export default index;

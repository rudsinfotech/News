import React, { Suspense, lazy } from "react";
import Seo from "@/Component/Seo";
import Loader from "@/Component/loader";
const BusinessIndex = lazy(() => import("@/Component/business"));

const index = () => {
  return (
    <>
      <Seo
        title={
          "Business News, Latest Business News Today, Live News updates from Business"
        }
        pagedescription={
          "Business - Get latest news on Business. Read Breaking News on Business updated and published at બિઝનેસ "
        }
        keywords={
          "Business, News on Business, stories on Business, articles on Business, Business stories at બિઝનેસ, Business news, Business latest news"
        }
      />
      <Suspense fallback={<Loader />}>
        <BusinessIndex />
      </Suspense>
    </>
  );
};

export default index;

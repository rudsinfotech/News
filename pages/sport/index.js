import React, { Suspense, lazy } from "react";
import Seo from "@/Component/Seo";
import Loader from "@/Component/loader";
const SportIndex = lazy(() => import("@/Component/sport"));

const index = () => {
  return (
    <>
      <Seo title={"Sports News, Latest Sports News Today, Live News updates from Sports"} pagedescription={"Sports - Get latest news on Sports. Read Breaking News on Sports updated and published at સ્પોર્ટ્સ "} keywords={"Sports, News on Sports, stories on Sports, articles on Sports, Sports stories at સ્પોર્ટ્સ, Sports news, Sports latest news"} />
      <Suspense fallback={<Loader />}>
        <SportIndex />
      </Suspense>
    </>
  );
};

export default index;

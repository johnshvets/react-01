import React, { Suspense } from "react";
const { default: Loader } = require("../components/common/Loader");

export const withSuspense = (Component) => {
  return (props) => {
    return (
      <Suspense fallback={<Loader />}>
        <Component {...props} />
      </Suspense>
    );
  };
};

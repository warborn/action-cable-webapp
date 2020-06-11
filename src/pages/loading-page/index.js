import React from "react";
import Spinner from "~components/spinner";

import "./style.css";

const LoadingPage = () => {
  return (
    <div className="loading-page">
      <Spinner loading />
    </div>
  );
};

export default LoadingPage;

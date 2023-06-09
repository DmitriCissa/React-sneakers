import React from "react";
import ContentLoader from "react-content-loader";

const Skeleton = (props) => (
  <ContentLoader
    speed={2}
    width={210}
    height={260}
    viewBox="0 0 210 260"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="10" y="10" rx="10" ry="10" width="200" height="90" />
    <rect x="10" y="110" rx="3" ry="3" width="200" height="15" />
    <rect x="10" y="130" rx="3" ry="3" width="130" height="15" />
    <rect x="10" y="170" rx="8" ry="8" width="80" height="24" />
    <rect x="170" y="163" rx="8" ry="8" width="32" height="32" />
  </ContentLoader>
);

export default Skeleton;

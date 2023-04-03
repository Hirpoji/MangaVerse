import { FC } from "react";
import ContentLoader from "react-content-loader"


const Skeleton: FC  = () => (
  <ContentLoader 
    speed={2}
    width={200}
    height={436}
    viewBox="0 0 200 436"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb" 
  >
    <rect x="0" y="0" rx="0" ry="0" width="200" height="316" /> 
    <rect x="0" y="365" rx="0" ry="0" width="200" height="20" /> 
    <rect x="0" y="416" rx="0" ry="0" width="52" height="24" /> 
    <rect x="0" y="335" rx="0" ry="0" width="200" height="24" /> 
    <rect x="180" y="416" rx="0" ry="0" width="20" height="24" />
  </ContentLoader>
)

export default Skeleton
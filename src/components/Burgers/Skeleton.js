import ContentLoader from "react-content-loader"

const Skeleton = (props) => (
  <ContentLoader 
    speed={2}
    width={280}
    height={420}
    viewBox="0 0 280 420"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="0" y="26" rx="100" ry="100" width="240" height="220" /> 
    <rect x="0" y="260" rx="10" ry="10" width="240" height="24" /> 
    <rect x="0" y="299" rx="10" ry="10" width="240" height="76" /> 
    <rect x="0" y="384" rx="10" ry="10" width="110" height="30" /> 
    <rect x="129" y="384" rx="10" ry="10" width="110" height="30" />
  </ContentLoader>
)

export default Skeleton
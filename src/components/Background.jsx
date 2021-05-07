import Daily from "./Daily";
import Slider from './Slider'
 
const Background = ({ active, data }) => {
  return (
    <>
      <div className="background">
        {(active === "daily") && <><Daily/><Slider objects = {data}/></>}
        {/* <Hourly/> */}
        {/* <Weekly/> */}
      </div>
    </>
  );
};
export default Background;
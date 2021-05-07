import Daily from "./Daily";
import Slider from './Slider'
 
const Background = ({ active, data }) => {
  return (
    <>
      <div className="background">
        {(active === "Daily") && <><Daily/><Slider objects = {data}/></>}
        {/* {(active === "Hourly") && <><Hourly/><Slider objects = {data}/>} */}
        {/* {(active === "Weekly") && <><Weekly/><Slider objects = {data}/>} */}
      </div>
    </>
  );
};
export default Background;
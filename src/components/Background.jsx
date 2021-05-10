import Daily from "./Daily";
import Hourly from './Hourly'
import Weekly from './Weekly'
import Slider from './Slider'
 
const Background = ({ active, data }) => {
  return (
    <>
      <div className="background">
        {(active === "Daily") && <><Daily/><Slider objects = {data.daily}/></>}
        {(active === "Hourly") && <><Hourly/><Slider objects = {data.hourly}/></>}
        {(active === "Weekly") && <><Weekly/><Slider objects = {data.weekly}/></>}
      </div>
    </>
  );
};
export default Background;
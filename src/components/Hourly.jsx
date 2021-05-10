import Slider from './Slider'

const Hourly = ({ data }) => {
  return (
    <>
      <div className="container d-flex justify-content-center">
        <div className="weather-card">
          <div className="row d-flex justify-content-between">
            <div
              className="col-12"
              style={{
                fontSize: "25px",
                fontWeight: "bold",
                paddingTop: "10px",
                paddingLeft: "30px",
                display: "inline",
              }}
            >
              Arlington, AZ Weather
            </div>
            <div className="row">
              <div
                className="col-12"
                style={{
                  color: "black",
                  fontSize: "20px",
                  fontWeight: "bold",
                  paddingLeft: "30px",
                  display: "inline",
                }}
              >
                As of 9:36 am MST
              </div>
            </div>
            <div className="row d-flex align-items-start">
              <div
                className="col-12 align-items-start"
                style={{
                  fontSize: "70px",
                  fontWeight: "bold",
                  paddingLeft: "30px",
                  display: "inline",
                }}
              >
                82°
              </div>
            </div>
            <div className="row">
              <div
                className="col-6"
                style={{
                  fontSize: "25px",
                  fontWeight: "bold",
                  paddingLeft: "30px",
                  display: "inline",
                }}
              >
                Sunny
              </div>
            </div>
          </div>
          {/* <img
            style={{ height: "180px" }}
            className="img-fluid"
            src={Sun}
            alt=""
          /> */}
        </div>
      </div>
    </>
  );
};
export default Hourly

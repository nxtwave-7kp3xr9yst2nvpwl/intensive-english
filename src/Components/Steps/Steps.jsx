import "./Steps.css";
import Stepone from "./EachStep/Stepone";
import StepTwo from "./EachStep/StepTwo";
import StepThree from "./EachStep/StepThree";

export default function Steps() {
  return (
    <div className="st_par" id="about-intensive">
      <div className="st_stck_pa">
        <div className="st_stck">
          <h2 className="st_h">Get Ready for Your IT Career in 3 Steps</h2>
        </div>
      </div>
      <div className="st_o">
        <Stepone />
        <StepTwo />
        <StepThree />
        <div className="cu_lin"></div>
      </div>
    </div>
  );
}

import Image from "next/image";
import SliderInSteps from "../SliderInSteps/SliderInSteps";

const addOnData = [
  {
    add_ons: "Aptitude Training",
    img_link:
      "https://d14qv6cm1t62pm.cloudfront.net/ccbp-website/nxtwave-intensive-2.0/Aptitude.png",
  },
  {
    add_ons: "Soft Skills Training",
    img_link:
      "https://d14qv6cm1t62pm.cloudfront.net/ccbp-website/nxtwave-intensive-2.0/soft-skills-coaching.png",
  },
  {
    add_ons: "Resume Preparation",
    img_link:
      "https://d14qv6cm1t62pm.cloudfront.net/ccbp-website/nxtwave-intensive-2.0/resume-preparation.png",
  },
  {
    add_ons: "AI-Powered Mock Interviews",
    img_link:
      "https://d14qv6cm1t62pm.cloudfront.net/ccbp-website/intensive/3.0-upgrades-mock-interviews.png",
  },
  {
    add_ons: "Mock Interviews by Tech and HR Panels",
    img_link:
      "https://d14qv6cm1t62pm.cloudfront.net/ccbp-website/nxtwave-intensive-2.0/mock-interviews.png",
  },
  {
    add_ons: "Scheduling Interviews",
    img_link:
      "https://d14qv6cm1t62pm.cloudfront.net/ccbp-website/nxtwave-intensive-2.0/scheduling.png",
  },
  {
    add_ons: "Access to 300+ Senior Interview Experiences",
    img_link:
      "https://d14qv6cm1t62pm.cloudfront.net/ccbp-website/nxtwave-intensive-2.0/access-interview-experiences.png",
  },
  {
    add_ons: "Access to Placement Portal",
    img_link:
      "https://d14qv6cm1t62pm.cloudfront.net/ccbp-website/nxtwave-intensive-2.0/access-placement-corner.png",
  },
  {
    add_ons: "Mega Offline Placement Drives",
    img_link:
      "https://d14qv6cm1t62pm.cloudfront.net/ccbp-website/intensive/3.0-upgrades-offline-drives.png",
  },
  {
    add_ons: "Negotiation with companies for higher salaries",
    img_link:
      "https://d14qv6cm1t62pm.cloudfront.net/ccbp-website/nxtwave-intensive-2.0/negotiation-with-companies.png",
  },
];

export default function StepThree() {
  return (
    <div className="st_eac st_eac_l_e">
      <div className="steps_t_3">Placement Assistance for Your Job</div>
      <div className="st_inf_txt">Up to 16 Months from the date of joining</div>
      <div className="st_inf_t_v">Free Add-ons:</div>
      <div className="st_ad_o_p">
        {addOnData.map((el, index) => (
          <div key={`st-${index}`} className="st_ad_pa">
            <Image
              src={el.img_link}
              alt=""
              height={40}
              width={40}
              loading="lazy"
              className="st_ad_im"
            />
            <div className="st_ad_o_txt">{el.add_ons}</div>
          </div>
        ))}
      </div>
      <div className="st_sl_3con">
        <SliderInSteps>
          <div className="keen-slider__slide ">
            <Image
              src="https://d14qv6cm1t62pm.cloudfront.net/ccbp-website/nxtwave-intensive-2.0/placement-dashboard.png"
              alt=""
              loading="lazy"
              height={642}
              width={860}
              className="st_3_s_im"
            />
          </div>
          <div className="keen-slider__slide ">
            <Image
              src="https://d14qv6cm1t62pm.cloudfront.net/ccbp-website/nxtwave-intensive-2.0/mock-interview.png"
              alt=""
              loading="lazy"
              height={595}
              width={846}
              className="st_3_s_im"
            />
          </div>
        </SliderInSteps>
      </div>
    </div>
  );
}

import Image from "next/image";
import SliderInSteps from "../SliderInSteps/SliderInSteps";
export default function Stepone() {
  return (
    <div className="st_eac">
      <div className="steps_t_1">Fundamentals</div>
      <div className="st_t_im_c">
        <Image
          src="https://d14qv6cm1t62pm.cloudfront.net/ccbp-website/nxtwave-intensive-2.0/clock.svg"
          alt=""
          loading="lazy"
          height={18}
          width={18}
        />
        <div className="dur_txt">
          Duration : <span className="st_d_m">2 Months</span>
        </div>
      </div>
      <div className="st_t_im_c">
        <Image
          src="https://d14qv6cm1t62pm.cloudfront.net/ccbp-website/nxtwave-intensive-2.0/laptop-icon.svg"
          alt=""
          loading="lazy"
          height={18}
          width={18}
        />
        <div className="st_inf_txt">
          3 Hours Classes and 3 Hours Labs per day
        </div>
      </div>
      <div className="st_t_im_c">
        <Image
          src="https://d14qv6cm1t62pm.cloudfront.net/ccbp-website/nxtwave-intensive-2.0/book.svg"
          alt=""
          loading="lazy"
          height={18}
          width={18}
        />
        <div className="st_inf_txt">Courses Include</div>
      </div>
      <div className="st_ln_co">
        <div className="st_eac_l">
          <Image
            className="st_eac_l_im"
            src="https://d14qv6cm1t62pm.cloudfront.net/ccbp-website/nxtwave-intensive-2.0/html.png"
            alt=""
            loading="lazy"
            height={64}
            width={64}
          />
          <div className="st_ln_tx">HTML</div>
        </div>
        <div className="st_eac_l">
          <Image
            className="st_eac_l_im"
            src="https://d14qv6cm1t62pm.cloudfront.net/ccbp-website/nxtwave-intensive-2.0/css.png"
            alt=""
            loading="lazy"
            height={64}
            width={64}
          />
          <div className="st_ln_tx">CSS</div>
        </div>
        <div className="st_eac_l">
          <Image
            className="st_eac_l_im"
            src="https://d14qv6cm1t62pm.cloudfront.net/ccbp-website/nxtwave-intensive-2.0/python.png"
            alt=""
            loading="lazy"
            height={57}
            width={56}
          />
          <div className="st_ln_tx">Python</div>
        </div>
        <div className="st_eac_l">
          <Image
            className="st_eac_l_im"
            src="https://d14qv6cm1t62pm.cloudfront.net/ccbp-website/nxtwave-intensive-2.0/sql.png"
            alt=""
            loading="lazy"
            height={57}
            width={56}
          />
          <div className="st_ln_tx">SQL</div>
        </div>
      </div>
      <div className="st_t_im_c">
        <Image
          src="https://d14qv6cm1t62pm.cloudfront.net/ccbp-website/nxtwave-intensive-2.0/clipboard-icon.svg"
          alt=""
          loading="lazy"
          height={18}
          width={18}
        />
        <div className="st_inf_txt">Fundamentals Exam</div>
      </div>

      <div className="st_sl_1con">
        <SliderInSteps>
          <div className="keen-slider__slide ">
            <Image
              src="https://d14qv6cm1t62pm.cloudfront.net/ccbp-website/nxtwave-intensive-2.0/food-munch-project-status.png"
              alt=""
              loading="lazy"
              height={642}
              width={860}
              className="st_1_s_im"
            />
          </div>
          <div className="keen-slider__slide ">
            <Image
              src="https://d14qv6cm1t62pm.cloudfront.net/ccbp-website/nxtwave-intensive-2.0/website-chat-project-status.png"
              alt=""
              loading="lazy"
              height={595}
              width={846}
              className="st_1_s_im"
            />
          </div>
          <div className="keen-slider__slide ">
            <Image
              src="https://d14qv6cm1t62pm.cloudfront.net/ccbp-website/intensive/slider-fundamenatils-image.png"
              alt=""
              loading="lazy"
              height={758}
              width={798}
              className="st_1_s_im"
            />
          </div>
        </SliderInSteps>
      </div>
    </div>
  );
}

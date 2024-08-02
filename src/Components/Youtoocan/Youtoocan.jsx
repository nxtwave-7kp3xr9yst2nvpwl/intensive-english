import "./Youtoocan.css";

export default function Youtoocan() {
  const all = [
    {
      Name: "Deepak Kumar",
      Branch: "Chemical Engineering (CHE)",
      College_Name: "SASTRA Deemed University",
      Year_of_graduation: "2021 Graduate",
      Learner_Image:
        "https://d14qv6cm1t62pm.cloudfront.net/ccbp-website/Reviews/profile-images/deepak-kumar.png",
      Designation: "Assistant manager in SDE",
      Company_Image:
        "https://d14qv6cm1t62pm.cloudfront.net/ccbp-website/Reviews/company-logos/reliance-jio.png",
      Testimonial_Content:
        "NxtWave's CCBP 4.0 gave me strong fundamentals and a bright future in the field of IT.",
    },
    {
      Name: "Jaya Prathyusha",
      Branch: "Computer Science Engineering (CSE)",
      College_Name: "Vellore Institute of Technology",
      Year_of_graduation: "",
      Learner_Image:
        "https://d14qv6cm1t62pm.cloudfront.net/ccbp-website/Reviews/profile-images/jaya-prathyusha.png",
      Designation: "Senior Tech Associate",
      Company_Image:
        "https://d14qv6cm1t62pm.cloudfront.net/ccbp-website/Reviews/company-logos/bank-of-america.png",
      Testimonial_Content:
        "CCBP 4.0 will be my first choice to learn any new skill in the future.",
    },
    {
      Name: "Sai Deepak",
      Branch: "Electrical & Electronics Engineering (EEE)",
      College_Name: "BVC College of Engineering",
      Year_of_graduation: "2016 Graduate",
      Learner_Image:
        "https://d14qv6cm1t62pm.cloudfront.net/ccbp-website/Reviews/profile-images/sai-deepak.png",
      Designation: "Analyst",
      Company_Image:
        "https://d14qv6cm1t62pm.cloudfront.net/ccbp-website/reviews/company-logos/deloitte-v4.png",
      Testimonial_Content:
        "I got tremendous placement support which never left my hand until I got placed.",
    },
    {
      Name: "Sravan Tangudu",
      Branch: "Mechanical Engineering (ME)",
      College_Name: "Raghu Institute of Technology",
      Year_of_graduation: "2020 Graduate",
      Learner_Image:
        "https://d14qv6cm1t62pm.cloudfront.net/ccbp-website/Reviews/profile-images/sravan-tangudu.png",
      Designation: "Associate Software Engineer",
      Company_Image:
        "https://d14qv6cm1t62pm.cloudfront.net/ccbp-website/reviews/company-logos/bosch.png",
      Testimonial_Content:
        "CCBP 4.0 trained me with all the required skills to get a software job.",
    },
    {
      Name: "Naga Sai Yeswanth",
      Branch: "Electrical & Electronics Engineering (EEE)",
      College_Name: "VKR, VNB and AGK College of Engineering, Gudivada",
      Year_of_graduation: "2020 Graduate",
      Learner_Image:
        "https://d14qv6cm1t62pm.cloudfront.net/ccbp-website/Reviews/profile-images/naga-sai-yeswanth.png",
      Designation: "Associate Software Engineer",
      Company_Image:
        "https://d14qv6cm1t62pm.cloudfront.net/ccbp-website/Reviews/company-logos/tcs.png",
      Testimonial_Content:
        "CCBP 4.0 provides a well-structured curriculum and a clear learning path.",
    },
    {
      Name: "Renuka",
      Branch: "Electronics & Communication Engineering (ECE)",
      College_Name:
        "Sir C.V.Raman Institute of Management Studies, Ananthapuramu",
      Year_of_graduation: "2021 Graduate",
      Learner_Image:
        "https://d14qv6cm1t62pm.cloudfront.net/ccbp-website/Reviews/profile-images/renuka.png",
      Designation: "Associate Software Engineer",
      Company_Image:
        "https://d14qv6cm1t62pm.cloudfront.net/ccbp-website/reviews/company-logos/bosch.png",
      Testimonial_Content:
        "The practical skills I gained in CCBP 4.0 helped me get placed in a giant MNC.",
    },
    {
      Name: "Sushma",
      Branch: "Mechanical Engineering (ME)",
      College_Name: "Gayatri Vidya Parishad College of Engineering",
      Year_of_graduation: "2020 Graduate",
      Learner_Image:
        "https://d14qv6cm1t62pm.cloudfront.net/ccbp-website/Reviews/profile-images/sushma.png",
      Designation: "Application Development Associate",
      Company_Image:
        "https://d14qv6cm1t62pm.cloudfront.net/ccbp-website/reviews/company-logos/accenture.png",
      Testimonial_Content:
        "Project-based learning made me get practical knowledge though I started from zero.",
    },
    {
      Name: "Vikram",
      Branch: "Chemical Engineering (CHE)",
      College_Name: "Rajiv Gandhi University of Knowledge Technologies",
      Year_of_graduation: "2021 Graduate",
      Learner_Image:
        "https://d14qv6cm1t62pm.cloudfront.net/ccbp-website/Reviews/profile-images/vikram.png",
      Designation: "Software Development Engnieer - I",
      Company_Image:
        "https://d14qv6cm1t62pm.cloudfront.net/ccbp-website/Reviews/company-logos/reliance-jio.png",
      Testimonial_Content:
        "I understood all the concepts easily as the sessions were in my mother tongue.",
    },
    {
      Name: "Sivaram",
      Branch: "Mechanical Engineering (ME)",
      College_Name: "Sathyabama Institute of Science and Technology",
      Year_of_graduation: "2020 Graduate",
      Learner_Image:
        "https://d14qv6cm1t62pm.cloudfront.net/ccbp-website/Reviews/profile-images/sivaram.png",
      Designation: "Associate Software Engineer",
      Company_Image:
        "https://d14qv6cm1t62pm.cloudfront.net/ccbp-website/reviews/company-logos/bosch.png",
      Testimonial_Content:
        "Though I started with CCBP 4.0 as a newbie, I got placed in a renowned product-based company.",
    },
  ];

  const RenderReviews = ({ dict }) => {
    return (
      <>
        {all.map((el, index) => (
          <div key={`re${index}`} className="revi_card">
            <div className="user_det_par">
              <div className="user_det">
                <div className="name_field">{el.Name}</div>
                <div className="user_branch">{el.Branch}</div>
                <div className="user_college">{el.College_Name}</div>
                <div className="grad_year">{el.Year_of_graduation}</div>
              </div>
              <img src={el.Learner_Image} alt="" className="user_img" />
            </div>
            <div className="user_com">
              <div loading="lazy" className="blue_arrow" />
              <div className="role">{el.Designation}</div>
              <div className="com_img">
                <img src={el.Company_Image} alt="" />
              </div>
              <div className="hl_txt">{el.Testimonial_Content}</div>
            </div>
          </div>
        ))}
      </>
    );
  };

  return (
    <section className="section" id="testimonials">
      <div className="div_block_7">
        <div className="text_block_2">They did it</div>
        <div className="text_block_2">YOU TOO CAN!</div>
        <div className="marq_con">
          <div className="marquee_rev_con">
            <RenderReviews dict={all} />
            <RenderReviews dict={all} />
          </div>
        </div>
      </div>
    </section>
  );
}

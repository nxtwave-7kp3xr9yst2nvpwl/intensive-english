import "./CompaniesHired.css";

export default function CompaniesHired() {
  return (
    <div className="chnl">
      <h2 className="chnl_h">NxtWave students have secured placements here.</h2>
      <div className="chnl_im_co">
        <div className="marquee">
          <div className="marquee__group">
            <img
              className="companies-img"
              src="https://d14qv6cm1t62pm.cloudfront.net/ccbp-website/nxtwave-intensive-2.0/company-scroll-strip-img-1.png"
            />
          </div>

          <div aria-hidden="true" className="marquee__group">
            <img
              className="companies-img"
              src="https://d14qv6cm1t62pm.cloudfront.net/ccbp-website/nxtwave-intensive-2.0/company-scroll-strip-img-1.png"
            />
          </div>
        </div>
        <div className="marquee">
          <div className="marquee__group">
            <img
              className="companies-img"
              src="https://d14qv6cm1t62pm.cloudfront.net/ccbp-website/nxtwave-intensive-2.0/company-scroll-strip-img-2.png"
            />
          </div>
          <div aria-hidden="true" className="marquee__group">
            <img
              className="companies-img"
              src="https://d14qv6cm1t62pm.cloudfront.net/ccbp-website/nxtwave-intensive-2.0/company-scroll-strip-img-2.png"
            />
          </div>
        </div>
        <div className="marquee">
          <div className="marquee__group">
            <img
              className="companies-img"
              src="https://d14qv6cm1t62pm.cloudfront.net/ccbp-website/nxtwave-intensive-2.0/company-scroll-strip-img-3.png"
            />
          </div>

          <div aria-hidden="true" className="marquee__group">
            <img
              className="companies-img"
              src="https://d14qv6cm1t62pm.cloudfront.net/ccbp-website/nxtwave-intensive-2.0/company-scroll-strip-img-3.png"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

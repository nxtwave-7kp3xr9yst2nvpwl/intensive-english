import "./Footer.css";
import Link from "next/link";
export default function Footer() {
  return (
    <footer className="footer">
      <div className="div_block_183198052z">
        <Link
          id="nxtwave-logo-footer"
          referrerPolicy="no-referrer-when-downgrade"
          href="https://www.ccbp.in"
          className="w_inline_block"
          style={{ marginBottom: "auto" }}
        >
          <img
            width={117}
            height={66}
            alt="Nxtwave"
            src="https://d14qv6cm1t62pm.cloudfront.net/ccbp-website/Nxtwave_White_logo.svg"
            loading="lazy"
            className="image_8128822196"
          />
        </Link>
        <nav className="navigation">
          <Link
            id="privacy-policy-footer"
            referrerPolicy="no-referrer-when-downgrade"
            href="https://www.ccbp.in/privacy-policy"
            className="link"
          >
            Privacy Policy
          </Link>
          <Link
            id="cookie-policy-footer"
            referrerPolicy="no-referrer-when-downgrade"
            href="https://www.ccbp.in/cookie-policy"
            className="link"
          >
            Cookie Policy
          </Link>
          <Link
            id="terms-and-conditions-footer"
            referrerPolicy="no-referrer-when-downgrade"
            href="https://www.ccbp.in/terms-and-conditions"
            className="link"
          >
            Terms and Conditions
          </Link>
          <Link
            id="grievance-redressal-footer"
            referrerPolicy="no-referrer-when-downgrade"
            href="https://www.ccbp.in/grievance-redressal"
            className="link"
          >
            Grievance Redressal
          </Link>
          <Link
            id="corporate-information-footer"
            referrerPolicy="no-referrer-when-downgrade"
            href="https://www.ccbp.in/corporate-information"
            className="link"
          >
            Corporate Information
          </Link>
        </nav>
      </div>
    </footer>
  );
}

import Link from "next/link";
import "./Navbar.css";
import Image from "next/image";

export default function Navbar() {
  return (
    <section>
      <header className="div_block">
        <Image
          src="https://d14qv6cm1t62pm.cloudfront.net/ccbp-website/intensive/nxtwave-intensive.png"
          alt="INTENSIVE"
          width={203}
          height={53}
          className="logo"
        />
        <nav role="navigation" className="nav_items">
          <Link
            referrerPolicy="no-referrer-when-downgrade"
            id="testimonials-navbar"
            href="#testimonials"
          >
            Testimonials
          </Link>
          <Link
            referrerPolicy="no-referrer-when-downgrade"
            id="nxtwave-vs-others-navbar"
            href="#nxtwave-vs-others"
          >
            NxtWave Vs Others
          </Link>
        </nav>
      </header>
    </section>
  );
}

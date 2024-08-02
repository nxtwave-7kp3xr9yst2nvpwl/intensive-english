import Link from "next/link";
import "./Navbar.css";
import Image from "next/image";

export default function Navbar() {
  return (
    <section>
      <header className="div_block">
        <Link
          referrerPolicy="no-referrer-when-downgrade"
          href="https://www.ccbp.in/intensive"
          className="link_block"
          id="intensive-logo-navbar"
        >
          <Image
            src="https://d14qv6cm1t62pm.cloudfront.net/ccbp-website/intensive/nxtwave-intensive.png"
            alt="INTENSIVE"
            width={203}
            height={53}
            className="logo"
          />
        </Link>
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
            id="why-join-intensive-navbar"
            href="#why-join-intensive"
          >
            Why Join Intensive?
          </Link>
          <Link
            referrerPolicy="no-referrer-when-downgrade"
            id="about-intensive-navbar"
            href="#about-intensive"
          >
            About Intensive
          </Link>
        </nav>
      </header>
    </section>
  );
}

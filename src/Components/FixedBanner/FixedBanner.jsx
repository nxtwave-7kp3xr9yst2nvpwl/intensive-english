import "./FixedBanner.css";
import Timer from "../Timer/Timer";
import Link from "next/link";

export default function FixedBanner() {
  return (
    <section className="section_4">
      <div className="div_block_183198ad">
        <Timer />
        <Link
          referrerPolicy="no-referrer-when-downgrade"
          id="book-a-free-live-section-sticky"
          href="#book-my-session"
          className="book_a_free_live_session"
        >
          Book a Free Live Session
        </Link>
      </div>
    </section>
  );
}

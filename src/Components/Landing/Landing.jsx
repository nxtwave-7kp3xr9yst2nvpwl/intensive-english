"use client";
import "./Landing.css";
import Image from "next/image";
import Script from "next/script";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { useState, useEffect, useRef } from "react";
import FixedBanner from "../FixedBanner/FixedBanner";
import Timer from "../Timer/Timer";

function animate() {
  const [sliderRef] = useKeenSlider(
    {
      loop: true,
      slides: {
        origin: "center",
        perView: 1,
      },
      vertical: true,
    },
    [
      (slider) => {
        let timeout;
        let mouseOver = false;
        function clearNextTimeout() {
          clearTimeout(timeout);
        }
        function nextTimeout() {
          clearTimeout(timeout);
          if (mouseOver) return;
          timeout = setTimeout(() => {
            slider.next();
          }, 1000);
        }
        slider.on("created", () => {
          nextTimeout();
        });
        slider.on("dragStarted", clearNextTimeout);
        slider.on("animationEnded", nextTimeout);
        slider.on("updated", nextTimeout);
      },
    ]
  );

  return (
    <span ref={sliderRef} className="keen-slider programs_animate">
      <span className="keen-slider__slide">Full Stack Developer Job</span>
      <span className="keen-slider__slide">Data Analyst Job</span>
      <span className="keen-slider__slide">QA Engineer Job</span>
      <span className="keen-slider__slide">Software Engineer Job</span>
    </span>
  );
}

function useInView(ref) {
  const [displayStatus, setDisplayStatus] = useState("none");

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setDisplayStatus(entry.isIntersecting ? "none" : "block");
      },
      { threshold: 0.01 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [ref]);

  return displayStatus;
}

export default function Landing() {
  const refA = useRef();
  const isInViewA = useInView(refA);
  return (
    <>
      <section
        ref={refA}
        style={{
          overflow: "hidden",
        }}
      >
        <div className="div_block_2">
          <div className="div_block_3">
            <h1 className="heading">
              A Proven Program To
              <br /> Get You a{animate()}
            </h1>
            <picture>
              <source
                media="(max-width:479px)"
                loading="lazy"
                srcSet="https://d14qv6cm1t62pm.cloudfront.net/ccbp-website/intensive/underline_job_mobile.png"
              />
              <img
                loading="lazy"
                src="https://d14qv6cm1t62pm.cloudfront.net/ccbp-website/intensive/underline_job_desktop.png"
                style={{ width: "auto" }}
              />
            </picture>
            <div className="ul_par">
              <div className="item">
                <div className="list_icon" />
                <div className="list_text">
                  <span>Trainers</span> are from Amazon and Microsoft
                </div>
              </div>
              <div className="item">
                <div className="list_icon" />
                <div className="list_text">
                  Placement opportunities from a pool of{" "}
                  <span>3000+ companies</span>
                </div>
              </div>
              <div className="item">
                <div className="list_icon" />
                <div className="list_text">
                  <span>10+ Real-time projects</span> that make your resume
                  strong
                </div>
              </div>
            </div>
          </div>
          <div className="div_block_4" id="book-my-session">
            <div className="form_bg_hc_bd">
              <div className="form_bg_hc"> </div>
            </div>
            <div className="div_block_5">
              <div className="div_block_6">
                <div className="text_block">Book a Free Live Session</div>
                <Image
                  src="https://d14qv6cm1t62pm.cloudfront.net/ccbp-website/intensive/demo-form-icon.png"
                  loading="lazy"
                  width={92}
                  height={88}
                  alt="Free-Session"
                  className="image"
                />
              </div>
              <div id="book-a-free-session"></div>
              <Timer />
              <Script
                type="text/javascript"
                src="https://forms-gamma.earlywave.in/webflow/runtime.a3ec8ffa40e84bb7.js"
              />
              <Script
                type="text/javascript"
                src="https://forms-gamma.earlywave.in/webflow/polyfills.91f7ee9963db35b2.js"
              />
              <Script
                type="text/javascript"
                src="https://forms-gamma.earlywave.in/webflow/bookAFreeSession.31d1e1afb5f40b72.js"
              />
            </div>
          </div>
        </div>
      </section>
      <div className="fixed_s" style={{ display: `${isInViewA}` }}>
        <FixedBanner />
      </div>
    </>
  );
}

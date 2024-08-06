import Landing from "../Components/Landing/Landing"
import Navbar from "../Components/Navbar/Navbar"
import Youtoocan from "../Components/Youtoocan/Youtoocan"
import Steps from "../Components/Steps/Steps";
import CompaniesHired from "../Components/CompaniesHired/CompaniesHired";
import WhyIntensive from "../Components/WhyIntensive/WhyIntensive";
import Awards from "../Components/Awards/Awards";
import Brands from "../Components/Brands/Brands";
import Footer from "../Components/Footer/Footer";
import type { Metadata } from 'next'
import type { Viewport } from 'next'

export const viewport: Viewport = {
  themeColor:"#ffffff",
  width: 'device-width',
  initialScale: 1.0,
  maximumScale: 1,
  userScalable: false,
  interactiveWidget: 'resizes-content'
}

export const metadata: Metadata = {
  title: 'Intensive | A Proven Program To Get You a Software Developer',
  description: 'Intensive offers multiple job tracks such as Java and MERN Full Stack, Data Analytics, and QA/Automation Testing, Start your IT career in a powerful way.',
  openGraph:{
    type:"website",
    locale:"en_US",
    url:"domain",
      images :"https://nxtwave-website-media-files.s3.ap-south-1.amazonaws.com/ccbp-website/intensive/intensive-og.png",
  }
}

export default function Home() {
  return (
    <div> 
      <Navbar/>
      <Landing/>
      <Youtoocan/>
      <CompaniesHired/>
      <WhyIntensive/>
      <Steps/>
      <Awards/>
      <Brands/>
      <Footer/>
    </div>
  );
}

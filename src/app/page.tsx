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
  title: 'Intensive 3.0 | A Proven Program to Make You a Software Developer',
  description: 'Intensive 3.0 offers multiple job tracks such as Java and MERN Full Stack, Data Analytics, and QA/Automation Testing, Start your IT career in a powerful way.',
  openGraph:{
    type:"website",
    locale:"en_US",
    url:"domain",
      images :"https://d14qv6cm1t62pm.cloudfront.net/ccbp-website/intensive/intensive-og.png",
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

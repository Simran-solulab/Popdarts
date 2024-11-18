import { ExploreSection } from "@/components/sections/ExploreSection";
import FooterSection from "@/components/sections/FooterSection";
import HeaderSection from "@/components/sections/HeaderSection";
import Footer from "@/components/subComponents/Footer";
import Layout from "@/components/subComponents/Layout";
import Navbar from "@/components/subComponents/Navbar";


export default function Home() {
  return (
   <div className="" >
    <Navbar/>
    
    <HeaderSection/>
    <ExploreSection/>
    <FooterSection/>
    <Footer/>
   </div>
  );
}

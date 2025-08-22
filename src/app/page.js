import Image from "next/image";
import Services from "./Components/Services";
import Hero from "./Components/Hero";
import Footer from "./Components/Footer";

export default function Home() {
  return (
    <div className=" mx-auto">

           <Hero></Hero>
           <Services></Services>
          
    </div>
   
  );
}

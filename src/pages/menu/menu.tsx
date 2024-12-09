"use client"
import Hero from "../../components/HeroSection/Hero";
import MainCourse from "../../components/MainCourse/MainCours";    
import Experience from "../../components/Experience/Experience";   
import Dessert from "../../components/Dessert/Dessert";    
import Drink from "../../components/Drink/Drink";    
import PartnersAndClients from "@/components/PartnerClient/PartnerClient";
import StarterMenu from "@/components/Menu/StartMenu";


export default function Menu() {
  return (
    <div>
      <Hero />
      <StarterMenu/>
      <MainCourse />
      <Experience />
      <Dessert />
      <Drink />
      <PartnersAndClients/>
    </div>
  );
}

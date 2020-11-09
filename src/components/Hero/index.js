import React,{useState} from "react";
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";
import { HeroContainer, HeroContent,HeroItems,HeroH1,HeroP,HeroBtn } from './HeroElements'

const Hero = () => {

    //STATES
    //state related with the menu, open or closed
    const [isOpen,setIsOpen] = useState(false);

    //HANDLERS
    //handler related with the menu, open or close is called
    const handleToggle = ()=>{
        setIsOpen(!isOpen);
    }

  return (
    <HeroContainer>
      <Navbar toggle={handleToggle}/>
      <Sidebar isOpen={isOpen} toggle={handleToggle}/>
      <HeroContent>
          <HeroItems>
              <HeroH1>Greatest Pizza Ever</HeroH1>
              <HeroP>Ready in 60 seconds</HeroP>
              <HeroBtn>Place Order</HeroBtn>
          </HeroItems>
      </HeroContent>
    </HeroContainer>
  );
};

export default Hero;

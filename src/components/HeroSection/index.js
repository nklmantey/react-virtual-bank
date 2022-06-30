import React from 'react';
import Video from '../../videos/video.mp4';
import { 
    HeroContainer, 
    HeroBg, 
    VideoBg, 
    HeroContent, 
    HeroH1,
    HeroP,
} from './HeroElements';


const HeroSection = () => {
  return (
    <HeroContainer id="home">
        <HeroBg>
            <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
        </HeroBg>
        <HeroContent>
            <HeroH1> Virtual Banking Made Easy </HeroH1>
            <HeroP> Sign up for a new account today and recieve $250 in credit for your next payment </HeroP>
            {/* <HeroBtnWrapper>
                <Button to="/signup"> Get started </Button>
            </HeroBtnWrapper> */}
        </HeroContent>
    </HeroContainer>
  )
}

export default HeroSection
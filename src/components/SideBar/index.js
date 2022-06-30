import React from 'react';
import { 
    SideBarContainer, 
    CloseIcon, 
    Icon,
    SideBarWrapper,
    SideBarMenu,
    SideBarLink,
    SideBtnWrap,
    SideBtn
} from './SideBarElements';

const SideBar = ({ isOpen, toggle }) => {
  return (
    <SideBarContainer isOpen={isOpen} onClick={toggle}>
        <Icon onClick={toggle}>
            <CloseIcon />
        </Icon>
        <SideBarWrapper>
            <SideBarMenu>
                <SideBarLink to="about" onClick={toggle}> About </SideBarLink>
                <SideBarLink to="discover" onClick={toggle}> Discover </SideBarLink>
                <SideBarLink to="services" onClick={toggle}> Services </SideBarLink>
                <SideBarLink to="signup" onClick={toggle}> Sign Up </SideBarLink>
            </SideBarMenu>
            <SideBtnWrap>
                <SideBtn to="/signin"> Sign In </SideBtn>
            </SideBtnWrap>
        </SideBarWrapper>
    </SideBarContainer>
  )
}

export default SideBar
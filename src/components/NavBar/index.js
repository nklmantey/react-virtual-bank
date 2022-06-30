import React from 'react';
import { FaBars } from 'react-icons/fa';

import { 
    Nav, 
    NavBarContainer, 
    NavBarLogo, 
    MobileIcon, 
    NavMenu, 
    NavMenuItem, 
    NavLink,
    NavBtn,
    NavBtnLink 
} from './NavBarElements';

const NavBar = ({ toggle }) => {
  return (
    <>
      <Nav>
          <NavBarContainer>
            <NavBarLogo to="/"> OriginBank </NavBarLogo>
            <MobileIcon onClick={toggle}>
                <FaBars />
            </MobileIcon>
            <NavMenu>
                <NavMenuItem>
                    <NavLink to="about"> About </NavLink>
                </NavMenuItem>
                <NavMenuItem>
                    <NavLink to="discover"> Discover </NavLink>
                </NavMenuItem>
                <NavMenuItem>
                    <NavLink to="services"> Services </NavLink>
                </NavMenuItem>
                <NavMenuItem>
                    <NavLink to="signup"> Sign Up </NavLink>
                </NavMenuItem>
            </NavMenu>
            <NavBtn>
              <NavBtnLink to="/signin"> Sign In </NavBtnLink>
            </NavBtn>
          </NavBarContainer>
      </Nav>
    </>
  )
}

export default NavBar
import React from 'react';
import styled from 'styled-components';

export const HeroContainer = styled.div`
 background: #0c0c0c;
 display: flex;
 justify-content: center;
 align-items: center;
 padding: 0 30px;
 top: 0;
 left: 0;
 right: 0;
 bottom: 0;
 height: 100%;
 position: absolute;
 z-index: 1;
`
export const HeroBg = styled.div`
 position: absolute;
 top: 0;
 right: 0;
 bottom: 0;
 left: 0;
 width: 100%;
 height: 100%;
 overflow: hidden;
`
export const VideoBg = styled.video`
 width: 100%;
 height: 100%;
 o-object-fit: cover;
 object-fit: cover;
 background: #23a234;
`

export const HeroSection = styled.div`
 flex: 1;
`

export const HeroContent = styled.div`
 display: flex;
`

export const HeroH1 = styled.h1`
 font-size: 2.5rem;
 color: #fff;
 font-weight: 700;
`

export const HeroP = styled.p`
 font-size: 2.5rem;
 color: #fff;
 font-weight: 700;
`

// export const HeroBtnWrapper = styled.div`
//  display: flex;
//  justify-content: center;
//  align-items: center;
// `


export const HeroBtnWrapper = styled.div`
 position: absolute;
 top: 1.2rem;
 right: 1.5rem;
 background: transparent;
 font-size: 2rem;
 cursor: pointer;
 outline: none;
`


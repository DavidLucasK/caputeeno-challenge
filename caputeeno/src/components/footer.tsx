"use client"

import { styled } from "styled-components"
import { GitHubIcon } from '@/components/icons/github-icon';

interface FooterProps {

}

const FooterContainer = styled.div`
    display: grid;
    justify-content: center;
    align-items: center;
    height: 100px;

    p {
        font-weight: 500;
        font-size: 16px;
    }
`

const SocialIcons = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;
    margin-top: 16px;

    a {
        cursor: pointer;
    }

    a:nth-child(2) {
        filter: invert();
        background-color: white;
    }

`

export function Footer(props: FooterProps){
   return(
       <FooterContainer>
        <SocialIcons>
            <a href="https://github.com/DavidLucasK/caputeeno-challenge">
                <GitHubIcon/>
            </a>
        </SocialIcons>
        <p>
            © 2023 Made by David Lucas.
        </p>
       </FooterContainer>
   )
}
// import styled from "styled-components";
import CardWrapper from "./components/card_wrapper";
import content from "./content/content";
import IntroCard from "./components/cards/intro";
import WorkExperienceCard from "./components/cards/work_experience";
import SideGigCard from "./components/cards/side_gigs";
import InterestsCard from "./components/cards/interests";
import AboutCard from "./components/cards/about";
import ContactCard from "./components/cards/contact";
import "@fontsource/inter";
import "./App.css";

import { useEffect } from "react";
// import siteBackgroundImage from "./images/site_background_image.png";

// const StyledContainer = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   padding-top: 172px;
//   padding-bottom: inherit;
//   background: #434343;
//   height: 1000vh;
//   background-image: ${(props) => `url(${props.siteBackgroundImage})`};
// `;

export default function App() {
  useEffect(() => {
    const cardWrappers = document.querySelectorAll(".card_wrapper");
    cardWrappers.forEach((cw) => {
      cw.classList.remove("card_wrapper_transition");
    });

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = 1;
          entry.target.style.transform = "translateX(-24px) translateY(-24px) scale(1)";
          // entry.target.classList.add("card_wrapper_transition");
          return;
        }
      });
    });

    document.querySelectorAll(".card_wrapper").forEach((cw) => {
      observer.observe(cw);
    });
  });

  return (
    <>
      {/* <StyledContainer siteBackgroundImage={siteBackgroundImage}> */}
      <CardWrapper legend={content.card_legends.intro}>
        <IntroCard intro={content.intro} contacts={content.contact} />
      </CardWrapper>
      <CardWrapper
        legend={content.card_legends.work_experience}
        marginTop={"36px"}
        gap={"24px"}
      >
        <WorkExperienceCard workExperience={content.work_experience} />
      </CardWrapper>
      <CardWrapper legend={content.card_legends.side_gigs} marginTop={"36px"}>
        <SideGigCard sideGigs={content.side_gigs} />
      </CardWrapper>
      <CardWrapper legend={content.card_legends.interests} marginTop={"36px"}>
        <InterestsCard interests={content.interests} />
      </CardWrapper>
      <CardWrapper legend={content.card_legends.about} marginTop={"36px"}>
        <AboutCard about={content.about} />
      </CardWrapper>
      <CardWrapper
        legend={content.card_legends.contact}
        marginTop={"36px"}
        background={"#121212"}
      >
        <ContactCard contacts={content.contact} />
      </CardWrapper>
      {/* </StyledContainer> */}
    </>
  );
}

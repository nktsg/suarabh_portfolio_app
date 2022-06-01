import styled from "styled-components";
import CardWrapper from "./components/card_wrapper";
import content from "./content/content";
import IntroCard from "./components/cards/intro";
import WorkExperienceCard from "./components/cards/work_experience";
import SideGigCard from "./components/cards/side_gigs";
import InterestsCard from "./components/cards/interests";
import AboutCard from "./components/cards/about";
import ContactCard from "./components/cards/contact";

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 172px;
  padding-bottom: inherit;
  background: #434343;
  height: 1000vh;
`;

export default function App() {
  return (
    <>
      <StyledContainer>
        <CardWrapper legend={content.card_legends.intro}>
          <IntroCard intro={content.intro} contacts={content.contact} />
        </CardWrapper>
        <CardWrapper
          legend={content.card_legends.work_experience}
          marginTop={"36px"}
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
      </StyledContainer>
    </>
  );
}

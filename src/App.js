import styled from "styled-components";
import StyledCardWrapper from "./components/card_wrapper";
import content from "./content/content";
import IntroCard from "./components/cards/intro";

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 172px;
  padding-bottom: inherit;
  background: #434343;
  height: 100vh;
`;

export default function App() {
  return (
    <>
      <StyledContainer>
        <StyledCardWrapper>
          <IntroCard intro={content.intro} contacts={content.contact} />
        </StyledCardWrapper>
      </StyledContainer>
    </>
  );
}

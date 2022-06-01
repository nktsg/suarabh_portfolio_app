import styled from "styled-components";

const AboutWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const AboutText = styled.p`
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 140%;
  letter-spacing: -0.03em;
  color: #121212;
`;

export default function AboutCard({ about }) {
  return (
    <>
      <AboutWrapper>
        <AboutText>{about}</AboutText>
      </AboutWrapper>
    </>
  );
}
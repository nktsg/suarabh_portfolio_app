import styled from "styled-components";

const InterestsWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
const InterestsText = styled.p`
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 140%;
  letter-spacing: -0.03em;
  color: #121212;
  word-wrap: break-word;
`;
export default function InterestsCard({ interests }) {
  return (
    <>
      <InterestsWrapper>
        <InterestsText>{interests.join(", ")}</InterestsText>
      </InterestsWrapper>
    </>
  );
}

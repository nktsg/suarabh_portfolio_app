import styled from "styled-components";
import Card from "./card";

const StyledCardWrapper = styled.div`
  border-radius: 24px;
  padding: 4px 4px 0px;
  background: rgba(255, 255, 255, 0.2);
  display: flex;
  flex-direction: column;
  width: 448px;
  height: 377px;
`;

const Legend = styled.p`
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 140%;
  letter-spacing: -0.02em;
  color: #ffffff;
  padding: 0 36px;
`;

export default function CardWrapper({ children }) {
  return (
    <>
      <StyledCardWrapper>
        <Card>{children}</Card>
        <Legend>TL:DR</Legend>
      </StyledCardWrapper>
    </>
  );
}

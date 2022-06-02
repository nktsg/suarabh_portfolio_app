import styled from "styled-components";
import Card from "./card";

const StyledCardWrapper = styled.div`
  border-radius: 24px;
  padding: 4px 4px 0px;
  background: ${(props) => props.background || "#ffffff33"};
  display: flex;
  flex-direction: column;
  width: 448px;
  margin-top: ${(props) => props.marginTop || "0px"};
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

export default function CardWrapper({
  legend,
  marginTop,
  background,
  children,
  gap,
}) {
  return (
    <>
      <StyledCardWrapper marginTop={marginTop} background={background}>
        <Card gap={gap}>{children}</Card>
        <Legend>{legend}</Legend>
      </StyledCardWrapper>
    </>
  );
}

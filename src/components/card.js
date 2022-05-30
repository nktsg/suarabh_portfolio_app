import styled from "styled-components";

const StyledCard = styled.div`
  border-radius: 20px;
  background-color: #ffffffe5;
  padding: 32px;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export default function Card({ children }) {
  return <StyledCard>{children}</StyledCard>;
}

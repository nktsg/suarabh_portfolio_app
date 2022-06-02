import styled from "styled-components";

export const ContactItem = styled.section`
  display: flex;
  justify-content: space-between;
  margin-top: ${(props) => props.marginTop || 0};
`;

export const ContactText = styled.p`
  font-family: inter;
  font-style: normal;
  font-size: 20px;
  line-height: 140%;
  color: black;
  margin: 0px 0px;
`;

export const ContactTitle = styled(ContactText)`
  font-weight: 600;
  letter-spacing: -0.02em;
`;

export const ContactAddress = styled(ContactText)`
  font-weight: 500;
  letter-spacing: -0.03em;
  opacity: 0.5;
`;

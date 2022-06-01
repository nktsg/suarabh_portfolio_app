import styled from "styled-components";
import { ContactItem } from "./contact_item";
import { ContactTitle } from "./contact_item";
import { ContactAddress } from "./contact_item";

const Intro = styled.p`
  color: black;
  font-family: inter;
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 140%;
  letter-spacing: -0.03em;
`;

export default function IntroCard({ intro, contacts }) {
  return (
    <>
      <Intro>{intro}</Intro>
      <ContactItem>
        <ContactTitle>{`${contacts[0].title} ↗️`}</ContactTitle>
        <ContactAddress>{contacts[0].address}</ContactAddress>
      </ContactItem>
      <ContactItem marginTop="-16px">
        <ContactTitle>{`${contacts[1].title} ↗️`}</ContactTitle>
        <ContactAddress>{contacts[1].address}</ContactAddress>
      </ContactItem>
    </>
  );
}

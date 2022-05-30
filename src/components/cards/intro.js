import styled from "styled-components"

const Intro = styled.p`
  color: black;
  font-family: inter;
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 140%;
  letter-spacing: -0.03em;
`;

const ContactItem = styled.section`
  display: flex;
  justify-content: space-between;
  margin-top: ${(props) => props.marginTop || 0};
`;

const ContactText = styled.p`
  font-family: inter;
  font-style: normal;
  font-size: 20px;
  line-height: 140%;
  color: black;
  margin: 0px 0px;
`;

const ContactTitle = styled(ContactText)`
  font-weight: 600;
  letter-spacing: -0.02em;
`;

const ContactAddress = styled(ContactText)`
  font-weight: 500;
  letter-spacing: -0.03em;
`;

export default function IntroCard({ intro, contacts}) {
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
    )
}
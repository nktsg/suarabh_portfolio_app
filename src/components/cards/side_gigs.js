import styled from "styled-components";

const SideGigWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

const SideGigImage = styled.img``;

const SideGigText = styled.p`
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 140%;
  letter-spacing: -0.03em;
  color: #121212;
`;

export default function SideGigCard({ sideGigs }) {
  return (
    <>
      {sideGigs.map((sideGig) => (
        <>
          <SideGigWrapper>
            <SideGigImage imageFileName={sideGigs.header_image} />
            <SideGigText>{sideGig.description}</SideGigText>
          </SideGigWrapper>
        </>
      ))}
    </>
  );
}

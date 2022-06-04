import styled from "styled-components";

const WorkExperienceWrapper = styled.section`
  display: flex;
  justify-content: space-between;
`;

const WorkExpText = styled.p`
  font-family: "Inter";
  font-style: normal;
  line-height: 140%;
  letter-spacing: -0.02em;
  color: #121212;
`;

const Organisation = styled(WorkExpText)`
  font-weight: 600;
  font-size: 20px;
  margin: 0px;
`;

const RoleAndCategory = styled(WorkExpText)`
  font-weight: 500;
  font-size: 14px;
  opacity: 0.5;
  margin: 0px;
`;

const Year = styled(WorkExpText)`
  font-weight: 500;
  font-size: 14px;
  opacity: 0.5;
  margin: 0px;
`;

export default function WorkExperienceCard({ workExperience }) {
  return (
    <>
      {workExperience.map((workExp) => (
        <>
          <WorkExperienceWrapper>
            <div>
              <Organisation>{workExp.organisation}</Organisation>
              <RoleAndCategory>{`${workExp.role} \u{00B7} ${workExp.category}`}</RoleAndCategory>
            </div>
            <div>
              <Year>{workExp.year}</Year>
            </div>
          </WorkExperienceWrapper>
        </>
      ))}
    </>
  );
}

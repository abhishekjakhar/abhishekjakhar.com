import styled from "styled-components";

import StandardLayout from "@components/StandardLayout/StandardLayout";
import MaxWidthWrapper from "@components/MaxWidthWrapper/MaxWidthWrapper";
import Timeline from "@components/Timeline/Timeline";

import Heading from "@components/Heading/Heading";

export default function Homepage() {
  return (
    <StandardLayout>
      <Wrapper>
        <div className="mb-10">
          <Heading type="large-title" as="h1">
            Hi, I'm Abhishek Jakhar
          </Heading>
          <Description>
            I am a Front-End developer that focuses on front end framework such
            as React and Next. I have a passion for CSS, User Experience and
            Testing. To grow my skills I do open source, read and write blogs
            and watch lectures from frontend masters & treehouse.
          </Description>
        </div>
        <div className="mb-4">
          <Heading type="medium-title" as="h2">
            Timeline
          </Heading>
        </div>
        <Timeline />
      </Wrapper>
    </StandardLayout>
  );
}

const Wrapper = styled(MaxWidthWrapper)`
  padding-top: 8rem;
  padding-bottom: 8rem;

  @media ${(p) => p.theme.breakpoints.smAndSmaller} {
    padding-top: 2.8rem;
    padding-bottom: 2.8rem;
  }
`;

const Description = styled.p`
  font-size: 1.6rem;
  color: var(--color-gray-700);
`;

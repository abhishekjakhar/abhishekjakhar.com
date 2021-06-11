import styled from "styled-components";

import StandardLayout from "@components/StandardLayout/StandardLayout";
import MaxWidthWrapper from "@components/MaxWidthWrapper/MaxWidthWrapper";
import Heading from "@components/Heading/Heading";

export default function SnippetLayout({ children, frontMatter }) {
  return (
    <StandardLayout>
      <Wrapper>
        <Hero>
          <Category>{frontMatter.category}</Category>
          <Heading as="h1" type="large-title">
            {frontMatter.name}
          </Heading>
        </Hero>
        <div>{children}</div>
      </Wrapper>
    </StandardLayout>
  );
}

const Wrapper = styled(MaxWidthWrapper)`
  padding-top: 8rem;
  padding-bottom: 8rem;
  @media ${(p) => p.theme.breakpoints.smAndSmaller} {
    padding-top: 4rem;
    padding-bottom: 4rem;
  }
`;

const Hero = styled.div`
  margin-bottom: 6rem;
`;

const Category = styled.h2`
  font-size: 1.8rem;
  font-weight: 500;
  color: var(--color-primary-700);
`;

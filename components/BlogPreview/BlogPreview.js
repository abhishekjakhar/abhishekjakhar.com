import styled from "styled-components";

import Heading from "@components/Heading/Heading";

export default function BlogPreview({ title, summary, externalURL }) {
  return (
    <Article>
      <StyledLink href={externalURL} target="_blank" rel="noopener noreferrer">
        <Title type="small-title" renderAs="h3">
          {title}
        </Title>
        <Excerpt>{summary}</Excerpt>
        <ReadMore>Read More</ReadMore>
      </StyledLink>
    </Article>
  );
}

const Article = styled.article`
  padding: 3.2rem;
  border-radius: 4px;
  background-color: var(--color-gray-50);
  box-shadow: var(--shadow);

  @media ${(p) => p.theme.breakpoints.smAndSmaller} {
    padding: 2.4rem;
  }
`;

const StyledLink = styled.a`
  position: relative;
  display: block;
  text-decoration: none;
  color: var(--color-gray-700);
  cursor: pointer;
`;

const Title = styled(Heading)`
  margin-bottom: 1.6rem;

  ${StyledLink}:hover & {
    color: var(--color-primary-600);
  }
`;

const Excerpt = styled.p`
  font-size: 1.6rem;
  margin-bottom: 1.6rem;
`;

const ReadMore = styled.span`
  font-size: 1.6rem;
  font-weight: bold;
  color: var(--color-gray-800);
`;

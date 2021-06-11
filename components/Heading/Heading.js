import * as React from "react";
import styled from "styled-components";

const Heading = ({ type = "medium-title", renderAs, ...rest }) => {
  let Component;
  if (type === "section-title") {
    Component = SectionTitle;
  } else if (type === "small-title") {
    Component = SmallTitle;
  } else if (type === "medium-title") {
    Component = MediumTitle;
  } else if (type === "large-title") {
    Component = LargeTitle;
  } else if (type === "major-heading") {
    Component = MajorHeading;
  } else if (type === "normal-heading") {
    Component = NormalHeading;
  } else if (type === "minor-heading") {
    Component = MinorHeading;
  } else {
    throw new Error("Unrecognized Heading type: " + type);
  }

  return <Component as={renderAs} {...rest} />;
};

const SectionTitle = styled.h1`
  font-size: 16px;
  color: var(--color-secondary);
  font-weight: var(--font-weight-medium);
  text-transform: uppercase;
  letter-spacing: 2px;
`;

const SmallTitle = styled.h1`
  font-size: 2.2rem;
  color: var(--color-gray-800);
`;

const MediumTitle = styled.h1`
  font-size: 2.8rem;
  color: var(--color-gray-800);
  line-height: 1.2;
`;

const LargeTitle = styled.h1`
  font-size: 3.6rem;
  color: var(--color-gray-800);

  @media ${(p) => p.theme.breakpoints.smAndSmaller} {
    font-size: 3rem;
  }
`;

const MajorHeading = styled.h2`
  font-size: 3.8rem;
  color: var(--color-gray-800);
  margin-top: 4.8rem;
  line-height: 1.2;
`;
const NormalHeading = styled.h3`
  font-size: 3rem;
  color: var(--color-gray-800);
  margin-top: 3.4rem;
  line-height: 1.3;
`;
const MinorHeading = styled.h4`
  font-size: 2rem;
  color: var(--color-gray-800);
  margin-top: 2.4rem;
`;

export default Heading;

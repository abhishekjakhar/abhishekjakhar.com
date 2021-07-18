import Head from "next/head";
import Link from "next/link";
import styled from "styled-components";

import MaxWidthWrapper from "@components/MaxWidthWrapper/MaxWidthWrapper";

export default function Custom404() {
  return (
    <>
      <Head>
        <title>Page Not Found</title>
      </Head>
      <Wrapper>
        <Heading>We lost this page</Heading>
        <Description>
          We searched high and low but couldn’t find what you’re looking for.
          Let’s find a better place for you to go.
        </Description>
        <Link href="/">
          <StyledLink>Go to Home</StyledLink>
        </Link>
      </Wrapper>
    </>
  );
}

const Wrapper = styled(MaxWidthWrapper)`
  padding-top: 16rem;
  padding-bottom: 16rem;
  height: 100vh;

  @media ${(p) => p.theme.breakpoints.smAndSmaller} {
    padding-top: 8rem;
    padding-bottom: 8rem;
  }
`;

const Heading = styled.h1`
  font-size: 6.4rem;
  font-weight: 500;
  color: var(--color-gray-900);
  margin-bottom: 1rem;
  font-family: var(--font-family-sriracha);

  @media ${(p) => p.theme.breakpoints.smAndSmaller} {
    font-size: 4rem;
  }
`;

const Description = styled.p`
  font-size: 2.8rem;
  font-weight: 300;
  color: var(--color-gray-800);
  margin-bottom: 8rem;
  line-height: 1.4;
  max-width: 86%;

  @media ${(p) => p.theme.breakpoints.smAndSmaller} {
    font-size: 2.6rem;
    max-width: 100%;
    margin-bottom: 4rem;
  }
`;

const StyledLink = styled.a`
  display: inline-block;
  text-align: center;
  cursor: pointer;
  border: none;
  background: none;
  color: #fff;
  background-color: var(--color-primary-600);
  font-weight: 600;
  font-size: 1.6rem;
  padding: 1.6rem 3.6rem;
  transition: all 0.15s linear;
  box-shadow: inset 0 0 0 1rem var(--color-primary-600);
  border-radius: 2px;

  &:hover {
    color: #fff;
    background-color: var(--color-primary-700);
    box-shadow: inset 0 0 0 1rem var(--color-primary-700);
  }
`;

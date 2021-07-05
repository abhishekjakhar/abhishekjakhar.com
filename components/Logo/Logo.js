import Link from "next/link";
import styled from "styled-components";

export default function Logo() {
  return (
    <Link href="/">
      <StyledLink>Abhishek Jakhar</StyledLink>
    </Link>
  );
}

const StyledLink = styled.a`
  font-family: var(--font-family-sriracha);
  font-size: 2.4rem;
  text-decoration: none;
  padding: 0;
  color: var(--color-primary-600);
  cursor: pointer;

  @media ${(p) => p.theme.breakpoints.mdAndSmaller} {
    font-size: 2.2rem;
  }
`;

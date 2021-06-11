import styled from "styled-components";

export default function MaxWidthWrapper({ children, ...rest }) {
  return <Wrapper {...rest}>{children}</Wrapper>;
}

const Wrapper = styled.div`
  position: relative;
  z-index: 2;
  width: 100%;
  max-width: 920px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 3.2rem;
  padding-right: 3.2rem;

  @media ${(p) => p.theme.breakpoints.smAndSmaller} {
    padding-left: 1.6rem;
    padding-right: 1.6rem;
  }
`;

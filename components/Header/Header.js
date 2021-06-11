import styled from "styled-components";

import Navigation from "@components/Navigation/Navigation";
import Logo from "@components/Logo/Logo";

export default function Header() {
  return (
    <Wrapper>
      <Left>
        <MainLogo>
          <Logo />
        </MainLogo>
      </Left>
      <RightDesktop>
        <Navigation />
      </RightDesktop>
      <RightMobile></RightMobile>
    </Wrapper>
  );
}

const Wrapper = styled.header`
  height: 6rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: baseline;
`;

const MainLogo = styled.div`
  margin-right: 3.6rem;
`;

const RightDesktop = styled.div`
  @media ${(p) => p.theme.breakpoints.mobile} {
    display: none;
  }
`;

const RightMobile = styled.div`
  @media ${(p) => p.theme.breakpoints.desktop} {
    display: none;
  }
`;

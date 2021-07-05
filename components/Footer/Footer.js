import styled from "styled-components";

import MaxWidthWrapper from "@components/MaxWidthWrapper/MaxWidthWrapper";
import Logo from "@components/Logo/Logo";

const navigationItems = [
  {
    name: "Contact",
    url: "mailto:abhishekjakhar.11@gmail.com",
  },
  {
    name: "Linkedin",
    url: "https://www.linkedin.com/in/abhishekjakhar",
  },
  {
    name: "Github",
    url: "https://github.com/abhishekjakhar",
  },
];

export default function Footer() {
  return (
    <Wrapper role="contentinfo">
      <InnerWrapper>
        <Left>
          <Logo />
          <DesktopOnly>
            <Copyright>
              &copy; 2021-present Abhishek Jakhar. All rights reserved.
            </Copyright>
          </DesktopOnly>
        </Left>
        <Right>
          <DesktopOnly>
            <Heading>Links</Heading>

            <Nav>
              <NavList>
                {navigationItems.map((item) => {
                  return (
                    <NavListItem key={item.name}>
                      <NavListItemLink
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {item.name}
                      </NavListItemLink>
                    </NavListItem>
                  );
                })}
              </NavList>
            </Nav>
          </DesktopOnly>
          <MobileOnly>
            <MobileNav>
              <MobileNavList>
                {navigationItems.map((item) => {
                  return (
                    <NavListItem key={item.name}>
                      <NavListItemLink
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {item.name}
                      </NavListItemLink>
                    </NavListItem>
                  );
                })}
              </MobileNavList>
            </MobileNav>
          </MobileOnly>
        </Right>
        <MobileOnly>
          <MobileCopyright>
            <Copyright>
              &copy; 2021-present Abhishek Jakhar. All rights reserved.
            </Copyright>
          </MobileCopyright>
        </MobileOnly>
      </InnerWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.footer`
  position: relative;
`;

const InnerWrapper = styled(MaxWidthWrapper)`
  display: flex;
  justify-content: space-between;
  padding-top: 3.2rem;
  padding-bottom: 3.2rem;

  @media (max-width: 725px) {
    flex-direction: column;
    justify-content: flex-start;
  }
`;

const Left = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (max-width: 725px) {
    align-items: center;
    padding-bottom: 3.2rem;
  }
`;

const Right = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 725px) {
    padding-bottom: 3.2rem;
  }
`;

const Copyright = styled.small`
  color: var(--color-gray-600);
`;

const MobileCopyright = styled.div`
  text-align: center;
`;

const Heading = styled.h3`
  font-size: 1.6rem;
  font-weight: semibold;
  color: var(--color-gray-800);
  margin-bottom: 0;
`;

const Nav = styled.nav`
  margin-top: 1.2rem;
`;

const NavList = styled.ul`
  list-style: none;
  display: grid;
  grid-gap: 4px;
`;

const MobileNav = styled.nav`
  max-width: 80%;
  margin: 0 auto;
`;

const MobileNavList = styled.ul`
  display: flex;
  justify-content: space-between;
`;

const NavListItem = styled.li`
  display: flex;
`;

const NavListItemLink = styled.a`
  color: var(--color-gray-900);
  font-size: 1.4rem;
  font-weight: 400;
  cursor: pointer;
  text-decoration: none;
`;

const DesktopOnly = styled.span`
  @media (max-width: 725px) {
    display: none;
  }
`;
const MobileOnly = styled.span`
  @media (min-width: 726px) {
    display: none;
  }
`;

import styled from "styled-components";

import Header from "@components/Header/Header";
import Footer from "@components/Footer/Footer";
import MaxWidthWrapper from "@components/MaxWidthWrapper/MaxWidthWrapper";
import Divider from "@components/Divider/Divider";

export default function StandardLayout({ children }) {
  return (
    <Wrapper>
      <HeaderWrapper>
        <MaxWidthWrapper>
          <Header />
        </MaxWidthWrapper>
      </HeaderWrapper>

      <ChildWrapper>{children}</ChildWrapper>
      <MaxWidthWrapper>
        <Divider />
      </MaxWidthWrapper>
      <Footer />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const HeaderWrapper = styled.div`
  position: sticky;
  top: 0;
  z-index: 3;
  background-color: #fff;
  box-shadow: var(--shadow-sm);
`;

const ChildWrapper = styled.main`
  position: relative;
  z-index: 1;
  flex: 1;
  max-width: 100vw;
  overflow: hidden;
`;

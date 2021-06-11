import styled from "styled-components";

export default function Paragraph({ children }) {
  return <Wrapper>{children}</Wrapper>;
}

const Wrapper = styled.p`
  font-size: 2rem;
  font-weight: 400;
  margin: 2rem 0;
  color: var(--color-gray-900);
`;

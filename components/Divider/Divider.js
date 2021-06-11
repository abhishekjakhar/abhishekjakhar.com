import styled from "styled-components";

export default function Divider(props) {
  return <StyledDivider {...props} />;
}

const StyledDivider = styled.div`
  border-top: 1px solid var(--color-gray-100);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
`;

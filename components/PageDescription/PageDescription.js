export default function PageDescription({ children }) {
  return <Description>{children}</Description>;
}

const Description = styled.p`
  font-size: 2.2rem;
  color: var(--color-text);
  margin-top: 0;
`;

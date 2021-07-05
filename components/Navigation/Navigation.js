import styled from "styled-components";

import ActiveLink from "@components/ActiveLink/ActiveLink";

export default function Navigation() {
  return (
    <Wrapper>
      <List>
        <ListItem>
          <ListItemActiveLink href="/blogs">
            <ListItemLink>Blogs</ListItemLink>
          </ListItemActiveLink>
        </ListItem>
        <ListItem>
          <ListItemActiveLink href="/snippets">
            <ListItemLink>Snippets</ListItemLink>
          </ListItemActiveLink>
        </ListItem>
      </List>
    </Wrapper>
  );
}

const Wrapper = styled.nav`
  display: flex;
`;

const List = styled.ul`
  display: flex;
  list-style: none;
`;

const ListItem = styled.li`
  margin-left: 2.4rem;

  @media ${(p) => p.theme.breakpoints.mdAndSmaller} {
    margin-left: 1.6rem;
  }
`;

const ListItemLink = styled.a`
  color: var(--color--gray-600);
  font-size: 1.8rem;
  font-weight: 400;
  cursor: pointer;
  padding-top: 0.8rem;
  padding-bottom: 0.8rem;
`;

const ListItemActiveLink = styled(ActiveLink)`
  color: var(--color--gray-800);
  font-weight: 500;
`;

import styled from "styled-components";

const Resources = ({ title, children }) => {
  return (
    <ResourceWrapper>
      <ResourceTitle>{title}</ResourceTitle>
      <ResourceList>{children}</ResourceList>
    </ResourceWrapper>
  );
};

const ResourceWrapper = styled.div`
  padding: 2.4rem;
  border-radius: 4px;
  background: rgb(231, 230, 234);
  color: rgb(56, 47, 73);
  border-color: rgb(172, 168, 189);
`;

const ResourceTitle = styled.h5`
  font-weight: 700;
  font-size: 1.6rem;
  margin-bottom: 1.6rem;
`;

const ResourceList = styled.ul`
  list-style-type: disc;
  padding-left: inherit;
`;

const ResourceListItem = styled.li`
  margin: 0.4rem 0;
`;

export { Resources, ResourceListItem };

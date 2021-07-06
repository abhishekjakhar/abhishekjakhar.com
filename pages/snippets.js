import { getAllFilesFrontMatter } from "@lib/mdx";
import styled from "styled-components";

import StandardLayout from "@components/StandardLayout/StandardLayout";
import MaxWidthWrapper from "@components/MaxWidthWrapper/MaxWidthWrapper";
import Heading from "@components/Heading/Heading";
import Table from "@components/Table/Table";
import Link from "next/link";

export default function Snippets({ snippets }) {
  return (
    <StandardLayout>
      <Wrapper>
        <Heading as="h1" type="large-title">
          Snippets
        </Heading>
        <Description>
          Short solutions to discrete problems which can be copied and pasted.
        </Description>
        <StyledTable
          data={snippets}
          fields={[
            {
              label: "Name",
              key: "name",
              flex: 1,
              renderLink: (item) => {
                return <Link href={`/snippets/${item.slug}`}>{item.name}</Link>;
              },
            },
            {
              label: "Description",
              key: "description",
              flex: 3,
            },
            {
              label: "Category",
              key: "category",
              flex: 1,
            },
          ]}
        />
      </Wrapper>
    </StandardLayout>
  );
}

export async function getStaticProps() {
  const snippets = await getAllFilesFrontMatter("snippets");
  return { props: { snippets } };
}

const Wrapper = styled(MaxWidthWrapper)`
  padding-top: 8rem;
  padding-bottom: 8rem;

  @media ${(p) => p.theme.breakpoints.smAndSmaller} {
    padding-top: 4rem;
    padding-bottom: 4rem;
  }
`;

const StyledTable = styled(Table)`
  margin-top: 3.6rem;
`;

const Description = styled.p`
  font-size: 2.2rem;
  color: var(--color-text);
  margin-top: 0;
`;

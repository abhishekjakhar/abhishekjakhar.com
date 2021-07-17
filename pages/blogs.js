import Head from "next/head";

import { getAllFilesFrontMatter } from "@lib/mdx";
import styled from "styled-components";

import StandardLayout from "@components/StandardLayout/StandardLayout";
import MaxWidthWrapper from "@components/MaxWidthWrapper/MaxWidthWrapper";
import Heading from "@components/Heading/Heading";

import BlogPreview from "@components/BlogPreview/BlogPreview";

export default function Blogs({ blogs }) {
  const sortedBlogs = [...blogs].sort(
    (a, b) => Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt))
  );

  return (
    <StandardLayout>
      <Head>
        <title>Blogs</title>
      </Head>
      <Wrapper>
        <Heading as="h1" type="large-title">
          Blogs
        </Heading>
        <Description>
          All the blogs which I have written related to Frontend development.
        </Description>
        <BlogPreviewGrid>
          {sortedBlogs.map((b) => (
            <BlogPreview
              key={b.title}
              title={b.title}
              summary={b.summary}
              externalURL={b.externalURL}
            />
          ))}
        </BlogPreviewGrid>
      </Wrapper>
    </StandardLayout>
  );
}

export async function getStaticProps() {
  const blogs = await getAllFilesFrontMatter("blogs");

  return { props: { blogs } };
}

const Wrapper = styled(MaxWidthWrapper)`
  padding-top: 8rem;
  padding-bottom: 8rem;

  @media ${(p) => p.theme.breakpoints.smAndSmaller} {
    padding-top: 4rem;
    padding-bottom: 4rem;
  }
`;

const Description = styled.p`
  font-size: 2.2rem;
  color: var(--color-text);
  margin-top: 0;
`;

const BlogPreviewGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(36rem, 1fr));
  grid-gap: 3.6rem;
  margin-top: 6rem;

  @media ${(p) => p.theme.breakpoints.smAndSmaller} {
    grid-template-columns: 1fr;
  }
`;

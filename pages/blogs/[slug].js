import { MDXRemote } from "next-mdx-remote";

import { getFiles, getFileBySlug } from "@lib/mdx";
import BlogLayout from "@layouts/BlogLayout";
import MDXComponents from "@components/MDXComponents/MDXComponents";

export default function BlogPage({ mdxSource, frontMatter }) {
  return (
    <BlogLayout frontMatter={frontMatter}>
      <MDXRemote
        {...mdxSource}
        components={{
          ...MDXComponents,
        }}
      />
    </BlogLayout>
  );
}

export async function getStaticPaths() {
  const posts = await getFiles("blogs");

  return {
    paths: posts.map((p) => ({
      params: {
        slug: p.replace(/\.mdx/, ""),
      },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const post = await getFileBySlug("blogs", params.slug);

  return { props: { ...post } };
}

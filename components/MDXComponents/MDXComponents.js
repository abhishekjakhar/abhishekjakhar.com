import Image from "next/image";
import Paragraph from "@components/Paragraph/Paragraph";
import CodeBlock from "@components/CodeBlock/CodeBlock";
import Heading from "@components/Heading/Heading";

const MDXComponents = {
  Image,
  p: Paragraph,
  code: CodeBlock,
  h2: (props) => <Heading type="major-heading" {...props} />,
  h3: (props) => <Heading type="normal-heading" {...props} />,
  h4: (props) => <Heading type="minor-heading" {...props} />,
};

export default MDXComponents;

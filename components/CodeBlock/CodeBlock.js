import * as React from "react";
import styled from "styled-components";
import Highlight, { defaultProps } from "prism-react-renderer";
import { LiveProvider, LiveEditor, LiveError, LivePreview } from "react-live";
import nightOwl from "prism-react-renderer/themes/nightOwl";
import { mdx } from "@mdx-js/react";

export default function CodeBlock({ children, className, live, render }) {
  const language = className.replace(/language-/, "");

  if (live) {
    return (
      <div style={{ marginTop: "40px", backgroundColor: "black" }}>
        <LiveProvider
          code={children.trim()}
          transformCode={(code) => "/** @jsx mdx */" + code}
          scope={{ mdx }}
        >
          <LivePreview />
          <LiveEditor />
          <LiveError />
        </LiveProvider>
      </div>
    );
  }

  if (render) {
    return (
      <div style={{ marginTop: "40px" }}>
        <LiveProvider code={children}>
          <LivePreview />
        </LiveProvider>
      </div>
    );
  }

  return (
    <Highlight
      {...defaultProps}
      code={children.trim()}
      language={language}
      theme={nightOwl}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre
          className={className}
          style={{ ...style, padding: "2rem", margin: "2.4rem 0" }}
        >
          {tokens.map((line, i) => (
            <div key={i} {...getLineProps({ line, key: i })}>
              <Line>{i + 1}</Line>
              {line.map((token, key) => (
                <span key={key} {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  );
}

const Line = styled.span`
  display: inline-block;
  width: 3rem;
  user-select: none;
  opacity: 0.4;
`;

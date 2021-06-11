import * as React from "react";
import { useRouter } from "next/router";
import Link from "next/link";

const ActiveLink = ({ children, className, ...props }) => {
  const { asPath } = useRouter();
  const child = React.Children.only(children);
  const childClassName = child.props.className || "";

  const activeClassName =
    asPath === props.href || asPath === props.as
      ? `${childClassName} ${className}`.trim()
      : childClassName;

  return (
    <Link {...props}>
      {React.cloneElement(child, {
        className: activeClassName || null,
      })}
    </Link>
  );
};

export default ActiveLink;

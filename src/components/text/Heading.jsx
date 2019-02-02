// @flow
import * as React from "react";
import cs from "classnames";

type Props = {
  children: React.Node,
  className: ?string,
  size: "xs" | "s" | "m" | "l" | "xl"
};

export default function AsHeading({
  children,
  className,
  size,
  ...rest
}: Props) {
  return (
    <h2
      className={cs("as-heading", `as-heading--${size}`, className)}
      {...rest}
    >
      {children}
    </h2>
  );
}

AsHeading.defaultProps = {
  size: "m"
};

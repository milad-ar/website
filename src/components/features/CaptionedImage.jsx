// @flow
import * as React from "react";

type Props = {
  children: React.Node,
  img: string,
  link: string,
  title: string
};

export default function CaptionedImage({ children, img, link, title }: Props) {
  return (
    <article className="as-captionedImage" title={title}>
      <a className="as-captionedImage__link" href={link}>
        <img className="as-captionedImage__image" src={img} alt={title} />
        <div className="as-captionedImage__caption">{children}</div>
      </a>
    </article>
  );
}

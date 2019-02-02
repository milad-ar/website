// @flow
import * as React from "react";
import CaptionedImage from "./CaptionedImage";

const LOCALE = "fa";
// const trs = {
//   en: {},
//   fa: {}
// };
const data = {
  en: {},
  fa: {
    heading: "پروژه‌ها",
    description:
      "شرکت عرشیا سازان با در اختیار داشتن پرسنل کارآزموده و متعهد و سوابق درخشان حضور در پروژه‌های متعدد هم‌اکنون در حوزه‌های مختلف و متنوع عمرانی مشغول به فعالیت است.",
    tags: [""]
  }
};

type Props = {};

export default function ProjectsSection(props: Props) {
  const d = data[LOCALE];
  return (
    <div className="as-projectsSection">
      <h2 className="as-h2">{d.heading}</h2>
      {/*<p className="as-p">{d.description}</p>*/}
      <CaptionedImage>hello world</CaptionedImage>
    </div>
  );
}

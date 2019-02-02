import * as React from "react";
import Box from "../box";
import { AsHeading, AsText } from "../text/index";
import "./section-intro.css";

const LOCALE = "fa";
const data = {
  en: {},
  fa: {
    title: "شرکت فنی و مهندسی عرشیا سازان",
    descriptions: [
      "شرکت فنی و مهندسی عرشیا سازان در سال ۱۳۹۲ به عنوان شرکت با مسئولیت محدود به ثبت رسیده‌است و هدف از تاسیس آن محاسبه و طراحی، نظارت فنی، پیمانکاری، اجرای ساختمان‌های مسکونی، صنعتی و غیر صنعتی، نقشه‌برداری، انجام امور معماری، نوسازی و بازسازی می‌باشد.",
      "شرکت عرشیا سازان با در اختیار داشتن نیروي انسانی متخصص و مجرب، مدیران خوشنام و با سابقه، تجهیزات و ماشین آلات و با دست یابی به دانش فنی روز و با اجراي دهها پروژه در سرتاسر کشور عزیزمان با بهترین کیفیت توانسته رضایتمندي کار آفرینان محترم را در کارسپاري جلب نماید."
    ]
  }
};

const d = data[LOCALE];
export default function BrandIntro() {
  return (
    <Box className="as-section-intro">
      <AsHeading className="as-section-intro__heading" size="l">
        {d.title}
      </AsHeading>
      <div className="as-section-intro__content">
        {d.descriptions.map(item => (
          <p key={item} className="as-section-intro__item">
            <AsText size="l">{item}</AsText>
          </p>
        ))}
      </div>
    </Box>
  );
}

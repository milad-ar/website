//@flow
import * as React from "react";
import "./ServicesSection.css";
import Box from "../box/Box";
import { IconBox } from "../icon-box";

const data = {
  en: {},
  fa: {
    title: "خدمات ما",
    services: [
      {
        icon: "engineer",
        title: "طراحی، محاسبه و آنالیز",
        subtitle:
          "طراحی و محاسبه سازه‌های مدرن و استاندارد شامل سازه هاي بتنی و فلزي اعم از (دال کوبیاکس ، دال پیش تنیده ، دال مجوف ، مهانیت)"
      },
      {
        icon: "crane",
        title: "اجراي اسکلت بتنی و فلزي",
        subtitle:
          "ساخت و نصب اسکلت فلزی (پیچ و مهره، جوشی) - اجرای اسکلت بتنی با نشان استاندارد - اجراي انواع فنداسیون نواري ، پی گسترده، شمع اسپیرال و سقف وافل"
      },
      {
        icon: "brickWall",
        title: "سفت‌کاری",
        subtitle:
          "کلیه عملیات کندن پی و بتن ریزی ساختمان ، دیوار چینی و تیغه چینی ساختمان , نصب تیر و ستون های اصلی ساختمان"
      },
      {
        icon: "paintRoller",
        title: "نازک‌کاری",
        subtitle:
          "کلیه عملیات کاشی کاری ، نقاشی دیوار ها و سقف ساختمان , برق کاری کلید و پریز ها ، نصب تاسیسات از قبیل لوله ها و شوفاژ ساختمان و در نهایت نصب درب و پنجره ها"
      },
      {
        icon: "tripod",
        title: "نقشه‌برداری",
        subtitle:
          "پیاده‌سازی مشخصات موجود در طرح سازه با دقت بسیار بالا - کنترل دقیق تغییر مقطع های موجود در طبقات و همچنین کنترل تراز ارتفاعی طبقات جهت جلوگیری از پیچش و خروج از مرکزیت ستون ها"
      },
      {
        icon: "lab",
        title: "آزمایشگاه",
        subtitle:
          "نمونه برداری از بتن تازه در محل - بررسی و ارزیابی سازه بتنی - انجام آزمایشات تخصصی خاک و تعیین پارامترهای مورد نیاز باربری و محاسبات سازه ای و..."
      }
    ]
  }
};

const LOCALE = "fa";
const d = data[LOCALE];
export default function ServicesSection() {
  return (
    <Box>
      <div className="as-servicesSection__wrapper">
        <h2
          className="title is-3 is-spaced has-text-centered"
          style={{ marginBottom: "3rem" }}
        >
          {d.title}
        </h2>

        <div className="as-servicesSection">
          {d.services.map(service => (
            <div className="as-servicesSection__service" key={service.icon}>
              <IconBox {...service} />
            </div>
          ))}
        </div>
      </div>
    </Box>
  );
}

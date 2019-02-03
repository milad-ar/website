import React from "react";
import SubPageHeader from "../../components/subpage-header/SubPageHeader";
import { Nav as TopNav } from "../../components/nav/index";
import { Footer } from "../../components/footer/index";
import { FaNum } from "../../components/farsi/index";

const LOCALE = "fa";
const translations = {
  en: {},
  fa: {
    title: "خدمات ما",
    headerBreadcrumbNavigation: [
      { name: "خانه", link: "/" },
      { name: "خدمات ما", link: "/services" }
    ]
  }
};
const dataTranslations = {
  en: {},
  fa: {
    services: [
      {
        name: "فونداسیون و اسکلت",
        description:
          "اجرای انواع اسکلت فلزی پیچ و مهره ای و سوله های صنعتی و اسکلت های بتنی و دیوارهای برشی، طراحی و سبک سازی اسلکت، بهینه سازی مصرف فولاد و بتن، اجرای انواع شمع بتنی و دیوار حائل و انواع سازه نگهبان و نیلینگ",
        images: [
          "/img/services/framing-foundation/1.jpg",
          "/img/services/framing-foundation/2.jpg",
          "/img/services/framing-foundation/3.jpg",
          "/img/services/framing-foundation/4.jpg",
          "/img/services/framing-foundation/5.jpg",
          "/img/services/framing-foundation/6.jpg",
          "/img/services/framing-foundation/7.jpg"
        ]
      },
      {
        name: "نقشه‌برداری",
        description:
          "پیاده‌سازی مشخصات موجود در طرح سازه با دقت بسیار بالا - کنترل دقیق تغییر مقطع های موجود در طبقات و همچنین کنترل تراز ارتفاعی طبقات جهت جلوگیری از پیچش و خروج از مرکزیت ستون ها",
        featureImage: "",
        images: ["/img/services/mapping/1.jpg", "/img/services/mapping/2.jpg"],
        order: 3
      },
      {
        name: "انواع سقف",
        description:
          "ما با تکیه بر مهندسین و اکیپهای اجرایی باتجربه آمادگی اجرای انواع سقف های تیرچه درجا، تیرچه کرومیت و ماهونیت، قالبهای وافل، سقف های پیش تنیده، عرشه فولادی و دالهای دوطرفه را داریم.",
        images: [
          "/img/services/ceiling/1.jpg",
          "/img/services/ceiling/2.jpg",
          "/img/services/ceiling/3.jpg",
          "/img/services/ceiling/4.jpg",
          "/img/services/ceiling/5.jpg",
          "/img/services/ceiling/6.jpg",
          "/img/services/ceiling/7.jpg",
          "/img/services/ceiling/8.jpg",
          "/img/services/ceiling/9.jpg"
        ],
        order: 1
      },
      {
        name: "مقاوم‌سازی و گودبرداری",
        description:
          "طراحی و اجرای انواع سازه های نگهبان و گودبرداری و  شمع کوبی و اجرای خدمات مقاوم سازی سازه های بتنی با FRP و نیلینگ دیوارهای گودبرداری شده و خاک برداری اصولی و کاشت انواع میلگردتوسط سازنده ذیصلاح ومجریان.",
        featureImage: "",
        images: [
          "/img/services/strengthening-digging/1.jpg",
          "/img/services/strengthening-digging/2.jpg",
          "/img/services/strengthening-digging/3.jpg",
          "/img/services/strengthening-digging/4.jpg",
          "/img/services/strengthening-digging/5.jpg",
          "/img/services/strengthening-digging/6.jpg",
          "/img/services/strengthening-digging/7.jpg",
          "/img/services/strengthening-digging/8.jpg"
        ],
        order: 2
      },
      {
        name: "عایق‌کاری",
        description:
          "قسمت‌هایی از ساختمان که در معرض تماس به زمین نمناک یا در معرض آب قرار دارند باید عایق کاری رطوبتی شوند. کف زیرزمین و طبقه همکف ساختمان, کف آشپزخانه، سرویس‌های بهداشتی درزهای انبساط در بام نماهایی که در معرض باران قرار دارند. پشت بام",
        images: [
          "/img/services/insulation/1.jpg",
          "/img/services/insulation/2.jpg",
          "/img/services/insulation/3.jpg"
        ]
      },
      {
        name: "نازک‌کاری",
        description:
          "کلیه عملیات کاشی کاری ، نقاشی دیوار ها و سقف ساختمان , برق کاری کلید و پریز ها ، نصب تاسیسات از قبیل لوله ها و شوفاژ ساختمان و در نهایت نصب درب و پنجره ها",

        images: [
          "/img/services/joinery/1.jpg",
          "/img/services/joinery/2.jpg",
          "/img/services/joinery/3.jpg",
          "/img/services/joinery/4.jpg",
          "/img/services/joinery/5.jpg",
          "/img/services/joinery/6.jpg",
          "/img/services/joinery/7.jpg",
          "/img/services/joinery/8.jpg",
          "/img/services/joinery/9.jpg"
        ],
        order: 3
      },
      {
        name: "آزمایشگاه",
        description:
          "نمونه برداری از بتن تازه در محل - بررسی و ارزیابی سازه بتنی - انجام آزمایشات تخصصی خاک و تعیین پارامترهای مورد نیاز باربری و محاسبات سازه ای و...",
        featureImage: "",
        images: [{ title: "", source: "", order: 0 }],
        order: 3
      }
    ]
  }
};

const content = translations[LOCALE];
const data = dataTranslations[LOCALE];

const ServicesPage = props => (
  <div className="as-page as-page--services">
    <PageHeader
      title={content.title}
      breadcrumb={content.headerBreadcrumbNavigation}
    />

    <div className="as-page__content">
      <section className="section">
        <div className="container">
          <div className="content">
            {data.services.map((service, index) => (
              <ServiceBox
                key={service.name}
                service={service}
                order={index + 1}
              />
            ))}
          </div>
        </div>
      </section>
    </div>

    <Footer />
  </div>
);
function ServiceBox({ service, order }) {
  return (
    <div className="card" style={{ marginBottom: "2rem" }}>
      <div className="card-content">
        <h3>
          <FaNum num={order} />. {service.name}
        </h3>
        <p className="is-size-6">{service.description}</p>
        <div
          className="columns is-mobile is-multiline"
          style={{ marginTop: "2rem" }}
        >
          {service.images.map(img => (
            <div
              key={img}
              className="column is-half-mobile is-one-third-tablet is-centered"
            >
              <img
                className="is-centered"
                src={img}
                alt=""
                style={{ display: "block", margin: "0 auto" }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
function PageHeader({ title, breadcrumb }) {
  return (
    <div className="as-page-header">
      <TopNav />
      <SubPageHeader title={title} breadcrumb={breadcrumb} />
    </div>
  );
}

export default ServicesPage;

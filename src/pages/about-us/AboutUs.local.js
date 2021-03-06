import { toFaNum } from "../../components/farsi";
import config from "../../configs/config";

export default {
  en: {},
  fa: {
    title: "درباره ما",
    breadcrumb: [
      { name: "خانه", link: "/" },
      { name: "درباره ما", link: "/about-us" }
    ],
    portfolio: {
      title: "ارائه‌دهنده انواع خدمات ساختمانی",
      subtitle:
        "شرکت ساختمانی ما سال ۱۳۹۳ در اوج دوره ساختمان‌سازی در تهران تأسیس شد...",
      paragraphs: [
        "شرکت فنی و مهندسی عرشیا سازان با اتکا به قدرت لایزال الهی و در پرتو ایمان ، کوشش و برنامه ریزي در راستاي نیل به اهداف چشم انداز توسعه و آبادانی زیر ساخت هاي میهن اسلامی اداي دین خواهد نمود .",
        "شرکت عرشیا سازان با در اختیار داشتن سرمایه عظیم نیروي انسانی متخصص و متعهد و مجرب و مدیران خوشنام و با سابقه و تجهیزات و ماشین آلات و با دست یابی به دانش فنی روز و با اجراي دهها پروژه در سرتاسر کشور عزیزمان با بهترین کیفیت توانسته رضایتمندي کار آفرینان محترم را در کارسپاري جلب نماید.",
        "مدیران و کارکنان اعتقاد راسخ دارند که براي آبادانی کشور عزیزمان هیچکس شایسته تر و دلسوز تر از ایرانی نیست و در این راستا عزممان را جزم نموده ایم تا نقشی هر چند کوچک ولی تاثیر گذار و در خور شأن ایرانیان ایفا نمائیم .",
        "با توجه به توان بالقوه این شرکت آمادگی دارد با قبول پروژه هاي جدید در ساخت و ساز و عمران و آبادانی کشور عزیزمان بیشتر از قبل نقش آفرین باشد."
      ],
      button: "دانلود رزومه ما"
    },
    stats: [
      {
        label: "سال فعالیت عمرانی",
        value: toFaNum(
          new Date().getFullYear() - new Date("2014").getFullYear()
        )
      },
      { label: "پروژه انجام‌شده", value: toFaNum(17) },
      { label: "کارمند مهندس و عملیاتی", value: toFaNum(23) },
      { label: "دپارتمان تخصصی", value: toFaNum(7) }
    ],
    staff: {
      heading: "کارکنان کلیدی شرکت",
      subHeading: "تیمی از مهندسان دانا، با‌تجربه و متعهد",
      personnel: config["fa"].personnel,
      linkedinLabel: "اکانت در لینکد‌این",
      emailLabel: "ایمیل"
    }
  }
};

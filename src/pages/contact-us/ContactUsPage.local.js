import { toFaNum } from "../../components/farsi";
import config from "../../configs/config";

export default {
  en: {},
  fa: {
    page: {
      header: {
        title: "با ما در ارتباط باشید...",
        breadcrumb: [
          { name: "خانه", link: "/" },
          { name: "ارتباط با ما", link: "contact-us" }
        ]
      },
      main: {
        heading: "اطلاعات تماس",
        list: [
          {
            label: "نشانی",
            value: `${config.fa.info.address.city} - ${
              config.fa.info.address.location
            }`,
          },
          { label: "کدپستی", value: config.fa.info.address.zipCode },
          { label: "شماره تماس", value: config.fa.info.workTel },
          { label: "شماره دورنما", value: config.fa.info.fax },
          { label: "آدرس تارنما", value: config.fa.info.website },
          {
            label: "آدرس ایمیل",
            value: [config.fa.info.email1, config.fa.info.email2]
          }
        ]
      }
    }
  }
};

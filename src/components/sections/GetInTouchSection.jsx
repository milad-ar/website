import * as React from "react";
import "./GetInTouchSection.sass";
import config from "../../configs/config";

const LOCALE = "fa";
const trs = {
  en: {},
  fa: {
    header: {
      title: "با ما در ارتباط باشید",
      subtitle:
        "با توجه به توان بالقوه این شرکت آمادگی دارد با قبول پروژه هاي جدید در ساخت و ساز و عمران و آبادانی کشور عزیزمان بیشتر از قبل نقش آفرین باشد."
    },
    form: {
      name: "نام",
      namePlaceholder: "مثال: علی خسروی",
      email: "ایمیل",
      emailPlaceholder: "ali.khosravi@example.com",
      phoneNumber: "شماره تماس",
      phoneNumberPlaceholder: "09129876543",
      subject: "موضوع درخواست",
      subjectPlaceHolder: "درخواست برای طراحی نقشه",
      message: "متن پیام",
      messagePlaceholder: "",
      button: "ارسال پیام"
    },
    side: {
      title1: "آدرس ما",
      title2: "موقعیت‌های شغلی",
      subtitle2:
        "چنانچه تمایل دارید با ما همکاری کنید می‌توانید برای کسب اطلاعات بیشتر درخواست خود را همراه با رزومه‌تان به آدرس ایمیل زیر بفرستید."
    }
  }
};


function GetInTouchSection() {
  const ts = trs[LOCALE];
  // const d = data[LOCALE];
  return (
    <section className="section">
      <div className="container">
        <div className="content">
          {/*header*/}
          <div>
            <h2 className="title is-3 is-spaced has-text-centered">
              {ts.header.title}
            </h2>
            <p className="subtitle is-6 has-text-centered has-text-grey">
              {ts.header.subtitle}
            </p>
          </div>

          {/*content*/}
          <div className="as-getInTouchSection__content">
            <div className="columns">
              <div className="column is-6">
                <form action="" className="">
                  <div className="field">
                    <label htmlFor="" className="label">
                      {ts.form.name}
                    </label>
                    <div className="control">
                      <input
                        className="input"
                        type="text"
                        required={true}
                        name="name"
                        placeholder={ts.form.namePlaceholder}
                      />
                    </div>
                  </div>
                  <div className="field">
                    <label htmlFor="" className="label">
                      {ts.form.email}
                    </label>
                    <div className="control">
                      <input
                        className="input as-dir-ltr"
                        type="email"
                        required={true}
                        name="email"
                        placeholder={ts.form.emailPlaceholder}
                      />
                    </div>
                  </div>
                  <div className="field">
                    <label htmlFor="" className="label">
                      {ts.form.phoneNumber}
                    </label>
                    <div className="control">
                      <input
                        className="input as-dir-ltr"
                        type="text"
                        required={true}
                        name="phoneNumber"
                        placeholder={ts.form.phoneNumberPlaceholder}
                      />
                    </div>
                  </div>
                  <div className="field">
                    <label htmlFor="" className="label">
                      {ts.form.subject}
                    </label>
                    <div className="control">
                      <input
                        className="input"
                        type="text"
                        required={true}
                        name="subject"
                        placeholder={ts.form.subjectPlaceHolder}
                      />
                    </div>
                  </div>
                  <div className="field">
                    <label htmlFor="" className="label">
                      {ts.form.message}
                    </label>
                    <div className="control">
                      <textarea
                        className="textarea"
                        required={true}
                        rows="8"
                        name="message"
                      />
                    </div>
                  </div>
                  <div className="field">
                    <div className="control">
                      <button className="button is-success" type="submit">
                        {ts.form.button}
                      </button>
                    </div>
                  </div>
                </form>
              </div>

              <div className="column is-1" />
              <div className="column is-4">
                <div className="as-info-card">
                  <h5>{ts.side.title1}</h5>
                  <p className="subtitle is-7">
                    {config[LOCALE].info.address.country},{" "}
                    {config[LOCALE].info.address.city} -{" "}
                    {config[LOCALE].info.address.location}
                  </p>
                  <p className="subtitle is-7 as-dir-ltr has-text-weight-bold">
                    {config[LOCALE].info.workTel}
                  </p>
                  <p className="subtitle is-7 as-dir-ltr has-text-weight-bold">
                    {config[LOCALE].info.mobile1}
                  </p>
                  <p className="subtitle is-7 as-dir-ltr has-text-weight-bold">
                    {config[LOCALE].info.mobile2}
                  </p>
                </div>

                <div className="as-info-card">
                  <h5>{ts.side.title2}</h5>
                  <p className="subtitle is-7">{ts.side.subtitle2}</p>
                  <p className="subtitle is-7 as-dir-ltr">
                    {config[LOCALE].info.email}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default GetInTouchSection;

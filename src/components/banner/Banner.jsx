// @flow
import * as React from "react";
import cs from "classnames";
import { Link } from "@reach/router";
import "./Banner.sass";

const LOCALE = "fa";
const content = {
  en: {},
  fa: {
    slides: [
      {
        bgSrc: "/img/mainbanner01.jpg",
        title: "توانمند در طراحی‌، زبده در اجرا",
        subtitle: "شرکت مشاور و اجرا از سال ۱۳۹۳",
        target: "/projects",
        buttonText: "مشاهده پروژه‌های ما"
      },
      {
        bgSrc: "/img/mainbanner02.jpg",
        title: "تسلط بر تمامی مراحل ساختمان‌سازی",
        subtitle: "پیاده‌سازی جدیدترین و به‌صرفه‌ترین روش‌های اجرای ساختمان",
        buttonText: "مشاهده خدمات ما",
        target: "/services"
      },
      {
        bgSrc: "/img/mainbanner03.jpg",
        title: "ترکیبی از مهندسان با‌تجربه و جوان",
        subtitle: "پیشروی سریع کار همزمان با دقت بالا",
        buttonText: "تیم مهندسی ما",
        target: "/about-us"
      }
    ]
  }
};

class Banner extends React.Component<{
  currentSlide: number,
  goToIndex: Function
}> {
  windowInnerHeight: number | typeof undefined;

  componentDidMount() {
    this.windowInnerHeight = window.innerHeight;
  }

  render() {
    const { currentSlide, goToIndex } = this.props;
    return (
      <section className="as-banner">
        <div className="as-carousel">
          <ol className="as-carousel__indicators">
            {content[LOCALE].slides.map((_, index) => {
              return (
                <SliderDot
                  key={index}
                  active={index === currentSlide}
                  onClick={() => goToIndex(index)}
                />
              );
            })}
          </ol>
          <div
            className="as-carousel__inner"
            style={{
              transform: `translate3d(${currentSlide * 100}%, 0, 0)`
            }}
          >
            {content[LOCALE].slides.map(slideProps => (
              <Slide
                key={slideProps.title}
                {...slideProps}
                style={{
                  height: this.windowInnerHeight || "100vh"
                }}
              />
            ))}
          </div>
        </div>
      </section>
    );
  }
}

function SliderDot(props: { active: boolean, onClick: Function }) {
  return (
    <div
      className={cs("as-dot", { active: props.active })}
      onClick={props.onClick}
    />
  );
}

function Slide(props: {
  bgSrc: string,
  className?: string,
  title: string,
  subtitle: string,
  buttonHref: string,
  buttonText: string,
  style?: Object
}) {
  return (
    <div
      className={cs("as-carousel__slide", props.className)}
      style={{ backgroundImage: `url(${props.bgSrc})`, ...props.style }}
    >
      <div className="as-hero">
        <h1 className="as-hero__title">{props.title}</h1>
        <h2 className="as-hero__subtitle">{props.subtitle}</h2>

        <div
          className="column"
          style={{ display: "flex", justifyContent: "center" }}
        >
          <Link className="button as-hero__button" to={props.target}>
            {props.buttonText}
          </Link>
        </div>
      </div>
    </div>
  );
}

const sliderHOC = ({
  count,
  interval = 5000
}: {
  count: number,
  interval?: number
}) => Component =>
  class extends React.Component<Object, { index: number }> {
    intervalId: ?IntervalID;
    state = { index: 0 };

    componentDidMount() {
      this.startTimer();
    }

    componentWillUnmount() {
      this.stopTimer();
    }

    startTimer() {
      this.intervalId = setInterval(this.goForward, interval);
    }

    stopTimer() {
      if (this.intervalId) {
        clearInterval(this.intervalId);
      }
    }

    restartTimer() {
      this.stopTimer();
      this.startTimer();
    }

    getNext(index: number, change: number) {
      if (index + change >= count) {
        return 0;
      } else if (index + change < 0) {
        return count - 1;
      }
      return index + change;
    }

    goForward = () =>
      this.setState(prevState => ({ index: this.getNext(prevState.index, 1) }));
    goBackward = () =>
      this.setState(prevState => ({
        index: this.getNext(prevState.index, -1)
      }));
    goToIndex = (idx: number) => this.setState({ index: this.getNext(idx, 0) });

    goToIndexWithTimerReset = (idx: number) => {
      this.goToIndex(idx);
      this.restartTimer();
    };

    render() {
      return (
        <Component
          goForward={this.goForward}
          goBackward={this.goBackward}
          goToIndex={this.goToIndexWithTimerReset}
          currentSlide={this.state.index}
        />
      );
    }
  };

export default sliderHOC({ count: content[LOCALE].slides.length })(Banner);

// @flow
import * as React from "react";
import { Nav } from "../components/nav";
import SubPageHeader from "../components/subpage-header/SubPageHeader";
import { Footer } from "../components/footer";
import { ProjectsSection } from "../components/sections";

function DefaultPage(props: {
  children: React.Node,
  renderHeader: Function,
  renderFooter: Function
}) {
  return (
    <div className="as-page as-page--default">
      {renderHeader()}
      {props.children}
      {renderFooter()}
    </div>
  );
}

DefaultPage.defaultProps = {
  renderHeader,
  renderFooter
};

function renderHeader(title, breadcrumbPath = {}) {
  const content = {
    title: "خدمات ما",
    breadcrumb: [
      { name: "خانه", link: "/" },
      { name: "خدمات ما", link: "/services" },
      { name: "سقف وافل", link: "/services/waffle-ceilings" }
    ]
  };
  return (
    <div className="header">
      <Nav />
      <SubPageHeader {...content} />
    </div>
  );
}
function renderFooter() {
  return <Footer />;
}

export default function ExamplePage() {
  return (
    <DefaultPage>
      <ProjectsSection />
    </DefaultPage>
  );
}

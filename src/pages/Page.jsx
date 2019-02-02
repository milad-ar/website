import React from "react";
import SubPageHeader from "../components/subpage-header/SubPageHeader";
import { Footer } from "../components/footer";
import { Nav } from "../components/nav";

function Page(props) {
  const { title, breadcrumb, className } = props;

  // Don't keep navigation position, always scroll to top
  window.scroll(0, 0);

  return (
    <div className={`page ${className}`}>
      <Header title={title} breadcrumb={breadcrumb} />
      {props.children}
      <Footer />
    </div>
  );
}

function Header(props) {
  return (
    <div className="as-page__header">
      <Nav />
      <SubPageHeader {...props} />
    </div>
  );
}

export default Page;

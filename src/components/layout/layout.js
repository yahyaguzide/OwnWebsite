import React from "react";

import "normalize.css";
import "../../fonts/fonts.css";
import * as style from "./style";
import Header from "../header/header";
import Footer from "../footer/footer";

function Layout({ children }) {
  return (
    <>
      <Header></Header>
      <div>
        <div>{children}</div>
        <style.sidePanalContainer></style.sidePanalContainer>
      </div>
    </>
  );
}

export default Layout;

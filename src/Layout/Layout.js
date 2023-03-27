import { Fragment } from "react";
import {Outlet} from "react-router-dom";
import Navbar from "./Navbar"
import Footer from "./Footer"


function Layout(props) {
  return (
    <Fragment>
   
      {/* A "layout route" is a good place to put markup you want to
          share across all the pages on your site, like navigation. */}
      <Navbar/>
      {/* An <Outlet> renders whatever child route is currently active,
          so you can think about this <Outlet> as a placeholder for
          the child routes we defined above. */}
      <Outlet/> {/* Outlet is not a “real” Component, it is imported from react-router-dom */}
      <Footer/>
    </Fragment>
  )
}
export default Layout
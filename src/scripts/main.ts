// import Axios from "axios";
declare var Swiper:any;

// Common function 


// Layout
import header from "./layout/header";
import breadcrumb from "./layout/breadcrumb";


// Page
import index from "./page/index";
import utilities from "./page/utilities";


// function Layout
function layout(){
  header.header();
  breadcrumb.breadcrumb();
}


// function Page
function page(){
  index.index();
  utilities.utilities();
}

document.addEventListener("DOMContentLoaded", async () => {
  layout();
  page();
});
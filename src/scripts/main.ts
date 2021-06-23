// import Axios from "axios";
declare var Swiper:any;

// Commom function 


// Layout
import header from "./layout/header";
import breadcrumb from "./layout/breadcrumb";


// Page
import index from "./page/index";


// function Layout
function layout(){
  header.header();
  breadcrumb.breadcrumb();
}


// function Page
function page(){
  index.index();
}

document.addEventListener("DOMContentLoaded", async () => {
  layout();
  page();
});
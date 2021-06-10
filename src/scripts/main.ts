import Axios from "axios";
declare var Swiper:any;

// Commom function 


// Layout
import header from "./layout/header";


// Page
import index from "./page/index";


// function Layout
function layout(){
  header.header();

}


// function Page
function page(){
  index.index();

}

document.addEventListener("DOMContentLoaded", async () => {
  layout();
  page();
});
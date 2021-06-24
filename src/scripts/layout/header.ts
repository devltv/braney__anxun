function clickHambergerHandle(){
  if (document.getElementById('header')){
    var iconHbg = document.getElementById('icons');
    iconHbg.addEventListener('click', function(){
      var headerHeight = <HTMLElement> document.getElementById('header');

      var listMenu = <HTMLElement> document.querySelector('.header__wrapper .navbar .navbar__list');
      listMenu.style.top = headerHeight.offsetHeight + "px";
      listMenu.classList.toggle('show');

      var bodyHeight = <HTMLElement> document.querySelector('body');
      if (listMenu.classList.contains('show')){
        bodyHeight.style.height ="100%";
        bodyHeight.style.overflow = "hidden";

        window.scrollTo({
          top: 0,
          left: 0,
          behavior: 'smooth'
        });
      }
      else{
        bodyHeight.style.height ="auto";
        bodyHeight.style.overflow = "auto";
      }
    })


  }
}

export default {
  header: function(){
    clickHambergerHandle();
  }
}
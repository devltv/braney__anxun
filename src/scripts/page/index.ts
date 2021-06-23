declare var Swiper:any;

function index2(){
  if(document.getElementById('index-2')){
    
  }
}

function index3(){
  if (document.getElementById('index-3')){
    // tạo swiper
    // tạo button next và prev ảo
    var btnReplaces = document.querySelectorAll('.swiper-button__replace');
    btnReplaces.forEach(function(btn){
      btn.innerHTML += `\
      <div class="swiper-button__replace--before">
        <svg xmlns="http://www.w3.org/2000/svg" width="26.65" height="17.567" viewBox="0 0 26.65 17.567" style="transform:rotate(270deg)">
          <path id="Path_5" data-name="Path 5" d="M1760,5251.718l9.082-9.082,9.082,9.082" transform="translate(-1755.757 -5238.393)" fill="none" stroke="#fff" stroke-linecap="round" stroke-width="6"/>
        </svg>
      </div>` + `
      <div class="swiper-button__replace--after">
        <svg xmlns="http://www.w3.org/2000/svg" width="26.65" height="17.567" viewBox="0 0 26.65 17.567"  style="transform:rotate(90deg)">
          <path id="Path_5" data-name="Path 5" d="M1760,5251.718l9.082-9.082,9.082,9.082" transform="translate(-1755.757 -5238.393)" fill="none" stroke="#fff" stroke-linecap="round" stroke-width="6"/>
        </svg>
      </div>
      `;
      var btnPrev = btn.getElementsByClassName('swiper-button-prev');
      var btnNext = btn.getElementsByClassName('swiper-button-next');


      var btnPrevReplace = btn.getElementsByClassName('swiper-button__replace--before');
      var btnNextReplace = btn.getElementsByClassName('swiper-button__replace--after');
      clickBtnReplaceHandle(<HTMLElement>btnPrevReplace.item(0), <HTMLElement>btnPrev.item(0));
      clickBtnReplaceHandle(<HTMLElement>btnNextReplace.item(0), <HTMLElement>btnNext.item(0));


      new Swiper(".index-news--swiper", {
        slidesPerView: 3,
        spaceBetween: 42,
        // slidesPerGroup: 3,
        loop: true,
        loopFillGroupWithBlank: true,
        // pagination: {
        //   el: ".swiper-pagination",
        //   clickable: true,
        // },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });
    })
  }
}

function clickBtnReplaceHandle(btn: HTMLElement, btnOld: HTMLElement){
  btn.addEventListener('click', function(){
    btnOld.click();
  })
}

export default {
  index: function(){
    index2();
    index3();
  }
}
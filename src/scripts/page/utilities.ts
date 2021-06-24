declare var Swiper: any;

function utilities1() {
  if (document.getElementById('utilities-1')) {
    new Swiper(".utilities-size-container", {
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
        renderBullet: function (index: any, className: any) {
          return '<span class="' + className + '">' + (index + 1) + "</span>";
        },
      },
    });

    // var cellFirst = document.querySelector('.box-details .table-utilities__row .key');
    // console.log([cellFirst]);
  }
}

function utilitiesBonus() {
  if (document.getElementById('utilities-1')) {
    // tạo swiper
    // tạo button next và prev ảo
    var btnReplaces = document.querySelectorAll('#utilities-1 .swiper-button__replace');
    btnReplaces.forEach(function (btn) {
      btn.innerHTML += `
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

      var swiperBullet = new Swiper(".utilities-number", {
        slidesPerView: 2,
        spaceBetween: 42,
        // slidesPerGroup: 3,
        // loop: true,
        // loopFillGroupWithBlank: true,
        // pagination: {
        //   el: ".swiper-pagination",
        //   clickable: true,
        // },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        breakpoints: {
          640: {
            slidesPerView: 2,
            spaceBetween: 42,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 42,
          },
          1028: {
            slidesPerView: 2,
            spaceBetween: 42,
          },
          1280: {
            slidesPerView: 2,
            spaceBetween: 42,
          }
        }
      });

      
      var listBullet = document.querySelectorAll('.swiper-pagination-bullet');
      var listNumber = document.querySelectorAll('.swiper-pagination__replace-numbers .number');
      listNumber.forEach(function (itemNumber) {
        itemNumber.addEventListener('click', function (e) {
          var indexNumber = this.innerHTML;

          listBullet.forEach(function(item){
            // console.log(item)
            if (item.innerHTML === indexNumber){
              clickBulletReplaceHandle(<HTMLElement> itemNumber,<HTMLElement>item);
            }
          })
        })
      })
    })
  }
}

function clickBulletReplaceHandle(btn: HTMLElement, btnOld: HTMLElement) {
  btnOld.click();

  console.log(btn.offsetParent.classList)

  if (btn.offsetParent.classList.contains('swiper-slide-next')){
    var btnNext = <HTMLElement>document.querySelector('.swiper-button__replace--after');
    btnNext.click();
    // alert(1)
  }
  else if (btn.offsetParent.classList.contains('swiper-slide-active')){
    var btnNext = <HTMLElement>document.querySelector('.swiper-button__replace--before');
    btnNext.click();
    // alert(1)
  }

  // var slides = document.querySelectorAll('.swiper-navigation__replace-numbers .swiper-slide');
  // slides.forEach(function(slide){
  //   console.log(slide);
  // })
}
function clickBtnReplaceHandle(btn: HTMLElement, btnOld: HTMLElement) {
  btn.addEventListener('click', function () {
    btnOld.click();
  })
}


export default {
  utilities: function () {
    utilities1();
    utilitiesBonus();
    // clickNumberNavigation();
  }
}
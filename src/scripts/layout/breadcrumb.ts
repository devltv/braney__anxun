
function addArrow(){
  if (document.getElementById('breadcrumb')){
    var items = document.querySelectorAll('.breadcrumb-item');
    items.forEach(function(item, index){
      if (index !== 0){
        item.innerHTML += `
        <svg class="breadcrumb-item__icon" xmlns="http://www.w3.org/2000/svg" width="6.646" height="10.465" viewBox="0 0 6.646 10.465">
          <path id="Path_5" data-name="Path 5" d="M1760,5246.454l3.818-3.818,3.818,3.818" transform="translate(5247.868 -1758.586) rotate(90)" fill="none" stroke="#00a79d" stroke-linecap="round" stroke-width="2"/>
        </svg>`;
      }
    })
  }
}



export default {
  breadcrumb: function(){
    addArrow();
  }
}
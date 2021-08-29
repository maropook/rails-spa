function popupImage() {
    var popup = document.getElementById('js-popup');
    if(!popup) return;

    var blackBg = document.getElementById('js-black-bg');
    var closeBtn = document.getElementById('js-close-btn');
    var showBtn = document.getElementById('js-show-popup');

    closePopUp(blackBg);
    closePopUp(closeBtn);
    closePopUp(showBtn);
    function closePopUp(elem) {
      if(!elem) return;
      elem.addEventListener('click', function() {
        popup.classList.toggle('is-show');
      });
    }
  }
  popupImage();


//   <div class="popup" id="js-popup">
//   <div class="popup-inner">
//     <div class="close-btn" id="js-close-btn"><i class="fas fa-times"></i></div>
//     <a href="#"><img src="./img/popup.jpg" alt="ポップアップ画像"></a>
//   </div>
//   <div class="black-background" id="js-black-bg"></div>
// </div>
// <button id="js-show-popup">Show Popup</button>

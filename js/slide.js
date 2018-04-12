/*    window.onload = function(){
        //꺽쇠나 dot으로 사진 부르는 함수 실행
        showSlides(slideIndex);
        //자동 슬라이드 함수 실행
          showSlides();
              
    }   */
//slide
var slideIndex = 0;

autoSlides();

function autoSlides() {
    var i;
    //사진 3개의 리스트를 slides에 대입
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    //사진 3개의 style.display 속성을 none으로 설정: 안보이게 만든다

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
   
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1
    }
     for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    setTimeout(autoSlides, 2000); // Change image every 2 seconds
}

showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    //사진3장을 slides 라는 변수에 넣음
    var slides = document.getElementsByClassName("mySlides");
    //dot 3개를 dots라는 변수에 넣음
    var dots = document.getElementsByClassName("dot");
    //n이 slides.length(3)보다 커지면 1로 환원:처음으로 돌린다.
    //사진 3개의 style.display 속성을 none으로 설정: 안보이게 만든다 
    if (n > slides.length) {
        slideIndex = 1;
    } //n(sliedIndex)이 1보다 작으면 (거꾸로 돌아갈 때)마지막 사진으로 이동
    if (n < 1) {
        slideIndex = slides.length;
    }
    //sliedes(사진들)을 보이지 않게 만든다.
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    //            모든 dot의 색상을 옅은 회색으로 만들어라
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    //
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";


}

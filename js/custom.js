$(function(){

  $(window).scroll(function(){
    let scrolling = $(this).scrollTop();
    if(scrolling > 100) {
        $('.navbar').addClass('header-bg');
    }else {
        $('.navbar').removeClass('header-bg');
    }
  });

    const second = 1000,
    minute = second * 60,
    hour = minute * 60,
    day = hour * 24;

let birthday = "Nov 24, 2020 00:00:00",
  countDown = new Date(birthday).getTime(),
  x = setInterval(function() {    

    let now = new Date().getTime(),
        distance = countDown - now;

    document.getElementById("days").innerText = Math.floor(distance / (day)),
      document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hour)),
      document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute)),
      document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second);

    //do something later when date is reached
    if (distance < 0) {
      let headline = document.getElementById("headline"),
          countdown = document.getElementById("countdown"),
          content = document.getElementById("content");

      headline.innerText = "It's my birthday!";
      countdown.style.display = "none";
      content.style.display = "block";

      clearInterval(x);
    }
    //seconds
  }, 0)

  
//Tounament scroll js
$(".tun_scroll").niceScroll({
  cursorcolor: "#1f004f",
  cursorwidth: "10px",
  cursorborder: "transparent",
  autohidemode: false,
  background: "#000",
  iframeautoresize: true,
  smoothscroll: true,
});

});
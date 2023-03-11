var countDownDate = new Date("Jan 5, 2024 15:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function () {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Output the result in an element with id="demo"
  document.getElementById("days").innerHTML = `<h3>${days}  d </h3>`
  document.getElementById("hours").innerHTML = `<h3>${hours}  h </h3>`
  document.getElementById("minutes").innerHTML = `<h3>${minutes}  m </h3>`
  document.getElementById("seconds").innerHTML = `<h3>${seconds}  s </h3>`

  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);




$('textarea').keyup(function () {
  let maxLength = 100
  let len = $(this).val().length;
  let remaining = maxLength - len
  if (remaining <= 0) {
    $('#char').text("your available character finished")
  }
  else {
    $('#char').text(remaining)
  }
})

$('#main span').click(function () {
  let wBox = $('.sidenav').innerWidth();
  console.log(wBox);
  if ($("#mySidenav").css('left') == '0px') {
    $('#mySidenav').animate({ left: `-${wBox}px` }, 1000);
    $('#main').animate({ marginLeft: `0px` }, 1000)
  }
  else {
    $('#mySidenav').animate({ left: `0px` }, 1000)
    $('#main').animate({ marginLeft: `${wBox}px` }, 1000)


  }
})

$('.closebtn').click(function() {
  let wBox = $('.sidenav').innerWidth();
    $('#mySidenav').animate({ left: `-${wBox}px` }, 1000);
    $('#main').animate({ marginLeft: `0px` }, 1000)
  
})



$('#singers h3').click(function () {
  $(this).next().slideToggle()
  $('#singers div').not($(this).next()).slideUp()
})
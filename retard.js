$(document).ready(function() {
  $('.welcome-anyways-i-dont-care-lol-shut-the-fuck-up-please-leave-me-alone-xdxdxdxdxdxd a').click(function() {
      var audio = document.getElementById('au');
      audio.play();
      $('.xdxdxdxdxdxd-container').fadeOut(400, function() {
          setTimeout(function() {
              $('.main-site-wrapper').fadeIn(400);
          }, 500); 
      });
  });

  $("#garry-tg").on("click", function () {
    window.open("https://t.me/garryvbiv", "_blank");
  });
  $("#pearl-doxbin").on("click", function () {
    window.open("https://doxbin.org/user/pearl", "_blank");
  });
  $("#garry-SX").on("click", function () {
    window.open(
      "https://lchat.at/to/garryfh4e9g8fegfhr0",
      "_blank"
    );
  });
  $(".bb-con").on("click", function () {
    window.open(
      "manifesto.txt",
      "_blank");
  });

  let originalText = "THE HARMONICA";
  let newText = "团队\"口琴\"";

  $(".container-g").click(function() {
      let currentText = $(".grp").text();
      $(".grp").text(currentText === originalText ? newText : originalText);
      $('.members').fadeOut()
      $(".additional-text").slideToggle(300);
  });

  $('.container-g').hover(
    function() {
        $('.gear').css('transform', 'rotate(360deg)');
    },
    function() {
        $('.gear').css('transform', 'rotate(0deg)');
    }
);

$('.roles').on('click', function() {
  $('#popup').fadeIn();
});

$('#close-popup').on('click', function() {
  $('#popup').fadeOut();
});
});
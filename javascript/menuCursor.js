//custom cursors
const screen_Width = window.matchMedia("(min-width: 415px)");
function myCursors() {
  if (screen_Width.matches) {
    //clicker cursors
    $(function () {
      $("a").mousemove(function (e) {
        $(".cursor").show().css({
          "height": "80px",
          "width": "80px",
          "top": "50%",
          "left": "50%",
          "transform": "translate(-50%, -50%)",
          "left": e.clientX + 5,
          "top": e.clientY + 5
        });
      }).mouseout(function () {
        $(".cursor").hide();
      });
    });

    $(function () {
      $("button").mousemove(function (e) {
        $(".cursor").show().css({
          "height": "80px",
          "width": "80px",
          "top": "50%",
          "left": "50%",
          "transform": "translate(-50%, -50%)",
          "left": e.clientX,
          "top": e.clientY
        });
      }).mouseout(function () {
        $(".cursor").hide();
      });
    });
    //home
    $(function () {
      $("p.home").mousemove(function (e) {
        $(".cursor-p-home").show().css({
          "height": "80px",
          "width": "80px",
          "top": "50%",
          "left": "50%",
          "transform": "translate(-50%, -50%)",
          "left": e.clientX,
          "top": e.clientY
        });
      }).mouseout(function () {
        $(".cursor-p-home").hide();
      });
    });
    //about us
    $(function () {
      $("p.about-us").mousemove(function (e) {
        $(".cursor-p-about-us").show().css({
          "height": "80px",
          "width": "80px",
          "top": "50%",
          "left": "50%",
          "transform": "translate(-50%, -50%)",
          "left": e.clientX,
          "top": e.clientY
        });
      }).mouseout(function () {
        $(".cursor-p-about-us").hide();
      });
    });
    //contact us
    $(function () {
      $(".text").mousemove(function (e) {
        $(".cursor-td-contact-us").show().css({
          "height": "80px",
          "width": "80px",
          "top": "50%",
          "left": "50%",
          "transform": "translate(-50%, -50%)",
          "left": e.clientX,
          "top": e.clientY
        });
      }).mouseout(function () {
        $(".cursor-td-contact-us").hide();
      });
    });
    $(function () {
      $("textarea").mousemove(function (e) {
        $(".cursor-td-contact-us").show().css({
          "height": "80px",
          "width": "80px",
          "top": "50%",
          "left": "50%",
          "transform": "translate(-50%, -50%)",
          "left": e.clientX,
          "top": e.clientY
        });
      }).mouseout(function () {
        $(".cursor-td-contact-us").hide();
      });
    });
    $(function () {
      $("input.input-contact-us").mousemove(function (e) {
        $(".cursor-input-contact-us").show().css({
          "height": "80px",
          "width": "80px",
          "top": "50%",
          "left": "50%",
          "transform": "translate(-50%, -50%)",
          "left": e.clientX,
          "top": e.clientY
        });
      }).mouseout(function () {
        $(".cursor-input-contact-us").hide();
      });
    });
    //privacy policy page
    $(function () {
      $("p.privacy").mousemove(function (e) {
        $(".cursor-p-privacy").show().css({
          "height": "80px",
          "width": "80px",
          "top": "50%",
          "left": "50%",
          "transform": "translate(-50%, -50%)",
          "left": e.clientX,
          "top": e.clientY
        });
      }).mouseout(function () {
        $(".cursor-p-privacy").hide();
      });
    });
  }

}


myCursors(screen_Width);
screen_Width.addListener(myCursors);
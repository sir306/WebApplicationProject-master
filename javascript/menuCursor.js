//custom cursors

//clicker cursors
$(function () {
  $("a").mousemove(function (e) {
    $(".cursor").show().css({
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

$(function () {
  $("button").mousemove(function (e) {
    $(".cursor").show().css({
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
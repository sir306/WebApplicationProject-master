//custom cursor
//body cursor
$(function() {
    $("body").mousemove(function(e) {
        $(".cursor1").show().css({
            "top": "50%",
            "left": "50%",
            "transform": "translate(-50%, -50%)",
            "left": e.clientX,
            "top": e.clientY
        });
    }).mouseout(function() {
        $(".cursor1").hide();
    });
});
//anchor cursor
$(function() {
    $("a").mousemove(function(e) {
        $(".cursor2").show().css({
            "top": "50%",
            "left": "50%",
            "transform": "translate(-50%, -50%)",
            "left": e.clientX,
            "top": e.clientY
        });
    }).mouseout(function() {
        $(".cursor2").hide();
    });
});
//button cursor
$(function() {
    $("button").mousemove(function(e) {
        $(".cursor2").show().css({
            "top": "50%",
            "left": "50%",
            "transform": "translate(-50%, -50%)",
            "left": e.clientX,
            "top": e.clientY
        });
        $(".cursor1").hide();
    }).mouseout(function() {
        $(".cursor2").hide();
        $(".cursor1").show().css({
            "top": "50%",
            "left": "50%",
            "transform": "translate(-50%, -50%)",
            "left": e.clientX,
            "top": e.clientY
        });
    });
});
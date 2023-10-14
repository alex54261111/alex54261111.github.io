$(document).ready(function() {
    let backEndClick1 = false

    $(".back-end-openButton").click(function () {
        $(".back-end-menuBox").stop().show(300);
    });
    $(".back-end-closeButton").click(function () {
        $(".back-end-menuBox").stop().hide(300);
    });
    let click1 = false
    let click2 = false
    let click3 = false
    $(".click1").click(function() {
        // 切换样式类
        $("#click1-buutton").toggleClass("click-buutton0 click-buutton180");

        // 切换click1的状态
        if (click1) {
            $(this).siblings("ul").stop().hide(300);
            console.log("click1"+click1);
        } else {
            $(this).siblings("ul").stop().show(300);
            console.log("click1"+click1);
        }
        click1 = !click1; // 切换click1的状态
    });

    $(".click2").click(function() {
        // 切换样式类
        $("#click2-buutton").toggleClass("click2-buutton0 click2-buutton180");
        // 切换click1的状态
        if (click2) {
            $(this).siblings("ul").stop().hide(300);
            console.log("click2"+click2);
        } else {
            $(this).siblings("ul").stop().show(300);
            console.log("click2"+click2);
        }
        click2 = !click2; // 切换click1的状态
    });

    $(".click3").click(function() {
        // 切换样式类
        $("#click2-buutton").toggleClass("click2-buutton0 click2-buutton180");

        // 切换click1的状态
        if (click2) {
            $(this).siblings("ul").stop().hide(300);
            console.log("click2=false");
        } else {
            $(this).siblings("ul").stop().show(300);
            console.log("click2=true");
        }

        click2 = !click2; // 切换click1的状态
    });
})
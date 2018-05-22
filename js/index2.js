var index = 0;
var lock = true;
var timer = null;
//点击右侧实现轮播
$("#rightBtn").click(function() {
    if (lock) {
        lock = false;

        index++;
        var targetValue = index * -790;
        $("#content").animate({
                left: targetValue
            },
            function() {
                if (index == 7) {
                    $("#content").css("left", 0);
                    index = 0;
                }
                lock = true;
            }
        );
        var temp = index;
        if (temp == 7) {
            temp = 0;
        }
        $("#control li")
            .eq(temp)
            .addClass("active")
            .siblings()
            .removeClass("active");
    }
});
//点击左侧按钮轮播
$("#leftBtn").click(function() {
    if (lock) {
        lock = false;

        index--;
        if (index < 0) {
            $("#content").css("left", -790 * ($('#content .item').length - 1));
            index = 6;
        }
        var targetValue = index * -790;
        $("#content").animate({
                left: targetValue
            },
            function() {
                lock = true;
            }
        );

        var temp = index;

        $("#control li")
            .eq(temp)
            .addClass("active")
            .siblings()
            .removeClass("active");
    }
});
//点击小点
$("#control li").click(function() {
    var index = $(this).index();
    var targetValue = index * -790;
    $("#content").animate({
            left: targetValue
        },
        1000,
        "linear"
    );
    $("#control li")
        .eq(index)
        .addClass("active")
        .siblings()
        .removeClass("active");
});
//自动轮播
timer = setInterval(rightClick, 2000);
//移入/移出
$("#banner").mouseover(function() {
    clearInterval(timer);
});
$("#banner").mouseout(function() {
    timer = setInterval(rightClick, 2000);
});
//封装
function rightClick(){
  $("#rightBtn").click();
};

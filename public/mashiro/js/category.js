$(function () {
    mui('.mui-scroll-wrapper').scroll({
        deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
    });

    $.ajax({
        url: '/category/queryTopCategory',
        success: function (data) {
            console.log(data);
            var html = template("categoryLeft", data);
            $(".main .left ul").html(html);
        }
    })

    $(".main .left ul").on("click","li",function () {
        var id = $(this).attr("left-id");

        $.ajax({
            url: '/category/querySecondCategory',
            data: {'id': id},
            success: function (data) {
                var html = template("categoryRight",data);
                console.log($(".main .right .mui-row"));
                $(".main .right .mui-row").html(html);
            }
        })
    })
})
$(function () {
    history();
    $(".main form button").on("click",function () {
        history();
    })

    function history() {
        var val = $(".main form input").val();
        var arr = [];
        var storage = localStorage.getItem("val");
        if(storage){
            arr = storage.split(',');
        }
        if(val){
            arr.push(val);
        }
        var str = arr.toString();
        localStorage.setItem("val",str);
        var obj = {rows:arr};
        console.log(obj);
        var html = template("tab-view",obj);
        $(".main ul").html(html);
    }

    $(".main ul").on("click","i",function () {
        $(this).parent().remove();
        var storage = localStorage.getItem("val");
        var arr = storage.toString();
        var id = $(this).attr("i-id");
        console.log(id);
        // arr.sp .splice(id,1);
        console.log(arr);
    })
})
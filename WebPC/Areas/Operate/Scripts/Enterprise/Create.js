﻿$("#CreateCancel").on("click", function () {
    $.closeParentWindow({
        status: false,
        //因为是指定iframe的url地址 iframeID 还是原来的
        winId: "Create"
    });
});

var CreateSuccess = function (hxr) {
    if (hxr.Status == true) {
        $.message(hxr.Message, true);
        setTimeout(function () {
            //直接指定iframe的url地址 用来切换选项卡
            //运营端请求地址要带上运营端目录/operate
            window.location.href = "/operate/Enterprise/CreateNext/" + hxr.Identify.ID + "?EnterpriseID=" + $("#EnterpriseID").val();
        }, 2000);
    }
    else {
        $.message(hxr.Message, false);
    }
}

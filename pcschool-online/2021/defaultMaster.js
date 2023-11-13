var winWidth, prewinWidth, winxs = 768;
var nua = navigator.userAgent
var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(nua);
var isIOS = /iPhone|iPad|iPod/i.test(nua);
var isAndroid = (nua.indexOf('Mozilla/5.0') > -1 && nua.indexOf('Android ') > -1 && nua.indexOf('AppleWebKit') > -1 && nua.indexOf('Chrome') === -1)

$(function () {
    winWidth = $(window).width();
    prewinWidth = winWidth;

    $('.linker').click(function (e) {
        e.preventDefault();
        linkerClick($(this));
    });

    $('.loginFirst').click(function (e) {
        e.preventDefault();
        var url = $(this).attr('href');
        doLogin2(url, function () {
            top.location.href = url;
        });
    });

    $('.popupWin').on('show.bs.modal', function (event) {
        var url = $(event.relatedTarget).attr('href');
        var tObj2 = $(this).data('relatedTarget2');
        if ((typeof (url) == 'undefined' || url == null || url == '') && $(tObj2)) {
            url = $(tObj2).attr('href');
        }
        if ($(tObj2) && $(tObj2).attr('data-modalclass') != null && $(tObj2).attr('data-modalclass') != '') {
            $(this).addClass($(tObj2).attr('data-modalclass'));
        }
        $('.popupWin iframe').attr('src', url);
    }).on('hidden.bs.modal', function (event) {
        var url = '/blank.html';
        $('.popupWin iframe').attr('src', url);
        var tObj2 = $(this).data('relatedTarget2');
        if ($(tObj2) && $(tObj2).attr('data-modalclass') != null && $(tObj2).attr('data-modalclass') != '') {
            $(this).removeClass($(tObj2).attr('data-modalclass'));
        }
        if ($(tObj2) && typeof ($(tObj2).attr('callback')) == 'function') {
            $(tObj2).attr('callback')();
        }
    });
});

function linkerClick(p, modalclass, callBack) {
    if (typeof (p) == 'string') {
        $('.popupWin').data('relatedTarget2', { 'href': p, 'data-modalclass': modalclass, 'callback': callBack });
    } else if (typeof (p) == 'object') {
        $('.popupWin').data('relatedTarget2', p);
    }

    $('.popupWin').modal('show');
}

function loginFail() {
    if (history.length > 1) {
        history.back();
    } else {
        location.replace('/');
    }
}

var isLoginLoading = false;
function doLogin2(url, callBack, callBack2) {
    if (isLoginLoading) {
        return;
    }
    isLoginLoading = true;
    $.ajax({
        type: "POST",
        url: "/ws2015.asmx/getLoginStatus",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        cache: false,
        success: function (data, status) {
            isLoginLoading = false;
            var dataAry = $.parseJSON(data.d);
            if (dataAry.length === 0) {
                alert("系統發生錯誤，請重試...#1");
            } else {
                var d = dataAry[0];

                if (d.islogin === 1) {
                    if (callBack && typeof (callBack) === 'function') {
                        callBack();
                    }
                } else {
                    if (url == null || url == '') {
                        url = location.href;
                    }
                    linkerClick('/login.aspx?ReturnUrl=' + url, 'modalLogin', callBack2);
                }
            }
        },
        error: function (jqXHR, textStatus, errorThrown) {
            isLoginLoading = false;
            logger(jqXHR);
            logger(textStatus);
            logger(errorThrown);
            alert("系統發生錯誤，請重試...");
        }
    });
}

function logger() {
    if (window.location.hostname.toLowerCase() !== "www.pcschool.com.tw") {
        if (typeof (console) !== 'undefined') {
            for (var i = 0; i < arguments.length; i++) {
                if (arguments.length > 1) {
                    console.log('-', arguments[i]);
                } else {
                    console.log(arguments[i]);
                }
            }
        }
    }
}

function closeLightBox() {
    //$.magnificPopup.close(); // $('.mfp-close').click();
}

function jumpTo(p) {
    $('html, body').stop().animate({
        'scrollTop': $(p).offset().top
    }, 1000, 'swing');
}

function iosYtvWrapper() {
    if (isIOS && $('.ytvWrapper')) {
        $('.ytvWrapper').removeClass('ytvSkin').addClass('ytvSkinIOS');
    }
}

//window.addEventListener("message", function (event) {
//    var d = event.data;
//    if (d.action) {
//        logger('message :', d);
//    }
//    switch (d.action) {
//        case 'resize':
//            //logger('d.h:', d.h, 'body.height:', $('.mfp-container').height());
//            //$('#myModal iframe,#myModal .modal-body').css('width', (d.w < 300 ? 300 : d.w)).css('height', (d.h < 450 ? 450 : (d.h > $('body').height() ? '80%' : d.h))); // d.w + 35
//            break;
//        case 'closeLightBox':
//            if (typeof (d.cmd) != 'undefined') {
//                switch (d.cmd) {
//                    case 1:
//                        // 
//                        break;
//                    case 2:
//                        // 
//                        break;
//                }
//            }
//            closeLightBox();
//            break;
//        case 'reload':
//            location.reload();
//        default:
//            break;
//    }
//});

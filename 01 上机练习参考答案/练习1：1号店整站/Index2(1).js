$(function() {
    $('.car_t').mouseenter(function() {
        $('.last').stop().fadeIn(200)
        pri = document.getElementsByClassName('J_smallTotalPrice');
        var allprice = 0; //一定要声明在循环外面
        for (var j = 0; j < pri.length; j++) {
            var everyprice = pri[j].firstChild.nodeValue.substr(1) - 0;
            allprice = allprice + everyprice; //
        }
        all_price.firstChild.nodeValue = '$' + allprice; //
    });
    $('.car_t').click(function() {
        $('.last').stop().fadeOut(200)
    });
})

//快讯轮播
$(function() {
    function move() {
        var marginTop = 0;
        var stop = false; //
        var stitv = setInterval(function() {
            if (stop == true) {
                return;
            }
            $('#express li').eq(0).animate({
                'margin-top': marginTop--
            }, 1, function() {
                if (!$(this).is(':animated')) { //$(this)就是$('#express li').eq(0) 即一直是最上面的li
                    if ($(this).height() < (-marginTop)) {
                        $(this).css('margin-top', '0').appendTo($('#express'))
                        marginTop = 0;
                    }
                }
            })
        }, 50)
        $('#express').mouseover(function() {
            stop = true;
        });
        $('#express').mouseout(function() {
            stop = false;
        });
    };
    move()
});
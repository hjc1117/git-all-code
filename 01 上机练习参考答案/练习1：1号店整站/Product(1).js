$(function() {
    var li_ = $('#choice1 ul li');
    var li_2 = $('#choice2 ul li');
    var img_ = $('.MagicZoom img');
    var n_btn_1 = $('.n_btn_1');
    var n_btn_2 = $('.n_btn_2');
    li_.click(function() {
        $(this).addClass('checked').siblings().removeClass('checked')
        img_.attr({
            'src': './images/per_' + ($(this).index() - 0 + 1) + '.jpg',
            'width': "390px",
            'height': "390px"
        })
    })
    li_2.click(function() {
        $(this).addClass('checked').siblings().removeClass('checked')
    });


    var n_ipt = $('.n_ipt').val();
    $('.n_ipt').blur(function() {
        n_ipt = $('.n_ipt').val()
        $('.n_ipt').attr('value', n_ipt)
    });
    n_btn_1.click(function() {
        n_ipt++;
        $('.n_ipt').attr('value', n_ipt);
    });
    n_btn_2.click(function() {
        if (n_ipt > 1) {
            n_ipt--;
            $('.n_ipt').attr('value', n_ipt)
        }
    })

})
$(function() {
    var flag = true;
    var stitv_;
    $('.tableText').click(function() {
        if (flag) {
            var sec = 60
            stitv_ = setInterval(function() {
                $('.tableText').text(sec-- + 's后重新发送')
                if (sec <= 0) {
                    clearInterval(stitv_);
                    $('.tableText').text('获取验证码')
                }
            }, 1000)
            if (sec > 0) {
                flag = false;
            }
            if ($('.tableText').text() == '获取验证码') {
                flag = true;
            }
        }
    })
})
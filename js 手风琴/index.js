function accordion() {
    // 1、获取dom元素ul
    var out = document.getElementById('ul12');


    // 2、设置宽高

    // 2-1、设置默认的宽高
    var defaulwidth = 100;
    var defaulheight = 70;

    // 2-1、选中图片的宽高
    var activewidth = 300;
    var activeheight = 380;


    // 3、设置几行几列
    var row = 4;
    var col = 5;


    // 6、设置ul的宽
    out.style.width = activewidth + defaulwidth * 4 + 'px';


    // 5、选中图片函数  activepic
    function activepic(index) {
        // 把下标转为坐标
        var x = index % col;
        var y = Math.floor(index / 5);
        for (var j = 0; j < col; j++) {
            for (var k = 0; k < row; k++) {
                // 把坐标转为下标 用来确定具体的某一个
                var cindex = col * k + j;
                if (x == j && y == k) {
                    console.log('选中的图片' + cindex);
                    out.children[cindex].style.width = activewidth + 'px';
                    out.children[cindex].style.height = activeheight + 'px';
                } else if (y == k) {
                    console.log('同行的图片' + cindex);
                    out.children[cindex].style.width = defaulwidth + 'px';
                    out.children[cindex].style.height = activeheight + 'px';
                } else if (x == j) {
                    console.log('同列的图片' + cindex);
                    out.children[cindex].style.width = activewidth + 'px';
                    out.children[cindex].style.height = defaulheight + 'px';
                } else {
                    console.log('小图');
                    out.children[cindex].style.width = defaulwidth + 'px';
                    out.children[cindex].style.height = defaulheight + 'px';
                }

            }
        }
    }

    // 7、默认选中第0个
    activepic(0);

    // 4、获取下标  给元素添加一个下标属性
    for (var i = 0; i < out.children.length; i++) {
        // 给每一个li添加一个ind的属性 等于下标值(i)
        out.children[i].ind = i;
        // 添加一个鼠标放上的事件
        out.children[i].onmouseenter = function() {
            // 调用选中的图片函数
            activepic(this.ind)
        }
    }
}
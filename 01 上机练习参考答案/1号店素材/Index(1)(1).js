var car_t = document.getElementsByClassName('car_t')[0]
var kk = document.getElementsByClassName('last')[0];
var shop = document.getElementsByClassName('shop')[0];
var all_price = document.getElementsByClassName('J_totalPrice')[0]; //总价格的class
var val = document.querySelectorAll('.plush');
var clear = document.querySelectorAll('.close ');
var J_inputCount = document.getElementsByClassName('J_inputCount') //数量
var J_totalCount = document.getElementsByClassName('J_totalCount')[0]; //总量
// console.log(J_totalCount.firstChild.nodeValue); //3
for (var i = 0; i < val.length; i++) {
    var jian = val[i].children[0] // -
    var jia = val[i].children[2] // +
    var x = clear[i];
    var pri;
    jia.onclick = function() {
        var price = this.parentElement.nextElementSibling.firstChild.nodeValue.substr(1) / this.parentElement.children[1].value; //拿到点击之前的单价价格
        this.parentElement.children[1].value = this.parentElement.children[1].value - 0 + 1;
        var n_price = price * this.parentElement.children[1].value;
        this.parentElement.nextElementSibling.firstChild.nodeValue = '￥' + n_price;
        pri = document.getElementsByClassName('J_smallTotalPrice');
        var allprice = 0; //一定要声明在循环外面
        var zongshu = 0;
        for (var j = 0; j < pri.length; j++) {
            var everyprice = pri[j].firstChild.nodeValue.substr(1) - 0;
            allprice = allprice + everyprice; //得到各个li的总价
            zongshu += J_inputCount[j].value - 0; //各个总数
        }
        J_totalCount.firstChild.nodeValue = '(' + zongshu + ')';
        all_price.firstChild.nodeValue = '￥' + allprice; //点加号的时候改变总价格
    };
    jian.onclick = function() {
        var price = this.parentElement.nextElementSibling.firstChild.nodeValue.substr(1) / this.parentElement.children[1].value; //拿到点击之前的单价价格
        this.parentElement.children[1].value = this.parentElement.children[1].value - 1; //点击后数量减一
        if (this.parentElement.children[1].value <= 0) {
            if (confirm('确定要删除该商品吗')) {
                shop.firstElementChild.removeChild(this.parentNode.parentNode.parentNode.parentNode.parentNode);

            } else { //否则不删除  value值+1
                this.parentElement.children[1].value = this.parentElement.children[1].value - 0 + 1
                return;
            }
        };
        var n_price = price * this.parentElement.children[1].value;
        this.parentElement.nextElementSibling.firstChild.nodeValue = '￥' + n_price;
        pri = document.getElementsByClassName('J_smallTotalPrice');
        var allprice = 0; //一定要声明在循环外面
        var zongshu = 0;
        for (var j = 0; j < pri.length; j++) {
            var everyprice = pri[j].firstChild.nodeValue.substr(1) - 0;
            allprice = allprice + everyprice; //得到各个li的总价
            zongshu += J_inputCount[j].value - 0; //各个总数
        }
        J_totalCount.firstChild.nodeValue = '(' + zongshu + ')';
        all_price.firstChild.nodeValue = '$' + allprice; //点减号的时候改变总价格
    }
    x.onclick = function() {
        if (confirm('确定要删除该商品吗')) {
            shop.firstElementChild.removeChild(this.parentNode.parentNode.parentNode.parentNode); //li
            pri = document.getElementsByClassName('J_smallTotalPrice');
            var allprice = 0; //一定要声明在循环外面
            var zongshu = 0;
            for (var j = 0; j < pri.length; j++) {
                var everyprice = pri[j].firstChild.nodeValue.substr(1) - 0;
                allprice = allprice + everyprice; //得到各个li的总价
                zongshu += J_inputCount[j].value - 0; //各个总数
            }
            J_totalCount.firstChild.nodeValue = '(' + zongshu + ')';
            all_price.firstChild.nodeValue = '$' + allprice; //点X号的时候改变总价格
        }

    };
}
//左边菜单渐变
var leftNav = document.getElementsByClassName('leftNav')[0]; //大的div
var point = leftNav.firstElementChild.children; //10个li
var fj = document.getElementsByClassName('fj');
for (var k = 0; k < point.length; k++) {
    fj[k].onmouseenter = function() {
        this.nextElementSibling.style.display = 'block';
    };
    fj[k].onmouseout = function() {
        this.nextElementSibling.style.display = 'none';
    }
}

//焦点图轮播
function lbt() {
    var index = 0;
    var stop = false;
    var $li_img = $('.slide_box li');
    var $li_ind = $('.num li');
    //2
    $li_ind.mouseover(function() {
        stop = true;
        // console.log($li_ind.index($(this)));0 1 2
        index = $li_ind.index($(this)); //$li_ind.index($(this))  $li_ind的下标: 你指到的标签所在父系的下标
        $li_ind.eq(index).addClass('active').stop().siblings().removeClass('active')
        $li_img.eq(index).stop().fadeIn().siblings().fadeOut()
    }).mouseout(function() {
        stop = false //3
    });
    //1
    setInterval(function() {
        if (stop == true) {
            return;
        }
        index++;
        if (index >= $li_img.length) {
            index = 0
        }
        $li_img.eq(index).stop().fadeIn().siblings().fadeOut();
        $li_ind.eq(index).addClass('active').stop().siblings().removeClass('active')
    }, 3000)
}
lbt()
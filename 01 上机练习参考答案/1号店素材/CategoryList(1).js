var up_ = document.getElementById('price_up');
var down_ = document.getElementById('price_down');
// console.log(up_.firstChild.nodeValue);
var cate_list = document.getElementsByClassName('cate_list')[0];
// console.log(cate_list.children.length); //20
// var price = document.getElementsByClassName('price')
var price = cate_list.children[0].children[1].children[0].firstChild.nodeValue.substr(1);
// console.log(cate_list.children[0].children[1].children[0].firstChild.nodeValue); //Y198

up_.onclick = function() {
    for (var i = 0; i < cate_list.children.length; i++) {
        for (var j = i + 1; j < cate_list.children.length; j++) {
            if (parseInt(cate_list.children[i].children[1].children[0].firstChild.nodeValue.substr(1)) > parseInt(cate_list.children[j].children[1].children[0].firstChild.nodeValue.substr(1))) {
                cate_list.insertBefore(cate_list.children[j], cate_list.children[i])
            }
        }
    }
}
down_.onclick = function() {
    for (var i = 0; i < cate_list.children.length; i++) {
        for (var j = i + 1; j < cate_list.children.length; j++) {
            if (parseInt(cate_list.children[i].children[1].children[0].firstChild.nodeValue.substr(1)) < parseInt(cate_list.children[j].children[1].children[0].firstChild.nodeValue.substr(1))) {
                cate_list.insertBefore(cate_list.children[j], cate_list.children[i])
            }
        }
    }
}
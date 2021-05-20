// 排序
var $listBox = $('.cate_list')
var isDesc = true
$('#sortPrice').click(function(){
    var list = $('li', $listBox).toArray()
    console.log(list);
    isDesc = !isDesc
    list.sort(function(li1, li2) {
        var price1 = $('.price span', li1).text().slice(1)
        var price2 = $('.price span', li2).text().slice(1)
        var diff = price1 - price2

        return isDesc ? -diff : diff
    })

    $listBox.empty()
    $listBox.append(list)

    return false;
})
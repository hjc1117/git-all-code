// - setCookie()——创建Cookie

// 键名  值  过期时间  key  time  vlue  
function setCookie(key,value,time){
    var date = new Date();
    date.setDate(date.getDate()+time);
    document.cookie= key+'='+value+';expires='+date;
}

// - getCookie()——获取Cookie  key 来获取
function getCookie(key){
    var cookies = document.cookie;
    var arry = cookies.split('; ');
    for(var i=0;i<arry.length;i++){
        var n_arry = arry[i].split('=');
        if(n_arry[0] == key){
            return(n_arry[1]);
        }
    }
}

// - removeCookie()——删除Cookie

function removeCookie(key){
    this.setCookie(key,'',-1);
}
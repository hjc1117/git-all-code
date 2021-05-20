var data = {
    "name":"张三",
    "address":"美国人",
    "age":"5"
}

// 看到callback  就知道  是一个jsonp请求  
// callback后面的参数 封装成一个函数  然后把当前数据 封装成对象 作为参数传进函数中
fn(data);
// 1、获取页面元素
var video = document.getElementById('video');
var jp_play = document.getElementsByClassName('jp-play')[0];//播放按钮
var jp_pause = document.getElementsByClassName('jp-pause')[0];//暂停按钮
var jp_duration = document.getElementsByClassName('jp-duration')[0];//视频总时间
var jp_current_time = document.getElementsByClassName('jp-current-time')[0];//当前时间
var jp_seek_bar = document.getElementsByClassName('jp-seek-bar')[0];//整个进度条
var jp_play_bar = document.getElementsByClassName('jp-play-bar')[0];//当前播放的进度条
var jp_full_screen = document.getElementsByClassName('jp-full-screen')[0];//全屏按钮

// 1、video 元素 绑定属性 可以播放
video.addEventListener('canplay', function () {
    //2、播放按钮
    jp_play.addEventListener('click', function () {
        //视频可以播放
        video.play();
        jp_play.style.display = 'none';
        //暂停按钮出现  编程block
        jp_pause.style.display = 'block';
    })


    //3、暂停按钮
    jp_pause.addEventListener('click', function () {
        //视频可以播放
        video.pause();
        this.style.display = 'none';
        //暂停按钮出现  编程block
        jp_play.style.display = 'block';
    })


    // 4、显示总时长  单位是秒
    //                分 - 秒
    jp_duration.innerText = formart(video.duration);


    // 时间更新
    video.addEventListener('timeupdate',function(){
        // 5、显示当前时间
        jp_current_time.innerText = formart(video.currentTime);

        //根据百分比 设置进度条的宽度
        jp_play_bar.style.width = (video.currentTime/video.duration)*100+'%';
    })


    // 6、 拖拽进度条  点在了进度条上面
    jp_seek_bar.addEventListener('click',function(e){
        // e代表当前时间  e 当前的点击事件
        e = e|| window.event;
        var width = jp_seek_bar.offsetWidth; //元素的宽度
        var small = e.offsetX;
        jp_play_bar.style.width = (small/width)*100+'%';

        //根据比例设置播放时间
        jp_current_time.innerHTML = formart((small/width)*(video.duration)) ;

        //设置播放位置 currentTime 播放从开始到现在的位置
        video.currentTime = (small/width)*video.duration;

    })


    // 7、设置全屏
    jp_full_screen.addEventListener('click',function(){
        video.webkitRequestFullScreen();
    })
    

})


function formart(time) {
    //秒  然后换算成分
    var min = Math.floor(time / 60);
    min > 10 ? min : min = ('0' +min);
    //得到秒
    var s = Math.floor(time % 60);
    s > 10 ? s : s = ('0' + s);

    return min + ':' + s;

}




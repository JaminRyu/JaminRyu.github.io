// 为wechatButton设置点击事件和鼠标悬浮事件
var wechatButton = document.getElementById('wechatButton');
if (wechatButton) {
    wechatButton.onclick = function() {
        var imageUrl = "images/my_wechat.png";
        window.open(imageUrl, '_blank');
    };

    var wechatImage = wechatButton.getElementsByTagName('img')[0];  // 更改变量名称
    if (wechatImage) {
        wechatButton.onmouseover = function() {
            wechatImage.src = 'images/wechat_icon_on.png'; 
        };

        wechatButton.onmouseout = function() {
            wechatImage.src = 'images/wechat_icon_off.png'; 
        };
    }
}

// 为xiaohongshuButton设置点击事件和鼠标悬浮事件
var xiaohongshuButton = document.getElementById('xiaohongshuButton');
if (xiaohongshuButton) {
    xiaohongshuButton.onclick = function() {
        var imageUrl = "https://www.xiaohongshu.com/user/profile/64ee1d8b000000000100565b";
        window.open(imageUrl, '_blank');
    };

    var xhsImage = xiaohongshuButton.getElementsByTagName('img')[0];  // 更改变量名称
    if (xhsImage) {
        xiaohongshuButton.onmouseover = function() {
            xhsImage.src = 'images/xiaohongshu_icon_on.png'; 
        };

        xiaohongshuButton.onmouseout = function() {
            xhsImage.src = 'images/xiaohongshu_icon_off.png'; 
        };
    }
}
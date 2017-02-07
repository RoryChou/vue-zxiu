/**
 * Created by Administrator on 2017/2/6.
 */
module.exports = (function () {
   //计算html元素font-size
    //iphone 4 :width=320px; 1rem = 100px; dpr = 2;
    var doc = document.documentElement; //获取根元素的dom节点;
    var curDeviceWidth = doc.clientWidth || window.innerWidth; //拿到当前设备的宽度
    //动态的改变根元素字体大小：
    doc.style.fontSize = curDeviceWidth/2 * (100/320) + 'px';
})();
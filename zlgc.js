
// JavaScript 代码
var zlgcSlider = document.getElementById('zlgcSlider');
      
// 图片列表
var images = [
    'zlgzlgc/zlgc.jpgc',
    'zlgc/tjtn.jpg',
    'zlgc/graduation.jpg',
    'zlgc/summer.jpg',
    'zlgc/zlgcdraw.jpg'
];
var currentIndex = 0;

// 自动轮播函数
function autoSlide() {
    currentIndex = (currentIndex + 1) % images.length;
    updateSlider();
}
    
// 更新图片列表的位置
function updateSlider() {
    var newPosition = -currentIndex * 100 + '%';
    zlgcSlider.style.transform = 'translateX(' + newPosition + ')';
}
    
// 设置定时器，每隔一段时间调用autoSlide函数
setInterval(autoSlide, 3000); // 3000 毫秒（3 秒）

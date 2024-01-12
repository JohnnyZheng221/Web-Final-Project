// 定義函數
function showInfo() { 
  // 獲取元素
  var info = document.getElementById('ghg-info');
  // 切換顯示或隱藏
  info.style.display = info.style.display === 'none' ? 'block' : 'none';
  // 改變顏色為紫色
  document.getElementById('ghg').style.color = 'purple';
}

//Getting the button element
var mybutton = document.getElementById("scrollBtn"); 
//When user scrolls, scroll popup
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

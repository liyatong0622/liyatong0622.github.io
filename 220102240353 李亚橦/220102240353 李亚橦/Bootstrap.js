// 2.js
document.addEventListener('DOMContentLoaded', function() {
    // 使用Bootstrap的组件
    var myModal = new bootstrap.Modal(document.getElementById('myModal'), {
        keyboard: false
    });

    // 自定义脚本
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            document.querySelector('.scrollTop').classList.add('show');
        } else {
            document.querySelector('.scrollTop').classList.remove('show');
        }
    });

    // 点击回到顶部按钮
    document.querySelector('.scrollTop').addEventListener('click', function() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});

//绑定网站
fetch('https://liyatong0622.github.io/')
  .then(response => response.text())
  .then(html => {
    document.getElementById('wangye').innerHTML = html;
  })
  .catch(error => console.error('Error:', error));
  
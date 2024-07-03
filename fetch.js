//绑定网站
fetch('https://liyatong0622.github.io/rili')
  .then(response => response.text())
  .then(html => {
    document.getElementById('wangye').innerHTML = html;
  })
  .catch(error => console.error('Error:', error));
  
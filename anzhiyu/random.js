var posts=["2024/12/14/使用 Hexo + GitHub Pages 部署个人博客/","2024/12/16/为 Hexo 绑定自己的域名/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };
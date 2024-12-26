var posts=["2024/01/16/Hello world/"];function toRandomPost(){
    window.location.href='/'+posts[Math.floor(Math.random() * posts.length)];
  };var friend_link_list=[{"name":"安知鱼","link":"https://blog.anheyu.com/","avatar":"https://npm.elemecdn.com/anzhiyu-blog-static@1.0.4/img/avatar.jpg","descr":"生活明朗，万物可爱","siteshot":"https://npm.elemecdn.com/anzhiyu-theme-static@1.1.6/img/blog.anheyu.com.jpg","color":"vip","tag":"技术"},{"name":"张洪HEO","link":"https://blog.zhheo.com/","avatar":"https://bu.dusays.com/2022/12/28/63ac2812183aa.png","descr":"分享设计与科技生活","color":"vip","tag":"技术"},{"name":"阳小楊","link":"https://blog.yxyang.top","avatar":"https://pic.imgdb.cn/item/65708f75c458853aefa8c951.jpg","descr":"无人了解你的灵魂．","siteshot":"https://pic.imgdb.cn/item/65709596c458853aefc6469c.png"},{"name":"小孙同学","link":"https://blog.sunguoqi.com","avatar":"https://blog.sunguoqi.com/images/avatar.jpg","descr":"路虽远行则将至，事虽难做则必成！"},{"name":"小张同学","link":"https://www.blog.xiaozhangstu.com/","avatar":"https://www.images.xiaozhangstu.com/i/2023/07/15/64b2555630746.jpg","descr":"小张的进步记录","siteshot":"http://www.images.xiaozhangstu.com/i/2023/07/23/64bcf0d7ad356.png"},{"name":"任平生","link":"https://buuu.cn/","avatar":"https://buuu.cn/favicon.jpg","descr":"竹杖芒鞋轻胜马 谁怕? 一蓑烟雨任平生","siteshot":"https://buuu.cn/siteshot.jpg"}];
    var refreshNum = 1;
    function friendChainRandomTransmission() {
      const randomIndex = Math.floor(Math.random() * friend_link_list.length);
      const { name, link } = friend_link_list.splice(randomIndex, 1)[0];
      Snackbar.show({
        text:
          "点击前往按钮进入随机一个友链，不保证跳转网站的安全性和可用性。本次随机到的是本站友链：「" + name + "」",
        duration: 8000,
        pos: "top-center",
        actionText: "前往",
        onActionClick: function (element) {
          element.style.opacity = 0;
          window.open(link, "_blank");
        },
      });
    }
    function addFriendLinksInFooter() {
      var footerRandomFriendsBtn = document.getElementById("footer-random-friends-btn");
      if(!footerRandomFriendsBtn) return;
      footerRandomFriendsBtn.style.opacity = "0.2";
      footerRandomFriendsBtn.style.transitionDuration = "0.3s";
      footerRandomFriendsBtn.style.transform = "rotate(" + 360 * refreshNum++ + "deg)";
      const finalLinkList = [];
  
      let count = 0;

      while (friend_link_list.length && count < 3) {
        const randomIndex = Math.floor(Math.random() * friend_link_list.length);
        const { name, link, avatar } = friend_link_list.splice(randomIndex, 1)[0];
  
        finalLinkList.push({
          name,
          link,
          avatar,
        });
        count++;
      }
  
      let html = finalLinkList
        .map(({ name, link }) => {
          const returnInfo = "<a class='footer-item' href='" + link + "' target='_blank' rel='noopener nofollow'>" + name + "</a>"
          return returnInfo;
        })
        .join("");
  
      html += "<a class='footer-item' href='/link/'>更多</a>";

      document.getElementById("friend-links-in-footer").innerHTML = html;

      setTimeout(()=>{
        footerRandomFriendsBtn.style.opacity = "1";
      }, 300)
    };
if(!self.define){let e,i={};const c=(c,a)=>(c=new URL(c+".js",a).href,i[c]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=c,e.onload=i,document.head.appendChild(e)}else e=c,importScripts(c),i()})).then((()=>{let e=i[c];if(!e)throw new Error(`Module ${c} didn’t register its module`);return e})));self.define=(a,r)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(i[n])return;let d={};const s=e=>c(e,n),b={module:{uri:n},exports:d,require:s};i[n]=Promise.all(a.map((e=>b[e]||s(e)))).then((e=>(r(...e),d)))}}define(["./workbox-42674def"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"404.html",revision:"95804263d8bb0c5137f5fef32de3c1c2"},{url:"2024/01/16/Hello world/index.html",revision:"04f7b3a7c561dbd8d032c59017e16a1e"},{url:"about/index.html",revision:"a472279bf88b49f0fa4ae0e033c0ea6d"},{url:"anzhiyu/random.js",revision:"da869fa5f08306a9386c17c1456f1c29"},{url:"archives/2024/01/index.html",revision:"66db931fec197a47c53c8b06bba0b7a5"},{url:"archives/2024/index.html",revision:"51045f84039301ad849dd5a719bca641"},{url:"archives/index.html",revision:"401102d2f78bbaae1d3049b89f523d5d"},{url:"categories/index.html",revision:"edefdc557d4947814884d472385ae8b1"},{url:"comments/index.html",revision:"f01b8b3aefc098431133b7d4257e6b58"},{url:"css/index.css",revision:"6f1b0922bef29e8938415ac2fb494e7c"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"equipment/index.html",revision:"2a6c90455301ce0475a9fca118180647"},{url:"essay/index.html",revision:"ba6884e889d05dc57d738d61d4d3cea2"},{url:"fcircle/index.html",revision:"085261e707ee377b9f9a3bd90b952b50"},{url:"img/404.jpg",revision:"8190796a570d269ef04b777d93d44e6d"},{url:"img/512.png",revision:"701819a72025df4d8e2a111c1c8f2c72"},{url:"img/algolia.svg",revision:"88450dd56ea1a00ba772424b30b7d34d"},{url:"img/alipay.jpg",revision:"f4b634a506a37c8f182bbf7550a4230f"},{url:"img/apple-icon-180.png",revision:"699195b9ce975fd5f39502b82982cab1"},{url:"img/comment_bg.png",revision:"fe6bbe142eb7dc7b4f876ae4f5af97d0"},{url:"img/default_cover.jpg",revision:"8b35831759dc5f66710c2839422109d5"},{url:"img/favicon.png",revision:"a8e09fdc4f425c4474b173ba52da4632"},{url:"img/friend_404.gif",revision:"d09ab53cb5bb15079ce8e3d90b157353"},{url:"img/icon-128.png",revision:"767e0506eaa0ec6b4c769fec80041ba7"},{url:"img/icon-16.png",revision:"6cf9c82fa99c9208d27aa64a9eea3ee8"},{url:"img/icon-256.png",revision:"46c031bd9c85164248f879adc811fd74"},{url:"img/icon-32.png",revision:"db59557704568996daaf1595452e0a0e"},{url:"img/icon-512.png",revision:"a8e09fdc4f425c4474b173ba52da4632"},{url:"img/icon-64.png",revision:"be1f3ca0610c50a4bfd15ff87f0e2e23"},{url:"img/loading.gif",revision:"05fb29f4e677ff6057ef55925f46e9b0"},{url:"img/manifest-icon-192.maskable.png",revision:"2fcefc70614b2433ad02648f823d3a75"},{url:"img/manifest-icon-665.maskable.png",revision:"a8e09fdc4f425c4474b173ba52da4632"},{url:"img/siteicon/16.png",revision:"3de470acb5237bf16318d827443dd5f1"},{url:"img/siteicon/32.png",revision:"802aa4685b3652d5a1b6e5a6323cf3c0"},{url:"img/siteicon/apple-icon-180.png",revision:"ac045b7b6012d72ccbcffb07727c7b11"},{url:"img/siteicon/manifest-icon-192.maskable.png",revision:"87c1b5883834c2164e20e737bd5c2517"},{url:"img/siteicon/manifest-icon-512.maskable.png",revision:"85b846b5722c684339c8bb3e520bcc6a"},{url:"img/wechatpay.jpg",revision:"75f68bf391cd4dba2896d0f89b7c99c4"},{url:"img/永劫无间.jpg",revision:"95de4ef9f43fc4785b32c9c5ce599ff1"},{url:"index.html",revision:"14a99b84c261af1b52e702548ecc0ee3"},{url:"js/anzhiyu/ai_abstract.js",revision:"e4baa11685a6c14d4130b5b74d9222dc"},{url:"js/anzhiyu/comment_barrage.js",revision:"c5ca32eab1b5db6744df49cffaefa3a6"},{url:"js/anzhiyu/people.js",revision:"b946db8294a26b0b91e93dca5abda935"},{url:"js/anzhiyu/random_friends_post.js",revision:"30e5b8070503360d29e26e1b6db29efd"},{url:"js/anzhiyu/right_click_menu.js",revision:"586c1eecf6617180a50d419def5fd4c0"},{url:"js/main.js",revision:"0ca6e958debf5d18e10ead8c0c00191c"},{url:"js/search/algolia.js",revision:"3ce06f0458bccd45a20ae797cccb6561"},{url:"js/search/local-search.js",revision:"0f5dddc0c88389610bae38a044ee7a8a"},{url:"js/tw_cn.js",revision:"80822f672b15a8105128e305e9acbed4"},{url:"js/utils.js",revision:"b2bbde9d96fc4ded6c7a163038818ae5"},{url:"link/index.html",revision:"f1d126b9a021f380535d68c94dd931de"},{url:"music/index.html",revision:"71d9fbb7b38546c62ffb27b0fd2632e2"},{url:"tags/index.html",revision:"11be24cb78575b45f34438f2da2a5301"},{url:"/",revision:"index-20240927032050039"},{url:"music/",revision:"music-20240927032050039"},{url:"about/",revision:"about-20240927032050039"}],{})}));
//# sourceMappingURL=service-worker.js.map

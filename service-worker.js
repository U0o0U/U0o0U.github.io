if(!self.define){let e,i={};const c=(c,a)=>(c=new URL(c+".js",a).href,i[c]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=c,e.onload=i,document.head.appendChild(e)}else e=c,importScripts(c),i()})).then((()=>{let e=i[c];if(!e)throw new Error(`Module ${c} didn’t register its module`);return e})));self.define=(a,r)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(i[n])return;let s={};const d=e=>c(e,n),b={module:{uri:n},exports:s,require:d};i[n]=Promise.all(a.map((e=>b[e]||d(e)))).then((e=>(r(...e),s)))}}define(["./workbox-42674def"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"404.html",revision:"02951b84057bb515587b090eb4b0f37d"},{url:"2024/01/16/Hello world/index.html",revision:"8369c6ab079e6935dfe5a165147df188"},{url:"about/index.html",revision:"4c5bff0b5eb62bdb40810c555318ec95"},{url:"anzhiyu/random.js",revision:"189d844284ffbf65146549cbc031d61f"},{url:"archives/2024/01/index.html",revision:"820640f7d13e0c03a936d9af0ceeb909"},{url:"archives/2024/index.html",revision:"a509ce00d59881462a55abca05ccc8b1"},{url:"archives/index.html",revision:"151e9bd3fba58bbe154be12484f271fd"},{url:"categories/index.html",revision:"01272af84f634553be144b9168bb9526"},{url:"comments/index.html",revision:"071ee44b1f45647ed566d7ae07b5f5a6"},{url:"css/index.css",revision:"db02913f8be03514338a8f87a5f88043"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"equipment/index.html",revision:"64027540355c895ed84eb018e5772dd7"},{url:"essay/index.html",revision:"ba26b8692b9cd079622c18f107e3a5e5"},{url:"fcircle/index.html",revision:"8a7ea07d27fa9f761aa363b3f232f4ff"},{url:"img/404.jpg",revision:"8190796a570d269ef04b777d93d44e6d"},{url:"img/512.png",revision:"701819a72025df4d8e2a111c1c8f2c72"},{url:"img/algolia.svg",revision:"88450dd56ea1a00ba772424b30b7d34d"},{url:"img/alipay.jpg",revision:"f4b634a506a37c8f182bbf7550a4230f"},{url:"img/apple-icon-180.png",revision:"699195b9ce975fd5f39502b82982cab1"},{url:"img/comment_bg.png",revision:"fe6bbe142eb7dc7b4f876ae4f5af97d0"},{url:"img/default_cover.jpg",revision:"8b35831759dc5f66710c2839422109d5"},{url:"img/favicon.png",revision:"a8e09fdc4f425c4474b173ba52da4632"},{url:"img/friend_404.gif",revision:"d09ab53cb5bb15079ce8e3d90b157353"},{url:"img/icon-128.png",revision:"767e0506eaa0ec6b4c769fec80041ba7"},{url:"img/icon-16.png",revision:"6cf9c82fa99c9208d27aa64a9eea3ee8"},{url:"img/icon-256.png",revision:"46c031bd9c85164248f879adc811fd74"},{url:"img/icon-32.png",revision:"db59557704568996daaf1595452e0a0e"},{url:"img/icon-512.png",revision:"a8e09fdc4f425c4474b173ba52da4632"},{url:"img/icon-64.png",revision:"be1f3ca0610c50a4bfd15ff87f0e2e23"},{url:"img/loading.gif",revision:"05fb29f4e677ff6057ef55925f46e9b0"},{url:"img/manifest-icon-192.maskable.png",revision:"2fcefc70614b2433ad02648f823d3a75"},{url:"img/manifest-icon-665.maskable.png",revision:"a8e09fdc4f425c4474b173ba52da4632"},{url:"img/siteicon/16.png",revision:"3de470acb5237bf16318d827443dd5f1"},{url:"img/siteicon/32.png",revision:"802aa4685b3652d5a1b6e5a6323cf3c0"},{url:"img/siteicon/apple-icon-180.png",revision:"ac045b7b6012d72ccbcffb07727c7b11"},{url:"img/siteicon/manifest-icon-192.maskable.png",revision:"87c1b5883834c2164e20e737bd5c2517"},{url:"img/siteicon/manifest-icon-512.maskable.png",revision:"85b846b5722c684339c8bb3e520bcc6a"},{url:"img/wechatpay.jpg",revision:"75f68bf391cd4dba2896d0f89b7c99c4"},{url:"img/永劫无间.jpg",revision:"95de4ef9f43fc4785b32c9c5ce599ff1"},{url:"index.html",revision:"5bec787e3286e802a47724eb4ff1dbd7"},{url:"js/anzhiyu/ai_abstract.js",revision:"e4baa11685a6c14d4130b5b74d9222dc"},{url:"js/anzhiyu/comment_barrage.js",revision:"c5ca32eab1b5db6744df49cffaefa3a6"},{url:"js/anzhiyu/people.js",revision:"b946db8294a26b0b91e93dca5abda935"},{url:"js/anzhiyu/random_friends_post.js",revision:"30e5b8070503360d29e26e1b6db29efd"},{url:"js/anzhiyu/right_click_menu.js",revision:"586c1eecf6617180a50d419def5fd4c0"},{url:"js/main.js",revision:"0ca6e958debf5d18e10ead8c0c00191c"},{url:"js/search/algolia.js",revision:"3ce06f0458bccd45a20ae797cccb6561"},{url:"js/search/local-search.js",revision:"0f5dddc0c88389610bae38a044ee7a8a"},{url:"js/tw_cn.js",revision:"80822f672b15a8105128e305e9acbed4"},{url:"js/utils.js",revision:"b2bbde9d96fc4ded6c7a163038818ae5"},{url:"link/index.html",revision:"75de330d3801aad511af6793003583e8"},{url:"music/index.html",revision:"6d8c59d505255ef9b973de4d91c35e34"},{url:"tags/index.html",revision:"9e9f14241b2ab47f31755a0f5e2d8661"},{url:"/",revision:"index-20240709082728108"},{url:"music/",revision:"music-20240709082728108"},{url:"about/",revision:"about-20240709082728108"}],{})}));
//# sourceMappingURL=service-worker.js.map

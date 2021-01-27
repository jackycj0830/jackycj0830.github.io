var gtt = document.querySelector('.GoToTop')
    window.onscroll = function(){

    var nowScrollTop_safari = document.body.scrollTop
    var nowScrollTop_google = document.documentElement.scrollTop
        
        if(nowScrollTop_safari > 200  || nowScrollTop_google >200){
            gtt.classList.add('active')
        }else{
            gtt.classList.remove('active')
        }
    }


    gtt.onclick = function(){
        document.documentElement.scrollTop = 0
        document.body.scrollTop = 0
}

var innerHTML_Portfolio = [
    {
        nav_h1_sr_only:'Portfolio / Resume with Bootstrap',
        title:'Resume with Bootstrap',
        a_href_link:'https://lenovomi0403.github.io/Resume/',
        img_link:'./01-img/01_Portfolio-01_Resume with Bootstrap.png',
        span:'●  UI frameworks：Bootstrap<br>●  RWD 版型<br>●  innerHTML structure<br>●  SCSS'
    },
    {
        nav_h1_sr_only:'Portfolio / Learning Process',
        title:'Learning Process',
        a_href_link:'https://lenovomi0403.github.io/Resume/Learning%20Process/',
        img_link:'./01-img/01_Portfolio-02_Learning Process.png',
        span:'●  UI frameworks：Bootstrap<br>●  RWD 版型<br>●  innerHTML structure<br>●  SCSS<br>●  CSS Grid Layout'
    },
    {
        nav_h1_sr_only:'Portfolio / README.md',
        title:'README.md',
        a_href_link:'https://lenovomi0403.github.io/Resume/README.md/#/',
        img_link:'./01-img/01_Portfolio-03_READMEmd.png',
        span:'●  JavaScript frameworks：Reveal.js<br>●  JavaScript libraries：Marked.js'
    },
    {
        nav_h1_sr_only:'Portfolio / 苑裡 [ 掀冊店 ] 獨立書店',
        title:'苑裡 [ 掀冊店 ] 獨立書店',
        a_href_link:'https://lenovomi0403.github.io/taketheseawind/',
        img_link:'./01-img/01_Portfolio-06_taketheseawind.png',
        span:'●  純手刻 HTML 、 CSS 、 JavaScript<br>●  RWD 版型'
    },
    {
        nav_h1_sr_only:'Portfolio / Resume with Semantic UI',
        title:'Resume with Semantic UI',
        a_href_link:'https://lenovomi0403.github.io/Learning%20process/Resume/',
        img_link:'./01-img/01_Portfolio-07_Resume with Semantic UI.png',
        span:'●  UI frameworks：Semantic-ui'
    },
    {
        nav_h1_sr_only:'Portfolio / RWD Effect on issuu',
        title:'RWD Effect on issuu',
        a_href_link:'https://issuu.com/lenovomi0403/docs/resume_website_rwd_effect_mockup',
        img_link:'./01-img/01_Portfolio-04_RWD Effect on issuu.png',
        span:'●  Resume with Bootstrap RWD Effect on issuu'
    },
    {
        nav_h1_sr_only:'Portfolio / RWD Effect on Pinterest',
        title:'RWD Effect on Pinterest',
        a_href_link:'https://www.pinterest.com/lenovomi0403/front-end-website/',
        img_link:'./01-img/01_Portfolio-05_RWD Effect on Pinterest.png',
        span:'●  Resume with Bootstrap RWD Effect on Pinterest'
    },
    {
        nav_h1_sr_only:'Portfolio / Graphic Design',
        title:'Graphic Design',
        a_href_link:'https://issuu.com/lenovomi0403/docs/graphic_design_learning_process',
        img_link:'./01-img/01_Portfolio-08_graphic design.png',
        span:'主辦單位：勞動力發展屬中彰投分署<br>班名：跨平台網站製作-介面規劃與RWD前端程式開發班 第 01期<br>課程代碼：141583<br>訓練期間：109 / 2 / 3 — 109 / 5 / 4'
    }
]

var InnerHTML_Portfolio = document.querySelector('.innerHTML_Portfolio')

for (let index = 0; index < innerHTML_Portfolio.length; index++) {
    const element_innerHTML_Portfolio = innerHTML_Portfolio[index];
    
    InnerHTML_Portfolio.innerHTML += `
    <div class="card card1">
        <nav>
            <h1 class="sr-only">${element_innerHTML_Portfolio.nav_h1_sr_only}</h1>
            <nav aria-label="breadcrumb">
                <h1 class="sr-only">${element_innerHTML_Portfolio.title}</h1>
                <ol class="breadcrumb breadcrumb-height">
                    <li class="breadcrumb-item breadcrumb-item-height active" aria-current="page">
                        <a href="${element_innerHTML_Portfolio.a_href_link}" title="${element_innerHTML_Portfolio.title}" target="_blank">${element_innerHTML_Portfolio.title}</a>
                    </li>
                </ol>
            </nav>
        </nav>
        <div class="card card2">
            <a href="${element_innerHTML_Portfolio.a_href_link}"  title="${element_innerHTML_Portfolio.title}" target="_blank" class="img">
                <img src="${element_innerHTML_Portfolio.img_link}" alt="${element_innerHTML_Portfolio.title}">
                <div class="link">link</div>
            </a>
            <span class="span">
                ${element_innerHTML_Portfolio.span}
            </span>
        </div>
    </div>
    `
}

var innerHTML_HTML_CSS = [
    {
        nav_h1_sr_only:'HTML+CSS / Parallax Practice',
        title:'Parallax Practice',
        a_href_link:'https://lenovomi0403.github.io/Learning%20process/2020-03-12-W3Cparallax/',
        img_link:'./01-img/02_HTML&CSS-01_Parallax Practice.png',
        span:'內容：<br>●  圖片控制指令<br>●  文字控制器<br>●  假文字製作<br>●  學過指令複習'
    },
    {
        nav_h1_sr_only:'HTML+CSS / Parallax add # Practice',
        title:'Parallax add # Practice',
        a_href_link:'https://lenovomi0403.github.io/Learning%20process/2020-03-13-Parallax+%E9%8C%A8%E9%BB%9E/',
        img_link:'./01-img/02_HTML&CSS-02_Parallax Practice.png',
        span:'內容：<br>●  圖片控制指令<br>●  文字控制器<br>●  假文字製作<br>●  +錨點<br>●  學過指令複習'
    },
    {
        nav_h1_sr_only:'HTML+CSS / RWD 切版任務 Practice',
        title:'RWD 切版任務 Practice',
        a_href_link:'https://lenovomi0403.github.io/Learning%20process/2020-03-18-RWD/',
        img_link:'./01-img/02_HTML&CSS-03_RWD 切版任務 Practice.png',
        span:'內容：<br>● 熟悉個版面尺寸<br>● 熟悉DIV命名規則<br>●  RWD 版型'
    },
    {
        nav_h1_sr_only:'HTML+CSS / Hover 效果 Practice',
        title:'Hover 效果 Practice',
        a_href_link:'https://lenovomi0403.github.io/Learning%20process/2020-03-25-A-hover-%E6%95%88%E6%9E%9C/',
        img_link:'./01-img/02_HTML&CSS-04_Hover 效果 Practice.png',
        span:'●  三種不同的文字 Hover 效果'
    },
    {
        nav_h1_sr_only:'HTML+CSS / Opening Practice',
        title:'Opening Practice',
        a_href_link:'https://lenovomi0403.github.io/Learning%20process/2020-03-25-B-Opening/',
        img_link:'./01-img/02_HTML&CSS-05_Opening Practice.png',
        span:'依據原本的練習，做為修改'
    },
    {
        nav_h1_sr_only:'lenovomi0403.github.io',
        title:'lenovomi0403.github.io',
        a_href_link:'https://github.com/lenovomi0403/lenovomi0403.github.io',
        img_link:'./01-img/02_HTML&CSS-06_github.png',
        span:'github.com / lenovomi0403 / lenovomi0403.github.io'
    }
]

var HTML_CSS = document.querySelector('.innerHTML_HTML_CSS')

for (let index = 0; index < innerHTML_HTML_CSS.length; index++) {
    const element_innerHTML_HTML_CSS = innerHTML_HTML_CSS[index];
    
    HTML_CSS.innerHTML +=`
    <div class="card card1">
        <nav>
            <h1 class="sr-only">${element_innerHTML_HTML_CSS.nav_h1_sr_only}</h1>
            <nav aria-label="breadcrumb">
                <h1 class="sr-only">${element_innerHTML_HTML_CSS.title}</h1>
                <ol class="breadcrumb breadcrumb-height">
                    <li class="breadcrumb-item breadcrumb-item-height active" aria-current="page">
                        <a href="${element_innerHTML_HTML_CSS.a_href_link}" title="${element_innerHTML_HTML_CSS.title}" target="_blank">${element_innerHTML_HTML_CSS.title}</a>
                    </li>
                </ol>
            </nav>
        </nav>
        <div class="card card2">
            <a href="${element_innerHTML_HTML_CSS.a_href_link}"  title="${element_innerHTML_HTML_CSS.title}" target="_blank" class="img">
                <img src="${element_innerHTML_HTML_CSS.img_link}" alt="${element_innerHTML_HTML_CSS.title}">
                <div class="link">link</div>
            </a>
            <span class="span">
                ${element_innerHTML_HTML_CSS.span}
            </span>
        </div>
    </div>
    `
}

var innerHTML_Javascript = [
    {
        nav_h1_sr_only:'JavaScript / forLoop + innerHTML + 點擊次數 Practice',
        title:'forLoop + innerHTML + 點擊次數 Practice',
        a_href_link:'https://lenovomi0403.github.io/Learning%20process/2020-04-01-forLoop+%E6%A8%A3%E6%9D%BF%E5%AD%97%E4%B8%B2/',
        img_link:'./01-img/03_JavaScript-01_innerHTML.png',
        span:'●  forLoop<br>●  innerHTML<br>●  object'
    },
    {
        nav_h1_sr_only:'JavaScript / tabs with jQuery Practice',
        title:'tabs with jQuery Practice',
        a_href_link:'https://lenovomi0403.github.io/Learning%20process/2020-04-07-jQuery_tabs/',
        img_link:'./01-img/03_JavaScript-02_Tabs.png',
        span:'用 jQuery 的方式切換分頁'
    },
    {
        nav_h1_sr_only:'JavaScript / 天氣卡片 API about 台中市',
        title:'天氣卡片 API about 台中市',
        a_href_link:'https://lenovomi0403.github.io/Learning%20process/2020-04-08-weatherCard_API/',
        img_link:'./01-img/03_JavaScript-03_WeatherCard.png',
        span:'依據原本的練習，做為修改：<br>●  API資料從『一般天氣預報』串接<br>改為『鄉鎮天氣預報-台中市』串接<br>●  變更卡片樣式。<br>●  RWD 版型<br>●  SCSS寫法'
    },
    {
        nav_h1_sr_only:'JavaScript / 天氣卡片 API Practive',
        title:'天氣卡片 API Practive',
        a_href_link:'https://lenovomi0403.github.io/Learning%20process/2020-04-08-weatherCard_API/practice/',
        img_link:'./01-img/03_JavaScript-04_WeatherCard.png',
        span:'依據原本的練習，做為修改：<br>●  API資料從『一般天氣預報』串接<br>改為『鄉鎮天氣預報-台中市』串接<br>●  變更卡片樣式。<br>●  RWD 版型'
    }
]

var innerHTML_JavaScript = document.querySelector('.innerHTML_JavaScript')

for (let index = 0; index < innerHTML_Javascript.length; index++) {
    const element_innerHTML_Javascript = innerHTML_Javascript[index];
    
    innerHTML_JavaScript.innerHTML +=`
    <div class="card card1">
        <nav>
            <h1 class="sr-only">${element_innerHTML_Javascript.nav_h1_sr_only}</h1>
            <nav aria-label="breadcrumb">
                <h1 class="sr-only">${element_innerHTML_Javascript.title}</h1>
                <ol class="breadcrumb breadcrumb-height">
                    <li class="breadcrumb-item breadcrumb-item-height active" aria-current="page">
                        <a href="${element_innerHTML_Javascript.a_href_link}" title="${element_innerHTML_Javascript.title}" target="_blank">${element_innerHTML_Javascript.title}</a>
                    </li>
                </ol>
            </nav>
        </nav>
        <div class="card card2">
            <a href="${element_innerHTML_Javascript.a_href_link}"  title="${element_innerHTML_Javascript.title}" target="_blank" class="img">
                <img src="${element_innerHTML_Javascript.img_link}" alt="${element_innerHTML_Javascript.title}">
                <div class="link">link</div>
            </a>
            <span class="span">
                ${element_innerHTML_Javascript.span}
            </span>
        </div>
    </div>
    `
}

var Icon = [
    {
        url:'https://lenovomi0403.github.io/Resume/README.md/',
        icon:'./01-img/04_footer-01_Markdown.png',
        alt:'README.md.png',
        name:'README.md',
    },
    {
        url:'https://www.cakeresume.com/lenovomi0403',
        icon:'./01-img/04_footer-02_cakeresume.png',
        alt:'cakeresume.png',
        name:'cakeresume',
    },
    {
        url:'https://codepen.io/lenovomi0403/pens/',
        icon:'https://img.icons8.com/ios-filled/48/000000/codepen.png',
        alt:'codepen.png',
        name:'codepen',
    },
    {
        url:'mailto:lenovomi0403@gmail.com',
        icon:'https://img.icons8.com/color/48/000000/send-mass-email.png',
        alt:'send-mass-email.png',
        name:'email',
    },
    {
        url:'https://www.facebook.com/lenovomi0403',
        icon:'https://img.icons8.com/color/48/000000/facebook.png',
        alt:'facebook.png',
        name:'facebook',
    },
    {
        url:'https://www.flickr.com/photos/lenovomi0403/albums',
        icon:'https://img.icons8.com/color/48/000000/flickr.png',
        alt:'flickr.png',
        name:'flickr',
    },
    {
        url:'https://github.com/lenovomi0403/lenovomi0403.github.io',
        icon:'https://img.icons8.com/color/48/000000/github.png',
        alt:'github.png',
        name:'github',
    },
    {
        url:'https://my.indeed.com/p/giu0q2d',
        icon:'./01-img/04_footer-03_indeed.png',
        alt:'indeed.png',
        name:'indeed',
    },
    {
        url:'https://www.instagram.com/lenovomi0403/',
        icon:'https://img.icons8.com/color/48/000000/instagram-new.png',
        alt:'instagram-new.png',
        name:'instagram',
    },
    {
        url:'https://issuu.com/lenovomi0403',
        icon:'https://img.icons8.com/color/48/000000/issuu.png',
        alt:'issuu.png',
        name:'issuu'
    },
    {
        url:'https://www.linkedin.com/in/lenovomi0403/',
        icon:'https://img.icons8.com/color/48/000000/linkedin.png',
        alt:'linkedin.png',
        name:'linkedin',
    },
    {
        url:'https://linktr.ee/lenovomi0403',
        icon:'./01-img/04_footer-04_linktree.png',
        alt:'linktr.ee icon.png',
        name:'linktr.ee',
    },
    {
        url:'https://www.pinterest.com/lenovomi0403/',
        icon:'https://img.icons8.com/color/48/000000/pinterest.png',
        alt:'pinterest.png',
        name:'pinterest',
    }
]

var icon = document.querySelector('#icon')

for (let index = 0; index < Icon.length; index++) {
    const element_icon = Icon[index];
    
    icon.innerHTML +=`
    <a href="${element_icon.url}" target="_blank">
        <img src="${element_icon.icon}" alt="${element_icon.alt}" class="fa-lg white-text mx-lg-3 mr-md-2 fa-2x" title="可以 ctrl 按著再點超連結">
        <div style="display:none">${element_icon.name}</div>
    </a>
    `
}
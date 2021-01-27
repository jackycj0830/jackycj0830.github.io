// aos.js with section
AOS.init();

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

// ↓ innennerHTML with jQuery about progressbar
var Progressbar = [
    {   
        color:'red',
        number:'20',
        project:'Photoshop'
    },
    {   
        color:'blue',
        number:'60',
        project:'illustrator'
    },
    {   
        color:'#fbbd08',
        number:'55',
        project:'HTML + CSS'
    },
    {   
        color:'red',
        number:'20',
        project:'JavaScript + jQuery'
    },
    {   
        color:'teal',
        number:'95',
        project:'Read File'
    },
    {   
        color:'green',
        number:'100',
        project:'Google First → Ask'
    }
]

var progressbar = document.querySelector('#progressbar')

for (let index = 0; index < Progressbar.length; index++) {
    const element_progressbar = Progressbar[index];
    
    progressbar.innerHTML +=`
    <article>
        <div class="col mb-4">
            <div class="card py-1">
                <div class="card-body">
                    <div class="progress">
                        <div class="progress-bar ${element_progressbar.color} progress-bar-striped progress-bar-animated"
                            role="progressbar" style="width: ${element_progressbar.number}%;background-color: ${element_progressbar.color};" aria-valuenow="${element_progressbar.number}" aria-valuemin="0"
                            aria-valuemax="100">${element_progressbar.number}%
                        </div>
                    </div>
                    <h6><div class="label text-center mt-3"><mark style="padding:0 10px;">${element_progressbar.project}</mark></div></h6>
                </div>
            </div>
        </div>
    </article>
    `
}

// ↓ innennerHTML with jQuery about donut
var skill_donut = [
    {
        order_:'1',
        order_sm:'1',
        order_md:'1',
        order_lg:'1',
        class_number:'1',
        stroke_dasharray_value:'20 80',
        value:'20',
        font_Size:'16',
        project:'Photoshop',
    },
    {
        order_:'3',
        order_sm:'2',
        order_md:'3',
        order_lg:'2',
        class_number:'3',
        stroke_dasharray_value:'55 45',
        value:'55',
        font_Size:'16',
        project:'HTML + CSS',
    },
    {
        order_:'5',
        order_sm:'3',
        order_md:'5',
        order_lg:'3',
        class_number:'5',
        stroke_dasharray_value:'95 5',
        value:'95',
        font_Size:'16',
        project:'Read File',
    },
    {
        order_:'2',
        order_sm:'4',
        order_md:'2',
        order_lg:'4',
        class_number:'2',
        stroke_dasharray_value:'60 40',
        value:'60',
        font_Size:'16',
        project:'illustrator',
    },
    {
        order_:'4',
        order_sm:'5',
        order_md:'4',
        order_lg:'5',
        class_number:'1',
        stroke_dasharray_value:'20 80',
        value:'20',
        font_Size:'12',
        project:'JavaScript + jQuery',
    },
    {
        order_:'6',
        order_sm:'6',
        order_md:'6',
        order_lg:'6',
        class_number:'6',
        stroke_dasharray_value:'100 0',
        value:'100',
        font_Size:'12',
        project:'Google First → Ask',
    }
]

var Donut = document.querySelector('#donut')

for (let index = 0; index < skill_donut.length; index++) {
    const element_skill_donut = skill_donut[index];
    
    Donut.innerHTML += `
    <article class="order-${element_skill_donut.order_} order-sm-${element_skill_donut.order_sm} order-md-${element_skill_donut.order_md} order-lg-${element_skill_donut.order_lg}">
        <div class="col mb-4">
            <div class="card">
                <div class="card-body">
                    <div class="svg-item mx-auto">
                        <svg width="100%" height="100%" viewBox="0 0 40 40" class="donut">
                            <circle class="donut-hole" cx="20" cy="20" r="15.91549430918954" fill="#fff"></circle>
                            <circle class="donut-ring" cx="20" cy="20" r="15.91549430918954" fill="transparent" stroke-width="3.5"></circle>
                            <circle class="donut-segment-${element_skill_donut.class_number}" cx="20" cy="20" r="15.91549430918954" fill="transparent" stroke-width="3.5" stroke-dasharray="${element_skill_donut.stroke_dasharray_value}" stroke-dashoffset="25"></circle>
                            <g class="donut-text">
                                <text y="50%" transform="translate(0, 2)">
                                    <tspan x="50%" text-anchor="middle" class="donut-percent-${element_skill_donut.class_number}">${element_skill_donut.value}%</tspan>
                                </text>
                            </g>
                        </svg>
                    </div>
                    <h6>
                        <div class="label text-center mt-3" style="font-size:${element_skill_donut.font_Size}px"><mark style="padding:0 10px;">${element_skill_donut.project}</mark></div>
                    </h6>
                </div>
            </div>
        </div>
    </article>
    `
}
// ↓ innennerHTML with jQuery about education
var Education = [
    {
        img: "./01-img/01-img/04_Education-01_ccut.gif",
        alt:'04_Education-01_ccut.gif',
        size: "width: 111px;",
        title:'ccut.gif',
        department: "觀光與休閒管理系",
        name: "中州科技大學",
        degree: "學士學位",
        during: "2011 ~ 2015"
    },
    {
        img: "./01-img/01-img/04_Education-02_slvs.png",
        alt:'04_Education-02_slvs.png',
        size: "height:80px;width: 80px;",
        title:'slvs.png',
        department: "觀光事業科",
        name: "國立水里高級商工職業學校",
        degree: "高中文憑",
        during: "2008 ~ 2011"
    }
]

var education = document.querySelector('.education')

for (let index = 0; index < Education.length; index++) {
    const element_education = Education[index];

    education.innerHTML += `
    <article>
        <div class="card my-3 py-1">
            <div class="row no-gutters">
                <div class="col-4 col-md-12 col-lg-4 d-flex align-self-center" style="height:100px">
                    <img class="card-img-top mx-auto align-self-center m-3"
                        src="${element_education.img}" alt="${element_education.alt}"
                        style="${element_education.size}"
                        title="${element_education.title}">
                </div>
                <div class="col-8">
                    <div class="card-body" style="padding-bottom: unset;" >
                        <h5 class="h5-responsive font-weight-bold"><mark style="padding:0 10px 0 0;">${element_education.department}</mark></h5>
                        <p>${element_education.name}</p>
                        <p><small>${element_education.degree}</small></p>
                        <p><small>${element_education.during}</small></p>
                    </div>
                </div>
            </div>
        </div>
    </article>
    `
}

// ↓ innennerHTML with jQuery about experience
var Experience = [
    {   
        url:'https://its.taiwanjobs.gov.tw/Course/Detail?ID=141583',
        img: './01-img/01-img/05_its-taiwanjobs.png',
        alt:'05_its-taiwanjobs.png',
        size: "height:80px;width: 200px;",
        img_title:'台灣就業通 職前訓練網',
        title: '<mark style="padding:0 10px 0 0;">跨平台網站製作 - 介面規劃與RWD前端程式開發班</mark>&nbsp;<small>學員</small>',
        company: "台灣就業通 職前訓練",
        during: 'Feb 2020 ~ May 2020',
        projects:'<div class="pb-2">Graphic Design<br>a. Adobe Photoshop<br>b. Adobe Illustrator</div><div class="pb-2">Front-end web development<br>a. HTML<br>b. CSS<br>c. JavaScript / jQuery</div>Git版本控制。<br>Bootstrap框架網站開發。<br>UX/User Experience用戶體驗流程與設計。',
        content: '/ 今年年初的時候利用了非自願離職的身份報名了勞動部開辦的<br>[&ensp;跨平台網站製作&nbsp;-&nbsp;介面規劃與RWD前端程式開發&ensp;]&ensp;職前訓練課程，並且有甄試錄取通過。<br>開啟了朝著前端工程師方向發展之路。<br>目前已領到結訓證書，並且在結訓之前完成至少三個前端個人作品。<br>未來將會持續學習專業技能。/',
        name:'台灣就業通 職前訓練網',
    },
    {   
        url:'http://www.sunrise-tech.com.tw/',
        img: './01-img/01-img/03_WorkExperience-01_昇展.png',
        alt:'03_WorkExperience-01_昇展.png',
        size: "height:80px;width: 200px;",
        img_title:'昇展科技股份有限公司',
        title: '<mark style="padding:0 10px 0 0;">倉管人員</mark>',
        company: "昇展科技股份有限公司",
        during: 'May 2019 ～ Sep 2019',
        projects: '倉儲作業、物料控管。<br>進貨清點、出貨備料。<br>盤點任務、主管交辦事項。',
        content: '/ 在上一份兼職的 IKEA逢甲百元商店的檔期結束之後，<br>獲得了機會進入運動器材產業相關公司擔任廠務部的倉管人員。<br>有別以往拿著報表上下架商品，在這裡更需要學習決策物料的擺放、<br>品質以及出入倉的時間安排。<br>所幸在資深同仁的指導下，透過ERP的標準流程進行出入庫管理，<br>以利後續備料、品檢及發料的流程能更迅速並降低錯誤率。 /',
        name:'昇展科技股份有限公司',
    },
    {   
        url:'https://www.mterrace.com.tw/',
        img: './01-img/01-img/03_WorkExperience-02_mterrace.png',
        alt:'03_WorkExperience-02_mterrace.png',
        size: 'height:80px;width: 200px;',
        img_title:'泰睿思股份有限公司',
        title: '<mark style="padding:0 10px 0 0;">業務助理</mark>',
        company: '泰睿思股份有限公司',
        during: 'May 2018 ~ Nov 2018',
        projects: '負責專案事件的統籌、分配、追蹤，並與客戶溝通協調。<br>辦理核銷事宜。<br>協助處理庶務性行政工作(如：事務機器叫修維護、文具用品採買)。<br>收發公文並處理會籤文件。<br>負責零用金管理。<br>負責一般文書資料處理及歸檔工作。<br>支援其他部門業務(如：採購、業務、人事)。<br>協助專案文件撰寫。<br>協助使用手冊、操作手冊、單元測試報告等系統開發文件撰寫。<br>軟體系統客戶使用意見管理及回覆。<br>主管交辦事項。',
        content: '/ 去年五月份的時候，進入新創資訊公司擔任業務助理兼行政的職務，<br>在這期間瞭解到每一件專案系統在發包與接案時所需要的流程及內容，<br>以及如何完整瞭解客戶的需求並規劃設計原型圖與工程師討論才能完成這件專案。<br>也會透過 Trello 專案管理工具，以及 Microsoft Teams 團隊溝通協作工具，<br>來運用在工作的事務上。同時在公司內也包括協助申請政府補助計畫、<br>稅務申報、人事薪資處理等工作。 /',
        name:'泰睿思股份有限公司',
    },
    {   
        url:'https://www.storyhotel.com.tw/',
        img: './01-img/01-img/03_WorkExperience-03_storyhotel.png',
        alt:'03_WorkExperience-03_storyhotel.png',
        size: 'height:80px;width: 80px;',
        img_title:'時光對白旅棧有限公司',
        title: '<mark style="padding:0 10px 0 0;">飯店工作人員</mark>',
        company: '時光對白旅棧有限公司',
        during: 'Jan 2016 ~ Apr 2018',
        projects: '處理房間安排事宜，如：訂房、排房、進房、退房等。<br>處理帳務，如：收款、核帳、查帳等。<br>負責轉接電話並且為客人留言。<br>提供當地旅遊諮詢，並協助安排旅行計畫、交通工具租用、接送等事宜。<br>接待客人，並提供相關服務（如：行李運送、車輛引導）。<br>負責客房內清潔整理，以及各樓層公共區域之清潔維護。<br>負責顧客資料之輸入與維護。',
        content: '/ 大學畢業後，來到台中觀光夜市之一的逢甲旅館擔任櫃檯的職務。<br>除了櫃檯的職務之外，因過去所學的相關經驗，同時在內勤部門支援房務。<br>不論是站在第一線與客人的迎賓接待、諮詢亦或者後台的房務清潔維護部分均具備實務經驗。 /',
        name:'時光對白旅棧有限公司',
    }

]

var experience = document.querySelector('.experience')

for (let index = 0; index < Experience.length; index++) {
    const element_experience = Experience[index];

    experience.innerHTML += `
    <article>
        <div class="card mb-4">
            <div class="row no-gutters">
                <div class="col-12 col-lg-4 d-flex">
                    <a href="${element_experience.url}" target="_blank" class="d-flex mx-auto">
                        <img class="card-img-top align-self-center m-3"
                            src="${element_experience.img}" alt="${element_experience.alt}"
                            style="${element_experience.size};"
                            title="${element_experience.img_title}">
                            <div style="display:none">${element_experience.name}</div>
                    </a>
                </div>
                <div class="col-12 col-lg-8">
                    <div class="card-body">
                        <h5 class="h5-responsive font-weight-bold">${element_experience.title}</h5>
                        <div class="pt-2">
                            ${element_experience.company}<br>
                            <small>${element_experience.during}</small><br>
                        </div>
                        <div class="pt-3">
                            ${element_experience.projects}
                        </div>
                        <div class="pt-3">
                            ${element_experience.content}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </article>
    `
}

var rwd_effect_viewon = [
    {
        url:'https://issuu.com/lenovomi0403/docs/resume_website_rwd_effect_mockup',
        icon:'https://img.icons8.com/color/22/000000/issuu.png',
        alt:'issuu',
        title:'issuu',
    },
    {
        url:'https://www.pinterest.com/lenovomi0403/front-end-website/resume-website-rwd-effect-mockup/',
        icon:'https://img.icons8.com/color/22/000000/pinterest.png',
        alt:'pinterest',
        title:'pinterest',
    },
]

var rwd_effect_icon = document.querySelector('.rwd_effect_icon')

for (let index = 0; index < rwd_effect_viewon.length; index++) {
    const element_rwd_effect_viewon = rwd_effect_viewon[index];
    
    rwd_effect_icon.innerHTML +=`
    <a href="${element_rwd_effect_viewon.url}" target="_blank">
        <img src="${element_rwd_effect_viewon.icon}" alt="${element_rwd_effect_viewon.alt}.png" title="view on ${element_rwd_effect_viewon.title}">&nbsp;
    </a>
    `
}
// ↓ innennerHTML with jQuery about RWD Effect
var RWD_Effect = [
    {
        img:'./mockup/03-mockup製作檔/03-圖檔/01-Bootstrap-xl-1200x1080.png',
        alt:'Bootstrap-xl.png',
        title:'Bootstrap-xl',
        h3:'Bootstrap-xl',
        span:'Extra large≥1200px',
        li:'<li>navbar-toggler:display="none"</li><li>Programming Skill="progressbar"</li>'
    },
    {
        img:'./mockup/03-mockup製作檔/03-圖檔/02-Bootstrap-lg-992x1080.png',
        alt:'Bootstrap-lg',
        title:'Bootstrap-lg',
        h3:'Bootstrap-lg',
        span:'Large≥992px',
        li:'<li>navbar-toggler:display="block"</li><li>Programming Skill="donut"</li><li>profile-img="col-4"</li><li>donut-card="col-3"</li><li>education-img="col-4"</li><li>experience-img="col-4"</li>'  
    },
    {
        img:'./mockup/03-mockup製作檔/03-圖檔/03-Bootstrap-md-01-768x1080.png',
        alt:'Bootstrap-md',
        title:'Bootstrap-md',
        h3:'Bootstrap-md',
        span:'Medium≥768px',
        li:'<li>profile-img="col-12"</li><li>donut-card="col-2"</li>'
    },
    {
        img:'./mockup/03-mockup製作檔/03-圖檔/03-Bootstrap-md-02-768x1080.png',
        alt:'Bootstrap-md',
        title:'Bootstrap-md',
        h3:'Bootstrap-md',
        span:'Medium≥768px',
        li:'<li>education-img="col-12"</li><li>experience-img="col-12"</li>'
    },
    {
        img:'./mockup/03-mockup製作檔/03-圖檔/04-Bootstrap-sm-01-576x1080.png',
        alt:'Bootstrap-sm-01',
        title:'Bootstrap-sm',
        h3:'Bootstrap-sm',
        span:'Small≥576px',
        li:'<li>experience="order"</li>'
    },
    {
        img:'./mockup/03-mockup製作檔/03-圖檔/04-Bootstrap-sm-02-576x1080.png',
        alt:'Bootstrap-sm-02',
        title:'Bootstrap-sm',
        h3:'Bootstrap-sm',
        span:'Small≥576px',
        li:'<li>donut-card="col-3"</li><li>education-img="col-4"</li>'
    },
    {
        img:'./mockup/03-mockup製作檔/03-圖檔/05-Bootstrap-xs-02-575x1080.png',
        alt:'Bootstrap-xs',
        title:'Bootstrap-xs',
        h3:'Bootstrap-xs',
        span:'Extra small<576px',
        li:'<li>donut-card="col-2"</li>'
    },
]

var rwd_Effect = document.querySelector('.RWD_Effect')

for (let index = 0; index < RWD_Effect.length; index++) {
    const element_RWD_Effect = RWD_Effect[index];
    
    rwd_Effect.innerHTML +=`
    <div class="swiper-slide">
        <div class="card cursor-pointer">
            <img src="${element_RWD_Effect.img}" alt="${element_RWD_Effect.alt}" class="card__img z-depth-3" title="${element_RWD_Effect.title}">
            <div class="card__body mt-3">
                <h3><mark style="padding:10px 5px;">${element_RWD_Effect.h3}</mark></h3>
                <span>${element_RWD_Effect.span}</span>
                <ul class="list-unstyled">${element_RWD_Effect.li}</ul>
            </div>
        </div>
    </div>
    `
}

// swiper.js with RWD Effect
const Swiper_RWD_Effect = new Swiper('#RWD_Effect', {
    effect: 'coverflow',
    slidesPerView: 'auto',
    spaceBetween: 30,
    loop: true,
    centeredSlides: true,
    coverflowEffect: {
      slideShadows: true,
      rotate: 20,
      stretch: 0,
      depth: 350,
      modifier: 1,
    },
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.swiper-pagination',
        // 選擇按鈕
        clickable: true,
        // 動態按鈕 /更換按鈕大小
        dynamicBullets: false,
    },
    // 方向
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

// innennerHTML with jQuery about Structure Have Use innerHTML
var Structure_innerHTML = [
    {
        img:'./01-img/03-innerHTML/01-navbar-nav.jpg',
        alt:'navbar-nav.jpg',
        title:'navbar-nav',
        h3:'navbar-nav',
    },
    {
        img:'./01-img/03-innerHTML/02-Programming Skill.jpg',
        alt:'Programming Skill.jpg',
        title:'Programming Skill',
        h3:'Programming Skill',
    },
    {
        img:'./01-img/03-innerHTML/03-Education.jpg',
        alt:'Education.jpg',
        title:'Education',
        h3:'Education',
    },
    {
        img:'./01-img/03-innerHTML/04-Experience.jpg',
        alt:'Experience.jpg',
        title:'Experience',
        h3:'Experience',
    },
    {
        img:'./01-img/03-innerHTML/05-RWD Effect.jpg',
        alt:'RWD Effect.jpg',
        title:'RWD Effect',
        h3:'RWD Effect',
    },
    {
        img:'./01-img/03-innerHTML/06-Structure innerHTML.jpg',
        alt:'Structure innerHTML.jpg',
        title:'Structure Have Use innerHTML',
        h3:'Structure Have Use innerHTML',
    },
    {
        img:'./01-img/03-innerHTML/07-footer icon.jpg',
        alt:'footer icon.jpg',
        title:'footer icon',
        h3:'footer icon',
    },
]

var structure_innerHTML = document.querySelector('.Structure_innerHTML')

for (let index = 0; index < Structure_innerHTML.length; index++) {
    const element_Structure_innerHTML = Structure_innerHTML[index];
    
    structure_innerHTML.innerHTML +=`
    <div class="swiper-slide cursor-pointer">
        <div class="card">
            <img src="${element_Structure_innerHTML.img}" alt="${element_Structure_innerHTML.alt}" class="card__img z-depth-3" title="${element_Structure_innerHTML.title}">
            <div class="card__body mt-3">
                <h3><mark style="padding:10px 5px;">${element_Structure_innerHTML.h3}</mark></h3>
            </div>
        </div>
    </div>
    `
}

// swiper.js with RWD Effect
const Swiper_Structure_innerHTML = new Swiper('#Structure_innerHTML', {
    effect: 'coverflow',
    slidesPerView: 'auto',
    spaceBetween: 30,
    loop: true,
    centeredSlides: true,
    coverflowEffect: {
      slideShadows: true,
      rotate: 20,
      stretch: 0,
      depth: 350,
      modifier: 1,
    },
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.swiper-pagination',
        // 選擇按鈕
        clickable: true,
        // 動態按鈕 /更換按鈕大小
        dynamicBullets: false,
    },
    // 方向
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

// ↓ innennerHTML with jQuery about footer icon
var Icon = [
    {
        url:'https://lenovomi0403.github.io/Resume/README.md/',
        icon:'./01-img/01-img/06-Markdown.png',
        alt:'README.md.png',
        name:'README.md',
    },
    {
        url:'https://www.cakeresume.com/lenovomi0403',
        icon:'./01-img/01-img/02_cakeresume.png',
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
        icon:'./01-img/01-img/07-indeed.png',
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
        icon:'./01-img/01-img/02_linktr.ee icon.png',
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

// ↓ innennerHTML with jQuery about footer-copyright
// var Copyright = [
//     {
//         icon:'fa-bootstrap',
//         url:'https://getbootstrap.com/',
//         name:'Bootstrap'
//     },
//     {
//         icon:'fa-mdb',
//         url:'https://mdbootstrap.com/',
//         name:'MDBootstrap.com'
//     }
// ]

// var copyright = document.querySelector('.footer-copyright')

// for (let index = 0; index < Copyright.length; index++) {
//     const element_copyright = Copyright[index];
    
//     copyright.innerHTML +=`
//     Power&nbsp;by&ensp;<i class="fab ${element_copyright.icon}"></i>&ensp;
//     <a href="${element_copyright.url}" target="_blank">${element_copyright.name}</a>
//     `
// }
  
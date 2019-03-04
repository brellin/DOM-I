const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4": "Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4": "Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4": "Contact",
    "address": "123 Way 456 Street Somewhere, USA",
    "phone": "1 (888) 888-8888",
    "email": "sales@greatidea.io",
  },
  "footer": {
    "copyright": "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);

// Link Text
let links = document.getElementsByTagName("a");
links[0].innerText = siteContent["nav"]["nav-item-1"];
links[1].innerText = siteContent["nav"]["nav-item-2"];
links[2].innerText = siteContent["nav"]["nav-item-3"];
links[3].innerText = siteContent["nav"]["nav-item-4"];
links[4].innerText = siteContent["nav"]["nav-item-5"];
links[5].innerText = siteContent["nav"]["nav-item-6"];

// ====================="CTA"=======================
// h1
let ctaH1 = document.getElementsByTagName("h1")[0];
ctaH1.innerText = siteContent["cta"]["h1"];
// Button
let headerButton = document.getElementsByTagName("button")[0];
headerButton.innerText = siteContent["cta"]["button"];
// Header Img
let headerImg = document.getElementById("cta-img");
headerImg.setAttribute('src', siteContent["cta"]["img-src"]);

// ==================Main Content====================
// Features h4
let featuresH4 = document.getElementsByTagName("h4")[0];
featuresH4.innerText = siteContent["main-content"]["features-h4"];
// Features Content
let featuresContent = document.getElementsByTagName("p")[0];
featuresContent.innerText = siteContent["main-content"]["features-content"];
// About h4
let aboutH4 = document.getElementsByTagName("h4")[1];
aboutH4.innerText = siteContent["main-content"]["about-h4"];
// About Content
let aboutContent = document.getElementsByTagName("p")[1];
aboutContent.innerText = siteContent["main-content"]["about-content"];
// Middle Image
let middleImg = document.getElementById("middle-img");
middleImg.setAttribute('src', siteContent["main-content"]["middle-img-src"]);
// Services h4
let servicesH4 = document.getElementsByTagName("h4")[2];
servicesH4.innerText = siteContent["main-content"]["services-h4"];
// Services Content
let servicesContent = document.getElementsByTagName("p")[2];
servicesContent.innerText = siteContent["main-content"]["services-content"];
// Product h4
let productH4 = document.getElementsByTagName("h4")[3];
productH4.innerText = siteContent["main-content"]["product-h4"];
// Product Content
let productContent = document.getElementsByTagName("p")[3];
productContent.innerText = siteContent["main-content"]["product-content"];
// Vision h4
let visionH4 = document.getElementsByTagName("h4")[4];
visionH4.innerText = siteContent["main-content"]["vision-h4"];
// Vision Content
let visionContent = document.getElementsByTagName("p")[4];
visionContent.innerText = siteContent["main-content"]["vision-content"];

// ==================Contact==================
// Contact h4
let contactH4 = document.getElementsByTagName("h4")[5];
contactH4.innerText = siteContent["contact"]["contact-h4"];
// Address
let address = document.getElementsByTagName("p")[5];
address.innerText = siteContent["contact"]["address"];
// Phone
let phone = document.getElementsByTagName("p")[6];
phone.innerText = siteContent["contact"]["phone"];
// E-mail
let email = document.getElementsByTagName("p")[7];
email.innerText = siteContent["contact"]["email"];

// ===================Footer===================
let copyright = document.getElementsByTagName("p")[8];
copyright.innerText = siteContent["footer"]["copyright"];
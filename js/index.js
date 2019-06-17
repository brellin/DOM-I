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
const logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);

// Link Text
const links = document.querySelectorAll("a");
links[0].innerText = siteContent["nav"]["nav-item-1"];
links[1].innerText = siteContent["nav"]["nav-item-2"];
links[2].innerText = siteContent["nav"]["nav-item-3"];
links[3].innerText = siteContent["nav"]["nav-item-4"];
links[4].innerText = siteContent["nav"]["nav-item-5"];
links[5].innerText = siteContent["nav"]["nav-item-6"];

// Link Style
links.forEach(curr => {
  curr.style.transition = 'text-shadow .5s ease-out 0s';
});

// ====================="CTA"=======================
// h1
const ctaH1 = document.querySelectorAll("h1")[0];
ctaH1.innerText = siteContent["cta"]["h1"];
// Button
const headerButton = document.querySelectorAll("button")[0];
headerButton.innerText = siteContent["cta"]["button"];
// Header Img
const headerImg = document.getElementById("cta-img");
headerImg.setAttribute('src', siteContent["cta"]["img-src"]);

// ==================Main Content====================
// Features h4
const featuresH4 = document.querySelectorAll("h4")[0];
featuresH4.innerText = siteContent["main-content"]["features-h4"];
// Features Content
const featuresContent = document.querySelectorAll("p")[0];
featuresContent.innerText = siteContent["main-content"]["features-content"];
// About h4
const aboutH4 = document.querySelectorAll("h4")[1];
aboutH4.innerText = siteContent["main-content"]["about-h4"];
// About Content
const aboutContent = document.querySelectorAll("p")[1];
aboutContent.innerText = siteContent["main-content"]["about-content"];
// Middle Image
const middleImg = document.getElementById("middle-img");
middleImg.setAttribute('src', siteContent["main-content"]["middle-img-src"]);
// Services h4
const servicesH4 = document.querySelectorAll("h4")[2];
servicesH4.innerText = siteContent["main-content"]["services-h4"];
// Services Content
const servicesContent = document.querySelectorAll("p")[2];
servicesContent.innerText = siteContent["main-content"]["services-content"];
// Product h4
const productH4 = document.querySelectorAll("h4")[3];
productH4.innerText = siteContent["main-content"]["product-h4"];
// Product Content
const productContent = document.querySelectorAll("p")[3];
productContent.innerText = siteContent["main-content"]["product-content"];
// Vision h4
const visionH4 = document.querySelectorAll("h4")[4];
visionH4.innerText = siteContent["main-content"]["vision-h4"];
// Vision Content
const visionContent = document.querySelectorAll("p")[4];
visionContent.innerText = siteContent["main-content"]["vision-content"];

// ==================Contact==================
// Contact h4
const contactH4 = document.querySelectorAll("h4")[5];
contactH4.innerText = siteContent["contact"]["contact-h4"];
// Address
const address = document.querySelectorAll("p")[5];
address.innerText = siteContent["contact"]["address"];
// Phone
const phone = document.querySelectorAll("p")[6];
phone.innerText = siteContent["contact"]["phone"];
// E-mail
const email = document.querySelectorAll("p")[7];
email.innerText = siteContent["contact"]["email"];

// ===================Footer===================
const copyright = document.querySelectorAll("p")[8];
copyright.innerText = siteContent["footer"]["copyright"];

// ===================Styles Buttons=====================
// Get CTA-Text & existing button
const ctaText = document.querySelector('.cta-text');
const styleButtonOn = document.querySelector('button');

// Hover style set
const head = document.querySelector('head');
const hover = document.createElement('style');
hover.innerText = 'a:hover{text-shadow: 1px 2px 2px;}';

// Get link, body, and container
let linkProp = document.querySelectorAll('a'),
  body = document.querySelector('body'),
  container = document.querySelector('.container');

// On
styleButtonOn.innerText = 'Click for Styles On';
styleButtonOn.addEventListener('click', function () {
  head.append(hover);
  linkProp.forEach(curr => curr.style.color = 'blue');
  body.style.backgroundColor = 'darkgrey';
  container.style.backgroundColor = 'whitesmoke';
});

// Off
const styleButtonOff = document.createElement('button');
styleButtonOff.innerText = 'Click for Styles Off';
ctaText.appendChild(styleButtonOff);
styleButtonOff.addEventListener('click', function () {
  head.removeChild(hover);
  linkProp.forEach(curr => curr.style.color = 'grey');
  body.style.backgroundColor = 'white';
  container.style.backgroundColor = 'white';
});

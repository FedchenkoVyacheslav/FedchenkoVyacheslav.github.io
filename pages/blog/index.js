"use strict";function d(e){if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(e=function(e,t){if(!e)return;if("string"==typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return r(e,t)}(e))){var t=0,n=function(){};return{s:n,n:function(){return t>=e.length?{done:!0}:{done:!1,value:e[t++]}},e:function(e){throw e},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,a,s=!0,i=!1;return{s:function(){o=e[Symbol.iterator]()},n:function(){var e=o.next();return s=e.done,e},e:function(e){i=!0,a=e},f:function(){try{s||null==o.return||o.return()}finally{if(i)throw a}}}}function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}function u(e){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var l=document.querySelector(".modal_message-js"),t=document.querySelector(".footer__button_message-js"),e=document.querySelector(".modal__close_message-js"),n=document.querySelector(".form__input_message-js");t.addEventListener("click",function(){l.classList.remove("modal_close"),n.focus()}),e.addEventListener("click",function(){l.classList.add("modal_close"),t.focus()}),window.addEventListener("keydown",function(e){l.classList.contains("modal_close")||"Escape"!==e.code||(l.classList.add("modal_close"),t.focus())});var c=document.querySelector(".modal_register-js"),s=document.querySelector(".header__register-button_js"),i=document.querySelector(".mobile-header__register-button_js"),o=document.querySelector(".modal__close_register-js"),a=document.querySelector(".form__input_register-js");i.addEventListener("click",function(){c.classList.remove("modal_close"),a.focus()}),s.addEventListener("click",function(){c.classList.remove("modal_close"),a.focus()}),o.addEventListener("click",function(){c.classList.add("modal_close"),s.focus()}),window.addEventListener("keydown",function(e){c.classList.contains("modal_close")||"Escape"!==e.code||(c.classList.add("modal_close"),s.focus())});var m=document.querySelector(".modal_sing-in-js"),f=document.querySelector(".header__sing-in-button_js"),v=document.querySelector(".mobile-header__sing-in-button_js"),h=document.querySelector(".modal__close_sing-in-js"),g=document.querySelector(".form__input_sing-in-js");v.addEventListener("click",function(){m.classList.remove("modal_close"),g.focus()}),f.addEventListener("click",function(){m.classList.remove("modal_close"),g.focus()}),h.addEventListener("click",function(){m.classList.add("modal_close"),f.focus()}),window.addEventListener("keydown",function(e){m.classList.contains("modal_close")||"Escape"!==e.code||(m.classList.add("modal_close"),f.focus())});var p,b=document.querySelector(".header__mobile-menu_js"),_=document.querySelector(".mobile-header__button-close_js"),y=document.querySelector(".mobile-header");function L(e){for(var t={},n=e.querySelectorAll("input"),o=e.querySelectorAll("textarea"),a=n.length,s=0;s<a;s++){var i=n[s];switch(i.type){case"checkbox":i.checked?t[i.name]="yes":t[i.name]=i.value;break;default:t[i.name]=i.value}}a=o.length;for(var r=0;r<a;r++){var l=o[r];t[l.name]=l.value}return t}function S(n){n.classList.add("form__input_bad"),n.addEventListener("input",function e(t){n.classList.remove("form__input_bad"),n.removeEventListener("input",e)})}function w(n){n.classList.add("form__input_good"),n.addEventListener("input",function e(t){n.classList.remove("form__input_good"),n.removeEventListener("input",e)})}function k(e,t){for(var n=e.querySelectorAll("input"),o=e.querySelectorAll("textarea"),a=e.querySelector(".form__checkbox-indicator"),s=n.length,i=0;i<s;i++){var r=n[i];switch(r.type){case"checkbox":t[r.name]&&a.classList.add("form__checkbox-indicator_bad");break;default:t[r.name]&&(S(r),E(r,t[r.name]))}}s=o.length;for(var l=0;l<s;l++){var c=o[l];t[c.name]&&(S(c),E(c,t[c.name]))}}function q(e){for(var t=e.querySelectorAll("input"),n=e.querySelectorAll("textarea"),o=(e.querySelector(".form__checkbox-indicator"),t.length),a=0;a<o;a++){var s=t[a];w(s),j(s)}o=n.length;for(var i=0;i<o;i++){var r=n[i];w(r),j(r)}}function T(e){return e.match(/^[0-9a-z-\.]+\@[0-9a-z-]{2,}\.[a-z]{2,}$/i)}function E(n,e){var o=document.createElement("div");o.classList.add("invalid-feedback"),o.innerText=e,null==n.nextElementSibling&&(n.insertAdjacentElement("afterend",o),n.addEventListener("input",function e(t){o.remove(),n.removeEventListener("input",e)}))}function j(n){var o=document.createElement("div");o.classList.add("valid-feedback"),o.innerText="All right",null==n.nextElementSibling&&(n.insertAdjacentElement("afterend",o),n.addEventListener("input",function e(t){o.remove(),n.removeEventListener("input",e)}))}b.addEventListener("click",function(){y.classList.add("mobile-header_open")}),_.addEventListener("click",function(){y.classList.remove("mobile-header_open")}),p=document.querySelector(".top-button"),window.addEventListener("scroll",function(){var e=window.pageYOffset;1500<e&&p.classList.add("top-button_show"),e<1500&&p.classList.remove("top-button_show")}),p.addEventListener("click",function e(){var t=window.pageYOffset/50;0<window.pageYOffset&&(window.scrollBy(0,-t),setTimeout(e,0))});var M="https://academy.directlinedev.com";function x(e){var t=e.url,n=e.method,o=void 0===n?"GET":n,a=e.body,s=void 0===a?{}:a,i=e.headers,r={method:o,body:s,headers:void 0===i?{}:i};return"GET"===o&&(r.body=void 0),fetch(M+t,r)}var O=document.querySelector(".header__profile_js"),A=document.querySelector(".mobile-header__profile_js");localStorage.getItem("token")?(f.classList.add("hidden-block"),v.classList.add("hidden"),s.classList.add("hidden-block"),i.classList.add("hidden"),O.classList.remove("hidden-block"),A.classList.remove("hidden")):("/pages/profile/index.html"===window.location.pathname&&(window.location.pathname="/index.html"),f.classList.remove("hidden-block"),v.classList.remove("hidden"),s.classList.remove("hidden-block"),i.classList.remove("hidden"),O.classList.add("hidden-block"),A.classList.add("hidden"));var H=document.querySelector(".button_modal-register"),P=document.querySelector(".button_modal-sing-in"),I=document.querySelector(".button_modal-message");var N=document.querySelector(".loader-container_js");function R(){return'\n  <div class="loader-wrapper">\n    <div class="loader">\n      <div class="loader-line"></div>\n      <div class="loader-line"></div>\n      <div class="loader-line"></div>\n    </div>\n  </div>\n  '}document.forms["form-register"].addEventListener("submit",function(e){e.preventDefault();var t=e.target,n=L(t),o=t.querySelector(".name-js"),a=t.querySelector(".surname-js"),s=t.querySelector(".location-js"),i=t.querySelector(".age-js"),r={};return null===n.email||""===n.email?(r.email="This field is required",void k(t,r)):T(n.email)?null===n.name||""===n.name?(r.name="This field is required",void k(t,r)):parseInt(o.value)?(r.name="This name is not valid",void k(t,r)):n.name.length<3||20<=n.name.length?(r.name="Your name is too short or too long",void k(t,r)):null===n.surname||""===n.surname?(r.surname="This field is required",void k(t,r)):parseInt(a.value)?(r.surname="This surname is not valid",void k(t,r)):n.surname.length<3||20<=n.surname.length?(r.surname="Your surname is too short or too long",void k(t,r)):null===n.password||""===n.password?(r.password="This field is required",void k(t,r)):n.password.length<3||20<=n.password.length?(r.password="Password must be between 3 and 20 characters",void k(t,r)):null===n.passwordRep||""===n.passwordRep?(r.passwordRep="This field is required",void k(t,r)):n.password!==n.passwordRep?(r.passwordRep="Password mismatch",void k(t,r)):null===n.location||""===n.location?(r.location="This field is required",void k(t,r)):parseInt(s.value)?(r.location="This location is not valid",void k(t,r)):n.location.length<3||20<=n.location.length?(r.location="Location name is too short or too long",void k(t,r)):i.value<18||100<=i.value?(r.age="This age is not valid",void k(t,r)):null===n.age||""===n.age?(r.age="This field is required",void k(t,r)):"no"===n.acceptbutton?(r.acceptbutton="You didn't agree to processing of your personal data",void k(t,r)):(N.innerHTML=R(),void x({url:"/api/users",method:"POST",body:JSON.stringify(n),headers:{"Content-Type":"application/json;charset=utf-8"}}).then(function(e){return e.json()}).then(function(e){if(!e.success)throw e.errors;N.innerHTML="",q(t),H.classList.remove("button_bad"),H.classList.add("button_good"),setTimeout(function(){c.classList.add("modal_close")},2e3)}).catch(function(e){N.innerHTML="",e.email&&(e.email="This email is already in use"),k(t,e),H.classList.remove("button_good"),H.classList.add("button_bad")})):(r.email='Please enter a valid email address (your entry is not in the format "somebody@example.com")',void k(t,r))}),document.forms["form-sing-in"].addEventListener("submit",function(e){e.preventDefault();var o=e.target,t=L(o),a={};return null===t.email||""===t.email?(a.email="This field is required",void k(o,a)):T(t.email)?null===t.password||""===t.password?(a.password="This field is required",void k(o,a)):(N.innerHTML=R(),void x({url:"/api/users/login",method:"POST",body:JSON.stringify(t),headers:{"Content-Type":"application/json;charset=utf-8"}}).then(function(e){return e.json()}).then(function(e){if(!e.success)throw a;var t,n=e.data;N.innerHTML="",P.classList.add("button_good"),q(o),setTimeout(function(){m.classList.add("modal_close"),y.classList.remove("mobile-header_open")},2e3),localStorage.setItem("userId",n.userId),(t=n.token)?(localStorage.setItem("token",t),f.classList.add("hidden-block"),v.classList.add("hidden"),s.classList.add("hidden-block"),i.classList.add("hidden"),O.classList.remove("hidden-block"),A.classList.remove("hidden")):(localStorage.removeItem("token"),f.classList.remove("hidden-block"),v.classList.remove("hidden"),s.classList.remove("hidden-block"),i.classList.remove("hidden"),O.classList.add("hidden-block"),A.classList.add("hidden")),checkToken()}).catch(function(e){N.innerHTML="",P.classList.add("button_bad"),e.email="This combination, mail and password were not found!",k(o,e)})):(a.email='Please enter a valid email address (your entry is not in the format "somebody@example.com")',void k(o,a))}),document.forms["form-message"].addEventListener("submit",function(e){e.preventDefault();var t=e.target,n=L(t),o=t.querySelector(".name-js"),a=t.querySelector(".message-js"),s=(t.querySelector(".form__input email-js"),{});s.to=n.email,s.body=JSON.stringify(n);var i={};return null===n.name||""===n.name?(i.name="This field is required",void k(t,i)):parseInt(o.value)?(i.name="This name is not valid",void k(t,i)):n.name.length<3||20<=n.name.length?(i.name="Your name is too short or too long",void k(t,i)):null===n.message||""===n.message?(i.message="This field is required",void k(t,i)):parseInt(a.value)?(i.message="This message is not valid",void k(t,i)):n.message.length<3||20<=n.message.length?(i.message="Your message is too short or too long",void k(t,i)):null===n.email||""===n.email?(i.email="This field is required",void k(t,i)):T(n.email)?null===n.phone||""===n.phone?(i.phone="This field is required",void k(t,i)):n.phone.match(/^(\s*)?(\+)?([-_():=+]?\d[- _():=+]?){10,14}(\s*)?$/)?null===n.messagetext||""===n.messagetext?(i.messagetext="This field is required",void k(t,i)):n.messagetext.length<3?(i.messagetext="Your message is too short",void k(t,i)):"no"===n.acceptbutton?(i.acceptbutton="You didn't agree to processing of your personal data",void k(t,i)):(N.innerHTML=R(),void x({url:"/api/emails",method:"POST",body:JSON.stringify(s),headers:{"Content-Type":"application/json;charset=utf-8"}}).then(function(e){return e.json()}).then(function(e){if(!e.success)throw i;N.innerHTML="",q(t),I.classList.remove("button_bad"),I.classList.add("button_good"),setTimeout(function(){l.classList.add("modal_close")},2e3)}).catch(function(e){N.innerHTML="",I.classList.remove("button_good"),I.classList.add("button_bad"),e.email="This mail is already subscribed to the newsletter",k(t,e)})):(i.phone="Please enter a valid phone number",void k(t,i)):(i.email='Please enter a valid email address (your entry is not in the format "somebody@example.com")',void k(t,i))}),function(){var r=document.querySelector(".filter__tag"),_=document.querySelector(".blog"),y=c(),t=document.querySelector(".selector__btn_back"),n=document.querySelector(".selector__btn_forward");function L(){return'\n    <div class="loader">\n      <div class="loader-line"></div>\n      <div class="loader-line"></div>\n      <div class="loader-line"></div>\n    </div>\n    '}function S(e){return'\n    <li class="blog__item">\n            <picture class="blog__img-box">\n              <source srcset="'.concat(M).concat(e.mobilePhotoUrl,", ").concat(M).concat(e.mobile2xPhotoUrl,'" media="(max-width: 700px)">\n              <source srcset="').concat(M).concat(e.tabletPhotoUrl,", ").concat(M).concat(e.tablet2xPhotoUrl,'" media="(max-width: 850px)">\n              <source srcset="').concat(M).concat(e.desktopPhotoUrl,", ").concat(M).concat(e.desktop2xPhotoUrl,'">\n              <img class="blog__img" src="').concat(M).concat(e.desktopPhotoUrl,'" width="320" height="236" alt="').concat(e.title,'"/>\n            </picture>\n            <div class="blog__content">\n              <ul class="blog__tag-list list-point-none">\n                ').concat(function(e){for(var t="",n=0;n<e.length;n++){var o=e[n];t+=function(e){return'\n      <li aria-label="tag '.concat(e.tagId,'" class="blog__tag blog__tag_').concat(e.tagId,'"></li>\n    ')}(o)}return t}(e.tags),'\n              </ul>\n              <span class="blog__date blog__info">').concat(function(e){var t=new Date(e),n=t.getFullYear(),o=1+t.getMonth();o<10&&(o="0"+o);var a=t.getDate();a<10&&(a="0"+a);return a+"."+o+"."+n}(e.date),'</span>\n              <span class="blog__views blog__info">').concat(e.views,' views</span>\n              <span class="blog__comments blog__info">').concat(e.commentsCount,' comments</span>\n              <h2 class="blog__title">').concat(e.title,'</h2>\n              <p class="blog__text">').concat(e.text,'</p>\n              <a class="blog__link" href="#">Go to this post</a>\n            </div>\n          </li>\n    ')}function w(e){for(var s=e.page?+e.page:1,i=e.howShow?+e.howShow:5,t=(s-1)*i,n=JSON.stringify(e.tags||[]),o=e.commentsCount||[],a=51,r=-1,l=0;l<o.length;l++)var c=o[l].split("-")[0],d=o[l].split("-")[1],a=+q(+a,q(+c,+d)),r=+k(+r,k(+c,+d));var u={},m="";51!==a&&-1!==r&&(u.commentsCount={$between:[a,r]}),Object.keys(u)&&(m="&filter="+JSON.stringify(u));var f=e.views||"",v=f.split("-")[0],h=f.split("-")[1];u.views={$between:[v,h]},Object.keys(u)&&(m="&filter="+JSON.stringify(u));var g="",p=[e.sortBy,"ASC"];Object.keys(p)&&(g="&sort="+JSON.stringify(p));var b=e.search;""!==b&&(u.title=b),Object.keys(u)&&(m="&filter="+JSON.stringify(u)),T("GET","/api/posts?limit=".concat(i,"&offset=").concat(t,"&tags=").concat(n).concat(m).concat(g),function(e){var t=JSON.parse(e.response);if(t.success){for(var n=t.data,o="",a=0;a<n.length;a++)o+=S(n[a]);_.innerHTML=o,function(t,o){var a=document.querySelector(".selector__pages");a.innerHTML="";for(var e=0;e<t;e++)!function(n){var e=document.createElement("a");e.classList.add("selector__link"),e.setAttribute("href","#"),e.setAttribute("aria-label","Page "+(n+1)),O=o,A=Math.ceil(t),o===n+1&&e.classList.add("selector__link_active"),e.innerHTML=n+1,e.addEventListener("click",function(e){e.preventDefault();var t=E(x);t.page=n+1+"",j(t),w(y=t)}),a.insertAdjacentElement("beforeend",e)}(e)}(t.count/i,s)}else alert("ERROR!");""===_.innerHTML&&(_.innerHTML='\n    <p class="blog__message">Nothing found</p>\n    ')},function(){_.innerHTML=L()})}function k(e,t){return t<e?e:t}function q(e,t){return t<e?t:e}function T(e,t,n,o,a){o&&o();var s=new XMLHttpRequest;s.open(e,M+t),s.send(),s.onload=function(){n(s)},s.onerror=function(){a&&a(s)}}function E(e){var t,n={},o=e.querySelectorAll("input"),a=(o.length,d(o));try{for(a.s();!(t=a.n()).done;){var s=t.value;switch(s.type){case"radio":s.checked&&(n[s.name]=s.value);break;case"checkbox":n[s.name]||(n[s.name]=[]),s.checked&&n[s.name].push(s.value);break;default:n[s.name]=s.value}}}catch(e){a.e(e)}finally{a.f()}return n}function l(e,t){var n,o=e.querySelectorAll("input"),a=(o.length,d(o));try{for(a.s();!(n=a.n()).done;){var s=n.value;switch(s.type){case"radio":t[s.name]&&t[s.name]===s.value&&(s.checked=!0);break;case"checkbox":if(t[s.name])if("object"===u(t[s.name]))for(var i=0;i<t[s.name].length;i++)t[s.name][i]===s.value&&(s.checked=!0);else t[s.name]===s.value&&(s.checked=!0);break;default:t[s.name]&&(s.value=t[s.name])}}}catch(e){a.e(e)}finally{a.f()}}function c(){var e={};if(location.search)for(var t=location.search.substring(1).split("&"),n=0;n<t.length;n++){var o=t[n].split("="),a=o[0],s=o[1].replace(/%20/g," ");e[a]?"string"==typeof e[a]?e[a]=[e[a],s]:e[a].push(s):e[a]=s}return e}function j(e){for(var t=[],n=Object.keys(e),o=0;o<n.length;o++)if("string"==typeof e[n[o]])t.push(n[o]+"="+e[n[o]]);else for(var a=0;a<e[n[o]].length;a++)t.push(n[o]+"="+e[n[o]][a]);window.history.replaceState({},document.title,"?"+t.join("&"))}T("GET","/api/tags",function(e){var t,n,o=JSON.parse(e.response);if(o.success){for(var a=o.data,s="",i=0;i<a.length;i++)s+=(n=a[i],'\n    <label class="filter__checkbox-label">\n      <input aria-label="tag '.concat(n.id,'" class="filter__form-checkbox hidden" type="checkbox" value="').concat(n.id,'" name="tags">\n      <span class="filter__form-checkbox-indicator filter__form-checkbox-indicator_2 filter__form-checkbox-indicator_tag-').concat(n.id,'"></span>\n    </label>\n    '));r.innerHTML=s,l(x,c()),(t=E(x)).tags=[1,6],j(t),w(y=t),l(x,c()),j(E(x)),w(E(x))}else alert("ERROR!")},function(){r.innerHTML=L()}),"object"!==u(y.tags)&&(y.tags=[y.tags]),w(y);var x=document.forms.filterForm;l(x,c()),x.addEventListener("submit",function(e){e.preventDefault();var t=E(e.target);j(t),y.page="1",w(y=t)});var O=0,A=0;function o(e){0<O-e&&n.removeAttribute("disabled"),O-e<0&&t.removeAttribute("disabled"),0===e&&t.setAttribute("disabled","disabled"),e===A&&n.setAttribute("disabled","disabled"),O=e}n.addEventListener("click",function(){var e=O+1;o(e);var t=E(x);t.page=e+"",j(t),w(y=t)}),t.addEventListener("click",function(){var e,t=O-1;o(t),0<O&&((e=E(x)).page=t+"",j(e),w(y=e))})}();
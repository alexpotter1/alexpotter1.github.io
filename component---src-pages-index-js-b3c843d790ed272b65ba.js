(window.webpackJsonp=window.webpackJsonp||[]).push([[16,5,6,7,12,14,15],{"/3Zf":function(e,t,n){"use strict";n.r(t);var r=n("q1tI"),a=n.n(r),i=n("BmFx"),l=n.n(i);t.default=function(){return a.a.createElement("a",{className:"cv-link",href:l.a,download:!0},"Download CV")}},"0EVK":function(e,t,n){"use strict";n.r(t);var r=n("q1tI"),a=n.n(r),i=n("f4Bk"),l=n("TGva"),u=n("wd/R"),c=n.n(u),o=function(e){var t=e.name,n=e.publisher,r=e.releaseDate,u=e.url,o=e.summary;return Object(i.a)(t)||Object(i.a)(n)?null:a.a.createElement("article",null,a.a.createElement("header",null,a.a.createElement("div",{className:"spaced-list"},a.a.createElement("h4",null,t),Object(i.a)(r)?null:a.a.createElement("time",{dateTime:r},c()(r).format(l.a))),a.a.createElement("div",{className:"spaced-list"},Object(i.a)(n)?null:a.a.createElement("span",null,"Published by ",a.a.createElement("strong",null,n)),Object(i.a)(u)?null:a.a.createElement("a",{href:u},u))),Object(i.a)(o)?null:o)};t.default=function(e){var t=e.publications;return 0===(null==t?void 0:t.length)||void 0===(null==t?void 0:t.length)?null:a.a.createElement("section",{id:"publications"},a.a.createElement("h3",null,"Publications"),a.a.createElement("div",{className:"stack"},t.map((function(e){return a.a.createElement(o,Object.assign({key:e.releaseDate},e))}))))}},"1KCs":function(e,t,n){"use strict";n.r(t);var r=n("q1tI"),a=n.n(r),i=n("f4Bk"),l=n("TGva"),u=n("wd/R"),c=n.n(u),o=function(e){var t=e.name,n=e.icon,r=e.startDate,u=e.endDate,o=e.position,m=e.url,f=e.summary,d=e.highlights;return Object(i.a)(t)||Object(i.a)(o)?null:a.a.createElement("article",null,a.a.createElement("header",null,a.a.createElement("div",{className:"spaced-list"},a.a.createElement("div",{className:"institution-container"},Object(i.a)(n)?null:a.a.createElement("img",{src:n,alt:"institution icon"}),a.a.createElement("h4",null,t)),a.a.createElement("span",null,a.a.createElement("time",{dateTime:r},c()(r).format(l.a))," -",Object(i.a)(u)?" Present":a.a.createElement("time",{dateTime:u}," "+c()(u).format(l.a)))),a.a.createElement("div",{className:"spaced-list"},a.a.createElement("strong",null,o),Object(i.a)(m)?null:a.a.createElement("a",{href:m},m)),Object(i.a)(f)?null:f),a.a.createElement(s,{highlights:d}))},s=function(e){var t=e.highlights;return 0===t.length?null:a.a.createElement(a.a.Fragment,null,a.a.createElement("h5",null,"Highlights"),a.a.createElement("ul",null,t.map((function(e){return a.a.createElement("li",null,e)}))))};t.default=function(e){var t=e.volunteer;return 0===(null==t?void 0:t.length)||void 0===(null==t?void 0:t.length)?null:a.a.createElement("section",{id:"volunteer"},a.a.createElement("h3",null,"Volunteer"),a.a.createElement("div",{className:"stack"},t.map((function(e){return a.a.createElement(o,Object.assign({key:e.name},e))}))))}},"4irz":function(e,t,n){"use strict";n.r(t);var r=n("q1tI"),a=n.n(r),i=n("f4Bk"),l=function(e){var t=e.text,n=e.value;return a.a.createElement("div",null,a.a.createElement("h4",null,t),n)},u=function(e){var t=e.text,n=e.value,r=e.isEmail;return a.a.createElement("div",null,a.a.createElement("h4",null,t),a.a.createElement("a",{href:r?"mailto:"+n:n},n))};t.default=function(e){var t,n,r=e.email,c=e.phone,o=e.website,s=null;return Object(i.a)(r)||(t=a.a.createElement(u,{text:"Email",value:r,isEmail:!0})),Object(i.a)(c)||(n=a.a.createElement(l,{text:"Phone",value:c})),Object(i.a)(o)||(s=a.a.createElement(u,{text:"Website",value:o,isEmail:!1})),null===t&&null===n&&null===s?null:a.a.createElement("section",{id:"contact"},a.a.createElement("h3",null,"Contact"),a.a.createElement("div",{className:"grid-list"},t,n,s))}},"8+s/":function(e,t,n){"use strict";var r,a=n("q1tI"),i=(r=a)&&"object"==typeof r&&"default"in r?r.default:r;function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var u=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,n){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(r){if("function"!=typeof r)throw new Error("Expected WrappedComponent to be a React component.");var c,o=[];function s(){c=e(o.map((function(e){return e.props}))),m.canUseDOM?t(c):n&&(c=n(c))}var m=function(e){var t,n;function a(){return e.apply(this,arguments)||this}n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,a.peek=function(){return c},a.rewind=function(){if(a.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=c;return c=void 0,o=[],e};var l=a.prototype;return l.UNSAFE_componentWillMount=function(){o.push(this),s()},l.componentDidUpdate=function(){s()},l.componentWillUnmount=function(){var e=o.indexOf(this);o.splice(e,1),s()},l.render=function(){return i.createElement(r,this.props)},a}(a.PureComponent);return l(m,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(r)+")"),l(m,"canUseDOM",u),m}}},BmFx:function(e,t,n){e.exports=n.p+"static/resume-ce8779245727e7e171806692740ff716.pdf"},"I2+H":function(e,t,n){"use strict";n.r(t);var r=n("q1tI"),a=n.n(r),i=n("f4Bk"),l=function(e){var t=e.name,n=e.keywords;return Object(i.a)(t)||Object(i.a)(n)?null:a.a.createElement("div",null,a.a.createElement("h4",null,t),n.length>0?a.a.createElement("ul",{className:"tag-list"},n.map((function(e){return a.a.createElement("li",{key:e},e)}))):null)};t.default=function(e){var t=e.skills;return 0===(null==t?void 0:t.length)||void 0===(null==t?void 0:t.length)?null:a.a.createElement("section",{id:"skills"},a.a.createElement("h3",null,"Skills"),a.a.createElement("div",{className:"grid-list"},t.map((function(e){return a.a.createElement(l,Object.assign({key:e.name},e))}))))}},IJih:function(e,t,n){"use strict";n.r(t);var r=n("q1tI"),a=n.n(r),i=n("f4Bk"),l=function(e){var t=e.name,n=e.keywords;return Object(i.a)(t)||Object(i.a)(n)?null:a.a.createElement("div",null,a.a.createElement("h4",null,t),n.length>0?a.a.createElement("ul",{className:"tag-list"},n.map((function(e){return a.a.createElement("li",{key:e},e)}))):null)};t.default=function(e){var t=e.interests;return 0===(null==t?void 0:t.length)||void 0===(null==t?void 0:t.length)?null:a.a.createElement("section",{id:"interests"},a.a.createElement("h3",null,"Interests"),a.a.createElement("div",{className:"grid-list"},t.map((function(e){return a.a.createElement(l,Object.assign({key:e.name},e))}))))}},IRsI:function(e,t,n){"use strict";n.r(t);var r=n("q1tI"),a=n.n(r),i=n("f4Bk"),l=n("/3Zf"),u=function(e){var t=e.name,n=e.label;return Object(i.a)(t)||Object(i.a)(n)?null:a.a.createElement("div",{className:"me"},a.a.createElement("h1",null,t),a.a.createElement("h2",null,n))},c=function(e){var t=e.image_url;return Object(i.a)(t)?null:a.a.createElement("div",{className:"me-photo"},a.a.createElement("img",{className:"photo",src:t,alt:"profile"}))};t.default=function(e){return a.a.createElement("header",{className:"masthead"},a.a.createElement(u,e),a.a.createElement(c,{image_url:e.image}),a.a.createElement(l.default,null))}},RXBc:function(e,t,n){"use strict";n.r(t);var r=n("q1tI"),a=n.n(r),i=n("qhky"),l=n("IRsI"),u=n("u1/G"),c=n("4irz"),o=n("ffKS"),s=n("lZa2"),m=n("1KCs"),f=n("t5UN"),d=n("0EVK"),p=n("I2+H"),g=n("eXmO"),E=n("IJih"),y=n("bAlS");t.default=function(e){var t=e.data,n=t.cvJson,r=t.gitCommit;return a.a.createElement(a.a.Fragment,null,a.a.createElement(i.a,null,a.a.createElement("meta",{charset:"utf-8"}),a.a.createElement("meta",{name:"description",content:"{{resume.basics.summary}}"}),a.a.createElement("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),a.a.createElement("title",null,n.basics.name),a.a.createElement("link",{rel:"stylesheet",href:"https://fonts.googleapis.com/css?family=Lato:400,700"})),a.a.createElement("div",{className:"resume-container"},a.a.createElement(l.default,n.basics),a.a.createElement(u.default,{summary:n.basics.summary}),a.a.createElement(c.default,{email:n.basics.email,phone:n.basics.phone,website:n.basics.website}),a.a.createElement(o.default,{profiles:n.basics.profiles}),a.a.createElement(f.default,{education:n.education}),a.a.createElement(s.default,{work:n.work}),a.a.createElement(m.default,{volunteer:n.volunteer}),a.a.createElement(d.default,{publications:n.publications}),a.a.createElement(p.default,{skills:n.skills}),a.a.createElement(g.default,{languages:n.languages}),a.a.createElement(E.default,{interests:n.interests}),a.a.createElement(y.default,{commit:r.hash})))}},TGva:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var r="MMMM YYYY"},bAlS:function(e,t,n){"use strict";n.r(t);var r=n("q1tI"),a=n.n(r),i=n("wd/R"),l=n.n(i),u=n("lP78"),c=n.n(u),o=n("f4Bk"),s=function(e){var t=e.commit,n=l()().format("YYYY-MM-DD");return a.a.createElement("section",null,a.a.createElement("div",{className:"footerItem"},"Version:  ",n,"-",t.substring(0,7)))},m=function(e){var t=e.img,n=e.text,r=!Object(o.a)(t);return a.a.createElement("section",null,a.a.createElement("div",{className:"footerItem",id:"footerPowered"},n,r?a.a.createElement("img",{src:t}):null))};t.default=function(e){var t=e.commit;return a.a.createElement("footer",null,a.a.createElement(m,{img:c.a,text:"Built with "}),a.a.createElement(s,{commit:t}))}},bmMU:function(e,t){var n="undefined"!=typeof Element,r="function"==typeof Map,a="function"==typeof Set,i="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;e.exports=function(e,t){try{return function e(t,l){if(t===l)return!0;if(t&&l&&"object"==typeof t&&"object"==typeof l){if(t.constructor!==l.constructor)return!1;var u,c,o,s;if(Array.isArray(t)){if((u=t.length)!=l.length)return!1;for(c=u;0!=c--;)if(!e(t[c],l[c]))return!1;return!0}if(r&&t instanceof Map&&l instanceof Map){if(t.size!==l.size)return!1;for(s=t.entries();!(c=s.next()).done;)if(!l.has(c.value[0]))return!1;for(s=t.entries();!(c=s.next()).done;)if(!e(c.value[1],l.get(c.value[0])))return!1;return!0}if(a&&t instanceof Set&&l instanceof Set){if(t.size!==l.size)return!1;for(s=t.entries();!(c=s.next()).done;)if(!l.has(c.value[0]))return!1;return!0}if(i&&ArrayBuffer.isView(t)&&ArrayBuffer.isView(l)){if((u=t.length)!=l.length)return!1;for(c=u;0!=c--;)if(t[c]!==l[c])return!1;return!0}if(t.constructor===RegExp)return t.source===l.source&&t.flags===l.flags;if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===l.valueOf();if(t.toString!==Object.prototype.toString)return t.toString()===l.toString();if((u=(o=Object.keys(t)).length)!==Object.keys(l).length)return!1;for(c=u;0!=c--;)if(!Object.prototype.hasOwnProperty.call(l,o[c]))return!1;if(n&&t instanceof Element)return!1;for(c=u;0!=c--;)if(("_owner"!==o[c]&&"__v"!==o[c]&&"__o"!==o[c]||!t.$$typeof)&&!e(t[o[c]],l[o[c]]))return!1;return!0}return t!=t&&l!=l}(e,t)}catch(l){if((l.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw l}}},eXmO:function(e,t,n){"use strict";n.r(t);var r=n("q1tI"),a=n.n(r),i=n("f4Bk"),l=function(e){var t=e.language,n=e.fluency;return Object(i.a)(t)?null:a.a.createElement("div",null,a.a.createElement("h4",null,t),Object(i.a)(n)?null:n)};t.default=function(e){var t=e.languages;return 0===(null==t?void 0:t.length)||void 0===(null==t?void 0:t.length)?null:a.a.createElement("section",{id:"languages"},a.a.createElement("h3",null,"Languages"),a.a.createElement("div",{className:"grid-list"},t.map((function(e){return a.a.createElement(l,Object.assign({key:e.language},e))}))))}},ffKS:function(e,t,n){"use strict";n.r(t);var r=n("q1tI"),a=n.n(r),i=n("f4Bk"),l=function(e){var t=e.network,n=e.username,r=e.url,l=e.icon,u=!Object(i.a)(n),c=!Object(i.a)(r),o=!Object(i.a)(l);return Object(i.a)(t)?null:a.a.createElement("div",{className:"profileItem"},o?a.a.createElement("img",{className:"profileIcon",src:l,alt:"profile icon"}):a.a.createElement("h4",null,t),c&&u?a.a.createElement("a",{href:r},n):u?{username:n}:c?a.a.createElement("a",{href:r},r):null)};t.default=function(e){var t=e.profiles;return 0===(null==t?void 0:t.length)||void 0===(null==t?void 0:t.length)?null:a.a.createElement("section",{id:"profiles"},a.a.createElement("h3",null,"Profiles"),a.a.createElement("div",{className:"grid-list"},t.map((function(e){return a.a.createElement(l,{key:e.network,network:e.network,username:e.username,url:e.url,icon:e.icon})}))))}},lP78:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDYgMjgiIGZvY3VzYWJsZT0iZmFsc2UiPgogIDx0aXRsZT4KICAgIEdhdHNieQogIDwvdGl0bGU+CiAgPHBhdGggZD0iTTYyLjkgMTJoMi44djEwaC0yLjh2LTEuM2MtMSAxLjUtMi4zIDEuNi0zLjEgMS42LTMuMSAwLTUuMS0yLjQtNS4xLTUuMyAwLTMgMi01LjMgNC45LTUuMy44IDAgMi4zLjEgMy4yIDEuNlYxMnptLTUuMiA1YzAgMS42IDEuMSAyLjggMi44IDIuOCAxLjYgMCAyLjgtMS4yIDIuOC0yLjggMC0xLjYtMS4xLTIuOC0yLjgtMi44LTEuNiAwLTIuOCAxLjItMi44IDIuOHptMTMuNS0yLjZWMjJoLTIuOHYtNy42aC0xLjFWMTJoMS4xVjguNmgyLjhWMTJoMS45djIuNGgtMS45em04LjUgMGMtLjctLjYtMS4zLS43LTEuNi0uNy0uNyAwLTEuMS4zLTEuMS44IDAgLjMuMS42LjkuOWwuNy4yYy44LjMgMiAuNiAyLjUgMS40LjMuNC41IDEgLjUgMS43IDAgLjktLjMgMS44LTEuMSAyLjVzLTEuOCAxLjEtMyAxLjFjLTIuMSAwLTMuMi0xLTMuOS0xLjdsMS41LTEuN2MuNi42IDEuNCAxLjIgMi4yIDEuMi44IDAgMS40LS40IDEuNC0xLjEgMC0uNi0uNS0uOS0uOS0xbC0uNi0uMmMtLjctLjMtMS41LS42LTIuMS0xLjItLjUtLjUtLjgtMS4xLS44LTEuOSAwLTEgLjUtMS44IDEtMi4zLjgtLjYgMS44LS43IDIuNi0uNy43IDAgMS45LjEgMy4yIDEuMWwtMS40IDEuNnptNi4xLTEuMWMxLTEuNCAyLjQtMS42IDMuMi0xLjYgMi45IDAgNC45IDIuMyA0LjkgNS4zcy0yIDUuMy01IDUuM2MtLjYgMC0yLjEtLjEtMy4yLTEuNlYyMkg4M1Y1LjJoMi44djguMXptLS4zIDMuN2MwIDEuNiAxLjEgMi44IDIuOCAyLjggMS42IDAgMi44LTEuMiAyLjgtMi44IDAtMS42LTEuMS0yLjgtMi44LTIuOC0xLjcgMC0yLjggMS4yLTIuOCAyLjh6bTEzIDMuNUw5My43IDEySDk3bDMuMSA1LjcgMi44LTUuN2gzLjJsLTggMTUuM2gtMy4ybDMuNi02Ljh6TTU0IDEzLjdoLTd2Mi44aDMuN2MtLjYgMS45LTIgMy4yLTQuNiAzLjItMi45IDAtNS0yLjQtNS01LjNTNDMuMSA5IDQ2IDljMS42IDAgMy4yLjggNC4yIDIuMWwyLjMtMS41QzUxIDcuNSA0OC42IDYuMyA0NiA2LjNjLTQuNCAwLTggMy42LTggOC4xczMuNCA4LjEgOCA4LjEgOC0zLjYgOC04LjFjLjEtLjMgMC0uNSAwLS43eiIvPgogIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0yNSAxNGgtN3YyaDQuOGMtLjcgMy0yLjkgNS41LTUuOCA2LjVMNS41IDExYzEuMi0zLjUgNC42LTYgOC41LTYgMyAwIDUuNyAxLjUgNy40IDMuOGwxLjUtMS4zQzIwLjkgNC44IDE3LjcgMyAxNCAzIDguOCAzIDQuNCA2LjcgMy4zIDExLjZsMTMuMiAxMy4yQzIxLjMgMjMuNiAyNSAxOS4yIDI1IDE0em0tMjIgLjFjMCAyLjggMS4xIDUuNSAzLjIgNy42IDIuMSAyLjEgNC45IDMuMiA3LjYgMy4yTDMgMTQuMXoiLz4KICA8cGF0aCBkPSJNMTQgMEM2LjMgMCAwIDYuMyAwIDE0czYuMyAxNCAxNCAxNCAxNC02LjMgMTQtMTRTMjEuNyAwIDE0IDB6TTYuMiAyMS44QzQuMSAxOS43IDMgMTYuOSAzIDE0LjJMMTMuOSAyNWMtMi44LS4xLTUuNi0xLjEtNy43LTMuMnptMTAuMiAyLjlMMy4zIDExLjZDNC40IDYuNyA4LjggMyAxNCAzYzMuNyAwIDYuOSAxLjggOC45IDQuNWwtMS41IDEuM0MxOS43IDYuNSAxNyA1IDE0IDVjLTMuOSAwLTcuMiAyLjUtOC41IDZMMTcgMjIuNWMyLjktMSA1LjEtMy41IDUuOC02LjVIMTh2LTJoN2MwIDUuMi0zLjcgOS42LTguNiAxMC43eiIgZmlsbD0iIzYzOSIvPgo8L3N2Zz4K"},lZa2:function(e,t,n){"use strict";n.r(t);var r=n("q1tI"),a=n.n(r),i=n("f4Bk"),l=n("TGva"),u=n("wd/R"),c=n.n(u),o=function(e){var t=e.company,n=e.icon,r=e.startDate,u=e.endDate,o=e.position,m=e.website,f=e.summary,d=e.highlights;return Object(i.a)(t)||Object(i.a)(o)?null:a.a.createElement("article",null,a.a.createElement("header",null,a.a.createElement("div",{className:"spaced-list"},a.a.createElement("div",{className:"institution-container"},Object(i.a)(n)?null:a.a.createElement("img",{src:n,alt:"institution icon"}),a.a.createElement("h4",null,t)),a.a.createElement("span",null,a.a.createElement("time",{dateTime:r},c()(r).format(l.a))," -",Object(i.a)(u)?" Present":a.a.createElement("time",{dateTime:u}," "+c()(u).format(l.a)))),a.a.createElement("div",{className:"spaced-list"},a.a.createElement("strong",null,o),Object(i.a)(m)?null:a.a.createElement("a",{href:m},m)),Object(i.a)(f)?null:f),a.a.createElement(s,{highlights:d}))},s=function(e){var t=e.highlights;return 0===t.length?null:a.a.createElement(a.a.Fragment,null,a.a.createElement("h5",null,"Highlights"),a.a.createElement("ul",null,t.map((function(e){return a.a.createElement("li",{key:e},e)}))))};t.default=function(e){var t=e.work;return 0===(null==t?void 0:t.length)||void 0===(null==t?void 0:t.length)?null:a.a.createElement("section",{id:"work"},a.a.createElement("h3",null,"Work"),a.a.createElement("div",{className:"stack"},t.map((function(e){return a.a.createElement(o,Object.assign({key:e.name},e))}))))}},qhky:function(e,t,n){"use strict";(function(e){n("E9XD");var r,a,i,l,u=n("17x9"),c=n.n(u),o=n("8+s/"),s=n.n(o),m=n("bmMU"),f=n.n(m),d=n("q1tI"),p=n.n(d),g=n("YVoz"),E=n.n(g),y="bodyAttributes",h="htmlAttributes",M="titleAttributes",v={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},b=(Object.keys(v).map((function(e){return v[e]})),"charset"),j="cssText",T="href",L="http-equiv",I="innerHTML",A="itemprop",O="name",S="property",w="rel",N="src",C="target",D={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},k="defaultTitle",x="defer",P="encodeSpecialCharacters",Y="onChangeClientState",z="titleTemplate",U=Object.keys(D).reduce((function(e,t){return e[D[t]]=t,e}),{}),B=[v.NOSCRIPT,v.SCRIPT,v.STYLE],R="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},q=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},H=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),F=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},G=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n},Z=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},Q=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},_=function(e){var t=X(e,v.TITLE),n=X(e,z);if(n&&t)return n.replace(/%s/g,(function(){return Array.isArray(t)?t.join(""):t}));var r=X(e,k);return t||r||void 0},W=function(e){return X(e,Y)||function(){}},J=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return F({},e,t)}),{})},K=function(e,t){return t.filter((function(e){return void 0!==e[v.BASE]})).map((function(e){return e[v.BASE]})).reverse().reduce((function(t,n){if(!t.length)for(var r=Object.keys(n),a=0;a<r.length;a++){var i=r[a].toLowerCase();if(-1!==e.indexOf(i)&&n[i])return t.concat(n)}return t}),[])},V=function(e,t,n){var r={};return n.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&re("Helmet: "+e+' should be of type "Array". Instead found type "'+R(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,n){var a={};n.filter((function(e){for(var n=void 0,i=Object.keys(e),l=0;l<i.length;l++){var u=i[l],c=u.toLowerCase();-1===t.indexOf(c)||n===w&&"canonical"===e[n].toLowerCase()||c===w&&"stylesheet"===e[c].toLowerCase()||(n=c),-1===t.indexOf(u)||u!==I&&u!==j&&u!==A||(n=u)}if(!n||!e[n])return!1;var o=e[n].toLowerCase();return r[n]||(r[n]={}),a[n]||(a[n]={}),!r[n][o]&&(a[n][o]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var i=Object.keys(a),l=0;l<i.length;l++){var u=i[l],c=E()({},r[u],a[u]);r[u]=c}return e}),[]).reverse()},X=function(e,t){for(var n=e.length-1;n>=0;n--){var r=e[n];if(r.hasOwnProperty(t))return r[t]}return null},$=(r=Date.now(),function(e){var t=Date.now();t-r>16?(r=t,e(t)):setTimeout((function(){$(e)}),0)}),ee=function(e){return clearTimeout(e)},te="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||$:e.requestAnimationFrame||$,ne="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||ee:e.cancelAnimationFrame||ee,re=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},ae=null,ie=function(e,t){var n=e.baseTag,r=e.bodyAttributes,a=e.htmlAttributes,i=e.linkTags,l=e.metaTags,u=e.noscriptTags,c=e.onChangeClientState,o=e.scriptTags,s=e.styleTags,m=e.title,f=e.titleAttributes;ce(v.BODY,r),ce(v.HTML,a),ue(m,f);var d={baseTag:oe(v.BASE,n),linkTags:oe(v.LINK,i),metaTags:oe(v.META,l),noscriptTags:oe(v.NOSCRIPT,u),scriptTags:oe(v.SCRIPT,o),styleTags:oe(v.STYLE,s)},p={},g={};Object.keys(d).forEach((function(e){var t=d[e],n=t.newTags,r=t.oldTags;n.length&&(p[e]=n),r.length&&(g[e]=d[e].oldTags)})),t&&t(),c(e,p,g)},le=function(e){return Array.isArray(e)?e.join(""):e},ue=function(e,t){void 0!==e&&document.title!==e&&(document.title=le(e)),ce(v.TITLE,t)},ce=function(e,t){var n=document.getElementsByTagName(e)[0];if(n){for(var r=n.getAttribute("data-react-helmet"),a=r?r.split(","):[],i=[].concat(a),l=Object.keys(t),u=0;u<l.length;u++){var c=l[u],o=t[c]||"";n.getAttribute(c)!==o&&n.setAttribute(c,o),-1===a.indexOf(c)&&a.push(c);var s=i.indexOf(c);-1!==s&&i.splice(s,1)}for(var m=i.length-1;m>=0;m--)n.removeAttribute(i[m]);a.length===i.length?n.removeAttribute("data-react-helmet"):n.getAttribute("data-react-helmet")!==l.join(",")&&n.setAttribute("data-react-helmet",l.join(","))}},oe=function(e,t){var n=document.head||document.querySelector(v.HEAD),r=n.querySelectorAll(e+"[data-react-helmet]"),a=Array.prototype.slice.call(r),i=[],l=void 0;return t&&t.length&&t.forEach((function(t){var n=document.createElement(e);for(var r in t)if(t.hasOwnProperty(r))if(r===I)n.innerHTML=t.innerHTML;else if(r===j)n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText));else{var u=void 0===t[r]?"":t[r];n.setAttribute(r,u)}n.setAttribute("data-react-helmet","true"),a.some((function(e,t){return l=t,n.isEqualNode(e)}))?a.splice(l,1):i.push(n)})),a.forEach((function(e){return e.parentNode.removeChild(e)})),i.forEach((function(e){return n.appendChild(e)})),{oldTags:a,newTags:i}},se=function(e){return Object.keys(e).reduce((function(t,n){var r=void 0!==e[n]?n+'="'+e[n]+'"':""+n;return t?t+" "+r:r}),"")},me=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[D[n]||n]=e[n],t}),t)},fe=function(e,t,n){switch(e){case v.TITLE:return{toComponent:function(){return e=t.title,n=t.titleAttributes,(r={key:e})["data-react-helmet"]=!0,a=me(n,r),[p.a.createElement(v.TITLE,a,e)];var e,n,r,a},toString:function(){return function(e,t,n,r){var a=se(n),i=le(t);return a?"<"+e+' data-react-helmet="true" '+a+">"+Q(i,r)+"</"+e+">":"<"+e+' data-react-helmet="true">'+Q(i,r)+"</"+e+">"}(e,t.title,t.titleAttributes,n)}};case y:case h:return{toComponent:function(){return me(t)},toString:function(){return se(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,n){var r,a=((r={key:n})["data-react-helmet"]=!0,r);return Object.keys(t).forEach((function(e){var n=D[e]||e;if(n===I||n===j){var r=t.innerHTML||t.cssText;a.dangerouslySetInnerHTML={__html:r}}else a[n]=t[e]})),p.a.createElement(e,a)}))}(e,t)},toString:function(){return function(e,t,n){return t.reduce((function(t,r){var a=Object.keys(r).filter((function(e){return!(e===I||e===j)})).reduce((function(e,t){var a=void 0===r[t]?t:t+'="'+Q(r[t],n)+'"';return e?e+" "+a:a}),""),i=r.innerHTML||r.cssText||"",l=-1===B.indexOf(e);return t+"<"+e+' data-react-helmet="true" '+a+(l?"/>":">"+i+"</"+e+">")}),"")}(e,t,n)}}}},de=function(e){var t=e.baseTag,n=e.bodyAttributes,r=e.encode,a=e.htmlAttributes,i=e.linkTags,l=e.metaTags,u=e.noscriptTags,c=e.scriptTags,o=e.styleTags,s=e.title,m=void 0===s?"":s,f=e.titleAttributes;return{base:fe(v.BASE,t,r),bodyAttributes:fe(y,n,r),htmlAttributes:fe(h,a,r),link:fe(v.LINK,i,r),meta:fe(v.META,l,r),noscript:fe(v.NOSCRIPT,u,r),script:fe(v.SCRIPT,c,r),style:fe(v.STYLE,o,r),title:fe(v.TITLE,{title:m,titleAttributes:f},r)}},pe=s()((function(e){return{baseTag:K([T,C],e),bodyAttributes:J(y,e),defer:X(e,x),encode:X(e,P),htmlAttributes:J(h,e),linkTags:V(v.LINK,[w,T],e),metaTags:V(v.META,[O,b,L,S,A],e),noscriptTags:V(v.NOSCRIPT,[I],e),onChangeClientState:W(e),scriptTags:V(v.SCRIPT,[N,I],e),styleTags:V(v.STYLE,[j],e),title:_(e),titleAttributes:J(M,e)}}),(function(e){ae&&ne(ae),e.defer?ae=te((function(){ie(e,(function(){ae=null}))})):(ie(e),ae=null)}),de)((function(){return null})),ge=(a=pe,l=i=function(e){function t(){return q(this,t),Z(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!f()(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case v.SCRIPT:case v.NOSCRIPT:return{innerHTML:t};case v.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,n=e.child,r=e.arrayTypeChildren,a=e.newChildProps,i=e.nestedChildren;return F({},r,((t={})[n.type]=[].concat(r[n.type]||[],[F({},a,this.mapNestedChildrenToProps(n,i))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,n,r=e.child,a=e.newProps,i=e.newChildProps,l=e.nestedChildren;switch(r.type){case v.TITLE:return F({},a,((t={})[r.type]=l,t.titleAttributes=F({},i),t));case v.BODY:return F({},a,{bodyAttributes:F({},i)});case v.HTML:return F({},a,{htmlAttributes:F({},i)})}return F({},a,((n={})[r.type]=F({},i),n))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var n=F({},t);return Object.keys(e).forEach((function(t){var r;n=F({},n,((r={})[t]=e[t],r))})),n},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var n=this,r={};return p.a.Children.forEach(e,(function(e){if(e&&e.props){var a=e.props,i=a.children,l=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[U[n]||n]=e[n],t}),t)}(G(a,["children"]));switch(n.warnOnInvalidChildren(e,i),e.type){case v.LINK:case v.META:case v.NOSCRIPT:case v.SCRIPT:case v.STYLE:r=n.flattenArrayTypeChildren({child:e,arrayTypeChildren:r,newChildProps:l,nestedChildren:i});break;default:t=n.mapObjectTypeChildren({child:e,newProps:t,newChildProps:l,nestedChildren:i})}}})),t=this.mapArrayTypeChildrenToProps(r,t)},t.prototype.render=function(){var e=this.props,t=e.children,n=G(e,["children"]),r=F({},n);return t&&(r=this.mapChildrenToProps(t,r)),p.a.createElement(a,r)},H(t,null,[{key:"canUseDOM",set:function(e){a.canUseDOM=e}}]),t}(p.a.Component),i.propTypes={base:c.a.object,bodyAttributes:c.a.object,children:c.a.oneOfType([c.a.arrayOf(c.a.node),c.a.node]),defaultTitle:c.a.string,defer:c.a.bool,encodeSpecialCharacters:c.a.bool,htmlAttributes:c.a.object,link:c.a.arrayOf(c.a.object),meta:c.a.arrayOf(c.a.object),noscript:c.a.arrayOf(c.a.object),onChangeClientState:c.a.func,script:c.a.arrayOf(c.a.object),style:c.a.arrayOf(c.a.object),title:c.a.string,titleAttributes:c.a.object,titleTemplate:c.a.string},i.defaultProps={defer:!0,encodeSpecialCharacters:!0},i.peek=a.peek,i.rewind=function(){var e=a.rewind();return e||(e=de({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},l);ge.renderStatic=ge.rewind,t.a=ge}).call(this,n("yLpj"))},t5UN:function(e,t,n){"use strict";n.r(t);var r=n("q1tI"),a=n.n(r),i=n("f4Bk"),l=n("TGva"),u=n("wd/R"),c=n.n(u),o=function(e){var t=e.institution,n=e.icon,r=e.startDate,u=e.endDate,o=e.title,m=e.website,f=e.studyType,d=e.score,p=e.courses;return Object(i.a)(t)||Object(i.a)(o)?null:a.a.createElement("article",null,a.a.createElement("header",null,a.a.createElement("div",{className:"spaced-list"},a.a.createElement("div",{className:"institution-container"},Object(i.a)(n)?null:a.a.createElement("img",{src:n,alt:"institution icon"}),a.a.createElement("h4",null,t)),a.a.createElement("span",null,a.a.createElement("time",{dateTime:r},c()(r).format(l.a))," -",Object(i.a)(u)?" Present":a.a.createElement("time",{dateTime:u}," "+c()(u).format(l.a)))),a.a.createElement("div",{className:"spaced-list"},a.a.createElement("h5",null,o),Object(i.a)(m)?null:a.a.createElement("a",{href:m},m)),a.a.createElement("div",{className:"spaced-list"},a.a.createElement("h6",null,Object(i.a)(f)?null:f),Object(i.a)(d)?null:a.a.createElement("strong",null,d))),a.a.createElement(s,{courses:p}))},s=function(e){var t=e.courses;return 0===(null==t?void 0:t.length)||void 0===(null==t?void 0:t.length)?null:a.a.createElement(a.a.Fragment,null,a.a.createElement("h5",null,"Courses"),a.a.createElement("ul",null,t.map((function(e){return a.a.createElement("li",{key:e},e)}))))};t.default=function(e){var t=e.education;return 0===(null==t?void 0:t.length)||void 0===(null==t?void 0:t.length)?null:a.a.createElement("section",{id:"education"},a.a.createElement("h3",null,"Education"),a.a.createElement("div",{className:"stack"},t.map((function(e){return a.a.createElement(o,Object.assign({key:e.startDate},e))}))))}},"u1/G":function(e,t,n){"use strict";n.r(t);var r=n("q1tI"),a=n.n(r),i=n("f4Bk");t.default=function(e){var t=e.summary;return Object(i.a)(t)?null:a.a.createElement("section",{id:"about"},a.a.createElement("h3",null,"About"),a.a.createElement("article",null,t))}}}]);
//# sourceMappingURL=component---src-pages-index-js-b3c843d790ed272b65ba.js.map
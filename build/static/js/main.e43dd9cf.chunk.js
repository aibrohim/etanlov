(this["webpackJsonpstarter-app"]=this["webpackJsonpstarter-app"]||[]).push([[0],{36:function(e,t,a){},37:function(e,t,a){"use strict";a.r(t);var c=a(1),s=a.n(c),n=a(23),i=a.n(n),r=a(2),l=a(3),o=a(5),j=a.p+"static/media/logo.03234717.svg",u=a(0),b=function(e){var t=e.children,a=Object(c.useRef)(),s=Object(c.useRef)(),n=Object(l.h)(),i=Object(c.useState)(0),b=Object(r.a)(i,2),d=b[0],h=b[1],m=Object(c.useState)(0),O=Object(r.a)(m,2),_=O[0],x=O[1];return Object(c.useEffect)((function(){var e=a.current.querySelector(".header__nav-link--active");e&&(h(e.offsetLeft),x(e.offsetWidth))}),[n]),Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("header",{className:"header",children:Object(u.jsxs)("div",{className:"header__container container",children:[Object(u.jsx)(o.b,{className:"header__logo",to:"/",children:Object(u.jsx)("img",{className:"header__logo-img",src:j,alt:""})}),Object(u.jsxs)("nav",{className:"header__nav",ref:a,children:[Object(u.jsx)("span",{ref:s,className:"header__indicator",style:{left:d+"px",width:_+"px"}}),Object(u.jsxs)("ul",{className:"header__nav-list",children:[Object(u.jsx)("li",{className:"header__nav-item",children:Object(u.jsx)(o.c,{exact:!0,className:"header__nav-link",activeClassName:"header__nav-link--active",to:"/",children:"Admin pannel"})}),Object(u.jsx)("li",{className:"header__nav-item",children:Object(u.jsx)(o.c,{exact:!0,className:"header__nav-link",activeClassName:"header__nav-link--active",to:"/users",children:"Users"})})]})]})]})}),Object(u.jsx)("main",{children:t})]})},d=Object(c.createContext)(null);function h(e){var t=e.children,a=Object(c.useState)(window.localStorage.getItem("token")),s=Object(r.a)(a,2),n=s[0],i=s[1];return Object(c.useEffect)((function(){n?window.localStorage.setItem("token",n):window.localStorage.removeItem("token")}),[n]),Object(u.jsx)(d.Provider,{value:{state:n,setState:i},children:t})}var m=function(e){var t=Object(c.useContext)(d);return e?[t.setState]:[t.state,t.setState]},O=a(9),_=a(13);var x=function(e){var t=e.children,a=Object(_.a)(e,["children"]),c=m(!1);return Object(r.a)(c,1)[0]?Object(u.jsx)(l.b,Object(O.a)(Object(O.a)({},a),{},{children:t})):Object(u.jsx)(l.a,{to:"/login"})};var p=function(e){var t=e.children,a=Object(_.a)(e,["children"]),c=Object(l.h)().pathname,s=m(!1);return Object(r.a)(s,1)[0]&&"/login"===c?Object(u.jsx)(l.a,{to:"/"}):Object(u.jsx)(l.b,Object(O.a)(Object(O.a)({},a),{},{children:t}))},v=a(12),f=a(10),g=a.n(f),N=a(16),w="token";function S(){return k.apply(this,arguments)}function k(){return(k=Object(N.a)(g.a.mark((function e(){return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:window.localStorage.removeItem(w);case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var y="https://www.api.rajabov.uz/api";function T(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=t.data,c=t.token,s=t.headers,n=Object(_.a)(t,["data","token","headers"]),i=Object(O.a)({method:a?"POST":"GET",body:a?JSON.stringify(a):void 0,headers:Object(O.a)({Authorization:c?"Bearer ".concat(c):void 0,"Content-Type":a?"application/json":void 0},s)},n);return window.fetch("".concat(y,"/").concat(e),i).then(function(){var e=Object(N.a)(g.a.mark((function e(t){var a;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(401!==t.status){e.next=5;break}return e.next=3,S();case 3:return window.location.assign(window.location),e.abrupt("return",Promise.reject({message:"Please re-authenticate.",code:401}));case 5:return e.next=7,t.json();case 7:if(a=e.sent,!t.ok){e.next=12;break}return e.abrupt("return",a);case 12:return e.abrupt("return",Promise.reject(a));case 13:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}var I=a.p+"static/media/calendar-event-line.af420fa4.svg",C=a.p+"static/media/trash.d37c4393.svg",E=function(e){var t=e.data,a=Object(c.useState)(t.isActive),s=Object(r.a)(a,2),n=s[0],i=s[1];return Object(u.jsxs)("li",{className:"events__item",style:{opacity:n?"1":"0.6"},children:[Object(u.jsxs)("div",{className:"events__item-content",children:[Object(u.jsx)("h3",{className:"events__item-title",children:Object(u.jsx)(o.b,{to:"/users?eventId="+t.id,children:t.title})}),Object(u.jsx)("p",{className:"events__item-desc",children:t.desc})]}),Object(u.jsxs)("div",{className:"events__item-info",children:[Object(u.jsxs)("time",{className:"events__item-info-item events__item-date",children:[Object(u.jsx)("img",{src:I,alt:"user"}),t.orginizeDate]}),n?Object(u.jsx)("button",{onClick:function(){T("contests/deactivate/".concat(t.id),{method:"PUT",token:localStorage.getItem("token")}).then((function(){i(!1)}))},className:"events__item-delete",children:Object(u.jsxs)("span",{children:[Object(u.jsx)("img",{src:C,alt:""}),"O'chirish"]})}):null]})]})},M=function(){var e=Object(c.useState)([]),t=Object(r.a)(e,2),a=t[0],s=t[1],n=Object(c.useState)(!1),i=Object(r.a)(n,2),l=i[0],o=i[1],j=Object(c.useState)(""),b=Object(r.a)(j,2),d=b[0],h=b[1],m=Object(c.useRef)(),O=Object(c.useState)(!1),_=Object(r.a)(O,2),x=_[0],p=_[1],f=Object(c.useState)(""),g=Object(r.a)(f,2),N=g[0],w=g[1];Object(c.useEffect)((function(){o(!0),h(""),T("contests",{token:localStorage.getItem("token")}).then((function(e){h(""),o(!1),s(e.data)})).catch((function(e){o(!1),h(e.message)}))}),[]);return Object(u.jsxs)("div",{className:"container",children:[Object(u.jsxs)("section",{className:"section",children:[Object(u.jsx)("h2",{className:"section__title",children:"Yangi tanlov"}),Object(u.jsxs)("form",{ref:m,onSubmit:function(e){e.preventDefault();var t=m.current,c=t.title.value,n=t.img.files,i=t.desc.value,r=t.prize.value,l=t.sponsor.value,o=t.winners.value,j=t.datetext.value;if(c&&i&&r&&l&&o&&j){var u=new FormData;u.append("winnerCount",o),u.append("sponsorTgId",l),u.append("title",c),u.append("orginizeDate",j),u.append("desc",i),u.append("gift",r),u.append("image",n[0]),p(!0),fetch("https://api.rajabov.uz/api/contests",{method:"POST",headers:{Authorization:"Bearer "+localStorage.getItem("token")},body:u}).then((function(e){return p(!1),e.json()})).then((function(e){return e.success?(m.current.reset(),w(""),void s([].concat(Object(v.a)(a),[e.data]))):Promise.reject(e)})).catch((function(e){p(!1),w(e.message)}))}},method:"POST",action:"#",className:"new-event",children:[Object(u.jsxs)("label",{className:"new-event__label",children:["Tanlov nomi",Object(u.jsx)("input",{className:"new-event__input",id:"title",type:"text",placeholder:"some text"})]}),Object(u.jsxs)("label",{className:"new-event__label",children:["Tanlov rasmi",Object(u.jsx)("input",{className:"new-event__input",id:"img",type:"file",accept:"image/*",placeholder:"Tanlov rasmini tanlang"})]}),Object(u.jsxs)("label",{className:"new-event__label",children:["Tanlov tavisifi",Object(u.jsx)("textarea",{className:"new-event__input",id:"desc",cols:"20",rows:"10"})]}),Object(u.jsxs)("label",{className:"new-event__label",children:["Sovg'a",Object(u.jsx)("input",{className:"new-event__input",id:"prize",type:"text",placeholder:"some text"})]}),Object(u.jsxs)("label",{className:"new-event__label",children:["Tanlov homiysi",Object(u.jsx)("input",{className:"new-event__input",id:"sponsor",type:"text",placeholder:"some text"})]}),Object(u.jsxs)("div",{className:"new-event__group",children:[Object(u.jsxs)("label",{className:"new-event__label",children:["G\u2019oliblar soni",Object(u.jsx)("input",{className:"new-event__input",id:"winners",type:"number",placeholder:"some text"})]}),Object(u.jsxs)("label",{className:"new-event__label",children:["Tanlov vaqti",Object(u.jsx)("input",{className:"new-event__input",id:"datetext",type:"text",placeholder:"some text"})]})]}),Object(u.jsxs)("div",{className:"new-event__actions",children:[Object(u.jsx)("button",{className:"new-event__cancel submit-btn submit-btn--outlined",type:"reset",children:"Bekor qilish"}),Object(u.jsx)("button",{disabled:x,className:"submit-btn new-event__submit",type:"submit",children:x?"Sending...":"Send"})]}),N&&Object(u.jsx)("p",{children:N})]})]}),Object(u.jsxs)("section",{className:"section",children:[Object(u.jsx)("h2",{className:"section__title",children:"Barcha tadbirlar"}),l&&Object(u.jsx)("p",{style:{fontStyle:"italic"},children:"Tadbirlar kelyapti..."}),d&&Object(u.jsx)("p",{children:d}),Object(u.jsx)("ul",{className:"events",children:a.map((function(e){return Object(u.jsx)(E,{data:e,setContests:s},e.id)}))})]})]})},P=function(){var e=m(!0),t=Object(r.a)(e,1)[0],a=Object(l.g)(),s=Object(c.useState)(""),n=Object(r.a)(s,2),i=n[0],o=n[1],b=Object(c.useState)(""),d=Object(r.a)(b,2),h=d[0],O=d[1],_=Object(c.useState)(!1),x=Object(r.a)(_,2),p=x[0],v=x[1],f=Object(c.useState)(""),g=Object(r.a)(f,2),N=g[0],w=g[1];return Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)("div",{className:"auth container",children:[Object(u.jsx)("img",{className:"auth__logo",src:j,alt:""}),Object(u.jsxs)("div",{className:"auth__content",children:[Object(u.jsx)("h1",{className:"auth__title",children:"Login"}),Object(u.jsxs)("form",{onSubmit:function(e){e.preventDefault(),i.trim()&&h.trim()&&(w(""),v(!0),T("admin/login",{data:{phoneNumber:i.trim(),password:h.trim()}}).then((function(e){v(!1),t(e.token),a.push("/")})).catch((function(e){v(!1),w(e.message)})))},action:"#",method:"post",children:[Object(u.jsx)("input",{placeholder:"+998901234567",className:"auth__field field",value:i,onChange:function(e){return o(e.target.value)},type:"text"}),Object(u.jsx)("input",{placeholder:"12345678",className:"auth__field field",value:h,onChange:function(e){return O(e.target.value)},type:"password"}),Object(u.jsx)("button",{disabled:p,className:"auth__submit submit-btn",type:"submit",children:p?"Logging in...":"Login"}),N&&Object(u.jsx)("p",{style:{color:"red"},children:N})]})]})]})})},z=function(e){var t=e.data,a=t.firstName,c=t.telegramId,s=t.phoneNumber,n=t.bithYear,i=t.gender,r=(new Date).getFullYear(),l=n?r-n:null;return Object(u.jsxs)("tr",{className:"users__row",children:[Object(u.jsxs)("td",{className:"users__col",children:[Object(u.jsx)("p",{className:"user__user-name",children:a||"Ma'lumot kiritilmagan"}),Object(u.jsxs)("span",{className:"users__user-id",children:["#",c||"Ma'lumot kiritilmagan"]})]}),Object(u.jsx)("td",{className:"users__col",children:Object(u.jsx)("a",{className:"users__user-phone",href:"tel:"+s,children:s||"Ma'lumot kiritilmagan"})}),Object(u.jsx)("td",{className:"users__col",children:l||"Ma'lumot kiritilmagan"}),Object(u.jsx)("td",{className:"users__col",children:i||"Ma'lumot kiritilmagan"})]})},R=function(e){return e||"Ma'lumot kiritilmagan"},D=function(e){var t=e.winners,a=e.setModalUsers,c=e.usersLength;return Object(u.jsx)("div",{className:"winners",onClick:function(e){e.target.matches(".winners")&&a(null)},children:Object(u.jsx)("div",{className:"winners__content",children:Object(u.jsx)("div",{className:"users",children:Object(u.jsxs)("table",{className:"users__table",children:[Object(u.jsxs)("caption",{className:"users__title",children:["Ro\u2019yxatdan o\u2019tganlar (",c,")"]}),Object(u.jsx)("tbody",{children:t&&t.map((function(e){return Object(u.jsxs)("tr",{className:"users__row",children:[Object(u.jsx)("td",{className:"users__col",children:Object(u.jsx)("p",{className:"users__user-name",children:R(e.firstName)})}),Object(u.jsx)("td",{children:R(e.telegramId)}),Object(u.jsx)("td",{className:"users__col",children:Object(u.jsx)("a",{className:"users__user-phone",href:"tel:"+e.phoneNumber,children:R(e.phoneNumber)})})]},e.id)}))})]})})})})};var L=a.p+"static/media/refresh-line.64a9038e.svg";var U=function(){return new URLSearchParams(Object(l.h)().search)},Y=function(){var e=U().get("eventId"),t=Object(c.useState)(null),a=Object(r.a)(t,2),s=a[0],n=a[1],i=Object(c.useState)(!1),l=Object(r.a)(i,2),o=l[0],j=l[1],b=Object(c.useState)([]),d=Object(r.a)(b,2),h=d[0],m=d[1],O=Object(c.useState)(!1),_=Object(r.a)(O,2),x=_[0],p=_[1],f=Object(c.useState)(""),g=Object(r.a)(f,2),N=g[0],w=g[1],S=Object(c.useState)([]),k=Object(r.a)(S,2),y=k[0],I=k[1],C=Object(c.useState)(e||"0"),E=Object(r.a)(C,2),M=E[0],P=E[1],R=function(e,t){var a=Object(c.useState)(e),s=Object(r.a)(a,2),n=s[0],i=s[1];return Object(c.useEffect)((function(){var a=setTimeout((function(){i(e)}),t);return function(){clearTimeout(a)}}),[e,t]),n}(M,250),Y=Object(c.useState)(!1),q=Object(r.a)(Y,2),B=q[0],F=q[1],A=Object(c.useState)(1),J=Object(r.a)(A,2),G=J[0],V=J[1],W=Object(c.useState)(!1),H=Object(r.a)(W,2),K=H[0],Q=H[1];Object(c.useEffect)((function(){T("contests",{token:localStorage.getItem("token")}).then((function(e){m(e.data)}))}),[]),Object(c.useEffect)((function(){"0"===M&&T("users?limit=".concat(1,"&page=").concat(G),{token:localStorage.getItem("token")}).then((function(e){F(!1),I((function(t){return[].concat(Object(v.a)(e.data),Object(v.a)(t))})),e.data.length<1&&Q(!0)})).catch((function(e){F(!1),w(e.message)}))}),[G]),Object(c.useEffect)((function(){"0"!==R&&(w(""),T("users/contest/".concat(R,"?limit=").concat(1,"&page=").concat(G),{token:localStorage.getItem("token")}).then((function(e){p(!1),I((function(t){return[].concat(Object(v.a)(e.data),Object(v.a)(t))})),w(""),F(!1),e.data.length<1&&Q(!0)})).catch((function(e){w(e.message),p(!1),F(!1)})))}),[R,G]),Object(c.useEffect)((function(){"0"!==R&&p(!0)}),[R]);var X=Object(c.useMemo)((function(){return h&&h.find((function(e){return M===e.id}))}),[M,h]);return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsxs)("div",{className:"container",children:[Object(u.jsxs)("form",{onSubmit:function(e){e.preventDefault(),"0"!==M&&(j(!0),T("winners/".concat(M),{token:localStorage.getItem("token")}).then((function(e){j(!1),n(e.data)})).catch((function(){j(!1)})))},className:"choose-winner",children:[Object(u.jsxs)("div",{className:"choose-winner__block choose-winner__event",children:[Object(u.jsx)("label",{className:"choose-winner__title",children:"Tadbir"}),Object(u.jsxs)("select",{className:"field choose-winner__select",defaultValue:M,onChange:function(e){V(1),I([]),P(e.target.value)},children:[Object(u.jsx)("option",{value:"0",disabled:!0,children:"Tadbirni tanlang"}),h.map((function(e){return Object(u.jsx)("option",{value:e.id,children:e.title},e.id)}))]})]}),Object(u.jsxs)("div",{className:"choose-winner__block choose-winner__winner",children:[Object(u.jsx)("h2",{className:"choose-winner__title",children:"G\u2019oliblarni aniqlash"}),Object(u.jsxs)("div",{className:"choose-winner__right-content",children:[Object(u.jsx)("output",{className:"choose-winner__input field",children:X&&X.winnerCount}),Object(u.jsx)("button",{disabled:o,className:"submit-btn",type:"submit",children:Object(u.jsxs)("span",{children:[Object(u.jsx)("img",{className:o?"choose-winner__refresh-icon":"",src:L,alt:""}),o?"Randomlanyapti":"Randomlash"]})})]})]})]}),Object(u.jsxs)("div",{className:"users",children:[x&&Object(u.jsx)("p",{style:{fontStyle:"italic"},children:"Userlar kelyapti..."}),N&&Object(u.jsx)("p",{children:N}),!x&&y.length?Object(u.jsxs)("table",{className:"users__table",children:[Object(u.jsxs)("caption",{className:"users__title",children:["Ro\u2019yxatdan o\u2019tganlar (",y.length,")"]}),Object(u.jsx)("thead",{className:"users__header",children:Object(u.jsxs)("tr",{className:"users__row",children:[Object(u.jsx)("th",{className:"users__col users__header-col",children:"Ism va familiya"}),Object(u.jsx)("th",{className:"users__col users__header-col",children:"Telefon raqam"}),Object(u.jsx)("th",{className:"users__col users__header-col",children:"Yosh"}),Object(u.jsx)("th",{className:"users__col users__header-col",children:"Jinsi"})]})}),Object(u.jsx)("tbody",{children:y&&y.map((function(e){return Object(u.jsx)(z,{data:e},e.id)}))})]}):null]}),!K&&Object(u.jsx)("button",{disabled:B,onClick:function(){F(!0),V(G+1)},className:"more-btn",children:B?"Yuklanyapti...":"Yana yuklash"})]}),s&&Object(u.jsx)(D,{winners:s,setModalUsers:n,usersLength:y.length})]})};a(36);var q=function(){var e=m(),t=Object(r.a)(e,1)[0],a=Object(l.h)().pathname;return Object(u.jsx)(l.d,{children:t?Object(u.jsxs)(b,{children:[Object(u.jsx)(x,{exact:!0,path:"/",children:Object(u.jsx)(M,{})}),Object(u.jsx)(x,{exact:!0,path:"/users",children:Object(u.jsx)(Y,{})})]}):"/login"===a?Object(u.jsx)(p,{exact:!0,path:"/login",children:Object(u.jsx)(P,{})}):Object(u.jsx)(l.a,{to:"/login"})})};i.a.render(Object(u.jsx)(s.a.StrictMode,{children:Object(u.jsx)(o.a,{children:Object(u.jsx)(h,{children:Object(u.jsx)(q,{})})})}),document.getElementById("root"))}},[[37,1,2]]]);
//# sourceMappingURL=main.e43dd9cf.chunk.js.map
(this["webpackJsonpmesto-react"]=this["webpackJsonpmesto-react"]||[]).push([[0],{14:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(5),c=a.n(o),i=(a(14),a(8)),s=a(1);var l=function(){return r.a.createElement("header",{className:"header"},r.a.createElement("div",{className:"header__logo"}))},u=r.a.createContext();var p=function(e){var t=e.card,a=e.onCardClick,n=e.onCardLike,o=e.onCardDelete,c=r.a.useContext(u),i=t.owner._id===c._id,s="element__basket ".concat(i?"element__basket_visible":"element__basket_hidden"),l=t.likes.some((function(e){return e._id===c._id})),p="element__button-like ".concat(l?"element__button-like_on":"");return r.a.createElement("div",{className:"element"},r.a.createElement("img",{className:"element__photo",src:t.link,alt:t.name,onClick:function(){a(t)}}),r.a.createElement("div",{className:"element__group"},r.a.createElement("h4",{className:"element__text"},t.name),r.a.createElement("div",{className:"element__container-like"},r.a.createElement("button",{className:p,onClick:function(){n(t)},type:"button","aria-label":"Like"}),r.a.createElement("span",{className:"element__like-counter"},t.likes.length))),r.a.createElement("button",{className:s,onClick:function(){o(t)},type:"button","arial-label":"basket"}))};var m=function(e){var t=e.cards,a=e.onEditAvatar,n=e.onEditProfile,o=e.onAddPlace,c=e.onCardClick,i=e.onCardLike,s=e.onCardDelete,l=r.a.useContext(u);return r.a.createElement("main",{className:"content"},r.a.createElement("section",{className:"profile"},r.a.createElement("button",{className:"profile__avatar-button popup_opened",onClick:a},r.a.createElement("img",{className:"profile__avatar",src:l.avatar,alt:"\u0418\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f"})),r.a.createElement("div",{className:"profile__info"},r.a.createElement("h1",{className:"profile__full-name"},l.name),r.a.createElement("button",{className:"profile__edit-button",type:"button","aria-label":"Edit",onClick:n}),r.a.createElement("p",{className:"profile__description"},l.about)),r.a.createElement("button",{className:"profile__add-button",type:"button","aria-label":"Add",onClick:o})),r.a.createElement("div",{className:"elements"},t.map((function(e){return r.a.createElement(p,{key:e._id,card:e,onCardClick:c,onCardLike:i,onCardDelete:s})}))))};var d=function(){return r.a.createElement("footer",{className:"footer"},r.a.createElement("p",{className:"footer__copyright"},"\xa9 2020 Mesto Russia"))};var f=function(e){var t=e.name,a=e.isOpen,n=e.isClose,o=e.method,c=e.nameForm,i=e.title,s=e.children,l=e.onSubmit;return r.a.createElement("div",{className:"popup popup_".concat(t," ").concat(a&&"popup_opened")},r.a.createElement("div",{className:"popup__container"},r.a.createElement("button",{className:"popup__close-button",type:"button","aria-label":"Close",onClick:n}),r.a.createElement("form",{onSubmit:l,className:"popup__form",action:"#",method:"".concat(o),name:"".concat(c),noValidate:!0},r.a.createElement("h3",{className:"popup__title"},i),s)))};var _=function(e){var t=e.card,a=e.onClose;return r.a.createElement("div",{className:"popup popup-image ".concat(t&&"popup_opened")},r.a.createElement("div",{className:"popup-image__container"},r.a.createElement("button",{className:"popup__close-button",type:"button","aria-label":"Close",onClick:a}),r.a.createElement("figure",{className:"popup-image__figure"},r.a.createElement("img",{className:"popup-image__frame",src:t&&t.link,alt:t&&t.name}),r.a.createElement("figcaption",{className:"popup-image__title"},t&&t.name))))},h=a(6),E=a(7),v=new(function(){function e(t){var a=t.baseUrl,n=t.headers;Object(h.a)(this,e),this.baseUrl=a,this.headers=n}return Object(E.a)(e,[{key:"getInitialCards",value:function(){return fetch("".concat(this.baseUrl,"/cards"),{headers:this.headers}).then((function(e){return e.ok?e.json():Promise.reject(new Error("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status)))}))}},{key:"addNewCard",value:function(e){return fetch("".concat(this.baseUrl,"/cards"),{method:"POST",headers:this.headers,body:JSON.stringify({name:e.name,link:e.link})}).then((function(e){return e.ok?e.json():Promise.reject(new Error("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status)))}))}},{key:"deleteCard",value:function(e){return fetch("".concat(this.baseUrl,"/cards/").concat(e),{method:"DELETE",headers:this.headers}).then((function(e){return e.ok?e.json():Promise.reject(new Error("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status)))}))}},{key:"setLike",value:function(e){return fetch("".concat(this.baseUrl,"/cards/likes/").concat(e),{method:"PUT",headers:this.headers}).then((function(e){return e.ok?e.json():Promise.reject(new Error("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status)))}))}},{key:"deleteLike",value:function(e){return fetch("".concat(this.baseUrl,"/cards/likes/").concat(e),{method:"DELETE",headers:this.headers}).then((function(e){return e.ok?e.json():Promise.reject(new Error("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status)))}))}},{key:"getUserInfo",value:function(){return fetch("".concat(this.baseUrl,"/users/me"),{headers:this.headers}).then((function(e){return e.ok?e.json():Promise.reject(new Error("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status)))}))}},{key:"changeAvatar",value:function(e){return fetch("".concat(this.baseUrl,"/users/me/avatar"),{method:"PATCH",headers:this.headers,body:JSON.stringify({avatar:e.avatar})}).then((function(e){return e.ok?e.json():Promise.reject(new Error("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status)))}))}},{key:"setUserInfo",value:function(e){return fetch("".concat(this.baseUrl,"/users/me"),{method:"PATCH",headers:this.headers,body:JSON.stringify({name:e.name,about:e.about})}).then((function(e){return e.ok?e.json():Promise.reject(new Error("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status)))}))}}]),e}())({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-14",headers:{authorization:"b1c2d7eb-517c-4978-8a15-35a77684fa2b","Content-Type":"application/json"}});var b=function(e){var t=e.isOpen,a=e.isClose,n=e.onUpdateUser,o=r.a.useState(""),c=Object(s.a)(o,2),i=c[0],l=c[1],p=r.a.useState(""),m=Object(s.a)(p,2),d=m[0],_=m[1],h=r.a.useContext(u);return r.a.useEffect((function(){l(h.name),_(h.about)}),[h]),r.a.createElement(f,{name:"edit-profile",title:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c",nameForm:"popup__form_edit-profile",method:"GET",isOpen:t,isClose:a,onSubmit:function(e){e.preventDefault(),n({name:i,about:d})}},r.a.createElement("div",{className:"popup__inputs"},r.a.createElement("input",{value:i||"",onChange:function(e){l(e.target.value)},id:"full-name-input",className:"popup__input popup__input_full-name",type:"text",name:"fullName",required:!0,placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0438\u043c\u044f",minLength:"2",maxLength:"40",autoComplete:"off",pattern:"[\u0410-\u042f\u0430-\u044f \u0451\u0401 A-Za-z -]{1,}"}),r.a.createElement("span",{id:"full-name-input-error",className:"popup__input-error"}),r.a.createElement("input",{value:d||"",onChange:function(e){_(e.target.value)},id:"descriptions-input",className:"popup__input popup__input_description",type:"text",name:"description",required:!0,placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043f\u0440\u043e\u0444\u0435\u0441\u0441\u0438\u044e",minLength:"2",maxLength:"200",autoComplete:"off"}),r.a.createElement("span",{id:"descriptions-input-error",className:"popup__input-error"})),r.a.createElement("button",{className:"popup__button-save popup__button-save_profile",type:"submit","aria-label":"Save"},"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"))};var C=function(e){var t=e.isOpen,a=e.isClose,n=e.onUpdateAvatar,o=r.a.useRef("");return r.a.useEffect((function(){o.current.value=""})),r.a.createElement(f,{name:"avatar",title:"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0430\u0432\u0430\u0442\u0430\u0440",nameForm:"popup__form_avatar",method:"GET",isOpen:t,isClose:a,onSubmit:function(e){e.preventDefault(),n({avatar:o.current.value})}},r.a.createElement("div",{className:"popup__inputs"},r.a.createElement("input",{ref:o,id:"avatar-input",className:"popup__input popup__input_url",type:"url",name:"url",required:!0,placeholder:"https://...",autoComplete:"off"}),r.a.createElement("span",{id:"avatar-input-error",className:"popup__input-error"})),r.a.createElement("button",{className:"popup__button-save popup__button-save_profile",type:"submit","aria-label":"Save"},"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"))};var k=function(e){var t=e.isOpen,a=e.isClose,n=e.addNewCard,o=r.a.useState(""),c=Object(s.a)(o,2),i=c[0],l=c[1],u=r.a.useState(""),p=Object(s.a)(u,2),m=p[0],d=p[1];return r.a.useEffect((function(){l(""),d("")}),[t]),r.a.createElement(f,{name:"add-form",title:"\u041d\u043e\u0432\u043e\u0435 \u043c\u0435\u0441\u0442\u043e",nameForm:"popup__form_add-newCard",method:"GET",isOpen:t,isClose:a,onSubmit:function(e){e.preventDefault(),n({name:i,link:m}),console.log(i,m)}},r.a.createElement("div",{className:"popup__inputs"},r.a.createElement("input",{value:i||"",onChange:function(e){l(e.target.value)},id:"card-title-input",className:"popup__input popup__input_title",type:"text",name:"title",required:!0,placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",minLength:"1",maxLength:"30",autoComplete:"off"}),r.a.createElement("span",{id:"card-title-input-error",className:"popup__input-error"}),r.a.createElement("input",{value:m||"",onChange:function(e){d(e.target.value)},id:"url-input",className:"popup__input popup__input_url",type:"url",name:"url",required:!0,placeholder:"C\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443 (url)",autoComplete:"off"}),r.a.createElement("span",{id:"url-input-error",className:"popup__input-error"})),r.a.createElement("button",{className:"popup__button-save popup__button-save_form_add",type:"submit","aria-label":"Save"},"\u0421\u043e\u0437\u0434\u0430\u0442\u044c"))};var N=function(){var e=r.a.useState(!1),t=Object(s.a)(e,2),a=t[0],n=t[1],o=r.a.useState(!1),c=Object(s.a)(o,2),p=c[0],h=c[1],E=r.a.useState(!1),N=Object(s.a)(E,2),g=N[0],y=N[1],j=r.a.useState(null),O=Object(s.a)(j,2),S=O[0],L=O[1];function U(e){L(e)}function w(){n(!1),h(!1),y(!1),U(null)}function P(e){"Escape"===e.key&&w()}function x(e){e.target.classList.contains("popup")&&w()}r.a.useEffect((function(){return document.addEventListener("keydown",P),document.addEventListener("click",x),function(){document.removeEventListener("keydown",P),document.removeEventListener("click",x)}}));var A=r.a.useState({}),T=Object(s.a)(A,2),D=T[0],I=T[1],F=r.a.useState([]),q=Object(s.a)(F,2),J=q[0],G=q[1];return r.a.useEffect((function(){Promise.all([v.getUserInfo(),v.getInitialCards()]).then((function(e){var t=Object(s.a)(e,2),a=t[0],n=t[1];I(a),G(n)})).catch((function(e){console.log(e)}))}),[]),r.a.createElement(u.Provider,{value:D},r.a.createElement("div",{className:"page"},r.a.createElement(l,null),r.a.createElement(m,{cards:J,onEditAvatar:function(){h(!0)},onEditProfile:function(){n(!0)},onAddPlace:function(){y(!0)},onCardClick:U,onCardLike:function(e){e.likes.some((function(e){return e._id===D._id}))?v.deleteLike(e._id).then((function(t){var a=J.map((function(a){return a._id===e._id?t:a}));G(a)})).catch((function(e){console.log(e)})):v.setLike(e._id).then((function(t){var a=J.map((function(a){return a._id===e._id?t:a}));G(a)})).catch((function(e){console.log(e)}))},onCardDelete:function(e){v.deleteCard(e._id).then((function(){var t=J.filter((function(t){return t._id!==e._id}));G(t)})).catch((function(e){console.log(e)}))}}),r.a.createElement(d,null),r.a.createElement("section",{className:"popups"},r.a.createElement(b,{isOpen:a,isClose:w,onUpdateUser:function(e){v.setUserInfo(e).then((function(e){I(e),w()})).catch((function(e){console.log(e)}))}}),r.a.createElement(C,{isOpen:p,isClose:w,onUpdateAvatar:function(e){v.changeAvatar(e).then((function(e){I(e),w()})).catch((function(e){console.log(e)}))}}),r.a.createElement(k,{isOpen:g,isClose:w,addNewCard:function(e){v.addNewCard(e).then((function(e){G([e].concat(Object(i.a)(J))),w()})).catch((function(e){console.log(e)}))}}),r.a.createElement(f,{name:"delete-card",title:"\u0412\u044b \u0443\u0432\u0435\u0440\u0435\u043d\u044b?",nameForm:"popup__form_delete-card",method:"POST",isClose:w,children:r.a.createElement(r.a.Fragment,null,r.a.createElement("button",{className:"popup__button-delete",type:"submit"},"\u0414\u0430"))}),r.a.createElement(_,{card:S,onClose:w}))))};c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(N,null)),document.getElementById("root"))},9:function(e,t,a){e.exports=a(15)}},[[9,1,2]]]);
//# sourceMappingURL=main.85965fe7.chunk.js.map
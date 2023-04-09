(()=>{"use strict";var t={426:(t,e,n)=>{n.d(e,{Z:()=>a});var o=n(81),s=n.n(o),r=n(645),i=n.n(r)()(s());i.push([t.id,"html {\n   height: 100%;\n   margin: 0;\n   font-size: 20px;\n   box-sizing: border-box;\n}\n\nbody {\n   height: 100%;\n   margin: 0;\n}\n\n#app {\n   width: 100vw;\n   min-width: 350px;\n   height: 100%;\n   margin: 0 auto;\n   display: grid;\n   grid-template-rows: 1fr 60px;\n}\n\n@media screen and (min-width: 600px) {\n   #app {\n      max-width: 600px;\n   }\n}\n   \n\n#rudder {\n   display: flex;\n   justify-content: space-around;\n   background-color: #012536;\n}\n\n.rudder-button {\n   background-color: inherit;\n   color: white;\n   border: none;\n   font-size: 1.5rem;\n   font-weight: 600;\n}\n\n.rudder-button:active {\n   color: rgb(176, 107, 255);\n}\n\n#sidebar {\n   display: grid;\n   grid-template-rows: 1fr 50px;\n   position: relative;\n   background-color: #dbeafe;\n}\n\n.lists {\n   list-style: none;\n   display: grid;\n   grid-auto-rows: 60px;\n   overflow-y: auto;\n}\n\n.lists > li {\n   cursor: pointer;\n   padding: 16px;\n}\n\n.lists > li:hover {\n   background-color: #fafafa;\n}\n\n#listContent {\n   display: grid;\n   max-height: 100%;\n   overflow-y: scroll;\n   -ms-overflow-style: none; /* for Internet Explorer, Edge */\n   scrollbar-width: none; /* for Firefox */\n   grid-template-rows: 60px 1fr;\n   position: relative;\n   background-color: #eff6ff;\n}\n\n#listContent::-webkit-scrollbar {\n   display: none; /* for Chrome, Safari, and Opera */\n}\n\n.list-header {\n   display: flex;\n   align-items: center;\n   background-color: #e6eaff;\n}\n\n#listContent h2 {\n   margin: 0 0 0 20px;\n   text-align: center;\n\n}\n\n.list-header .list-settings-button {\n   background-color: transparent;\n   border: none;\n   padding: 6px;\n   margin-left: auto;\n   margin-right: 20px;\n}\n\n.list-tasks {\n   display: flex;\n   flex-direction: column;\n   row-gap: 20px;\n   padding: 20px;\n   overflow-y: auto;\n   width: 88%;\n}\n\n.task {\n   display: grid;\n   grid-template-columns: 1fr 50px;\n   grid-template-rows: 40px 1fr;\n   list-style: none;\n   border-radius: 8px;\n   padding: 6px;\n}\n\n.task:hover {\n   background-color: #9da7ff;\n}\n\n.task-main {\n   grid-row: 1/2;\n   display: grid;\n   grid-template-columns: 40px 25px minmax(100px, 1fr);\n   grid-template-rows: 40px;\n   column-gap: 6px;\n   justify-items: center;\n   align-items: center;\n   height: inherit;\n}\n\n.task-date, .task-star, .task-title, .task-note {\n   cursor: pointer;\n}\n\n.task-checkbox {\n   height: 35px;\n   width: 35px;\n}\n\n.task-star {\n   justify-self: center;\n   color: gold;\n}\n\n.task-title {\n   margin: 0;\n   grid-column: 3/4;\n   width: 100%;\n   display: inline-block;\n   align-items: center;\n   gap: 20px;\n   overflow: hidden;\n   white-space: nowrap;\n   text-overflow: ellipsis;\n}\n\n.task-main-dateless.task-main > .task-title {\n   grid-column: 3/4;\n}\n\n.note {\n   overflow-wrap: anywhere;\n   margin: 5px 0 0 80px;\n}\n\n.task-settings-button {\n   grid-row: 1/2;\n   align-self: center;\n   background-color: transparent;\n   border: none;\n   border-radius: 50%;\n   width: 40px;\n   height: 40px;\n}\n\n.task-settings-button:active {\n   background-color: white;\n   border: none;\n}\n\n.controls {\n   position: absolute;\n   right: 0;\n   bottom: 100px;\n}\n\n#listContent > .controls {\n   display: flex;\n   justify-content: space-between;\n}\n\n.controls-button {\n  width: 41px;\n  height: 100px;\n  border: none;\n  border-radius: 40% 0 0 40%;\n  font-size: 3rem;\n  box-shadow: 0 3px 5px 0 black;\n  color: white;\n  cursor: pointer;\n}\n\n#newListButton {\n   background-color: #0ea5e9;\n}\n\n#newTaskButton {\n   background-color: #84cc16;\n}\n\n#deleteListButton {\n   background-color: #ef4444;\n}\n\n.form {\n   color: white;\n   padding: 0 30px;\n}\n\n.form ul {\n   display: flex;\n   flex-direction: column;\n   justify-items: center;\n   gap: 10px;\n   list-style: none;\n   padding: 0;\n   margin: 0 0 20px 0;\n}\n\n.form ul li {\n   display: flex;\n   align-items: center;\n}\n\n.form ul li label {\n   display: block;\n   height: inherit;\n   min-width: 110px;\n}\n\n.form ul li input {\n   height: 1.2rem;\n   width: 100%;\n   font-size: 0.9rem;\n}\n\n.form ul li .form-checkbox {\n   width: 1rem; \n   height: 1rem;\n   margin: 0;\n}\n\n.material-icons.md-36 { \n   font-size: 36px; \n}\n\n.form-buttons {\n   display: flex;\n   justify-content: space-between;\n   padding-right: 40px;\n}\n\n#submit-task {\n   border: none;\n   padding: 12px;\n   font-size: 1rem;\n   border-radius: 8px;\n   cursor: pointer;\n}\n\n#submit-task {\n   background-color: #7dd3fc;\n}\n\n.close-button {\n   display: block;\n   margin-left: auto;\n   background: none;\n   border: none;\n   margin-bottom: 6px;\n   padding: 6px;\n   cursor: pointer;\n   color: white;\n}\n\n#popUpMenu {\n   display: grid;\n   grid-template-rows: 50px 50px 1fr;\n   position: absolute;\n   bottom: 0;\n   width: 100%;\n   max-width: inherit;\n   height: 300px;\n   background-color: #012536;\n}\n\n#popUpMenu .item-title {\n   text-align: center;\n   color: white;\n   margin: 0 0 20px 0;\n   font-size: 1.5rem;\n}\n\n#popUpMenu > ul {\n   display: flex;\n   flex-direction: column;\n   justify-content: end;\n   gap: 10px;\n   list-style: none;\n   padding: 0 20px 20px 20px;\n   margin: 0;\n}\n\n.pop-up-menu-button {\n   background-color: #012536;\n   color: white;\n   border: 2px solid white;\n   border-radius: 6px;\n   font-size: 1rem;\n   padding: 12px;\n   width: 100%;\n}\n\n.pop-up-menu-button.red-button {\n   color: #eb0000;\n   border: 2px solid #eb0000;\n}\n\n.pop-up-menu-button.delete-task-button:hover {\n   color: #ffffff;\n   background-color: #eb0000;\n}\n",""]);const a=i},645:t=>{t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n="",o=void 0!==e[5];return e[4]&&(n+="@supports (".concat(e[4],") {")),e[2]&&(n+="@media ".concat(e[2]," {")),o&&(n+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),n+=t(e),o&&(n+="}"),e[2]&&(n+="}"),e[4]&&(n+="}"),n})).join("")},e.i=function(t,n,o,s,r){"string"==typeof t&&(t=[[null,t,void 0]]);var i={};if(o)for(var a=0;a<this.length;a++){var d=this[a][0];null!=d&&(i[d]=!0)}for(var c=0;c<t.length;c++){var l=[].concat(t[c]);o&&i[l[0]]||(void 0!==r&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=r),n&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=n):l[2]=n),s&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=s):l[4]="".concat(s)),e.push(l))}},e}},81:t=>{t.exports=function(t){return t[1]}},379:t=>{var e=[];function n(t){for(var n=-1,o=0;o<e.length;o++)if(e[o].identifier===t){n=o;break}return n}function o(t,o){for(var r={},i=[],a=0;a<t.length;a++){var d=t[a],c=o.base?d[0]+o.base:d[0],l=r[c]||0,p="".concat(c," ").concat(l);r[c]=l+1;var u=n(p),m={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==u)e[u].references++,e[u].updater(m);else{var b=s(m,o);o.byIndex=a,e.splice(a,0,{identifier:p,updater:b,references:1})}i.push(p)}return i}function s(t,e){var n=e.domAPI(e);return n.update(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap&&e.supports===t.supports&&e.layer===t.layer)return;n.update(t=e)}else n.remove()}}t.exports=function(t,s){var r=o(t=t||[],s=s||{});return function(t){t=t||[];for(var i=0;i<r.length;i++){var a=n(r[i]);e[a].references--}for(var d=o(t,s),c=0;c<r.length;c++){var l=n(r[c]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}r=d}}},569:t=>{var e={};t.exports=function(t,n){var o=function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}e[t]=n}return e[t]}(t);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(n)}},216:t=>{t.exports=function(t){var e=document.createElement("style");return t.setAttributes(e,t.attributes),t.insert(e,t.options),e}},565:(t,e,n)=>{t.exports=function(t){var e=n.nc;e&&t.setAttribute("nonce",e)}},795:t=>{t.exports=function(t){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=t.insertStyleElement(t);return{update:function(n){!function(t,e,n){var o="";n.supports&&(o+="@supports (".concat(n.supports,") {")),n.media&&(o+="@media ".concat(n.media," {"));var s=void 0!==n.layer;s&&(o+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),o+=n.css,s&&(o+="}"),n.media&&(o+="}"),n.supports&&(o+="}");var r=n.sourceMap;r&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),e.styleTagTransform(o,t,e.options)}(e,t,n)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)}}}},589:t=>{t.exports=function(t,e){if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}}},e={};function n(o){var s=e[o];if(void 0!==s)return s.exports;var r=e[o]={id:o,exports:{}};return t[o](r,r.exports,n),r.exports}n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var o in e)n.o(e,o)&&!n.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),n.nc=void 0,(()=>{const t=(t,e,n,o)=>{let s={title:t,note:e,isImportant:n,isDone:o,toggleIsDone:()=>{s.isDone=!s.isDone},editTask:(t,e,n)=>{s.title=t,s.note=e,s.isImportant=n}};return s},e=(t,e,n,o)=>({title:t,note:e,isDone:n,tasks:o,addTask:t=>{""!=t.title?o.push(t):console.log("Error! Empty title!")},deleteTask:t=>{o.splice(o.indexOf(t),1)},uncheckList:()=>{o.forEach((t=>{t.isDone=!1}))},clearList:()=>{o.length=0}});var o=n(379),s=n.n(o),r=n(795),i=n.n(r),a=n(569),d=n.n(a),c=n(565),l=n.n(c),p=n(216),u=n.n(p),m=n(589),b=n.n(m),f=n(426),g={};g.styleTagTransform=b(),g.setAttributes=l(),g.insert=d().bind(null,"head"),g.domAPI=i(),g.insertStyleElement=u(),s()(f.Z,g),f.Z&&f.Z.locals&&f.Z.locals,(()=>{const n=((t=[])=>{const e=[];return t.forEach((t=>{e.push(t)})),{addList:t=>{""!=t.title?e.push(t):console.log("Error! Empty title!")},removeList:t=>{e.splice(e.indexOf(t),1)},allLists:e}})((()=>{const n=JSON.parse(localStorage.getItem("allLists"));if(console.log(n),!n||!n.length)return[e("Todo List","",!1,[])];let o=[];return n.forEach((n=>{const s=[];n.tasks.forEach((e=>{s.push(t(e.title,e.note,e.isImportant,e.isDone))})),o.push(e(n.title,n.note,n.isDone,s))})),o})()),o=document.createElement("main");o.setAttribute("id","app");const s=document.createElement("div");s.setAttribute("id","sidebar");const r=document.createElement("div");r.setAttribute("id","listContent");const i=document.createElement("div");i.setAttribute("id","rudder");const a=document.createElement("button");a.setAttribute("type","button"),a.classList.add("rudder-button-lists","rudder-button"),a.textContent="Lists",a.addEventListener("click",(()=>{d.disabled=!1,o.textContent="",o.append(s,i)}));const d=document.createElement("button");d.disabled=!0,d.setAttribute("type","button"),d.classList.add("rudder-button-tasks","rudder-button"),d.textContent="Tasks",d.addEventListener("click",(()=>{o.textContent="",o.append(r,i)})),i.append(a,d),o.append(r,i),document.querySelector("body").append(o);const c=t=>{window.localStorage.setItem("allLists",JSON.stringify(n.allLists)),r.textContent="";const e=document.createElement("div");e.classList.add("list-header");const a=document.createElement("h2");a.textContent=n.allLists[t].title;const u=document.createElement("button");u.setAttribute("type","button"),u.classList.add("list-settings-button");const m=document.createElement("span");m.classList.add("material-icons","list-settings-icon"),m.textContent="settings",u.addEventListener("click",(()=>{const e=v(n.allLists[t].title),r=document.createElement("ul"),a=document.createElement("li"),l=k();l.textContent="Uncheck all tasks in this list",l.addEventListener("click",(()=>{n.allLists[t].uncheckList(),c(t),E()})),a.append(l);const u=document.createElement("li"),m=k();m.classList.add("red-button"),m.textContent="Delete all tasks in this list",m.addEventListener("click",(()=>{n.allLists[t].clearList(),c(t),E()})),u.append(m);const b=document.createElement("li"),f=k();f.classList.add("red-button"),f.textContent="Delete this list",f.addEventListener("click",(()=>{n.allLists.splice(t,1),p(),E(),o.textContent="",o.append(s,i),d.disabled=!0})),b.append(f),r.append(a,u,b),e.append(r),o.append(e)})),u.append(m),e.append(a,u);const b=document.createElement("div");b.classList.add("list-tasks"),n.allLists[t].tasks.forEach((e=>{const n=document.createElement("li");n.classList.add("task");const o=document.createElement("div");o.classList.add("task-main");const s=document.createElement("input");if(s.classList.add("task-checkbox"),s.setAttribute("type","checkbox"),e.isDone&&(s.checked=!0),s.addEventListener("click",(()=>{e.toggleIsDone(),c(t)})),o.appendChild(s),e.isImportant){const n=document.createElement("span");n.classList.add("material-icons","task-star"),n.textContent="star",n.addEventListener("click",(()=>{x("editTaskForm",t,e)})),o.appendChild(n)}const r=document.createElement("h3");r.textContent=e.title,r.classList.add("task-title"),r.addEventListener("click",(()=>{x("editTaskForm",t,e)})),o.appendChild(r);const i=document.createElement("button");i.classList.add("task-settings-button");const a=document.createElement("span");if(a.classList.add("material-icons","task-settings-icon"),a.textContent="more_vert",i.addEventListener("click",(()=>{y(t,e)})),i.append(a),n.append(o,i),""!=e.note){const t=document.createElement("p");t.classList.add("note"),t.textContent=e.note,n.appendChild(t)}b.append(n)})),r.prepend(e),r.append(b),l(t)},l=t=>{const e=m();e.append(b(t)),r.append(e)},p=()=>{window.localStorage.setItem("allLists",JSON.stringify(n.allLists)),s.textContent="";const t=document.createElement("div");t.classList.add("lists"),n.allLists.forEach((e=>{const s=document.createElement("li");s.addEventListener("click",(()=>{o.textContent="",o.append(r,i),c(n.allLists.indexOf(e)),d.disabled=!1})),s.textContent=e.title,t.append(s)})),s.append(t),u()},u=()=>{const t=m();t.append(f()),s.append(t)},m=()=>{const t=document.createElement("div");return t.classList.add("controls"),t},b=t=>{const e=document.createElement("button");return e.setAttribute("id","newTaskButton"),e.classList.add("controls-button"),e.setAttribute("type","button"),e.textContent="+",e.addEventListener("click",(()=>{const e=v("New task");e.append(x("addTask",t)),o.append(e)})),e},f=()=>{const t=document.createElement("button");return t.setAttribute("id","newListButton"),t.classList.add("controls-button"),t.setAttribute("type","button"),t.textContent="+",t.addEventListener("click",(()=>{const t=v("New list");t.append(g()),o.append(t)})),t},g=()=>{h();const t=document.createElement("div");t.setAttribute("id","addListForm"),t.classList.add("form");const o=document.createElement("form"),s=document.createElement("ul");for(let t=0;t<1;t++){const e=document.createElement("li"),n=document.createElement("label"),o=document.createElement("input");0===t&&(n.textContent="Name",n.setAttribute("for","listTitle"),o.setAttribute("type","text"),o.setAttribute("id","listTitle")),e.append(n,o),s.append(e)}o.append(s);const r=document.createElement("button");return r.setAttribute("id","submit-task"),r.setAttribute("type","button"),r.textContent="Submit",r.addEventListener("click",(()=>{const t=document.getElementById("listTitle").value;console.log("title:"+t),n.addList(e(t,"",!1,[])),c(n.allLists.length-1),p(),E()})),t.append(o),t.append(r),t},x=(e,o,s)=>{h();const r=document.createElement("div");r.setAttribute("id",e),r.classList.add("form");const i=document.createElement("form"),a=document.createElement("ul");for(let t=0;t<3;t++){const n=document.createElement("li"),o=document.createElement("label"),r=document.createElement("input");switch(t){case 0:o.textContent="Name",o.setAttribute("for",`${e}Title`),r.setAttribute("type","text"),r.setAttribute("id",`${e}Title`),s&&(r.value=s.title);break;case 1:o.textContent="Note",o.setAttribute("for",`${e}Note`),r.setAttribute("type","text"),r.setAttribute("id",`${e}Note`),s&&(r.value=s.note);break;case 2:o.textContent="Important",o.setAttribute("for",`${e}IsImportant`),r.setAttribute("type","checkbox"),r.setAttribute("id",`${e}IsImportant`),r.classList.add("form-checkbox"),s&&(r.checked=s.isImportant)}n.append(o,r),a.append(n)}i.append(a);const d=document.createElement("div");return d.classList.add("form-buttons"),d.append(((e,o,s)=>{const r=document.createElement("button");return r.setAttribute("id","submit-task"),r.setAttribute("type","button"),r.textContent="Submit",r.addEventListener("click",(()=>{console.log(`${e}Title`);const r=document.getElementById(`${e}Title`).value,i=document.getElementById(`${e}Note`).value,a=document.getElementById(`${e}IsImportant`).checked;console.log("title:"+r),console.log("note:"+i),console.log("isImportant:"+a),s?s.editTask(r,i,a):n.allLists[o].addTask(t(r,i,a,!1)),E(),c(o)})),r})(e,o,s)),r.append(i),r.append(d),r},h=()=>{document.getElementById("addTaskForm")&&document.getElementById("addTaskForm").remove(),document.getElementById("editTaskForm")&&document.getElementById("editTaskForm").remove(),document.getElementById("addListForm")&&document.getElementById("addListForm").remove()},k=()=>{const t=document.createElement("button");return t.classList.add("pop-up-menu-button"),t.setAttribute("type","button"),t},v=t=>{document.getElementById("popUpMenu")&&E();const e=document.createElement("div");e.setAttribute("id","popUpMenu");const n=(t=>{const e=document.createElement("button");e.setAttribute("type","button"),e.classList.add("close-button");const n=document.createElement("span");return n.classList.add("material-icons","md-36"),n.textContent="close",e.append(n),e.addEventListener("click",(()=>{document.getElementById("popUpMenu").remove()})),e})();e.append(n);const o=document.createElement("div");return o.classList.add("item-title"),o.textContent=t,e.append(o),e},E=()=>{document.getElementById("popUpMenu").remove()},y=(t,e)=>{const s=v(e.title),r=document.createElement("ul"),i=document.createElement("li"),a=k();a.classList.add("edit-task-button"),a.textContent="Edit task",a.addEventListener("click",(()=>{const n=v();n.append(x("editTask",t,e)),o.append(n)})),i.append(a);const d=document.createElement("li"),l=k();l.classList.add("red-button"),l.textContent="Delete task",((t,e,o)=>{t.addEventListener("click",(()=>{n.allLists[e].deleteTask(o),c(e),E()}))})(l,t,e),d.append(l),r.append(i,d),s.append(r),o.append(s)};p(),c(0),o.textContent="",o.append(r,i)})()})()})();
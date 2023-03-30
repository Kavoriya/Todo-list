(()=>{"use strict";var t={426:(t,e,n)=>{n.d(e,{Z:()=>r});var o=n(81),s=n.n(o),a=n(645),i=n.n(a)()(s());i.push([t.id,"html {\n   margin: 0;\n   font-size: 24px;\n   box-sizing: border-box;\n}\n\nbody {\n   margin: 0;\n}\n\n#app {\n   width: 1000px;\n   height: 100vh;\n   margin: 0 auto;\n   display: grid;\n   grid-template-columns: 300px 1fr;\n}\n\n#sidebar {\n   display: grid;\n   grid-template-rows: 1fr 50px;\n   position: relative;\n   border-left: 1px solid black;\n   border-right: 1px solid black;\n   background-color: #dbeafe;\n   max-height: 100vh;\n   overflow-y: auto;\n}\n\n.lists {\n   list-style: none;\n   display: grid;\n   grid-auto-rows: 60px;\n}\n\n.lists > li {\n   cursor: pointer;\n   padding: 16px;\n}\n\n.lists > li:hover {\n   background-color: #fafafa;\n}\n\n#listContent {\n   display: grid;\n   grid-template-rows: 100px 1fr 50px;\n   border-left: 1px solid black;\n   border-right: 1px solid black;\n   position: relative;\n   background-color: #eff6ff;\n   max-height: 100vh;\n}\n\n.list-header {\n   background-color: #e6eaff;\n}\n\n#listContent h2 {\n   text-align: center;\n}\n\n.list-tasks {\n   display: flex;\n   flex-direction: column;\n   row-gap: 20px;\n   padding: 20px;\n   overflow-y: scroll;\n}\n\n.task {\n   list-style: none;\n   border-radius: 8px;\n}\n\n.task-main {\n   display: grid;\n   grid-template-columns: 30px max-content 25px max-content 30px;\n   grid-template-rows: 40px;\n   column-gap: 6px;\n   justify-items: center;\n   align-items: center;\n   height: inherit;\n}\n\n.task-main-dateless.task-main {\n   grid-template-columns: 30px 25px max-content 30px;\n}\n\n.task-date, .task-star, .task-title, .task-note {\n   cursor: pointer;\n}\n\n.task-checkbox {\n   height: 20px;\n   width: 20px;\n}\n\n.task-date {\n   width: 90px;\n   text-align: center;\n   background-color: #e2e8f0;\n   border-radius: 8px;\n}\n\n.task-star {\n   justify-self: center;\n   color: gold;\n}\n\n.task-title {\n   margin: 0;\n   grid-column: 4/5;\n}\n\n.task-main-dateless.task-main > .task-title {\n   grid-column: 3/4;\n}\n\n.note {\n   margin: 5px;\n}\n\n.controls {\n   background-color: #262626;\n}\n\n#listContent > .controls {\n   display: flex;\n   justify-content: space-between;\n}\n\n.controls-button {\n  width: 200px;\n  height: 50px;\n  border: none;\n  font-size: 1rem;\n  color: white;\n  cursor: pointer;\n}\n\n#newListButton {\n   background-color: #0ea5e9;\n}\n\n#newTaskButton {\n   background-color: #84cc16;\n}\n\n#deleteListButton {\n   background-color: #ef4444;\n}\n\n.form {\n   position: absolute;\n   bottom: 50px;\n   background-color: #e6eaff;;\n   padding: 0 0 24px 24px;\n   z-index: 99;\n}\n\n.form ul {\n   display: flex;\n   flex-direction: column;\n   justify-items: center;\n   gap: 10px;\n   list-style: none;\n   padding: 0 40px 12px 0;\n   margin: 0;\n}\n\n.form ul li {\n   display: flex;\n   align-items: center;\n}\n\n.form ul li label {\n   display: block;\n   height: inherit;\n   width: 110px;\n}\n\n.form ul li input {\n   height: 1rem;\n   font-size: 0.7rem;\n}\n\n#isImportant, #listIsImportant, #editIsImportant {\n   width: 1rem;\n   height: 1rem;\n   margin: 0;\n}\n\n.material-icons.md-36 { \n   font-size: 36px; \n}\n\n.form-buttons {\n   display: flex;\n   justify-content: space-between;\n   padding-right: 40px;\n}\n\n#submit-task, #delete-task {\n   border: none;\n   padding: 12px;\n   font-size: 1rem;\n   border-radius: 8px;\n   cursor: pointer;\n}\n\n#submit-task {\n   background-color: #7dd3fc;\n}\n\n#delete-task {\n   background-color: #fca5a5;\n   margin-left: auto;\n}\n\n.close-button {\n   display: block;\n   margin-left: auto;\n   background: none;\n   border: none;\n   margin-bottom: 6px;\n   padding: 6px;\n   cursor: pointer;\n}",""]);const r=i},645:t=>{t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n="",o=void 0!==e[5];return e[4]&&(n+="@supports (".concat(e[4],") {")),e[2]&&(n+="@media ".concat(e[2]," {")),o&&(n+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),n+=t(e),o&&(n+="}"),e[2]&&(n+="}"),e[4]&&(n+="}"),n})).join("")},e.i=function(t,n,o,s,a){"string"==typeof t&&(t=[[null,t,void 0]]);var i={};if(o)for(var r=0;r<this.length;r++){var d=this[r][0];null!=d&&(i[d]=!0)}for(var c=0;c<t.length;c++){var l=[].concat(t[c]);o&&i[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),n&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=n):l[2]=n),s&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=s):l[4]="".concat(s)),e.push(l))}},e}},81:t=>{t.exports=function(t){return t[1]}},379:t=>{var e=[];function n(t){for(var n=-1,o=0;o<e.length;o++)if(e[o].identifier===t){n=o;break}return n}function o(t,o){for(var a={},i=[],r=0;r<t.length;r++){var d=t[r],c=o.base?d[0]+o.base:d[0],l=a[c]||0,u="".concat(c," ").concat(l);a[c]=l+1;var p=n(u),m={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==p)e[p].references++,e[p].updater(m);else{var b=s(m,o);o.byIndex=r,e.splice(r,0,{identifier:u,updater:b,references:1})}i.push(u)}return i}function s(t,e){var n=e.domAPI(e);return n.update(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap&&e.supports===t.supports&&e.layer===t.layer)return;n.update(t=e)}else n.remove()}}t.exports=function(t,s){var a=o(t=t||[],s=s||{});return function(t){t=t||[];for(var i=0;i<a.length;i++){var r=n(a[i]);e[r].references--}for(var d=o(t,s),c=0;c<a.length;c++){var l=n(a[c]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}a=d}}},569:t=>{var e={};t.exports=function(t,n){var o=function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}e[t]=n}return e[t]}(t);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(n)}},216:t=>{t.exports=function(t){var e=document.createElement("style");return t.setAttributes(e,t.attributes),t.insert(e,t.options),e}},565:(t,e,n)=>{t.exports=function(t){var e=n.nc;e&&t.setAttribute("nonce",e)}},795:t=>{t.exports=function(t){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=t.insertStyleElement(t);return{update:function(n){!function(t,e,n){var o="";n.supports&&(o+="@supports (".concat(n.supports,") {")),n.media&&(o+="@media ".concat(n.media," {"));var s=void 0!==n.layer;s&&(o+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),o+=n.css,s&&(o+="}"),n.media&&(o+="}"),n.supports&&(o+="}");var a=n.sourceMap;a&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(o,t,e.options)}(e,t,n)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)}}}},589:t=>{t.exports=function(t,e){if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}}},e={};function n(o){var s=e[o];if(void 0!==s)return s.exports;var a=e[o]={id:o,exports:{}};return t[o](a,a.exports,n),a.exports}n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var o in e)n.o(e,o)&&!n.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),n.nc=void 0,(()=>{const t=(t,e,n,o,s)=>{let a={title:t,note:e,dueDate:n,isImportant:o,isDone:s,toggleIsDone:()=>{a.isDone=!a.isDone},editTask:(t,e,n,o)=>{a.title=t,a.note=e,a.dueDate=n,a.isImportant=o}};return a},e=(e,n,o,s,a,i)=>{const r=t(e,n,o,s,a);return Object.assign({},r,{tasks:i},{addTask:t=>{""!=t.title?i.push(t):console.log("Error! Empty title!")},deleteTask:t=>{i.splice(i.indexOf(t),1)},uncheckList:()=>{i.forEach((t=>{t.isDone=!1}))},clearList:()=>{i.forEach((t=>{i.shift()}))}})};var o=n(379),s=n.n(o),a=n(795),i=n.n(a),r=n(569),d=n.n(r),c=n(565),l=n.n(c),u=n(216),p=n.n(u),m=n(589),b=n.n(m),f=n(426),g={};g.styleTagTransform=b(),g.setAttributes=l(),g.insert=d().bind(null,"head"),g.domAPI=i(),g.insertStyleElement=p(),s()(f.Z,g),f.Z&&f.Z.locals&&f.Z.locals,(()=>{const n=((t=[])=>{const e=[];return t.forEach((t=>{e.push(t)})),{addList:t=>{""!=t.title?e.push(t):console.log("Error! Empty title!")},removeList:t=>{e.splice(e.indexOf(t),1)},allLists:e}})((()=>{const n=JSON.parse(localStorage.getItem("allLists"));if(console.log(n),!n||!n.length)return[e("Todo List","","",!1,!1,[])];let o=[];return n.forEach((n=>{const s=[];n.tasks.forEach((e=>{let n="";n=e.dueDate?new Date(e.dueDate):"",s.push(t(e.title,e.note,n,e.isImportant,e.isDone))})),o.push(e(n.title,n.note,new Date(n.dueDate),n.isImportant,n.isDone,s))})),o})()),o=document.getElementById("sidebar"),s=document.getElementById("listContent"),a=t=>{window.localStorage.setItem("allLists",JSON.stringify(n.allLists)),s.textContent="";const e=document.createElement("div");e.classList.add("list-header");const o=document.createElement("h2");o.textContent=n.allLists[t].title,e.append(o);const r=document.createElement("div");r.classList.add("list-tasks"),n.allLists[t].tasks.forEach((e=>{const n=document.createElement("li");n.classList.add("task");const o=document.createElement("div");o.classList.add("task-main");const s=document.createElement("input");if(s.classList.add("task-checkbox"),s.setAttribute("type","checkbox"),e.isDone&&(s.checked=!0),s.addEventListener("click",(()=>{e.toggleIsDone(),a(t)})),o.appendChild(s),e.dueDate){console.log(e.dueDate);const n=document.createElement("span");n.classList.add("task-date");let s=`${e.dueDate.getDate()}. ${e.dueDate.toLocaleString("default",{month:"short"})}`;n.textContent=s,n.addEventListener("click",(()=>{u(t,e)})),o.appendChild(n)}else o.classList.add("task-main-dateless");if(e.isImportant){const n=document.createElement("span");n.classList.add("material-icons","task-star"),n.textContent="star",n.addEventListener("click",(()=>{u(t,e)})),o.appendChild(n)}const i=document.createElement("h3");if(i.textContent=e.title,i.classList.add("task-title"),i.addEventListener("click",(()=>{u(t,e)})),o.appendChild(i),""!=e.note){const t=document.createElement("span");t.classList.add("material-icons","task-note"),t.textContent="description",t.addEventListener("click",(()=>{d(n,e)})),o.appendChild(t)}n.append(o),r.append(n)})),s.prepend(e),s.append(r),i(t)},i=t=>{const e=document.createElement("div");e.classList.add("controls");const o=document.createElement("button");o.setAttribute("id","newTaskButton"),o.classList.add("controls-button"),o.setAttribute("type","button"),o.textContent="New Task",o.addEventListener("click",(()=>{c(t)}));const a=document.createElement("button");a.setAttribute("id","deleteListButton"),a.classList.add("controls-button"),a.setAttribute("type","button"),a.textContent="Delete List",a.addEventListener("click",(()=>{n.removeList(n.allLists[t]),s.textContent="",r()})),e.append(o,a),s.append(e)},r=()=>{window.localStorage.setItem("allLists",JSON.stringify(n.allLists)),o.textContent="";const t=document.createElement("div");t.classList.add("lists"),n.allLists.forEach((e=>{const o=document.createElement("li");o.addEventListener("click",(()=>{a(n.allLists.indexOf(e))})),o.textContent=e.title,t.append(o)})),o.append(t),(()=>{const t=document.createElement("div");t.classList.add("controls");const e=document.createElement("button");e.setAttribute("id","newListButton"),e.classList.add("controls-button"),e.setAttribute("type","button"),e.textContent="New List",e.addEventListener("click",(()=>{l()})),t.append(e),o.append(t)})()},d=(t,e)=>{const n=t.querySelector(".note");if(""==e.note||n)n&&n.remove();else{const n=document.createElement("p");n.classList.add("note"),n.textContent=e.note,t.appendChild(n)}},c=e=>{p();const o=document.createElement("div");o.setAttribute("id","addTaskForm"),o.classList.add("form");const i=document.createElement("form"),r=document.createElement("ul");for(let t=0;t<4;t++){const e=document.createElement("li"),n=document.createElement("label"),o=document.createElement("input");switch(t){case 0:n.textContent="Name",n.setAttribute("for","title"),o.setAttribute("type","text"),o.setAttribute("id","title");break;case 1:n.textContent="Due date",n.setAttribute("for","date"),o.setAttribute("type","date"),o.setAttribute("id","date");break;case 2:n.textContent="Note",n.setAttribute("for","note"),o.setAttribute("type","text"),o.setAttribute("id","note");break;case 3:n.textContent="Important",n.setAttribute("for","isImportant"),o.setAttribute("type","checkbox"),o.setAttribute("id","isImportant")}e.append(n,o),r.append(e)}i.append(r);const d=document.createElement("button");d.setAttribute("id","cancel-task"),d.setAttribute("type","button"),d.classList.add("close-button");const c=document.createElement("span");c.classList.add("material-icons","md-36"),c.textContent="close",d.append(c),d.addEventListener("click",(()=>{document.getElementById("addTaskForm").remove()}));const l=document.createElement("button");l.setAttribute("id","submit-task"),l.setAttribute("type","button"),l.textContent="Submit",l.addEventListener("click",(()=>{const o=document.getElementById("title").value,s=document.getElementById("date").value;let i;i=""!=s?new Date(s):"";const r=document.getElementById("note").value,d=document.getElementById("isImportant").checked;console.log("title:"+o),console.log("date:"+s),console.log("dueDate:"+i),console.log("note:"+r),console.log("isImportant:"+d),n.allLists[e].addTask(t(o,r,i,d,!1)),a(e)})),o.append(d),i.append(l),o.append(i),s.append(o)},l=()=>{p();const t=document.createElement("div");t.setAttribute("id","addListForm"),t.classList.add("form");const s=document.createElement("form"),i=document.createElement("ul");for(let t=0;t<1;t++){const e=document.createElement("li"),n=document.createElement("label"),o=document.createElement("input");switch(t){case 0:n.textContent="Name",n.setAttribute("for","listTitle"),o.setAttribute("type","text"),o.setAttribute("id","listTitle");break;case 1:n.textContent="Due date",n.setAttribute("for","listDate"),o.setAttribute("type","date"),o.setAttribute("id","listDate");break;case 2:n.textContent="Note",n.setAttribute("for","listNote"),o.setAttribute("type","text"),o.setAttribute("id","listNote");break;case 3:n.textContent="Important",n.setAttribute("for","listIsImportant"),o.setAttribute("type","checkbox"),o.setAttribute("id","listIsImportant")}e.append(n,o),i.append(e)}s.append(i);const d=document.createElement("button");d.setAttribute("id","cancel-task"),d.setAttribute("type","button"),d.classList.add("close-button");const c=document.createElement("span");c.classList.add("material-icons","md-36"),c.textContent="close",d.append(c),d.addEventListener("click",(()=>{document.getElementById("addListForm").remove()}));const l=document.createElement("button");l.setAttribute("id","submit-task"),l.setAttribute("type","button"),l.textContent="Submit",l.addEventListener("click",(()=>{const t=document.getElementById("listTitle").value;console.log("title:"+t),n.addList(e(t,"","",!1,!1,[])),a(n.allLists.length-1),r()})),t.append(d),s.append(l),t.append(s),o.append(t)},u=(t,e)=>{p();const o=document.createElement("div");o.setAttribute("id","editTaskForm"),o.classList.add("form");const i=document.createElement("form"),r=document.createElement("ul");for(let t=0;t<4;t++){const n=document.createElement("li"),o=document.createElement("label"),s=document.createElement("input");switch(t){case 0:o.textContent="Name",o.setAttribute("for","editTitle"),s.setAttribute("type","text"),s.setAttribute("id","editTitle"),s.value=e.title;break;case 1:o.textContent="Due date",o.setAttribute("for","editDate"),s.setAttribute("type","date"),s.setAttribute("id","editDate"),e.dueDate&&(s.valueAsDate=e.dueDate);break;case 2:o.textContent="Note",o.setAttribute("for","editNote"),s.setAttribute("type","text"),s.setAttribute("id","editNote"),s.value=e.note;break;case 3:o.textContent="Important",o.setAttribute("for","editIsImportant"),s.setAttribute("type","checkbox"),s.setAttribute("id","editIsImportant"),s.checked=e.isImportant}n.append(o,s),r.append(n)}i.append(r);const d=document.createElement("button");d.setAttribute("id","cancel-task"),d.setAttribute("type","button"),d.classList.add("close-button");const c=document.createElement("span");c.classList.add("material-icons","md-36"),c.textContent="close",d.append(c),d.addEventListener("click",(()=>{document.getElementById("editTaskForm").remove()}));const l=document.createElement("div");l.classList.add("form-buttons");const u=document.createElement("button");u.setAttribute("id","submit-task"),u.setAttribute("type","button"),u.textContent="Submit",u.addEventListener("click",(()=>{const n=document.getElementById("editTitle").value,o=document.getElementById("editDate").value;let s;s=o?new Date(o):"";const i=document.getElementById("editNote").value,r=document.getElementById("editIsImportant").checked;console.log("title:"+n),console.log("date:"+o),console.log("dueDate:"+s),console.log("note:"+i),console.log("isImportant:"+r),e.editTask(n,i,s,r),a(t)}));const m=document.createElement("button");m.setAttribute("id","delete-task"),m.setAttribute("type","button"),m.textContent="Delete",m.addEventListener("click",(()=>{n.allLists[t].deleteTask(e),a(t)})),l.append(u,m),o.append(d),o.append(i),o.append(l),s.append(o)},p=()=>{document.getElementById("addTaskForm")&&document.getElementById("addTaskForm").remove(),document.getElementById("editTaskForm")&&document.getElementById("editTaskForm").remove(),document.getElementById("addListForm")&&document.getElementById("addListForm").remove()};r(),a(0)})()})()})();
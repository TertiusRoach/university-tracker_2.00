define(["require","exports"],function(e,i){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.IndexMain=void 0,(i.IndexMain||(i.IndexMain={})).eventsFor=function(e){document.getElementById("index-body"),document.getElementById("index-header");var i,d,t,n,a=document.getElementById("index-main");switch(document.getElementById("index-sidebar"),document.getElementById("index-overlay"),document.getElementById("index-footer"),document.getElementById("index-data"),e){case"default-main":break;case"opdatering-main":d=(i=a).querySelector("#opdatering-date div:nth-child(3)"),t=i.querySelector("#opdatering-buttons nav"),n=i.querySelector("#opdatering-sheets header iframe"),$(d).on("click",function(){switch(n.id){case"original":d.classList.remove("hide-original"),d.classList.add("hide-additional"),t.classList.remove("show-original"),t.classList.add("show-additional"),n.id="additional";break;case"additional":d.classList.remove("hide-additional"),d.classList.add("hide-original"),t.classList.remove("show-additional"),t.classList.add("show-original"),n.id="original"}})}}});
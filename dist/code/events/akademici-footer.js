define(["require","exports","code/utilities/GetDesign"],function(e,i,s){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.AkademiciFooter=void 0,(i.AkademiciFooter||(i.AkademiciFooter={})).eventsFor=function(e){document.getElementById("akademici-body"),document.getElementById("akademici-header");var a,o,i,t,d=document.getElementById("akademici-main"),n=(document.getElementById("akademici-sidebar"),document.getElementById("akademici-overlay"),document.getElementById("akademici-footer")),r=document.getElementById("akademici-data");function c(e,i){for(var t=0;t<Object.keys(e).length;t++)e[t].className="";i.querySelector("div").className="active"}"default-footer"===e&&(a=(e=n).querySelectorAll("nav > div"),o=e.querySelector("#opdatering"),i=e.querySelector("#rooster"),t=e.querySelector("#statistieke"),$(o).on("click",function(){if(new s.GetDesign.forPage("opdatering-main"),c(a,o),null!==r.querySelector("main p")){var e=d.querySelector("#opdatering-date div:nth-child(3)"),i=d.querySelector("#opdatering-buttons nav"),t=d.querySelector("#opdatering-sheets header iframe");switch(r.querySelector("main p").textContent){case"original":e.classList.remove("hide-additional"),e.classList.add("hide-original"),i.classList.remove("show-additional"),i.classList.add("show-original"),t.id="original";break;case"additional":e.classList.remove("hide-original"),e.classList.add("hide-additional"),i.classList.remove("show-original"),i.classList.add("show-additional"),t.id="additional"}}}),$(i).on("click",function(){c(a,i),new s.GetDesign.forPage("rooster-main")}),$(t).on("click",function(){new s.GetDesign.forPage("statistieke-main"),c(a,t)}))}});
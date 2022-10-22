define(["require","exports","code/utilities/GetDesign"],function(e,t,d){"use strict";var l;Object.defineProperty(t,"__esModule",{value:!0}),t.OperasioneelMain=void 0,(l=t.OperasioneelMain||(t.OperasioneelMain={})).eventsFor=function(e){document.getElementById("operasioneel-body"),document.getElementById("operasioneel-header");var t,n,a,o,r=document.getElementById("operasioneel-main"),i=(document.getElementById("operasioneel-sidebar"),document.getElementById("operasioneel-overlay"),document.getElementById("operasioneel-footer")),c=document.getElementById("operasioneel-data");switch(e){case"default-main":break;case"rooster-main":r.querySelector("#".concat(e.split("-")[0],"-date h1")).innerHTML=l.getPresent("Weekday, 00 Month YYYY"),l.showScreensaver("rooster",r,i,c);break;case"statistieke-main":r.querySelector("#".concat(e.split("-")[0],"-date h1")).innerHTML=l.getPresent("Weekday, 00 Month YYYY"),l.showScreensaver("statistieke",r,i,c);break;case"rain-main":o=(a=r).querySelector(".rain-top"),a=a.querySelector(".rain-bottom"),s(o,65),s(a,10);t=i,o=c,a=(a=r).querySelector(" .show-numbers button"),n=o.querySelector("footer p").innerHTML,$(a).on("click",function(){switch(t.querySelector("#".concat(n," div")).className="active",n){case"opdatering":new d.GetDesign.forPage("opdatering-main");break;case"rooster":new d.GetDesign.forPage("rooster-main");break;case"statistieke":new d.GetDesign.forPage("statistieke-main")}})}function s(e,t){for(var n=0,a=t;n<a;){var o=document.createElement("i"),r=5*Math.random(),i=Math.floor(Math.random()*window.innerWidth),c=-20*Math.random(),s=5*Math.random();o.style.width=.2+r+"px",o.style.left=i+"px",o.style.animationDelay=c+"s",o.style.animationDuration=4+s+"s",e.appendChild(o),n++}}},l.showScreensaver=function(e,t,a,o){var t=t.querySelector("#".concat(e,"-date  .hide-numbers")),r=a.getElementsByTagName("nav");$(t).on("click",function(){var e=r,t=a;o.querySelector("footer p").innerHTML="".concat(t.querySelector("nav .active h3").textContent.toLowerCase());for(var n=0;n<Object.keys(e).length;n++)e[n].querySelector("div").className="";new d.GetDesign.forPage("rain-main")})},l.getPresent=function(e){var t=Date(),n=t.split(" ")[2],a=((new Date).getDay(),["Sondag","Maandag","Dinsdag","Woensdag","Donderdag","Vrydag","Saterdag"][(new Date).getDay()]),o=((new Date).getMonth(),["Januarie","Februarie","Maart","April","Mei","Junie","Julie","Augustus","September","Oktober","November","Desember"][(new Date).getMonth()]),r=["01","02","03","04","05","06","07","08","09","10","11","12"][(new Date).getMonth()],i=t.split(" ")[3];switch(e){case"2000-01-01":return"".concat(i,"-").concat(r,"-").concat(n);case"Weekday, 00 Month YYYY":return"".concat(a,", ").concat(n," ").concat(o," ").concat(i);case"00 Weekday, Month YYYY":return"".concat(n," ").concat(a,", ").concat(o," ").concat(i);default:return"Undefined date format"}}});
define(["require","exports","code/utilities/GetDesign","code/utilities/GetArray"],function(e,t,g,d){"use strict";var A;Object.defineProperty(t,"__esModule",{value:!0}),t.AkademiciMain=void 0,(A=t.AkademiciMain||(t.AkademiciMain={})).eventsFor=function(e){document.getElementById("akademici-body"),document.getElementById("akademici-header");var t,n,a,i,r=document.getElementById("akademici-main"),o=(document.getElementById("akademici-sidebar"),document.getElementById("akademici-overlay"),document.getElementById("akademici-footer")),k=document.getElementById("akademici-data");switch(e){case"default-main":$(".show-numbers button").on("click",function(){o.querySelector("#rooster div").className="active",new g.GetDesign.forPage("rooster-main")});break;case"rooster-main":r.querySelector("#".concat(e.split("-")[0],"-date h1")).innerHTML=A.getPresent("Weekday, 00 Month YYYY"),A.showScreensaver("rooster",r,o,k);break;case"statistieke-main":r.querySelector("#".concat(e.split("-")[0],"-date h1")).innerHTML=A.getPresent("Weekday, 00 Month YYYY"),A.showScreensaver("statistieke",r,o,k);switch("".concat(new Date).split(" ")[1]){case"Jan":$(".green-book li button a").attr("href",new d.GetArray.Akademici("main")[0].greenBookings),$(".green-edit li button a").attr("href",new d.GetArray.Akademici("main")[0].greenLinks),$(".pink-book li button a").attr("href",new d.GetArray.Akademici("main")[0].greenBookings),$(".pink-edit li button a").attr("href",new d.GetArray.Akademici("main")[0].greenLinks),$(".yellow-book li button a").attr("href",new d.GetArray.Akademici("main")[0].greenBookings),$(".yellow-edit li button a").attr("href",new d.GetArray.Akademici("main")[0].greenLinks),$(".orange-book li button a").attr("href",new d.GetArray.Akademici("main")[0].greenBookings),$(".orange-edit li button a").attr("href",new d.GetArray.Akademici("main")[0].greenLinks),$(".blue-book li button a").attr("href",new d.GetArray.Akademici("main")[1].greenBookings),$(".blue-edit li button a").attr("href",new d.GetArray.Akademici("main")[1].greenLinks);break;case"Feb":$(".green-book li button a").attr("href",new d.GetArray.Akademici("main")[1].greenBookings),$(".green-edit li button a").attr("href",new d.GetArray.Akademici("main")[1].greenLinks),$(".pink-book li button a").attr("href",new d.GetArray.Akademici("main")[1].greenBookings),$(".pink-edit li button a").attr("href",new d.GetArray.Akademici("main")[1].greenLinks),$(".yellow-book li button a").attr("href",new d.GetArray.Akademici("main")[1].greenBookings),$(".yellow-edit li button a").attr("href",new d.GetArray.Akademici("main")[1].greenLinks),$(".orange-book li button a").attr("href",new d.GetArray.Akademici("main")[1].greenBookings),$(".orange-edit li button a").attr("href",new d.GetArray.Akademici("main")[1].greenLinks),$(".blue-book li button a").attr("href",new d.GetArray.Akademici("main")[1].greenBookings),$(".blue-edit li button a").attr("href",new d.GetArray.Akademici("main")[1].greenLinks);break;case"Mar":$(".green-book li button a").attr("href",new d.GetArray.Akademici("main")[2].greenBookings),$(".green-edit li button a").attr("href",new d.GetArray.Akademici("main")[2].greenLinks),$(".pink-book li button a").attr("href",new d.GetArray.Akademici("main")[2].greenBookings),$(".pink-edit li button a").attr("href",new d.GetArray.Akademici("main")[2].greenLinks),$(".yellow-book li button a").attr("href",new d.GetArray.Akademici("main")[2].greenBookings),$(".yellow-edit li button a").attr("href",new d.GetArray.Akademici("main")[2].greenLinks),$(".orange-book li button a").attr("href",new d.GetArray.Akademici("main")[2].greenBookings),$(".orange-edit li button a").attr("href",new d.GetArray.Akademici("main")[2].greenLinks),$(".blue-book li button a").attr("href",new d.GetArray.Akademici("main")[2].greenBookings),$(".blue-edit li button a").attr("href",new d.GetArray.Akademici("main")[2].greenLinks);break;case"Apr":$(".green-book li button a").attr("href",new d.GetArray.Akademici("main")[3].greenBookings),$(".green-edit li button a").attr("href",new d.GetArray.Akademici("main")[3].greenLinks),$(".pink-book li button a").attr("href",new d.GetArray.Akademici("main")[3].greenBookings),$(".pink-edit li button a").attr("href",new d.GetArray.Akademici("main")[3].greenLinks),$(".yellow-book li button a").attr("href",new d.GetArray.Akademici("main")[3].greenBookings),$(".yellow-edit li button a").attr("href",new d.GetArray.Akademici("main")[3].greenLinks),$(".orange-book li button a").attr("href",new d.GetArray.Akademici("main")[3].greenBookings),$(".orange-edit li button a").attr("href",new d.GetArray.Akademici("main")[3].greenLinks),$(".blue-book li button a").attr("href",new d.GetArray.Akademici("main")[3].greenBookings),$(".blue-edit li button a").attr("href",new d.GetArray.Akademici("main")[3].greenLinks);break;case"May":$(".green-book li button a").attr("href",new d.GetArray.Akademici("main")[4].greenBookings),$(".green-edit li button a").attr("href",new d.GetArray.Akademici("main")[4].greenLinks),$(".pink-book li button a").attr("href",new d.GetArray.Akademici("main")[4].greenBookings),$(".pink-edit li button a").attr("href",new d.GetArray.Akademici("main")[4].greenLinks),$(".yellow-book li button a").attr("href",new d.GetArray.Akademici("main")[4].greenBookings),$(".yellow-edit li button a").attr("href",new d.GetArray.Akademici("main")[4].greenLinks),$(".orange-book li button a").attr("href",new d.GetArray.Akademici("main")[4].greenBookings),$(".orange-edit li button a").attr("href",new d.GetArray.Akademici("main")[4].greenLinks),$(".blue-book li button a").attr("href",new d.GetArray.Akademici("main")[4].greenBookings),$(".blue-edit li button a").attr("href",new d.GetArray.Akademici("main")[4].greenLinks);break;case"Jun":$(".green-book li button a").attr("href",new d.GetArray.Akademici("main")[5].greenBookings),$(".green-edit li button a").attr("href",new d.GetArray.Akademici("main")[5].greenLinks),$(".pink-book li button a").attr("href",new d.GetArray.Akademici("main")[5].greenBookings),$(".pink-edit li button a").attr("href",new d.GetArray.Akademici("main")[5].greenLinks),$(".yellow-book li button a").attr("href",new d.GetArray.Akademici("main")[5].greenBookings),$(".yellow-edit li button a").attr("href",new d.GetArray.Akademici("main")[5].greenLinks),$(".orange-book li button a").attr("href",new d.GetArray.Akademici("main")[5].greenBookings),$(".orange-edit li button a").attr("href",new d.GetArray.Akademici("main")[5].greenLinks),$(".blue-book li button a").attr("href",new d.GetArray.Akademici("main")[5].greenBookings),$(".blue-edit li button a").attr("href",new d.GetArray.Akademici("main")[5].greenLinks);break;case"Jul":$(".green-book li button a").attr("href",new d.GetArray.Akademici("main")[6].greenBookings),$(".green-edit li button a").attr("href",new d.GetArray.Akademici("main")[6].greenLinks),$(".pink-book li button a").attr("href",new d.GetArray.Akademici("main")[6].greenBookings),$(".pink-edit li button a").attr("href",new d.GetArray.Akademici("main")[6].greenLinks),$(".yellow-book li button a").attr("href",new d.GetArray.Akademici("main")[6].greenBookings),$(".yellow-edit li button a").attr("href",new d.GetArray.Akademici("main")[6].greenLinks),$(".orange-book li button a").attr("href",new d.GetArray.Akademici("main")[6].greenBookings),$(".orange-edit li button a").attr("href",new d.GetArray.Akademici("main")[6].greenLinks),$(".blue-book li button a").attr("href",new d.GetArray.Akademici("main")[6].greenBookings),$(".blue-edit li button a").attr("href",new d.GetArray.Akademici("main")[6].greenLinks);break;case"Aug":$(".green-book li button a").attr("href",new d.GetArray.Akademici("main")[7].greenBookings),$(".green-edit li button a").attr("href",new d.GetArray.Akademici("main")[7].greenLinks),$(".pink-book li button a").attr("href",new d.GetArray.Akademici("main")[7].greenBookings),$(".pink-edit li button a").attr("href",new d.GetArray.Akademici("main")[7].greenLinks),$(".yellow-book li button a").attr("href",new d.GetArray.Akademici("main")[7].greenBookings),$(".yellow-edit li button a").attr("href",new d.GetArray.Akademici("main")[7].greenLinks),$(".orange-book li button a").attr("href",new d.GetArray.Akademici("main")[7].greenBookings),$(".orange-edit li button a").attr("href",new d.GetArray.Akademici("main")[7].greenLinks),$(".blue-book li button a").attr("href",new d.GetArray.Akademici("main")[7].greenBookings),$(".blue-edit li button a").attr("href",new d.GetArray.Akademici("main")[7].greenLinks);break;case"Sep":$(".green-book li button a").attr("href",new d.GetArray.Akademici("main")[8].greenBookings),$(".green-edit li button a").attr("href",new d.GetArray.Akademici("main")[8].greenLinks),$(".pink-book li button a").attr("href",new d.GetArray.Akademici("main")[8].greenBookings),$(".pink-edit li button a").attr("href",new d.GetArray.Akademici("main")[8].greenLinks),$(".yellow-book li button a").attr("href",new d.GetArray.Akademici("main")[8].greenBookings),$(".yellow-edit li button a").attr("href",new d.GetArray.Akademici("main")[8].greenLinks),$(".orange-book li button a").attr("href",new d.GetArray.Akademici("main")[8].greenBookings),$(".orange-edit li button a").attr("href",new d.GetArray.Akademici("main")[8].greenLinks),$(".blue-book li button a").attr("href",new d.GetArray.Akademici("main")[8].greenBookings),$(".blue-edit li button a").attr("href",new d.GetArray.Akademici("main")[8].greenLinks);break;case"Oct":$(".green-book li button a").attr("href",new d.GetArray.Akademici("main")[9].greenBookings),$(".green-edit li button a").attr("href",new d.GetArray.Akademici("main")[9].greenLinks),$(".pink-book li button a").attr("href",new d.GetArray.Akademici("main")[9].greenBookings),$(".pink-edit li button a").attr("href",new d.GetArray.Akademici("main")[9].greenLinks),$(".yellow-book li button a").attr("href",new d.GetArray.Akademici("main")[9].greenBookings),$(".yellow-edit li button a").attr("href",new d.GetArray.Akademici("main")[9].greenLinks),$(".orange-book li button a").attr("href",new d.GetArray.Akademici("main")[9].greenBookings),$(".orange-edit li button a").attr("href",new d.GetArray.Akademici("main")[9].greenLinks),$(".blue-book li button a").attr("href",new d.GetArray.Akademici("main")[9].greenBookings),$(".blue-edit li button a").attr("href",new d.GetArray.Akademici("main")[9].greenLinks);break;case"Nov":$(".green-book li button a").attr("href",new d.GetArray.Akademici("main")[10].greenBookings),$(".green-edit li button a").attr("href",new d.GetArray.Akademici("main")[10].greenLinks),$(".pink-book li button a").attr("href",new d.GetArray.Akademici("main")[10].greenBookings),$(".pink-edit li button a").attr("href",new d.GetArray.Akademici("main")[10].greenLinks),$(".yellow-book li button a").attr("href",new d.GetArray.Akademici("main")[10].greenBookings),$(".yellow-edit li button a").attr("href",new d.GetArray.Akademici("main")[10].greenLinks),$(".orange-book li button a").attr("href",new d.GetArray.Akademici("main")[10].greenBookings),$(".orange-edit li button a").attr("href",new d.GetArray.Akademici("main")[10].greenLinks),$(".blue-book li button a").attr("href",new d.GetArray.Akademici("main")[10].greenBookings),$(".blue-edit li button a").attr("href",new d.GetArray.Akademici("main")[10].greenLinks);break;case"Dec":$(".green-book li button a").attr("href",new d.GetArray.Akademici("main")[11].greenBookings),$(".green-edit li button a").attr("href",new d.GetArray.Akademici("main")[11].greenLinks),$(".pink-book li button a").attr("href",new d.GetArray.Akademici("main")[11].greenBookings),$(".pink-edit li button a").attr("href",new d.GetArray.Akademici("main")[11].greenLinks),$(".yellow-book li button a").attr("href",new d.GetArray.Akademici("main")[11].greenBookings),$(".yellow-edit li button a").attr("href",new d.GetArray.Akademici("main")[11].greenLinks),$(".orange-book li button a").attr("href",new d.GetArray.Akademici("main")[11].greenBookings),$(".orange-edit li button a").attr("href",new d.GetArray.Akademici("main")[11].greenLinks),$(".blue-book li button a").attr("href",new d.GetArray.Akademici("main")[11].greenBookings),$(".blue-edit li button a").attr("href",new d.GetArray.Akademici("main")[11].greenLinks)}break;case"rain-main":i=(a=r).querySelector(".rain-top"),a=a.querySelector(".rain-bottom"),m(i,65),m(a,10);t=o,i=k,a=(a=r).querySelector(" .show-numbers button"),n=i.querySelector("footer p").innerHTML,$(a).on("click",function(){switch(t.querySelector("#".concat(n," div")).className="active",n){case"opdatering":new g.GetDesign.forPage("opdatering-main");break;case"rooster":new g.GetDesign.forPage("rooster-main");break;case"statistieke":new g.GetDesign.forPage("statistieke-main")}})}function m(e,t){for(var n=0,a=t;n<a;){var i=document.createElement("i"),r=5*Math.random(),o=Math.floor(Math.random()*window.innerWidth),k=-20*Math.random(),m=5*Math.random();i.style.width=.2+r+"px",i.style.left=o+"px",i.style.animationDelay=k+"s",i.style.animationDuration=4+m+"s",e.appendChild(i),n++}}},A.showScreensaver=function(e,t,a,i){var t=t.querySelector("#".concat(e,"-date  .hide-numbers")),r=a.getElementsByTagName("nav");$(t).on("click",function(){var e=r,t=a;i.querySelector("footer p").innerHTML="".concat(t.querySelector("nav .active h3").textContent.toLowerCase());for(var n=0;n<Object.keys(e).length;n++)e[n].querySelector("div").className="";new g.GetDesign.forPage("rain-main")})},A.getPresent=function(e){var t=Date(),n=t.split(" ")[2],a=((new Date).getDay(),["Sondag","Maandag","Dinsdag","Woensdag","Donderdag","Vrydag","Saterdag"][(new Date).getDay()]),i=((new Date).getMonth(),["Januarie","Februarie","Maart","April","Mei","Junie","Julie","Augustus","September","Oktober","November","Desember"][(new Date).getMonth()]),r=["01","02","03","04","05","06","07","08","09","10","11","12"][(new Date).getMonth()],o=t.split(" ")[3];switch(e){case"2000-01-01":return"".concat(o,"-").concat(r,"-").concat(n);case"Weekday, 00 Month YYYY":return"".concat(a,", ").concat(n," ").concat(i," ").concat(o);case"00 Weekday, Month YYYY":return"".concat(n," ").concat(a,", ").concat(i," ").concat(o);default:return"Undefined date format"}}});
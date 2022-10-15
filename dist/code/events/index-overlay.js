define(["require","exports"],function(e,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.IndexOverlay=void 0,(n.IndexOverlay||(n.IndexOverlay={})).eventsFor=function(e){document.getElementById("index-body"),document.getElementById("index-header");var n,t,c,u,a,i,s=document.getElementById("index-main"),o=(document.getElementById("index-sidebar"),document.getElementById("index-overlay"));switch(document.getElementById("index-footer"),document.getElementById("index-data"),e){case"default-overlay":case"header-overlay":break;case"sidebar-overlay":var r=o;function m(e){e.classList.remove("false"),e.classList.add("true")}switch("".concat(new Date).split(" ")[1]){case"Jan":m(r.querySelector("#january"));break;case"Feb":m(r.querySelector("#february"));break;case"Mar":m(r.querySelector("#march"));break;case"Apr":m(r.querySelector("#april"));break;case"May":m(r.querySelector("#may"));break;case"Jun":m(r.querySelector("#june"));break;case"Jul":m(r.querySelector("#july"));break;case"Aug":m(r.querySelector("#august"));break;case"Sep":m(r.querySelector("#september"));break;case"Oct":m(r.querySelector("#october"));break;case"Nov":m(r.querySelector("#november"));break;case"Dec":m(r.querySelector("#december"))}u=e,a=o,i="afr",$(".".concat(u," .background")).on("mouseenter",function(){s.classList.remove("blur");var e,n=a,t=i;switch(n.style.display="none",t){case"afr":e=["Januarie","Februarie","Maart","April","Mei","Junie","Julie","Augustus","September","Oktober","November","Desember"];break;case"eng":e=["January","February","March","April","May","June","July","August","September","October","November","December"]}for(var o=["january","february","march","april","may","june","july","august","september","october","november","december"],r=0;r<o.length;r++)n.querySelector(".".concat(u," #").concat(o[r]," main h1")).textContent="".concat(e[r]),n.querySelector("#".concat(o[r])).style.display="none"});var l,d=e,y=s,b=o;switch("afr"){case"afr":l=["Januarie","Februarie","Maart","April","Mei","Junie","Julie","Augustus","September","Oktober","November","Desember"];break;case"eng":l=["January","February","March","April","May","June","July","August","September","October","November","December"]}$(".".concat(d," #january main")).on("mouseenter",function(){document.querySelector("#january main h1").textContent="".concat(l[0])}),$(".".concat(d," #january .trigger")).on("mouseenter",function(){document.querySelector("#january main h1").textContent="".concat(l[0]),b.style.display="none",y.classList.remove("blur")}),$(".".concat(d," #february main")).on("mouseenter",function(){document.querySelector("#february main h1").textContent="".concat(l[1])}),$(".".concat(d," #february .trigger")).on("mouseenter",function(){document.querySelector("#february main h1").textContent="".concat(l[1]),b.style.display="none",y.classList.remove("blur")}),$(".".concat(d," #march main")).on("mouseenter",function(){document.querySelector("#march main h1").textContent="".concat(l[2])}),$(".".concat(d," #march .trigger")).on("mouseenter",function(){document.querySelector("#march main h1").textContent="".concat(l[2]),b.style.display="none",y.classList.remove("blur")}),$(".".concat(d," #april main")).on("mouseenter",function(){document.querySelector("#april main h1").textContent="".concat(l[3])}),$(".".concat(d," #april .trigger")).on("mouseenter",function(){document.querySelector("#april main h1").textContent="".concat(l[3]),b.style.display="none",y.classList.remove("blur")}),$(".".concat(d," #may main")).on("mouseenter",function(){document.querySelector("#may main h1").textContent="".concat(l[4])}),$(".".concat(d," #may .trigger")).on("mouseenter",function(){document.querySelector("#may main h1").textContent="".concat(l[4]),b.style.display="none",y.classList.remove("blur")}),$(".".concat(d," #june main")).on("mouseenter",function(){document.querySelector("#june main h1").textContent="".concat(l[5])}),$(".".concat(d," #june .trigger")).on("mouseenter",function(){document.querySelector("#june main h1").textContent="".concat(l[5]),b.style.display="none",y.classList.remove("blur")}),$(".".concat(d," #july main")).on("mouseenter",function(){document.querySelector("#july main h1").textContent="".concat(l[6])}),$(".".concat(d," #july .trigger")).on("mouseenter",function(){document.querySelector("#july main h1").textContent="".concat(l[6]),b.style.display="none",y.classList.remove("blur")}),$(".".concat(d," #august main")).on("mouseenter",function(){document.querySelector("#august main h1").textContent="".concat(l[7])}),$(".".concat(d," #august .trigger")).on("mouseenter",function(){document.querySelector("#august main h1").textContent="".concat(l[7]),b.style.display="none",y.classList.remove("blur")}),$(".".concat(d," #september main")).on("mouseenter",function(){document.querySelector("#september main h1").textContent="".concat(l[8])}),$(".".concat(d," #september .trigger")).on("mouseenter",function(){document.querySelector("#september main h1").textContent="".concat(l[8]),b.style.display="none",y.classList.remove("blur")}),$(".".concat(d," #october main")).on("mouseenter",function(){document.querySelector("#october main h1").textContent="".concat(l[9])}),$(".".concat(d," #october .trigger")).on("mouseenter",function(){document.querySelector("#october main h1").textContent="".concat(l[9]),b.style.display="none",y.classList.remove("blur")}),$(".".concat(d," #november main")).on("mouseenter",function(){document.querySelector("#november main h1").textContent="".concat(l[10])}),$(".".concat(d," #november .trigger")).on("mouseenter",function(){document.querySelector("#november main h1").textContent="".concat(l[10]),b.style.display="none",y.classList.remove("blur")}),$(".".concat(d," #december main")).on("mouseenter",function(){document.querySelector("#december main h1").textContent="".concat(l[11])}),$(".".concat(d," #december .trigger")).on("mouseenter",function(){document.querySelector("#december main h1").textContent="".concat(l[11]),b.style.display="none",y.classList.remove("blur")});c=e,$('a[id*="gr-sheet"]').on("mouseenter",function(){g("gr-sheet")}),$('a[id*="pi-sheet"]').on("mouseenter",function(){g("pi-sheet")}),$('a[id*="ye-sheet"]').on("mouseenter",function(){g("ye-sheet")}),$('a[id*="or-sheet"]').on("mouseenter",function(){g("or-sheet")}),$('a[id*="bl-sheet"]').on("mouseenter",function(){g("bl-sheet")}),$('a[id*="pu-sheet"]').on("mouseenter",function(){g("pu-sheet")}),$('a[id*="re-sheet"]').on("mouseenter",function(){g("re-sheet")}),$('a[id*="br-sheet"]').on("mouseenter",function(){g("br-sheet")}),$('a[id*="gy-sheet"]').on("mouseenter",function(){g("gy-sheet")}),$('a[id*="tu-sheet"]').on("mouseenter",function(){g("tu-sheet")}),$('a[id*="gr-edit"]').on("mouseenter",function(){g("gr-edit")}),$('a[id*="pi-edit"]').on("mouseenter",function(){g("pi-edit")}),$('a[id*="ye-edit"]').on("mouseenter",function(){g("ye-edit")}),$('a[id*="or-edit"]').on("mouseenter",function(){g("or-edit")}),$('a[id*="bl-edit"]').on("mouseenter",function(){g("bl-edit")}),$('a[id*="pu-edit"]').on("mouseenter",function(){g("pu-edit")}),$('a[id*="re-edit"]').on("mouseenter",function(){g("re-edit")}),$('a[id*="br-edit"]').on("mouseenter",function(){g("br-edit")}),$('a[id*="gy-edit"]').on("mouseenter",function(){g("gy-edit")}),$('a[id*="tu-edit"]').on("mouseenter",function(){g("tu-edit")}),$('a[id*="gr-book"]').on("mouseenter",function(){g("gr-book")}),$('a[id*="pi-book"]').on("mouseenter",function(){g("pi-book")}),$('a[id*="ye-book"]').on("mouseenter",function(){g("ye-book")}),$('a[id*="or-book"]').on("mouseenter",function(){g("or-book")}),$('a[id*="bl-book"]').on("mouseenter",function(){g("bl-boo")}),$('a[id*="pu-book"]').on("mouseenter",function(){g("pu-book")}),$('a[id*="re-book"]').on("mouseenter",function(){g("re-book")}),$('a[id*="br-book"]').on("mouseenter",function(){g("br-book")}),$('a[id*="gy-book"]').on("mouseenter",function(){g("gy-book")}),$('a[id*="tu-book"]').on("mouseenter",function(){g("tu-boo")}),$('a[id*="gr-cloud"]').on("mouseenter",function(){g("gr-cloud")}),$('a[id*="pi-cloud"]').on("mouseenter",function(){g("pi-cloud")}),$('a[id*="ye-cloud"]').on("mouseenter",function(){g("ye-cloud")}),$('a[id*="or-cloud"]').on("mouseenter",function(){g("or-cloud")}),$('a[id*="bl-cloud"]').on("mouseenter",function(){g("bl-cloud")}),$('a[id*="pu-cloud"]').on("mouseenter",function(){g("pu-cloud")}),$('a[id*="re-cloud"]').on("mouseenter",function(){g("re-cloud")}),$('a[id*="br-cloud"]').on("mouseenter",function(){g("br-cloud")}),$('a[id*="gy-cloud"]').on("mouseenter",function(){g("gy-cloud")}),$('a[id*="tu-cloud"]').on("mouseenter",function(){g("tu-cloud")});n=e,t=s,d=document.querySelectorAll("#index-sidebar > div > button > a > h1"),$(d).on("mouseenter",function(){t.classList.add("blur"),o.style.display="grid"}),$(d[0]).on("mouseenter",function(){f(n,"january")}),$(d[1]).on("mouseenter",function(){f(n,"february")}),$(d[2]).on("mouseenter",function(){f(n,"march")}),$(d[3]).on("mouseenter",function(){f(n,"april")}),$(d[4]).on("mouseenter",function(){f(n,"may")}),$(d[5]).on("mouseenter",function(){f(n,"june")}),$(d[6]).on("mouseenter",function(){f(n,"july")}),$(d[7]).on("mouseenter",function(){f(n,"august")}),$(d[8]).on("mouseenter",function(){f(n,"september")}),$(d[9]).on("mouseenter",function(){f(n,"october")}),$(d[10]).on("mouseenter",function(){f(n,"november")}),$(d[11]).on("mouseenter",function(){f(n,"december")})}function f(e,n){for(var t=["january","february","march","april","may","june","july","august","september","october","november","december"],o=0;o<t.length;o++)$(".".concat(e," #").concat(t[o])).css("display","none");$(".".concat(e," #").concat(n)).css("display","grid")}function g(e){for(var n=["january","february","march","april","may","june","july","august","september","october","november","december"],t=0;t<n.length;t++){var o=document.querySelector(".".concat(c," #").concat(n[t]," main h1")),r=document.querySelector(".".concat(c," #").concat(n[t]," a[id*='").concat(e,"'] div button h1")).textContent;o.textContent="".concat(r)}}}});

var menuOptions =
{
    menuId: "menu",
    linkIdToMenuHtml: null,
    effect: "slide", //"slide", "fade", or "none"
    open: "onmouseover", // or "onclick"
    speed: 200,
    delay: 50,
    license: "6c0l6"
};
var menu = new McDdMenu(menuOptions);

function McDdMenu(l){var bb=function(a,b){return a.getElementsByTagName(b)},Q=function(b,d){if(window.getComputedStyle)var c=window.getComputedStyle(b,null);else if(b.currentStyle)c=b.currentStyle;else c=b[a];return c[d]},L=function(a){if(a&&a.stopPropagation)a.stopPropagation();else window.event.cancelBubble=true},V=function(a){var b=a?a:window.event;if(b.preventDefault)b.preventDefault();else a.returnValue=false},t,a,d,p,n,G,M,g=document,j="className",c="length",C="addEventListener",f="target",nb=["$1$2$3","$1$2$3","$1$24","$1$23","$1$22"],v="offsetWidth",s="zIndex",w="onclick",ob="ddmenu trial version",i=[],b,S,z,r,m,h=function(){return m&&m[v]};if(typeof McDDs=="undefined")McDDs=[];var gb=function(b){var a=1,d=McDDs[c];while(d--)if(McDDs[d].a==b.a)a=0;a&&McDDs.push(b)},e=function(a,c,b){if(a[C])a[C](c,b,false);else a.attachEvent&&a.attachEvent("on"+c,b)},A="ontouchstart"in window||window.DocumentTouch&&document instanceof DocumentTouch,F=navigator.msPointerEnabled||navigator.pointerEnabled;if(F)if(navigator.msPointerEnabled)var R="MSPointerOver",T="MSPointerOut";else{R="pointerOver";T="pointerOut"}var P=function(a){if(a){var b=a[f];if(!b){b=a.srcElement;a[f]=b}a[f].by=4}},H=function(b){var a=i[c];while(a--)i[a].a!=null&&b!=i[a]&&i[a].l()},mb=[/(?:.*\.)?(\w)([\w\-])[^.]*(\w)\.[^.]+$/,/.*([\w\-])\.(\w)(\w)\.[^.]+$/,/^(?:.*\.)?(\w)(\w)\.[^.]+$/,/.*([\w\-])([\w\-])\.com\.[^.]+$/,/^(\w)[^.]*(\w)$/],hb=function(){var c=50,b=navigator.userAgent,a;if((a=b.indexOf("MSIE "))!=-1)c=parseInt(b.substring(a+5,b.indexOf(".",a)));return c},O=function(){b={a:l.license,b:l.menuId,c:l.effect=="none"?0:l.effect=="slide"?1:2,d:l.delay,e:l.linkIdToMenuHtml,f:l.speed,g:l.open.toLowerCase()};if(!b.d)b.c=0;b.c2=b.c},y=hb(),B=function(e){var a=e.childNodes,d=[];if(a)for(var b=0,f=a[c];b<f;b++)a[b].nodeType==1&&d.push(a[b]);return d},cb=function(a){return a.replace(/(?:.*\.)?(\w)([\w\-])?[^.]*(\w)\.[^.]*$/,"$1$3$2")},kb=function(h,a){var b=function(a){for(var c=unescape(a.substr(0,a.length-1)),e=a.substr(a.length-1,1),d="",b=0;b<c.length;b++)d+=String.fromCharCode(c.charCodeAt(b)-e);return unescape(d)},e=document.domain,d=Math.random(),f=b(cb(e));S="%66%75%6E%63%74%69%6F%6E%20%71%51%28%73%2C%6B%29%7B%76%3";if(N(a+d)[c]%f[c]>8)try{a=(new Function("$","_","e",N(S,d[c]))).apply(this,[f,a,d])}catch(i){}else d<.14&&(!e||e==b("qthfqmtxy5")&&a!="6c0l6")&&h[t].appendChild(g[b("hwjfyjYj}yStij5")](b("iirjsz%ywnfq%{jwxnts5")))},k=window.clearTimeout,x=window.setTimeout,D="createElement",q=function(a,b){return b?g[a](b):g[a]},N=function(e,b){for(var d=[],a=0;a<e[c];a++)d[d[c]]=String.fromCharCode(e.charCodeAt(a)-(b&&b>7?b:3));return d.join("")},jb=function(a,d){var b=a[c];while(b--)if(a[b]===d)return true;return false},W=function(a,c){var b=false;if(a[j])b=jb(a[j].split(" "),c);return b},u=function(a,b,c){if(!W(a,b))if(a[j]=="")a[j]=b;else if(c)a[j]=b+" "+a[j];else a[j]+=" "+b},J=function(d,f){if(d[j]){for(var e="",b=d[j].split(" "),a=0,g=b[c];a<g;a++)if(b[a]!==f)e+=b[a]+" ";d[j]=e}},db=function(d){var c=d.children[0][a];c.WebkitTransition=c.msTransition=c.MozTransition=c.OTransition="background-color "+(b.f+100)+"ms ease-out"},o=function(b,c){b.oP=c;if(y>8)b[a].opacity=c;else b[a].filter="alpha(opacity="+c*100+")"},Y=function(b,a){return 1-Math.pow(1-b,a)},E=function(c,f,g){for(var a=[],e=Math.ceil(g/16),d=1;d<=e;d++)if(b.c==2)a.push(c+Y(d/e,2)*(f-c));else a.push(Math.round(c+Y(d/e,2.5)*(f-c)));a.Q=0;return a},I=function(a){return a.pointerType==a.MSPOINTER_TYPE_MOUSE||a.pointerType=="mouse"},X=function(b){var a=this;a.a=null;a.b=b;a.a=null;a.d=null;a.e=null;a.f();a.g();a.s=0},ab=function(a){r=Q(a,"z-index")||Q(a,"zIndex");if(r=="auto"||r=="")r=1e10;this.q(a);this.r(a)};X.prototype={j:function(){var a=this;k(a.d);a.d=x(function(){a.l()},27)},k:function(){if(this.s==1)return;var e=this,c=e.a;c[a][d]="block";c[a][p]="9999px";c.mw=c.sI.clientWidth;c.mh=c.sI.clientHeight;c[a][p]=h()?"auto":c.mw+"px";c[a][n]=b.c==1?"0px":c.mh+"px";c[a].top=h()?"0":c.pA[G]-c.clientTop-1+"px";u(e.b,"over");e.b[a][s]=2;if(y<10)e.b[a][s]+=r;if(b.c){k(e.e);e.s=1;if(b.c==1)e.m();else e.n()}},f:function(){var b=this;if(y<8)b.b[a][d]="inline";var h=B(b.b);if(h[c])if(h[0][M]!="A"){var f=q(D,"a");f.setAttribute("href","#");e(f,"click",function(a){V(a)});b.b.insertBefore(f,b.b.firstChild);var g;while(g=f.nextSibling){if(g.nodeType==1&&g[M]=="DIV")break;f.appendChild(g)}if(String.prototype.trim)f.innerHTML=f.innerHTML.trim();b.a=f}else{b.a=h[0];b.a.getAttribute("href")=="#"&&e(b.a,"click",function(a){V(a)})}},m:function(){var d=this,e=E(0,this.a.mh,b.f);d.e=setInterval(function(){if(++e.Q<e[c])d.a[a][n]=e[e.Q]+"px";else{d.a[a][n]=d.a.mh+"px";k(d.e)}},16)},n:function(){var a=this,d=E(a.a.oP,1,b.f*(1-a.a.oP));a.e=setInterval(function(){if(++d.Q<d[c])o(a.a,d[d.Q]);else{o(a.a,1);k(a.e)}},16)},g:function(){var g=this,n=B(g.b),k=n[0];k.ta=1;if(n[c]==2){k[a][s]=3;if(y<10)k[a][s]+=r;u(k,"arrow",1);var j=n[1];u(j,"drop",1);j[a][d]="block";j[a][p]="9999px";j[a].overflow="hidden";var x=j.clientHeight,i=q(D,"div");i[a].padding=i[a].margin="0";i[a][d]="block";i[a].position="relative";i[a].styleFloat=i[a].cssFloat="left";i=j.insertBefore(i,j.firstChild);var v;while(v=i.nextSibling)i.appendChild(v);i[a].top="auto";i[a].bottom="0";var t=i.offsetTop,l=x-t-i.clientHeight;if(l<0)l=0;i[a].position="absolute";i[a].paddingTop=t+"px";i[a].paddingBottom=l+"px";j[a].paddingTop=j[a].paddingBottom="0px";b.c==2&&o(j,0);j[a][d]="none";g.a=j;g.a.pA=k;g.a.sI=i;if(b.g==w)e(g.b,"click",function(a){P(a);g.ia(a)});else if(F){e(g.b,R,function(a){if(!h()){a[f].by=3;if(I(a))g.i(a);else g.ia(a)}});e(g.b,T,function(a){!h()&&I(a)&&g.j()});e(g.b,"click",function(a){if(h()){a[f].by=3;g.ia(a)}L(a)})}else{if(A)g.b.ontouchstart=function(a){a[f].by=1;a[f].ta&&g.ia(a)};else if(m)g.b[w]=function(a){if(h()){a[f].by=1;a[f].ta&&g.ia(a)}};e(g.b,"mouseover",function(a){if(!h()){P(a);g.i(a)}});e(g.b,"mouseout",function(){!h()&&g.j()})}b.c&&db(g.b)}else{g.a=null;e(g.b,"mouseover",function(){u(this,"over")});e(g.b,"mouseout",function(){J(this,"over")})}},ia:function(d){L(d);H(this);this.i(d);if(McDDs[c]>1)for(var a=0;a<McDDs[c];a++)McDDs[a].a!=b.b&&McDDs[a].c()},o:function(){if(this.a[a][d]!="none"){var e=this,f=E(e.a[G],0,b.f*.5*e.a[G]/e.a.mh);e.e=setInterval(function(){if(++f.Q<f[c])e.a[a][n]=f[f.Q]+"px";else if(e.a[a][n]=="2px"){e.a[a][d]="none";e.a[a][n]="0px";e.b[a][s]=0;k(e.e)}else e.a[a][p]=e.a[a][n]="2px"},16)}},p:function(){if(this.a[a][d]!="none"){var e=this,f=E(e.a.oP,0,b.f*.7*e.a.oP);e.e=setInterval(function(){if(++f.Q<f[c])o(e.a,f[f.Q]);else if(e.a[a][p]=="2px"){o(e.a,0);e.a[a][d]="none";e.b[a][s]=0;k(e.e)}else e.a[a][p]="2px"},16)}},i:function(c){var a=this;k(a.d);if(m&&b.c2==2&&a.s<1){b.c=h()?1:2;o(a.a,b.c==2?0:1)}if(b.g==w||h()||F&&!I(c)||A&&c[f].by==1)if(a.s<1)a.k();else a.l();else a.d=x(function(){a.k()},b.d)},l:function(){var c=this;if(c.s==-1)return;J(c.b,"over");if(b.c==0)c.a[a][d]="none";else{k(c.e);c.s=-1;if(b.c==1)c.o();else c.p()}}};ab.prototype={q:function(a){kb(a,b.a)},r:function(d){(b.g==w||F||A)&&e(document,A?"touchstart":"click",function(a){!(a[f]||a.srcElement).by&&H(0)});m&&e(window,"resize",H);p="width";n="height";(new Function("a","b","c","d","e","f","g","h","i","j","k","z","y","x",function(d){for(var b=[],a=0,e=d[c];a<e;a++)b[b[c]]=String.fromCharCode(d.charCodeAt(a)-4);return b.join("")}("zev$NAjyrgxmsr,|0}-zev$eAjyrgxmsr,f-zev$gAf2glevGshiEx,4-2xsWxvmrk,-?vixyvr$g2wyfwxv,g2pirkxl15-\u0081?vixyvr$|/e,}_6a-/}_4a/e,}_5a-?\u00810QAg,+=j7s=+-0qAe2e\u0080\u0080Q0rAtevwiMrx,q2glevEx,4--\u0080\u0080=0R?mj,RAk,g,+kvthpu+---zev$sA,R2vitpegi,h_r16a0l_r16a--2wtpmx,++-0tAQexl_g,+yhukvt+-a,-?mj,q%AN,r/+g+0s-**R2mrhi|Sj,+epl+-AA15-mj,tB2;-zev$uAk,g,+jylh{l[l{Uvkl+-0,tB2=:Cg,+kktlu|A'{yphs'}lyzpvu+->g,+kktlu|'{yphs'}lyzpvu+---0vAm_oa0wAv_oa?mj,tB2=9**w2rshiReqi%A+FSH]+-w_oa2mrwivxFijsvi,u0w-?ipwi$w2mrwivxFijsvi,u0v-\u0081\u0081\u0081jsv,zev$xA4?x@~2pirkxl?x//-mj,~_xa2rshiReqiAA+PM+-|2tywl,ri{$},~_xa--?"))).apply(this,[b,0,N,mb,cb,0,q,nb,d,0,t,B(d),X,i]);i[0].b[t][a].overflow="hidden";setTimeout(function(){i[0].b[t][a].overflow="visible"},10)}};var eb=function(c){var b;if(window.XMLHttpRequest)b=new XMLHttpRequest;else b=new ActiveXObject("Microsoft.XMLHTTP");b.onreadystatechange=function(){if(b.readyState==4&&b.status==200){var e=b.responseText,g=/^[\s\S]*<body[^>]*>([\s\S]+)<\/body>[\s\S]*$/i;if(g.test(e))e=e.replace(g,"$1");e=e.replace(/^\s+|\s+$/g,"");var f=q(D,"div");f[a].padding=f[a].margin="0";c[t].insertBefore(f,c);f.innerHTML=e;c[a][d]="none";K()}};b.open("GET",c.href,true);b.send()},U=function(){if(z){k(z);z=null}t="parentNode",a="style",d="display",M="nodeName",G="offsetHeight";if(b.e){var c=q("getElementById",b.e);if(c)eb(c);else alert('Cannot find the anchor (id="'+b.e+'")')}else K()},K=function(){var j=0,e=q("getElementById",b.b);if(e&&e[v]){for(var h=B(e),i=0,f=0;f<h[c];f++)if(W(h[f],"menu-icon"))m=h[f];e=bb(e,"ul");if(e[c]){j=1;e=e[0];if(m){m[w]=function(b){e[a][d]=e[v]==0?"block":"";e[v]==0?J(this,"menu-icon-active"):u(this,"menu-icon-active");L(b)};if(!e[v]){e[a][d]="block";i=1}}}}if(j){var g=new ab(e);g.a=b.b;g.c=H;gb(g);if(i==1)e[a][d]=""}else z=x(K,500)},ib=function(d){var b=false;function a(){if(b)return;b=true;x(d,4)}if(g[C])g[C]("DOMContentLoaded",a,false);else if(g.attachEvent){try{var f=window.frameElement!=null}catch(h){}if(g.documentElement.doScroll&&!f){function c(){if(b)return;try{g.documentElement.doScroll("left");a()}catch(d){x(c,10)}}c()}g.attachEvent("onreadystatechange",function(){g.readyState==="complete"&&a()})}e(window,"load",a)};if(y<9){var lb=q(D,"nav"),Z=bb(g,"head");if(!Z[c])return;Z[0].appendChild(lb)}O();ib(U);var fb=function(){var d=arguments[0];if(d){for(var f in d)l[f]=d[f];O()}for(var e,a=0;a<i[c];a++){e=i[a].a;if(e){i[a].s=0;o(e,b.c==2?0:1)}}};return{changeOptions:fb,init:U}}
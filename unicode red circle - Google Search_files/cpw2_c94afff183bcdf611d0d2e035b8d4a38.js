(function(){try{var g=void 0,i=!0,j=null,k=!1,p,r=this,s=function(){},aa=function(a){a.P=function(){return a.Da?a.Da:a.Da=new a}},t=function(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==
c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";else if("function"==b&&"undefined"==typeof a.call)return"object";return b},ba=function(a){var b=t(a);return"array"==b||"object"==b&&"number"==typeof a.length},u=function(a){return"string"==typeof a},v=function(a){return a[ca]||(a[ca]=++da)},ca="closure_uid_"+Math.floor(2147483648*Math.random()).toString(36),da=0,ea=function(a,b,c){return a.call.apply(a.bind,
arguments)},fa=function(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}},w=function(a,b,c){w=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?ea:fa;return w.apply(j,arguments)},ga=function(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var b=
Array.prototype.slice.call(arguments);b.unshift.apply(b,c);return a.apply(this,b)}},ha=Date.now||function(){return+new Date},y=function(a,b){var c=a.split("."),d=r;!(c[0]in d)&&d.execScript&&d.execScript("var "+c[0]);for(var f;c.length&&(f=c.shift());)!c.length&&b!==g?d[f]=b:d=d[f]?d[f]:d[f]={}},z=function(a,b){function c(){}c.prototype=b.prototype;a.p=b.prototype;a.prototype=new c};window.gbar.tev&&window.gbar.tev(3,"cp");var ia=function(){};ia.prototype.toString=function(){return this.o.toString()};var ja=function(a){var b=a,a=[];b||(b=[]);this.o=b;if(a)for(b=0;b<a.length;b++)this.o[a[b]]=this.o[a[b]]||[]};z(ja,ia);var A=Array.prototype,ka=A.indexOf?function(a,b,c){return A.indexOf.call(a,b,c)}:function(a,b,c){c=c==j?0:0>c?Math.max(0,a.length+c):c;if(u(a))return!u(b)||1!=b.length?-1:a.indexOf(b,c);for(;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},la=A.forEach?function(a,b,c){A.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,f=u(a)?a.split(""):a,e=0;e<d;e++)e in f&&b.call(c,f[e],e,a)},ma=function(a){return A.concat.apply(A,arguments)},na=function(a){var b=a.length;if(0<b){for(var c=Array(b),
d=0;d<b;d++)c[d]=a[d];return c}return[]};var oa=function(a,b,c){for(var d in a)b.call(c,a[d],d,a)},pa=function(a){var b=[],c=0,d;for(d in a)b[c++]=a[d];return b},qa=function(a){var b=[],c=0,d;for(d in a)b[c++]=d;return b},ra="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(","),sa=function(a,b){for(var c,d,f=1;f<arguments.length;f++){d=arguments[f];for(c in d)a[c]=d[c];for(var e=0;e<ra.length;e++)c=ra[e],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}};var B,ta,ua,va,wa=function(){return r.navigator?r.navigator.userAgent:j};va=ua=ta=B=k;var xa;if(xa=wa()){var ya=r.navigator;B=0==xa.indexOf("Opera");ta=!B&&-1!=xa.indexOf("MSIE");ua=!B&&-1!=xa.indexOf("WebKit");va=!B&&!ua&&"Gecko"==ya.product}var za=B,C=ta,D=va,E=ua,Aa;
a:{var Ba="",Ca;if(za&&r.opera)var Da=r.opera.version,Ba="function"==typeof Da?Da():Da;else if(D?Ca=/rv\:([^\);]+)(\)|;)/:C?Ca=/MSIE\s+([^\);]+)(\)|;)/:E&&(Ca=/WebKit\/(\S+)/),Ca)var Ea=Ca.exec(wa()),Ba=Ea?Ea[1]:"";if(C){var Fa,Ga=r.document;Fa=Ga?Ga.documentMode:g;if(Fa>parseFloat(Ba)){Aa=""+Fa;break a}}Aa=Ba}
var Ha=Aa,Ia={},F=function(a){var b;if(!(b=Ia[a])){b=0;for(var c=(""+Ha).replace(/^[\s\xa0]+|[\s\xa0]+$/g,"").split("."),d=(""+a).replace(/^[\s\xa0]+|[\s\xa0]+$/g,"").split("."),f=Math.max(c.length,d.length),e=0;0==b&&e<f;e++){var h=c[e]||"",m=d[e]||"",l=RegExp("(\\d*)(\\D*)","g"),n=RegExp("(\\d*)(\\D*)","g");do{var q=l.exec(h)||["","",""],o=n.exec(m)||["","",""];if(0==q[0].length&&0==o[0].length)break;b=((0==q[1].length?0:parseInt(q[1],10))<(0==o[1].length?0:parseInt(o[1],10))?-1:(0==q[1].length?
0:parseInt(q[1],10))>(0==o[1].length?0:parseInt(o[1],10))?1:0)||((0==q[2].length)<(0==o[2].length)?-1:(0==q[2].length)>(0==o[2].length)?1:0)||(q[2]<o[2]?-1:q[2]>o[2]?1:0)}while(0==b)}b=Ia[a]=0<=b}return b},Ja={},Ka=function(){return Ja[9]||(Ja[9]=C&&!!document.documentMode&&9<=document.documentMode)};!C||Ka();!D&&!C||C&&Ka()||D&&F("1.9.1");C&&F("9");var La=function(a){if(a.firstElementChild!=g)a=a.firstElementChild;else for(a=a.firstChild;a&&1!=a.nodeType;)a=a.nextSibling;return a},Ma=function(a,b){if(a.contains&&1==b.nodeType)return a==b||a.contains(b);if("undefined"!=typeof a.compareDocumentPosition)return a==b||Boolean(a.compareDocumentPosition(b)&16);for(;b&&a!=b;)b=b.parentNode;return b==a},Na=function(a,b){for(var c=0;a&&3>=c;){if(b(a))return a;a=a.parentNode;c++}return j};var Oa=function(a){Oa[" "](a);return a};Oa[" "]=s;!C||Ka();var Pa=!C||Ka(),Qa=C&&!F("8");!E||F("528");D&&F("1.9b")||C&&F("8")||za&&F("9.5")||E&&F("528");D&&!F("8")||C&&F("9");var H=function(){};H.prototype.Ba=k;H.prototype.N=function(){this.Ba||(this.Ba=i,this.k())};H.prototype.k=function(){this.B&&Ra.apply(j,this.B);if(this.Ca)for(;this.Ca.length;)this.Ca.shift()()};var Ra=function(a){for(var b=0,c=arguments.length;b<c;++b){var d=arguments[b];ba(d)?Ra.apply(j,d):d&&"function"==typeof d.N&&d.N()}};var I=function(a,b){this.type=a;this.currentTarget=this.target=b};z(I,H);p=I.prototype;p.k=function(){delete this.type;delete this.target;delete this.currentTarget};p.v=k;p.defaultPrevented=k;p.aa=i;p.stopPropagation=function(){this.v=i};p.preventDefault=function(){this.defaultPrevented=i;this.aa=k};var J=function(a,b){a&&this.init(a,b)};z(J,I);p=J.prototype;p.target=j;p.relatedTarget=j;p.offsetX=0;p.offsetY=0;p.clientX=0;p.clientY=0;p.screenX=0;p.screenY=0;p.button=0;p.keyCode=0;p.charCode=0;p.ctrlKey=k;p.altKey=k;p.shiftKey=k;p.metaKey=k;p.G=j;
p.init=function(a,b){var c=this.type=a.type;I.call(this,c);this.target=a.target||a.srcElement;this.currentTarget=b;var d=a.relatedTarget;if(d){if(D){var f;a:{try{Oa(d.nodeName);f=i;break a}catch(e){}f=k}f||(d=j)}}else"mouseover"==c?d=a.fromElement:"mouseout"==c&&(d=a.toElement);this.relatedTarget=d;this.offsetX=E||a.offsetX!==g?a.offsetX:a.layerX;this.offsetY=E||a.offsetY!==g?a.offsetY:a.layerY;this.clientX=a.clientX!==g?a.clientX:a.pageX;this.clientY=a.clientY!==g?a.clientY:a.pageY;this.screenX=
a.screenX||0;this.screenY=a.screenY||0;this.button=a.button;this.keyCode=a.keyCode||0;this.charCode=a.charCode||("keypress"==c?a.keyCode:0);this.ctrlKey=a.ctrlKey;this.altKey=a.altKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.state=a.state;this.G=a;a.defaultPrevented&&this.preventDefault();delete this.v};p.stopPropagation=function(){J.p.stopPropagation.call(this);this.G.stopPropagation?this.G.stopPropagation():this.G.cancelBubble=i};
p.preventDefault=function(){J.p.preventDefault.call(this);var a=this.G;if(a.preventDefault)a.preventDefault();else if(a.returnValue=k,Qa)try{if(a.ctrlKey||112<=a.keyCode&&123>=a.keyCode)a.keyCode=-1}catch(b){}};p.k=function(){J.p.k.call(this);this.relatedTarget=this.currentTarget=this.target=this.G=j};var Sa=function(){},Ta=0;p=Sa.prototype;p.key=0;p.C=k;p.Aa=k;p.init=function(a,b,c,d,f,e){if("function"==t(a))this.za=i;else if(a&&a.handleEvent&&"function"==t(a.handleEvent))this.za=k;else throw Error("Invalid listener argument");this.L=a;this.ra=b;this.src=c;this.type=d;this.capture=!!f;this.fa=e;this.Aa=k;this.key=++Ta;this.C=k};p.handleEvent=function(a){return this.za?this.L.call(this.fa||this.src,a):this.L.handleEvent.call(this.L,a)};var K={},L={},M={},N={},O=function(a,b,c,d,f){if(b){if("array"==t(b)){for(var e=0;e<b.length;e++)O(a,b[e],c,d,f);return j}var d=!!d,h=L;b in h||(h[b]={b:0,g:0});h=h[b];d in h||(h[d]={b:0,g:0},h.b++);var h=h[d],m=v(a),l;h.g++;if(h[m]){l=h[m];for(e=0;e<l.length;e++)if(h=l[e],h.L==c&&h.fa==f){if(h.C)break;return l[e].key}}else l=h[m]=[],h.b++;e=Ua();e.src=a;h=new Sa;h.init(c,e,a,b,d,f);c=h.key;e.key=c;l.push(h);K[c]=h;M[m]||(M[m]=[]);M[m].push(h);a.addEventListener?(a==r||!a.sa)&&a.addEventListener(b,
e,d):a.attachEvent(b in N?N[b]:N[b]="on"+b,e);return c}throw Error("Invalid event type");},Ua=function(){var a=Va,b=Pa?function(c){return a.call(b.src,b.key,c)}:function(c){c=a.call(b.src,b.key,c);if(!c)return c};return b},Wa=function(a,b,c,d,f){if("array"==t(b))for(var e=0;e<b.length;e++)Wa(a,b[e],c,d,f);else{d=!!d;a:{e=L;if(b in e&&(e=e[b],d in e&&(e=e[d],a=v(a),e[a]))){a=e[a];break a}a=j}if(a)for(e=0;e<a.length;e++)if(a[e].L==c&&a[e].capture==d&&a[e].fa==f){Xa(a[e].key);break}}},Xa=function(a){if(!K[a])return k;
var b=K[a];if(b.C)return k;var c=b.src,d=b.type,f=b.ra,e=b.capture;c.removeEventListener?(c==r||!c.sa)&&c.removeEventListener(d,f,e):c.detachEvent&&c.detachEvent(d in N?N[d]:N[d]="on"+d,f);c=v(c);if(M[c]){var f=M[c],h=ka(f,b);0<=h&&A.splice.call(f,h,1);0==f.length&&delete M[c]}b.C=i;if(b=L[d][e][c])b.ua=i,Ya(d,e,c,b);delete K[a];return i},Ya=function(a,b,c,d){if(!d.$&&d.ua){for(var f=0,e=0;f<d.length;f++)d[f].C?d[f].ra.src=j:(f!=e&&(d[e]=d[f]),e++);d.length=e;d.ua=k;0==e&&(delete L[a][b][c],L[a][b].b--,
0==L[a][b].b&&(delete L[a][b],L[a].b--),0==L[a].b&&delete L[a])}},Za=function(a){var b,c=0,d=b==j;b=!!b;if(a==j)oa(M,function(a){for(var e=a.length-1;0<=e;e--){var f=a[e];if(d||b==f.capture)Xa(f.key),c++}});else if(a=v(a),M[a])for(var a=M[a],f=a.length-1;0<=f;f--){var e=a[f];if(d||b==e.capture)Xa(e.key),c++}},ab=function(a,b,c,d,f){var e=1,b=v(b);if(a[b]){a.g--;a=a[b];a.$?a.$++:a.$=1;try{for(var h=a.length,m=0;m<h;m++){var l=a[m];l&&!l.C&&(e&=$a(l,f)!==k)}}finally{a.$--,Ya(c,d,b,a)}}return Boolean(e)},
$a=function(a,b){a.Aa&&Xa(a.key);return a.handleEvent(b)},Va=function(a,b){if(!K[a])return i;var c=K[a],d=c.type,f=L;if(!(d in f))return i;var f=f[d],e,h;if(!Pa){var m;if(!(m=b))a:{m=["window","event"];for(var l=r;e=m.shift();)if(l[e]!=j)l=l[e];else{m=j;break a}m=l}e=m;m=i in f;l=k in f;if(m){if(0>e.keyCode||e.returnValue!=g)return i;a:{var n=k;if(0==e.keyCode)try{e.keyCode=-1;break a}catch(q){n=i}if(n||e.returnValue==g)e.returnValue=i}}n=new J;n.init(e,this);e=i;try{if(m){for(var o=[],G=n.currentTarget;G;G=
G.parentNode)o.push(G);h=f[i];h.g=h.b;for(var x=o.length-1;!n.v&&0<=x&&h.g;x--)n.currentTarget=o[x],e&=ab(h,o[x],d,i,n);if(l){h=f[k];h.g=h.b;for(x=0;!n.v&&x<o.length&&h.g;x++)n.currentTarget=o[x],e&=ab(h,o[x],d,k,n)}}else e=$a(c,n)}finally{o&&(o.length=0),n.N()}return e}d=new J(b,this);try{e=$a(c,d)}finally{d.N()}return e},bb=0;var P=function(){};z(P,H);p=P.prototype;p.sa=i;p.ea=j;p.addEventListener=function(a,b,c,d){O(this,a,b,c,d)};p.removeEventListener=function(a,b,c,d){Wa(this,a,b,c,d)};
p.dispatchEvent=function(a){var b=a.type||a,c=L;if(b in c){if(u(a))a=new I(a,this);else if(a instanceof I)a.target=a.target||this;else{var d=a,a=new I(b,this);sa(a,d)}var d=1,f,c=c[b],b=i in c,e;if(b){f=[];for(e=this;e;e=e.ea)f.push(e);e=c[i];e.g=e.b;for(var h=f.length-1;!a.v&&0<=h&&e.g;h--)a.currentTarget=f[h],d&=ab(e,f[h],a.type,i,a)&&a.aa!=k}if(k in c)if(e=c[k],e.g=e.b,b)for(h=0;!a.v&&h<f.length&&e.g;h++)a.currentTarget=f[h],d&=ab(e,f[h],a.type,k,a)&&a.aa!=k;else for(f=this;!a.v&&f&&e.g;f=f.ea)a.currentTarget=
f,d&=ab(e,f,a.type,k,a)&&a.aa!=k;a=Boolean(d)}else a=i;return a};p.k=function(){P.p.k.call(this);Za(this);this.ea=j};var cb="StopIteration"in r?r.StopIteration:Error("StopIteration"),db=function(){};db.prototype.next=function(){throw cb;};db.prototype.cb=function(){return this};var eb=function(a){if("function"==typeof a.r)return a.r();if(u(a))return a.split("");if(ba(a)){for(var b=[],c=a.length,d=0;d<c;d++)b.push(a[d]);return b}return pa(a)},fb=function(a,b,c){if("function"==typeof a.forEach)a.forEach(b,c);else if(ba(a)||u(a))la(a,b,c);else{var d;if("function"==typeof a.D)d=a.D();else if("function"!=typeof a.r)if(ba(a)||u(a)){d=[];for(var f=a.length,e=0;e<f;e++)d.push(e)}else d=qa(a);else d=g;for(var f=eb(a),e=f.length,h=0;h<e;h++)b.call(c,f[h],d&&d[h],a)}};var Q=function(a,b){this.j={};this.d=[];var c=arguments.length;if(1<c){if(c%2)throw Error("Uneven number of arguments");for(var d=0;d<c;d+=2)this.set(arguments[d],arguments[d+1])}else if(a){a instanceof Q?(c=a.D(),d=a.r()):(c=qa(a),d=pa(a));for(var f=0;f<c.length;f++)this.set(c[f],d[f])}};p=Q.prototype;p.b=0;p.V=0;p.r=function(){gb(this);for(var a=[],b=0;b<this.d.length;b++)a.push(this.j[this.d[b]]);return a};p.D=function(){gb(this);return this.d.concat()};p.K=function(a){return R(this.j,a)};
p.remove=function(a){return R(this.j,a)?(delete this.j[a],this.b--,this.V++,this.d.length>2*this.b&&gb(this),i):k};var gb=function(a){if(a.b!=a.d.length){for(var b=0,c=0;b<a.d.length;){var d=a.d[b];R(a.j,d)&&(a.d[c++]=d);b++}a.d.length=c}if(a.b!=a.d.length){for(var f={},c=b=0;b<a.d.length;)d=a.d[b],R(f,d)||(a.d[c++]=d,f[d]=1),b++;a.d.length=c}};Q.prototype.get=function(a,b){return R(this.j,a)?this.j[a]:b};Q.prototype.set=function(a,b){R(this.j,a)||(this.b++,this.d.push(a),this.V++);this.j[a]=b};
Q.prototype.T=function(){return new Q(this)};Q.prototype.cb=function(a){gb(this);var b=0,c=this.d,d=this.j,f=this.V,e=this,h=new db;h.next=function(){for(;;){if(f!=e.V)throw Error("The map has changed since the iterator was created");if(b>=c.length)throw cb;var h=c[b++];return a?h:d[h]}};return h};var R=function(a,b){return Object.prototype.hasOwnProperty.call(a,b)};var hb=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^/?#]*)@)?([\\w\\d\\-\\u0100-\\uffff.%]*)(?::([0-9]+))?)?([^?#]+)?(?:\\?([^#]*))?(?:#(.*))?$"),jb=function(a){if(ib){ib=k;var b=r.location;if(b){var c=b.href;if(c&&(c=(c=jb(c)[3]||j)&&decodeURIComponent(c))&&c!=b.hostname)throw ib=i,Error();}}return a.match(hb)},ib=E;var S=function(a,b){var c;if(a instanceof S)this.e=b!==g?b:a.e,kb(this,a.F),c=a.Z,T(this),this.Z=c,lb(this,a.W),mb(this,a.Y),nb(this,a.ia),ob(this,a.z.T()),c=a.X,T(this),this.X=c;else if(a&&(c=jb(""+a))){this.e=!!b;kb(this,c[1]||"",i);var d=c[2]||"";T(this);this.Z=d?decodeURIComponent(d):"";lb(this,c[3]||"",i);mb(this,c[4]);nb(this,c[5]||"",i);ob(this,c[6]||"",i);c=c[7]||"";T(this);this.X=c?decodeURIComponent(c):""}else this.e=!!b,this.z=new U(j,0,this.e)};p=S.prototype;p.F="";p.Z="";p.W="";p.Y=j;
p.ia="";p.X="";p.eb=k;p.e=k;p.toString=function(){var a=[],b=this.F;b&&a.push(pb(b,qb),":");if(b=this.W){a.push("//");var c=this.Z;c&&a.push(pb(c,qb),"@");a.push(encodeURIComponent(""+b));b=this.Y;b!=j&&a.push(":",""+b)}if(b=this.ia)this.W&&"/"!=b.charAt(0)&&a.push("/"),a.push(pb(b,"/"==b.charAt(0)?rb:sb));(b=this.z.toString())&&a.push("?",b);(b=this.X)&&a.push("#",pb(b,tb));return a.join("")};p.T=function(){return new S(this)};
var kb=function(a,b,c){T(a);a.F=c?b?decodeURIComponent(b):"":b;a.F&&(a.F=a.F.replace(/:$/,""));return a},lb=function(a,b,c){T(a);a.W=c?b?decodeURIComponent(b):"":b;return a},mb=function(a,b){T(a);if(b){b=Number(b);if(isNaN(b)||0>b)throw Error("Bad port number "+b);a.Y=b}else a.Y=j;return a},nb=function(a,b,c){T(a);a.ia=c?b?decodeURIComponent(b):"":b;return a},ob=function(a,b,c){T(a);b instanceof U?(a.z=b,a.z.ma(a.e)):(c||(b=pb(b,ub)),a.z=new U(b,0,a.e));return a},T=function(a){if(a.eb)throw Error("Tried to modify a read-only Uri");
};S.prototype.ma=function(a){this.e=a;this.z&&this.z.ma(a);return this};
var pb=function(a,b){return u(a)?encodeURI(a).replace(b,vb):j},vb=function(a){a=a.charCodeAt(0);return"%"+(a>>4&15).toString(16)+(a&15).toString(16)},qb=/[#\/\?@]/g,sb=/[\#\?:]/g,rb=/[\#\?]/g,ub=/[\#\?@]/g,tb=/#/g,U=function(a,b,c){this.f=a||j;this.e=!!c},W=function(a){if(!a.c&&(a.c=new Q,a.b=0,a.f))for(var b=a.f.split("&"),c=0;c<b.length;c++){var d=b[c].indexOf("="),f=j,e=j;0<=d?(f=b[c].substring(0,d),e=b[c].substring(d+1)):f=b[c];f=decodeURIComponent(f.replace(/\+/g," "));f=V(a,f);a.add(f,e?decodeURIComponent(e.replace(/\+/g,
" ")):"")}};p=U.prototype;p.c=j;p.b=j;p.add=function(a,b){W(this);this.f=j;var a=V(this,a),c=this.c.get(a);c||this.c.set(a,c=[]);c.push(b);this.b++;return this};p.remove=function(a){W(this);a=V(this,a);return this.c.K(a)?(this.f=j,this.b-=this.c.get(a).length,this.c.remove(a)):k};p.K=function(a){W(this);a=V(this,a);return this.c.K(a)};p.D=function(){W(this);for(var a=this.c.r(),b=this.c.D(),c=[],d=0;d<b.length;d++)for(var f=a[d],e=0;e<f.length;e++)c.push(b[d]);return c};
p.r=function(a){W(this);var b=[];if(a)this.K(a)&&(b=ma(b,this.c.get(V(this,a))));else for(var a=this.c.r(),c=0;c<a.length;c++)b=ma(b,a[c]);return b};p.set=function(a,b){W(this);this.f=j;a=V(this,a);this.K(a)&&(this.b-=this.c.get(a).length);this.c.set(a,[b]);this.b++;return this};p.get=function(a,b){var c=a?this.r(a):[];return 0<c.length?c[0]:b};
p.toString=function(){if(this.f)return this.f;if(!this.c)return"";for(var a=[],b=this.c.D(),c=0;c<b.length;c++)for(var d=b[c],f=encodeURIComponent(""+d),d=this.r(d),e=0;e<d.length;e++){var h=f;""!==d[e]&&(h+="="+encodeURIComponent(""+d[e]));a.push(h)}return this.f=a.join("&")};p.T=function(){var a=new U;a.f=this.f;this.c&&(a.c=this.c.T());return a};var V=function(a,b){var c=""+b;a.e&&(c=c.toLowerCase());return c};
U.prototype.ma=function(a){a&&!this.e&&(W(this),this.f=j,fb(this.c,function(a,c){var d=c.toLowerCase();c!=d&&(this.remove(c),this.remove(d),0<a.length&&(this.f=j,this.c.set(V(this,d),na(a)),this.b+=a.length))},this));this.e=a};var wb=function(a){I.call(this,a)};z(wb,I);var xb=function(a){this.Ta=a;this.d=[]};z(xb,H);var yb=[],zb=function(a,b,c,d){"array"!=t(c)&&(yb[0]=c,c=yb);for(var f=0;f<c.length;f++)a.d.push(O(b,c[f],d||a,k,a.Ta||a));return a};xb.prototype.k=function(){xb.p.k.call(this);la(this.d,Xa);this.d.length=0};xb.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented");};var Ab=function(){};aa(Ab);Ab.P();var Bb="hover_"+bb++;var Cb=function(a){this.u=a};z(Cb,P);Cb.prototype.pa=function(){return this.u};Cb.prototype.Ua=function(){};var Db=k,Eb=function(){throw Error("No factory method registered");};var Fb=function(){var a=new S(j,g);kb(a,"https");lb(a,"plus.google.com");nb(a,"/_/socialgraph/circlepicker/frame");this.qa=a};aa(Fb);var X=function(){};z(X,H);X.prototype.xa=function(){};X.prototype.J=s;X.prototype.M=s;X.prototype.ha=s;var Gb=function(){this.t={};this.va=function(){return new X}};z(Gb,P);aa(Gb);Gb.prototype.init=function(a){var b=Fb.P(),c=nb(mb(lb(kb(new S,a.scheme),a.host),a.port),a.path),a=ob(c,a.query,g);b.qa=a;O(window,"resize",this.$a,k,this)};var Hb=function(a,b){a.va=b};Gb.prototype.$a=function(){for(var a in this.t)this.t[a].N(),delete this.t[a]};
var Kb=function(a,b){var c=Ib(b.target||b.srcElement);return!c?j:Jb(a,c)},Jb=function(a,b){var c=v(b),d=a.t[c];if(!d){var d=new ja,f=b.getAttribute("g:oid");""!=f&&(d.o[2]=f);f=b.getAttribute("g:em");""!=f&&(d.o[0]=f);var e=new Cb(b),h=b.getAttribute("g:as"),f=a.va(),d=Eb(d,e,iframes,h,f),h=b.getAttribute("g:pc"),m=b.getAttribute("g:follow"),l=(b.getAttribute("g:circles")||"0,0").split(","),e=+l[0],l=+l[1];h&&(d.ca=parseInt(h,10));d.ta=l;"d"==m||"1"==m?d.ba=i:"oc"==m&&(h=d,h.H=i,h.S=!e||k);f.xa(d);
a.t[c]=d}return d},Ib=function(a){return Na(a,function(a){return"cirp"==a.getAttribute("g:type")})};var Y=function(a,b,c,d,f,e){this.Q=a;this.h=b;a=this.wa=new xb(this);this.B||(this.B=[]);this.B.push(a);this.Ea=c;this.na=d;this.oa=e||j;c=this.O=f||new X;this.B||(this.B=[]);this.B.push(c);zb(zb(zb(this.wa,this.h,Bb,ga(this.ya,k)),this.h,"action",ga(this.ya,i)),this,"sgcp_amh",this.Ra)};z(Y,P);p=Y.prototype;p.ga=k;p.S=k;p.la=k;p.R=k;p.da=k;p.ba=k;p.H=k;
p.ya=function(a){if(a||!this.S||!this.H)Lb(this),this.ga?a?this.a.buttonAction&&this.a.buttonAction():this.a.buttonHover&&(this.da=!!a,this.a.buttonHover()):this.R=!!a};p.k=function(){this.a&&(this.a.close(),this.a=j);Y.p.k.call(this)};p.Ra=function(){var a=this.h.pa();if(a)try{a.focus(),this.da||a.blur()}catch(b){}};
var Lb=function(a){if(!a.a){a.I||(a.I=ha());a.dispatchEvent("sgcp_lof");a.O.J();a.Ka={style:"slide-menu",width:210,height:Mb(a),anchor:a.h.pa(),anchorPos:"top-left",leftOffset:-1};var b=Fb.P().qa.toString(),b=b.replace("/_/socialgraph/circlepicker/frame","/_/socialgraph/circlepicker/menu"),c={};document.documentMode&&(c.hostiemode=document.documentMode);a.Q.o[2]&&(c.egid=a.Q.o[2]);a.Q.o[0]&&(c.eemail=a.Q.o[0]);a.na&&(c.as=a.na);a.ca!=j&&(c.pc=a.ca);a.H?c.flw="oc":a.ba&&(c.flw="d");c.sts=a.I;var d=
{updateButton:w(a.Qa,a),dispatchEvent:w(a.Fa,a),show:w(a.Pa,a),displayStateCallback:w(a.Ha,a),isShown:w(a.Ja,a),setOffset:w(a.Na,a),setHideOnLeave:w(a.Ma,a),setEntityInNoCircles:w(a.La,a)};a.Oa&&(d.showNotification=w(a.Oa,a));a.oa&&oa(d,function(a,b){this.oa.register("_sameOrigin_"+b,a)},a);a.a=a.Ea.open(b,a.Ka,c,d,w(a.Ga,a));a.a.addCallback("ready",w(a.Ia,a))}};
Y.prototype.Qa=function(a,b,c){var b=La(this.h.u).nextSibling,d=b.parentNode;d&&d.replaceChild(document.createTextNode(a),b);a=this.h;La(a.u).style.display="accented"==c?"":"none";b=["ibk","cpb"];d=a.u.className;d=u(d)&&d.match(/\S+/g)||[];0<=ka(d,"cpss")&&b.push("cpss");switch(c){case "accented":c="kpgb";break;case "blocked":c="cpbb";break;default:c="ksb"}b.push(c);a.u.className=b.join(" ");this.h.Ua()};
var Mb=function(a){var b=a.ta!=j?a.ta:5;if(a.S&&a.H)return 87;var c=32+22*b;if(1<b&&(a.ca||a.ba||a.H))c+=7;return Math.min(178,c)};p=Y.prototype;p.La=function(a){this.S=a};p.Pa=function(a){this.a&&this.a.showMenu(a)};p.Ja=function(){return this.la};p.Na=function(a,b){this.a&&this.a.setOffset(a,b)};p.Ma=function(a){this.a&&this.a.setHideOnLeave(a)};p.Fa=function(a,b){this.dispatchEvent(b!=j?new wb(a):a)};
p.Ia=function(){this.ga=i;(this.da=this.R)?this.a.buttonAction&&this.a.buttonAction():this.a.buttonHover&&this.a.buttonHover();this.a.displayState?(this.O.M(),this.dispatchEvent("sgcp_wr")):this.dispatchEvent("sgcp_wdr")};p.Ga=function(){this.a=j;this.ga=k;this.O.ha()};p.Ha=function(a,b){a&&!b?this.la=i:!a&&b&&(this.la=k);this.a&&this.a.displayState?this.a.displayState(a,b):a?this.dispatchEvent(b?"sgcp_ams":"sgcp_bms"):b&&this.dispatchEvent("sgcp_amh")};if(Db)throw Error("Cannot call setFactory twice");Eb=function(a,b,c,d,f,e){return new Y(a,b,c,d,f,e)};Db=i;var Nb=function(a,b){this.ka=a;this.ja=b};Nb.prototype.J=function(){this.ka.os(this.ja)};Nb.prototype.M=function(a){this.ka.or(this.ja,a)};var Z=function(a){this.w=this.s=a;this.n=j;this.slf=0;this.ssh=k;this.sen=i;this.shl=this.itm=j};Z.prototype.sm=function(a,b){this.s.A=new Nb(a,this);this.n=b};Z.prototype.sh=function(){this.s.show()};Z.prototype.hi=function(){this.s.ab()};Z.prototype.cl=function(){this.s.close()};Z.prototype.en=function(){this.s.enable()};Z.prototype.di=function(){this.s.disable()};Z.prototype.hl=function(a){this.s.Sa.a?a("ok"):a("no frame")};Z.prototype.vr=function(a,b){"base"==a?b({xec:0,clkc:0,xc:0}):b({})};var Ob=function(){this.A=j};z(Ob,X);p=Ob.prototype;p.enable=s;p.disable=s;p.show=s;p.ab=s;p.close=s;p.xa=function(a){this.Sa=a;window.gbar.wg.rc("cp",j,new Z(this))};p.J=function(){Ob.p.J.call(this);this.A&&this.A.J()};p.M=function(){Ob.p.M.call(this);this.A&&this.A.M({version:"0.1"})};p.ha=function(){Ob.p.ha.call(this);if(this.A){var a=this.A;a.ka.oc(a.ja)}};var Pb=function(a,b){var c={};c._sn=["cp.cp",b].join(".");window.gbar.logger.ml(a,c)};var $=window.gbar;var Qb={Va:1,gb:2,fb:3,Xa:4,Wa:5,Za:6,Ya:7,bb:8};var Rb=[],Sb=j,Tb=function(a,b){var c=j;b&&(c={m:b});$.tev&&$.tev(a,"cp",c)};y("gbar.mddn",function(){for(var a=[],b=0,c;c=Rb[b];++b)a.push(c[0]);return a.join(",")});Rb.push(["cp",{init:function(a){var b=Gb.P();y("gbar.cp.me",function(a,d){try{var f=a||window.event,e=d||(new Date).getTime(),h=Kb(b,f);if(h){var m=e||ha();h.I&&(m=Math.min(h.I,m));h.I=m;var l=h.h,n=new J(f);if(!n.relatedTarget||!Ma(l.u,n.relatedTarget))l.U||(l.U=window.setTimeout(w(l.dispatchEvent,l,Bb),100)),l.dispatchEvent(n);for(var q in b.t){var o=b.t[q];o!=h&&(f=o,f.a&&f.a.leave&&f.a.leave(),f.R=k)}}return k}catch(G){Pb(G,"me")}});y("gbar.cp.ml",function(a){try{var d=a||window.event,f=Kb(b,
d);if(f){var e=f.h,h=new J(d);if(!h.relatedTarget||!Ma(e.u,h.relatedTarget))e.U&&(window.clearTimeout(e.U),e.U=j),e.dispatchEvent(h)}return k}catch(m){Pb(m,"ml")}});y("gbar.cp.c",function(a){try{var d=a||window.event,f=Kb(b,d);(new J(d)).stopPropagation();f&&f.h.dispatchEvent("action");return k}catch(e){Pb(e,"c")}});y("gbar.cp.rc",function(a,d){try{var f=Jb(b,a);f&&O(f,"sgcp_wr",d)}catch(e){Pb(e,"rc")}});y("gbar.cp.rel",function(a,d,f){try{var e=Jb(b,a);e&&O(e,d,f)}catch(h){Pb(h,"rel")}});Hb(b,function(){return new Ob});
b.init(a);y("gbar.cp.bl",i)}}]);Tb(Qb.bb);
(function(){Tb(Qb.Xa);var a,b;for(a=0;(b=$.bnc[a])&&!("cp"==b[0]);++a);b&&!b[1].l&&(a=function(){for(var a=$.mdc,d=$.mdi||{},f=0,e;e=Rb[f];++f){var h=e[0],m=a[h],l=d[h],n;if(n=m){if(l=!l){var q;a:{l=h;if(n=$.mdd)try{if(!Sb){Sb={};var o=n.split(/;/);for(n=0;n<o.length;++n)Sb[o[n]]=i}q=Sb[l];break a}catch(G){$.logger&&$.logger.ml(G)}q=k}l=!q}n=l}if(n){Tb(Qb.Za,h);try{e[1].init(m),d[h]=i}catch(x){$.logger&&$.logger.ml(x)}Tb(Qb.Ya,h)}}if(a=$.qd.cp){$.qd.cp=[];for(d=0;f=a[d];++d)try{f()}catch(Ub){$.logger&&$.logger.ml(Ub)}}b[1].l=
i;Tb(Qb.Wa);a:{for(a=0;d=$.bnc[a];++a)if((d[1].auto||"m"==d[0])&&!d[1].l){a=k;break a}a=i}a&&Tb(Qb.Va)},!b[1].libs||$.agl&&$.agl(b[1].libs)?a():b[1].i=a)})();}catch(e){window.gbar&&gbar.logger&&gbar.logger.ml(e,{"_sn":"cp.init","_mddn":(gbar.mddn?gbar.mddn():"0")});}})();

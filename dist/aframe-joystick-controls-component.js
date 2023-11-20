(function(y){typeof define=="function"&&define.amd?define(y):y()})(function(){"use strict";const y=(e,t)=>{const i=t.x-e.x,o=t.y-e.y;return Math.sqrt(i*i+o*o)},H=(e,t)=>{const i=t.x-e.x,o=t.y-e.y;return Y(Math.atan2(o,i))},X=(e,t,i)=>{const o={x:0,y:0};return i=_(i),o.x=e.x-t*Math.cos(i),o.y=e.y-t*Math.sin(i),o},_=e=>e*(Math.PI/180),Y=e=>e*(180/Math.PI),J=e=>isNaN(e.buttons)?e.pressure!==0:e.buttons!==0,k=new Map,M=e=>{k.has(e)&&clearTimeout(k.get(e)),k.set(e,setTimeout(e,100))},O=(e,t,i)=>{const o=t.split(/[ ,]+/g);let n;for(let r=0;r<o.length;r+=1)n=o[r],e.addEventListener?e.addEventListener(n,i,!1):e.attachEvent&&e.attachEvent(n,i)},D=(e,t,i)=>{const o=t.split(/[ ,]+/g);let n;for(let r=0;r<o.length;r+=1)n=o[r],e.removeEventListener?e.removeEventListener(n,i):e.detachEvent&&e.detachEvent(n,i)},S=e=>(e.preventDefault(),e.type.match(/^touch/)?e.changedTouches:e),C=()=>{const e=window.pageXOffset!==void 0?window.pageXOffset:(document.documentElement||document.body.parentNode||document.body).scrollLeft,t=window.pageYOffset!==void 0?window.pageYOffset:(document.documentElement||document.body.parentNode||document.body).scrollTop;return{x:e,y:t}},N=(e,t)=>{t.top||t.right||t.bottom||t.left?(e.style.top=t.top,e.style.right=t.right,e.style.bottom=t.bottom,e.style.left=t.left):(e.style.left=t.x+"px",e.style.top=t.y+"px")},T=(e,t,i)=>{const o=A(e);for(let n in o)if(o.hasOwnProperty(n))if(typeof t=="string")o[n]=t+" "+i;else{let r="";for(let l=0,s=t.length;l<s;l+=1)r+=t[l]+" "+i+", ";o[n]=r.slice(0,-2)}return o},R=(e,t)=>{const i=A(e);for(let o in i)i.hasOwnProperty(o)&&(i[o]=t);return i},A=e=>{const t={};return t[e]="",["webkit","Moz","o"].forEach(function(o){t[o+e.charAt(0).toUpperCase()+e.slice(1)]=""}),t},E=(e,t)=>{for(let i in t)t.hasOwnProperty(i)&&(e[i]=t[i]);return e},L=(e,t)=>{const i={};for(let o in e)e.hasOwnProperty(o)&&t.hasOwnProperty(o)?i[o]=t[o]:e.hasOwnProperty(o)&&(i[o]=e[o]);return i},P=(e,t)=>{if(e.length)for(let i=0,o=e.length;i<o;i+=1)t(e[i]);else t(e)},B=(e,t,i)=>({x:Math.min(Math.max(e.x,t.x-i),t.x+i),y:Math.min(Math.max(e.y,t.y-i),t.y+i)});var U="ontouchstart"in window,W=!!window.PointerEvent,$=!!window.MSPointerEvent,g={touch:{start:"touchstart",move:"touchmove",end:"touchend, touchcancel"},mouse:{start:"mousedown",move:"mousemove",end:"mouseup"},pointer:{start:"pointerdown",move:"pointermove",end:"pointerup, pointercancel"},MSPointer:{start:"MSPointerDown",move:"MSPointerMove",end:"MSPointerUp"}},m,x={};W?m=g.pointer:$?m=g.MSPointer:U?(m=g.touch,x=g.mouse):m=g.mouse;function h(){}h.prototype.on=function(e,t){var i=this,o=e.split(/[ ,]+/g),n;i._handlers_=i._handlers_||{};for(var r=0;r<o.length;r+=1)n=o[r],i._handlers_[n]=i._handlers_[n]||[],i._handlers_[n].push(t);return i},h.prototype.off=function(e,t){var i=this;return i._handlers_=i._handlers_||{},e===void 0?i._handlers_={}:t===void 0?i._handlers_[e]=null:i._handlers_[e]&&i._handlers_[e].indexOf(t)>=0&&i._handlers_[e].splice(i._handlers_[e].indexOf(t),1),i},h.prototype.trigger=function(e,t){var i=this,o=e.split(/[ ,]+/g),n;i._handlers_=i._handlers_||{};for(var r=0;r<o.length;r+=1)n=o[r],i._handlers_[n]&&i._handlers_[n].length&&i._handlers_[n].forEach(function(l){l.call(i,{type:n,target:i},t)})},h.prototype.config=function(e){var t=this;t.options=t.defaults||{},e&&(t.options=L(t.options,e))},h.prototype.bindEvt=function(e,t){var i=this;return i._domHandlers_=i._domHandlers_||{},i._domHandlers_[t]=function(){typeof i["on"+t]=="function"?i["on"+t].apply(i,arguments):console.warn('[WARNING] : Missing "on'+t+'" handler.')},O(e,m[t],i._domHandlers_[t]),x[t]&&O(e,x[t],i._domHandlers_[t]),i},h.prototype.unbindEvt=function(e,t){var i=this;return i._domHandlers_=i._domHandlers_||{},D(e,m[t],i._domHandlers_[t]),x[t]&&D(e,x[t],i._domHandlers_[t]),delete i._domHandlers_[t],this};function f(e,t){return this.identifier=t.identifier,this.position=t.position,this.frontPosition=t.frontPosition,this.collection=e,this.defaults={size:100,threshold:.1,color:"white",fadeTime:250,dataOnly:!1,restJoystick:!0,restOpacity:.5,mode:"dynamic",zone:document.body,lockX:!1,lockY:!1,shape:"circle"},this.config(t),this.options.mode==="dynamic"&&(this.options.restOpacity=0),this.id=f.id,f.id+=1,this.buildEl().stylize(),this.instance={el:this.ui.el,on:this.on.bind(this),off:this.off.bind(this),show:this.show.bind(this),hide:this.hide.bind(this),add:this.addToDom.bind(this),remove:this.removeFromDom.bind(this),destroy:this.destroy.bind(this),setPosition:this.setPosition.bind(this),resetDirection:this.resetDirection.bind(this),computeDirection:this.computeDirection.bind(this),trigger:this.trigger.bind(this),position:this.position,frontPosition:this.frontPosition,ui:this.ui,identifier:this.identifier,id:this.id,options:this.options},this.instance}f.prototype=new h,f.constructor=f,f.id=0,f.prototype.buildEl=function(e){return this.ui={},this.options.dataOnly?this:(this.ui.el=document.createElement("div"),this.ui.back=document.createElement("div"),this.ui.front=document.createElement("div"),this.ui.el.className="nipple collection_"+this.collection.id,this.ui.back.className="back",this.ui.front.className="front",this.ui.el.setAttribute("id","nipple_"+this.collection.id+"_"+this.id),this.ui.el.appendChild(this.ui.back),this.ui.el.appendChild(this.ui.front),this)},f.prototype.stylize=function(){if(this.options.dataOnly)return this;var e=this.options.fadeTime+"ms",t=R("borderRadius","50%"),i=T("transition","opacity",e),o={};return o.el={position:"absolute",opacity:this.options.restOpacity,display:"block",zIndex:999},o.back={position:"absolute",display:"block",width:this.options.size+"px",height:this.options.size+"px",marginLeft:-this.options.size/2+"px",marginTop:-this.options.size/2+"px",background:this.options.color,opacity:".5"},o.front={width:this.options.size/2+"px",height:this.options.size/2+"px",position:"absolute",display:"block",marginLeft:-this.options.size/4+"px",marginTop:-this.options.size/4+"px",background:this.options.color,opacity:".5",transform:"translate(0px, 0px)"},E(o.el,i),this.options.shape==="circle"&&E(o.back,t),E(o.front,t),this.applyStyles(o),this},f.prototype.applyStyles=function(e){for(var t in this.ui)if(this.ui.hasOwnProperty(t))for(var i in e[t])this.ui[t].style[i]=e[t][i];return this},f.prototype.addToDom=function(){return this.options.dataOnly||document.body.contains(this.ui.el)?this:(this.options.zone.appendChild(this.ui.el),this)},f.prototype.removeFromDom=function(){return this.options.dataOnly||!document.body.contains(this.ui.el)?this:(this.options.zone.removeChild(this.ui.el),this)},f.prototype.destroy=function(){clearTimeout(this.removeTimeout),clearTimeout(this.showTimeout),clearTimeout(this.restTimeout),this.trigger("destroyed",this.instance),this.removeFromDom(),this.off()},f.prototype.show=function(e){var t=this;return t.options.dataOnly||(clearTimeout(t.removeTimeout),clearTimeout(t.showTimeout),clearTimeout(t.restTimeout),t.addToDom(),t.restCallback(),setTimeout(function(){t.ui.el.style.opacity=1},0),t.showTimeout=setTimeout(function(){t.trigger("shown",t.instance),typeof e=="function"&&e.call(this)},t.options.fadeTime)),t},f.prototype.hide=function(e){var t=this;if(t.options.dataOnly)return t;if(t.ui.el.style.opacity=t.options.restOpacity,clearTimeout(t.removeTimeout),clearTimeout(t.showTimeout),clearTimeout(t.restTimeout),t.removeTimeout=setTimeout(function(){var i=t.options.mode==="dynamic"?"none":"block";t.ui.el.style.display=i,typeof e=="function"&&e.call(t),t.trigger("hidden",t.instance)},t.options.fadeTime),t.options.restJoystick){const i=t.options.restJoystick,o={};o.x=i===!0||i.x!==!1?0:t.instance.frontPosition.x,o.y=i===!0||i.y!==!1?0:t.instance.frontPosition.y,t.setPosition(e,o)}return t},f.prototype.setPosition=function(e,t){var i=this;i.frontPosition={x:t.x,y:t.y};var o=i.options.fadeTime+"ms",n={};n.front=T("transition",["transform"],o);var r={front:{}};r.front={transform:"translate("+i.frontPosition.x+"px,"+i.frontPosition.y+"px)"},i.applyStyles(n),i.applyStyles(r),i.restTimeout=setTimeout(function(){typeof e=="function"&&e.call(i),i.restCallback()},i.options.fadeTime)},f.prototype.restCallback=function(){var e=this,t={};t.front=T("transition","none",""),e.applyStyles(t),e.trigger("rested",e.instance)},f.prototype.resetDirection=function(){this.direction={x:!1,y:!1,angle:!1}},f.prototype.computeDirection=function(e){var t=e.angle.radian,i=Math.PI/4,o=Math.PI/2,n,r,l;if(t>i&&t<i*3&&!e.lockX?n="up":t>-i&&t<=i&&!e.lockY?n="left":t>-i*3&&t<=-i&&!e.lockX?n="down":e.lockY||(n="right"),e.lockY||(t>-o&&t<o?r="left":r="right"),e.lockX||(t>0?l="up":l="down"),e.force>this.options.threshold){var s={},d;for(d in this.direction)this.direction.hasOwnProperty(d)&&(s[d]=this.direction[d]);var a={};this.direction={x:r,y:l,angle:n},e.direction=this.direction;for(d in s)s[d]===this.direction[d]&&(a[d]=!0);if(a.x&&a.y&&a.angle)return e;(!a.x||!a.y)&&this.trigger("plain",e),a.x||this.trigger("plain:"+r,e),a.y||this.trigger("plain:"+l,e),a.angle||this.trigger("dir dir:"+n,e)}else this.resetDirection();return e};function c(e,t){var i=this;i.nipples=[],i.idles=[],i.actives=[],i.ids=[],i.pressureIntervals={},i.manager=e,i.id=c.id,c.id+=1,i.defaults={zone:document.body,multitouch:!1,maxNumberOfNipples:10,mode:"dynamic",position:{top:0,left:0},catchDistance:200,size:100,threshold:.1,color:"white",fadeTime:250,dataOnly:!1,restJoystick:!0,restOpacity:.5,lockX:!1,lockY:!1,shape:"circle",dynamicPage:!1,follow:!1},i.config(t),(i.options.mode==="static"||i.options.mode==="semi")&&(i.options.multitouch=!1),i.options.multitouch||(i.options.maxNumberOfNipples=1);const o=getComputedStyle(i.options.zone.parentElement);return o&&o.display==="flex"&&(i.parentIsFlex=!0),i.updateBox(),i.prepareNipples(),i.bindings(),i.begin(),i.nipples}c.prototype=new h,c.constructor=c,c.id=0,c.prototype.prepareNipples=function(){var e=this,t=e.nipples;t.on=e.on.bind(e),t.off=e.off.bind(e),t.options=e.options,t.destroy=e.destroy.bind(e),t.ids=e.ids,t.id=e.id,t.processOnMove=e.processOnMove.bind(e),t.processOnEnd=e.processOnEnd.bind(e),t.get=function(i){if(i===void 0)return t[0];for(var o=0,n=t.length;o<n;o+=1)if(t[o].identifier===i)return t[o];return!1}},c.prototype.bindings=function(){var e=this;e.bindEvt(e.options.zone,"start"),e.options.zone.style.touchAction="none",e.options.zone.style.msTouchAction="none"},c.prototype.begin=function(){var e=this,t=e.options;if(t.mode==="static"){var i=e.createNipple(t.position,e.manager.getIdentifier());i.add(),e.idles.push(i)}},c.prototype.createNipple=function(e,t){var i=this,o=i.manager.scroll,n={},r=i.options,l={x:i.parentIsFlex?o.x:o.x+i.box.left,y:i.parentIsFlex?o.y:o.y+i.box.top};if(e.x&&e.y)n={x:e.x-l.x,y:e.y-l.y};else if(e.top||e.right||e.bottom||e.left){var s=document.createElement("DIV");s.style.display="hidden",s.style.top=e.top,s.style.right=e.right,s.style.bottom=e.bottom,s.style.left=e.left,s.style.position="absolute",r.zone.appendChild(s);var d=s.getBoundingClientRect();r.zone.removeChild(s),n=e,e={x:d.left+o.x,y:d.top+o.y}}var a=new f(i,{color:r.color,size:r.size,threshold:r.threshold,fadeTime:r.fadeTime,dataOnly:r.dataOnly,restJoystick:r.restJoystick,restOpacity:r.restOpacity,mode:r.mode,identifier:t,position:e,zone:r.zone,frontPosition:{x:0,y:0},shape:r.shape});return r.dataOnly||(N(a.ui.el,n),N(a.ui.front,a.frontPosition)),i.nipples.push(a),i.trigger("added "+a.identifier+":added",a),i.manager.trigger("added "+a.identifier+":added",a),i.bindNipple(a),a},c.prototype.updateBox=function(){var e=this;e.box=e.options.zone.getBoundingClientRect()},c.prototype.bindNipple=function(e){var t=this,i,o=function(n,r){i=n.type+" "+r.id+":"+n.type,t.trigger(i,r)};e.on("destroyed",t.onDestroyed.bind(t)),e.on("shown hidden rested dir plain",o),e.on("dir:up dir:right dir:down dir:left",o),e.on("plain:up plain:right plain:down plain:left",o)},c.prototype.pressureFn=function(e,t,i){var o=this,n=0;clearInterval(o.pressureIntervals[i]),o.pressureIntervals[i]=setInterval((function(){var r=e.force||e.pressure||e.webkitForce||0;r!==n&&(t.trigger("pressure",r),o.trigger("pressure "+t.identifier+":pressure",r),n=r)}).bind(o),100)},c.prototype.onstart=function(e){var t=this,i=t.options,o=e;e=S(e),t.updateBox();var n=function(r){t.actives.length<i.maxNumberOfNipples?t.processOnStart(r):o.type.match(/^touch/)&&(Object.keys(t.manager.ids).forEach(function(l){if(Object.values(o.touches).findIndex(function(d){return d.identifier===l})<0){var s=[e[0]];s.identifier=l,t.processOnEnd(s)}}),t.actives.length<i.maxNumberOfNipples&&t.processOnStart(r))};return P(e,n),t.manager.bindDocument(),!1},c.prototype.processOnStart=function(e){var t=this,i=t.options,o,n=t.manager.getIdentifier(e),r=e.force||e.pressure||e.webkitForce||0,l={x:e.pageX,y:e.pageY},s=t.getOrCreate(n,l);s.identifier!==n&&t.manager.removeIdentifier(s.identifier),s.identifier=n;var d=function(u){u.trigger("start",u),t.trigger("start "+u.id+":start",u),u.show(),r>0&&t.pressureFn(e,u,u.identifier),t.processOnMove(e)};if((o=t.idles.indexOf(s))>=0&&t.idles.splice(o,1),t.actives.push(s),t.ids.push(s.identifier),i.mode!=="semi")d(s);else{var a=y(l,s.position);if(a<=i.catchDistance)d(s);else{s.destroy(),t.processOnStart(e);return}}return s},c.prototype.getOrCreate=function(e,t){var i=this,o=i.options,n;return/(semi|static)/.test(o.mode)?(n=i.idles[0],n?(i.idles.splice(0,1),n):o.mode==="semi"?i.createNipple(t,e):(console.warn("Coudln't find the needed nipple."),!1)):(n=i.createNipple(t,e),n)},c.prototype.processOnMove=function(e){var t=this,i=t.options,o=t.manager.getIdentifier(e),n=t.nipples.get(o),r=t.manager.scroll;if(!J(e)){this.processOnEnd(e);return}if(!n){console.error("Found zombie joystick with ID "+o),t.manager.removeIdentifier(o);return}if(i.dynamicPage){var l=n.el.getBoundingClientRect();n.position={x:r.x+l.left,y:r.y+l.top}}n.identifier=o;var s=n.options.size/2,d={x:e.pageX,y:e.pageY};i.lockX&&(d.y=n.position.y),i.lockY&&(d.x=n.position.x);var a=y(d,n.position),u=H(d,n.position),q=_(u),G=a/s,K={distance:a,position:d},w,v;if(n.options.shape==="circle"?(w=Math.min(a,s),v=X(n.position,w,u)):(v=B(d,n.position,s),w=y(v,n.position)),i.follow){if(a>s){let Q=d.x-v.x,Z=d.y-v.y;n.position.x+=Q,n.position.y+=Z,n.el.style.top=n.position.y-(t.box.top+r.y)+"px",n.el.style.left=n.position.x-(t.box.left+r.x)+"px",a=y(d,n.position)}}else d=v,a=w;var I=d.x-n.position.x,z=d.y-n.position.y;n.frontPosition={x:I,y:z},i.dataOnly||(n.ui.front.style.transform="translate("+I+"px,"+z+"px)");var b={identifier:n.identifier,position:d,force:G,pressure:e.force||e.pressure||e.webkitForce||0,distance:a,angle:{radian:q,degree:u},vector:{x:I/s,y:-z/s},raw:K,instance:n,lockX:i.lockX,lockY:i.lockY};b=n.computeDirection(b),b.angle={radian:_(180-u),degree:180-u},n.trigger("move",b),t.trigger("move "+n.id+":move",b)},c.prototype.processOnEnd=function(e){var t=this,i=t.options,o=t.manager.getIdentifier(e),n=t.nipples.get(o),r=t.manager.removeIdentifier(n.identifier);n&&(i.dataOnly||n.hide(function(){i.mode==="dynamic"&&(n.trigger("removed",n),t.trigger("removed "+n.id+":removed",n),t.manager.trigger("removed "+n.id+":removed",n),n.destroy())}),clearInterval(t.pressureIntervals[n.identifier]),n.resetDirection(),n.trigger("end",n),t.trigger("end "+n.id+":end",n),t.ids.indexOf(n.identifier)>=0&&t.ids.splice(t.ids.indexOf(n.identifier),1),t.actives.indexOf(n)>=0&&t.actives.splice(t.actives.indexOf(n),1),/(semi|static)/.test(i.mode)?t.idles.push(n):t.nipples.indexOf(n)>=0&&t.nipples.splice(t.nipples.indexOf(n),1),t.manager.unbindDocument(),/(semi|static)/.test(i.mode)&&(t.manager.ids[r.id]=r.identifier))},c.prototype.onDestroyed=function(e,t){var i=this;i.nipples.indexOf(t)>=0&&i.nipples.splice(i.nipples.indexOf(t),1),i.actives.indexOf(t)>=0&&i.actives.splice(i.actives.indexOf(t),1),i.idles.indexOf(t)>=0&&i.idles.splice(i.idles.indexOf(t),1),i.ids.indexOf(t.identifier)>=0&&i.ids.splice(i.ids.indexOf(t.identifier),1),i.manager.removeIdentifier(t.identifier),i.manager.unbindDocument()},c.prototype.destroy=function(){var e=this;e.unbindEvt(e.options.zone,"start"),e.nipples.forEach(function(i){i.destroy()});for(var t in e.pressureIntervals)e.pressureIntervals.hasOwnProperty(t)&&clearInterval(e.pressureIntervals[t]);e.trigger("destroyed",e.nipples),e.manager.unbindDocument(),e.off()};function p(e){var t=this;t.ids={},t.index=0,t.collections=[],t.scroll=C(),t.config(e),t.prepareCollections();var i=function(){var n;t.collections.forEach(function(r){r.forEach(function(l){n=l.el.getBoundingClientRect(),l.position={x:t.scroll.x+n.left,y:t.scroll.y+n.top}})})};O(window,"resize",function(){M(i)});var o=function(){t.scroll=C()};return O(window,"scroll",function(){M(o)}),t.collections}p.prototype=new h,p.constructor=p,p.prototype.prepareCollections=function(){var e=this;e.collections.create=e.create.bind(e),e.collections.on=e.on.bind(e),e.collections.off=e.off.bind(e),e.collections.destroy=e.destroy.bind(e),e.collections.get=function(t){var i;return e.collections.every(function(o){return i=o.get(t),!i}),i}},p.prototype.create=function(e){return this.createCollection(e)},p.prototype.createCollection=function(e){var t=this,i=new c(t,e);return t.bindCollection(i),t.collections.push(i),i},p.prototype.bindCollection=function(e){var t=this,i,o=function(n,r){i=n.type+" "+r.id+":"+n.type,t.trigger(i,r)};e.on("destroyed",t.onDestroyed.bind(t)),e.on("shown hidden rested dir plain",o),e.on("dir:up dir:right dir:down dir:left",o),e.on("plain:up plain:right plain:down plain:left",o)},p.prototype.bindDocument=function(){var e=this;e.binded||(e.bindEvt(document,"move").bindEvt(document,"end"),e.binded=!0)},p.prototype.unbindDocument=function(e){var t=this;(!Object.keys(t.ids).length||e===!0)&&(t.unbindEvt(document,"move").unbindEvt(document,"end"),t.binded=!1)},p.prototype.getIdentifier=function(e){var t;return e?(t=e.identifier===void 0?e.pointerId:e.identifier,t===void 0&&(t=this.latest||0)):t=this.index,this.ids[t]===void 0&&(this.ids[t]=this.index,this.index+=1),this.latest=t,this.ids[t]},p.prototype.removeIdentifier=function(e){var t={};for(var i in this.ids)if(this.ids[i]===e){t.id=i,t.identifier=this.ids[i],delete this.ids[i];break}return t},p.prototype.onmove=function(e){var t=this;return t.onAny("move",e),!1},p.prototype.onend=function(e){var t=this;return t.onAny("end",e),!1},p.prototype.oncancel=function(e){var t=this;return t.onAny("end",e),!1},p.prototype.onAny=function(e,t){var i=this,o,n="processOn"+e.charAt(0).toUpperCase()+e.slice(1);t=S(t);var r=function(s,d,a){a.ids.indexOf(d)>=0&&(a[n](s),s._found_=!0)},l=function(s){o=i.getIdentifier(s),P(i.collections,r.bind(null,s,o)),s._found_||i.removeIdentifier(o)};return P(t,l),!1},p.prototype.destroy=function(){var e=this;e.unbindDocument(!0),e.ids={},e.index=0,e.collections.forEach(function(t){t.destroy()}),e.off()},p.prototype.onDestroyed=function(e,t){var i=this;if(i.collections.indexOf(t)<0)return!1;i.collections.splice(i.collections.indexOf(t),1)};const F=new p,V={create:function(e){return F.create(e)},factory:F};AFRAME.registerComponent("joystick-controls",{schema:{moveSpeed:{type:"number",default:1},turnSpeed:{type:"number",default:1},margin:{type:"vec2",default:{x:50,y:50}},color:{type:"color",default:"#fff"}},init:function(){const e=this;this.move={x:0,y:0},this.dir=1;const t=this.createJoyWrapper();this.joystick=V.create({zone:t,mode:"static",position:{left:"50%",top:"50%"},color:this.data.color}),this.joystick.on("start",(i,o)=>{e.moving=!0}).on("move",(i,o)=>{e.move.x=o.vector.x*100,e.move.y=o.vector.y*100}).on("end",(i,o)=>{e.moving=!1}).on("dir:up",(i,o)=>{e.dir=1}).on("dir:down",(i,o)=>{e.dir=-1}),this.rot=this.el.getAttribute("rotation"),this.pos=this.el.getAttribute("position")},createJoyWrapper(){const e=document.createElement("div");return e.setAttribute("id","joystick-wrapper"),e.style.width="100px",e.style.height="100px",e.style.position="fixed",e.style.borderRadius="50%",e.style.zIndex=99999,e.style.left=0,e.style.bottom=0,e.style.margin=`${this.data.margin.y}px ${this.data.margin.x}px`,document.body.appendChild(e),e},tick:function(){if(!this.moving)return;this.rot.y-=this.move.x*this.data.turnSpeed/200*this.dir,this.el.setAttribute("rotation",this.rot);const e=this.move.y*this.data.moveSpeed/2e3;this.pos.x-=e*Math.sin(this.rot.y*Math.PI/180),this.pos.z-=e*Math.cos(this.rot.y*Math.PI/180),this.el.object3D.position.x=this.pos.x,this.el.object3D.position.z=this.pos.z}})});
//# sourceMappingURL=aframe-joystick-controls-component.js.map

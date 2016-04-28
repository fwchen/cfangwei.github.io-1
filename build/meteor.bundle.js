!function(t){function e(o){if(r[o])return r[o].exports;var n=r[o]={exports:{},id:o,loaded:!1};return t[o].call(n.exports,n,n.exports,e),n.loaded=!0,n.exports}var r={};return e.m=t,e.c=r,e.p="/build/",e(0)}({0:function(t,e,r){"use strict";function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var n=function(){function t(t,e){for(var r=0;r<e.length;r++){var o=e[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,r,o){return r&&t(e.prototype,r),o&&t(e,o),e}}();r(86),r(87);var a=r(42),i=r(41),s=r(43),l=r(40),p=r(24),c=r(8),u=r(13),f=document.querySelector(".sky"),m=document.querySelector(".sky-parallax"),h=document.querySelector(".meteors"),d=function(t,e){var r=document.createElement("div");r.className="flare",r.style.left=(0,c.px)(t[0]),r.style.top=(0,c.px)(t[1]),r.style.borderColor=(0,c.rgb)(e),f.appendChild(r),setTimeout(function(){f.removeChild(r)},2e3)},g=function(){function t(e,r,n){o(this,t),this.skyParallexElContainer=r,this.skyContainer=e,this.meteorContainer=n,this.isPlaying=!1,this.lastTick=0,this.delta=null,this.meteorCurvePoints=300,this.meteorLength=16/this.meteorCurvePoints,this.meteors=[],this.meteorRepo=[],this.meteorLimit=4,this.nextAvailableMeteor=0,this.nextMeteor=-1,this.canvas=document.createElement("canvas"),this.canvas.width=u.meteorOption.width,this.canvas.height=u.meteorOption.height,this.ctx=this.canvas.getContext("2d"),this.ctx.lineCap="round",this.meteorContainer.appendChild(this.canvas);var c=new s.Sun(u.sunOption);e.appendChild(c.ele),u.skysOptions.map(function(t){new a.Sky(e,t)}),u.ringsOption.map(function(t){var r=new i.Ring(t,u.sunOption);e.appendChild(r.ele)});for(var f=400;f--;){var m=10+Math.random()*(u.meteorOption.width-20),h=10+Math.random()*(u.meteorOption.height-20),d=1-Math.abs(m-u.meteorOption.width/2)/u.meteorOption.width*2,g=1-Math.abs(h-u.meteorOption.height/2)/u.meteorOption.height*2,y=Math.pow(d*g,2);if(!(m>u.sunOption.position[0]-u.sunOption.r&&m<u.sunOption.position[0]+u.sunOption.r&&h>u.sunOption.position[1]-u.sunOption.r&&h<u.sunOption.position[1]+u.sunOption.r||Math.random()>y)){var v=new p.SmallStar(m,h,d,g,y);r.appendChild(v.ele)}}for(var b=0;10>b;b++)this.meteorRepo.push(new l.Meteor(u.skysOptions,u.sunOption))}return n(t,[{key:"L",value:function(t){this.ctx.globalAlpha=6*t.shineStrength,(0,c.canvasDrawRotated)(this.ctx,t.curvePoints[t.progress.currentIndexClamped].fromSun.ang,this.sunOption.position,function(){this.ctx.drawImage(this.shineTemplCanvas,this.shineCanvasSize/-2,this.shineCanvasSize/-2)})}},{key:"A",value:function(t){this.ctx.strokeStyle=(0,c.rgb)([Math.round((0,c.numInterpolate)(u.meteorColor[0][0],u.meteorColor[1][0],t.controlOption.progress.current)),Math.round((0,c.numInterpolate)(u.meteorColor[0][1],u.meteorColor[1][1],t.controlOption.progress.current)),Math.round((0,c.numInterpolate)(u.meteorColor[0][2],u.meteorColor[1][2],t.controlOption.progress.current))]);for(var e=t.controlOption.curvePoints[t.controlOption.progress.currentIndexClamped],r=0;r<this.meteorShades;r++){var o=r/(this.meteorShades-1),n=1-r/this.meteorShades,a=Math.round(this.meteorSegments*n);this.ctx.beginPath(),this.ctx.moveTo(e.p[0],e.p[1]);for(var i=1;a>i;i++){var s=t.progress.currentIndex-i;s=(0,c.clamp)(s,0,t.curvePoints.length-1);var l=t.curvePoints[s];this.ctx.lineTo(l.p[0],l.p[1])}this.ctx.lineWidth=(0,c.numInterpolate)(this.meteorWidth[0],this.meteorWidth[1],o);var p=(0,c.numInterpolate)(this.meteorAlpha[0],this.meteorAlpha[1],o);p*=Math.max(10*t.shineStrength,0)+.5,this.ctx.globalAlpha=p,this.ctx.stroke()}}},{key:"tick",value:function(t){if(t||(t=this.lastTick),this.delta=Math.min(this.lastTick,50),t>this.nextMeteor&&this.meteors.length<this.meteorLimit){console.log("s");var e=this.meteorRepo[this.nextAvailableMeteor];this.nextAvailableMeteor=(this.nextAvailableMeteor+1)%this.meteorRepo.length,e.controlOption.progress.current=0,e.controlOption.speed=1,e.controlOption.hasFlare=!1,this.meteors.push(e),d(e.controlOption.starA.p,u.meteorColor[0]);var r=(0,c.numInterpolate)(u.meteorInterval[0],u.meteorInterval[1],Math.random());this.nextMeteor=t+r}this.ctx.clearRect(0,0,1200,700);for(var o=0;o<this.meteors.length;o++){console.log("x");var n=this.meteors[o];n!==!1&&(n.controlOption.progress.currentIndex=Math.round(n.controlOption.progress.current*this.meteorCurvePoints),n.controlOption.progress.currentIndexClamped=(0,c.clamp)(n.controlOption.progress.currentIndex,0,n.controlOption.curvePoints.length-1),console.log(n.controlOption.curvePoints[n.controlOption.progress.currentIndexClamped].fromSun.controlOption),n.controlOption.shineStrength=.25*(1-n.controlOption.curvePoints[n.controlOption.progress.currentIndexClamped].fromSun.len/u.sunOption.shineRange),n.controlOption.progress.current<.2&&(n.controlOption.shineStrength*=5*Math.max(n.controlOption.progress.current,0)),n.controlOption.shineStrength>0&&this.L(n),this.A(n),n.controlOption.progress.current>n.controlOption.progress.startTimes.starB&&n.controlOption.speed>.9?n.controlOption.speed*=.99:n.controlOption.progress.current>n.controlOption.progress.startTimes.orbit&&n.controlOption.speed<2&&(n.controlOption.speed*=1.005),n.controlOption.progress.current+=this.delta/this.meteorDuration*n.controlOption.speed,n.controlOption.progress.current>1&&!n.controlOption.hasFlare&&(d(n.controlOption.starB.p,u.meteorColor[1]),n.controlOption.hasFlare=!0),n.controlOption.progress.current>1+this.meteorLength&&(this.meteors[o]=!1))}for(var a=0;a<this.meteors.length;a++)this.meteors[a]===!1&&this.meteors.splice(a,1);this.lastTick=t,this.isPlaying&&requestAnimationFrame(this.tick.bind(this))}},{key:"start",value:function(){this.isPlaying||(this.lastTick=performance.now(),this.isPlaying=!0,this.tick())}}]),t}(),y=new g(f,m,h);y.start()},2:function(t,e){t.exports=function(){var t=[];return t.toString=function(){for(var t=[],e=0;e<this.length;e++){var r=this[e];r[2]?t.push("@media "+r[2]+"{"+r[1]+"}"):t.push(r[1])}return t.join("")},t.i=function(e,r){"string"==typeof e&&(e=[[null,e,""]]);for(var o={},n=0;n<this.length;n++){var a=this[n][0];"number"==typeof a&&(o[a]=!0)}for(n=0;n<e.length;n++){var i=e[n];"number"==typeof i[0]&&o[i[0]]||(r&&!i[2]?i[2]=r:r&&(i[2]="("+i[2]+") and ("+r+")"),t.push(i))}},t}},3:function(t,e,r){function o(t,e){for(var r=0;r<t.length;r++){var o=t[r],n=u[o.id];if(n){n.refs++;for(var a=0;a<n.parts.length;a++)n.parts[a](o.parts[a]);for(;a<o.parts.length;a++)n.parts.push(s(o.parts[a],e))}else{for(var i=[],a=0;a<o.parts.length;a++)i.push(s(o.parts[a],e));u[o.id]={id:o.id,refs:1,parts:i}}}}function n(t){for(var e=[],r={},o=0;o<t.length;o++){var n=t[o],a=n[0],i=n[1],s=n[2],l=n[3],p={css:i,media:s,sourceMap:l};r[a]?r[a].parts.push(p):e.push(r[a]={id:a,parts:[p]})}return e}function a(){var t=document.createElement("style"),e=h();return t.type="text/css",e.appendChild(t),t}function i(){var t=document.createElement("link"),e=h();return t.rel="stylesheet",e.appendChild(t),t}function s(t,e){var r,o,n;if(e.singleton){var s=g++;r=d||(d=a()),o=l.bind(null,r,s,!1),n=l.bind(null,r,s,!0)}else t.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(r=i(),o=c.bind(null,r),n=function(){r.parentNode.removeChild(r),r.href&&URL.revokeObjectURL(r.href)}):(r=a(),o=p.bind(null,r),n=function(){r.parentNode.removeChild(r)});return o(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;o(t=e)}else n()}}function l(t,e,r,o){var n=r?"":o.css;if(t.styleSheet)t.styleSheet.cssText=y(e,n);else{var a=document.createTextNode(n),i=t.childNodes;i[e]&&t.removeChild(i[e]),i.length?t.insertBefore(a,i[e]):t.appendChild(a)}}function p(t,e){var r=e.css,o=e.media;e.sourceMap;if(o&&t.setAttribute("media",o),t.styleSheet)t.styleSheet.cssText=r;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(r))}}function c(t,e){var r=e.css,o=(e.media,e.sourceMap);o&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var n=new Blob([r],{type:"text/css"}),a=t.href;t.href=URL.createObjectURL(n),a&&URL.revokeObjectURL(a)}var u={},f=function(t){var e;return function(){return"undefined"==typeof e&&(e=t.apply(this,arguments)),e}},m=f(function(){return/msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase())}),h=f(function(){return document.head||document.getElementsByTagName("head")[0]}),d=null,g=0;t.exports=function(t,e){e=e||{},"undefined"==typeof e.singleton&&(e.singleton=m());var r=n(t);return o(r,e),function(t){for(var a=[],i=0;i<r.length;i++){var s=r[i],l=u[s.id];l.refs--,a.push(l)}if(t){var p=n(t);o(p,e)}for(var i=0;i<a.length;i++){var l=a[i];if(0===l.refs){for(var c=0;c<l.parts.length;c++)l.parts[c]();delete u[l.id]}}}};var y=function(){var t=[];return function(e,r){return t[e]=r,t.filter(Boolean).join("\n")}}()},8:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=function(t){return"rgb("+t[0]+","+t[1]+","+t[2]+")"},o=function(t,e){return"rgba("+t[0]+","+t[1]+","+t[2]+","+e+")"},n=function(t){return t+"px"},a=function(t){return t[Math.floor(Math.random()*t.length)]},i=function(t,e,r){return t*(1-r)+e*r},s=function(t,e,r){return(r-t)/(e-t)},l=function(t,e,r){return Math.max(Math.min(t,r),e)},p=function(t,e,r){t.beginPath(),t.arc(e[0],e[1],r,0,2*Math.PI)},c=function(t){t.fillStyle="black",t.globalCompositeOperation="destination-out",t.fill(),t.globalCompositeOperation="source-over"},u=function(t,e,r,o){t.translate(r[0],r[1]),t.rotate(e),o(),t.setTransform(1,0,0,1,0,0)};e.px=n,e.arrayRandom=a,e.numInterpolate=i,e.numReverseInterpolate=s,e.clamp=l,e.rgb=r,e.rgba=o,e.canvasCircle=p,e.canvasDrawRotated=u,e.canvasClearFill=c},13:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.meteorCurvePoints=e.cssPrefix=e.meteorOption=e.meteorInterval=e.meteorColor=e.sunOption=e.ringsOption=e.skysOptions=void 0;var o=r(8),n=[[185,164,255],[83,236,184]],a=[{r:7,strokeWidth:4,strokeColor:(0,o.rgb)(n[0]),stars:[{position:[3,0],opacity:.1},{position:[0,2],opacity:.2},{position:[2,3],opacity:.3},{position:[4,2],opacity:.3},{position:[1,6],opacity:.3},{position:[2,9],opacity:.3},{position:[8,3],opacity:.4},{position:[4,4],opacity:.4},{position:[5,5],opacity:.4},{position:[4,6],opacity:.4},{position:[5,8],opacity:.4},{position:[7,4],opacity:.5},{position:[7,5],opacity:.5},{position:[6,6],opacity:.5},{position:[6,7],opacity:.5}]},{r:10,strokeWidth:2,strokeColor:(0,o.rgb)(n[1]),stars:[{position:[15,5],opacity:.5},{position:[15,9],opacity:.5},{position:[14,10],opacity:.5},{position:[13,11],opacity:.5},{position:[16,4],opacity:.4},{position:[17,6],opacity:.4},{position:[17,9],opacity:.4},{position:[16,10],opacity:.4},{position:[17,10],opacity:.4},{position:[16,12],opacity:.4},{position:[18,5],opacity:.3},{position:[18,8],opacity:.3},{position:[19,10],opacity:.3},{position:[22,4],opacity:.2},{position:[23,6],opacity:.2},{position:[21,7],opacity:.2},{position:[21,9],opacity:.2},{position:[23,2],opacity:.2}]}],i=[[97,.1],[127,.08],[177,.06],[254,.04],[361,.02]],s={r:80,position:[464,369],strokeWidth:2,attractRange:70,pushRange:[97,127,177],shineRange:250,shineColor:[204,248,255],shineSize:.6,shineSegments:10,hazeColor:[134,145,255],hazeSize:100},l={width:1200,height:700,gridSize:[50,50],offset:[11,18],meteorInterval:[1e3,3e3],meteorLimit:4,meteorDuration:8e3,meteorCurvePoints:300,meteorShades:8,meteorSegments:16,meteorWidth:[2,5],meteorAlpha:[.05,.12]},p="",c=300,u=[1e3,3e3];e.skysOptions=a,e.ringsOption=i,e.sunOption=s,e.meteorColor=n,e.meteorInterval=u,e.meteorOption=l,e.cssPrefix=p,e.meteorCurvePoints=c},24:function(t,e,r){"use strict";function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0}),e.SmallStar=e.Star=void 0;var n=r(8),a=r(13);e.Star=function i(t,e){o(this,i),this.ele=document.createElement("div"),this.ele.className="star",this.ele.style.width=this.ele.style.height=(0,n.px)(2*e.r),this.ele.style.left=(0,n.px)(t.position[0]-e.r),this.ele.style.top=(0,n.px)(t.position[1]-e.r),this.ele.style.border=e.strokeWidth+"px solid "+e.strokeColor,this.ele.style.opacity=t.opacity,this.ele.style[a.cssPrefix+"animation-name"]=(0,n.arrayRandom)(["star1","star2"]),this.ele.style[a.cssPrefix+"animation-duration"]=(0,n.numInterpolate)(2e3,1e4,Math.random())+"ms",this.ele.style[a.cssPrefix+"animation-delay"]=(0,n.numInterpolate)(0,1e3,Math.random())+"ms"},e.SmallStar=function s(t,e,r,i,l){o(this,s);var p=(0,n.numReverseInterpolate)(0,a.meteorOption.width,t),c=(0,n.rgb)([Math.round((0,n.numInterpolate)(a.meteorColor[0][0],a.meteorColor[1][0],p)),Math.round((0,n.numInterpolate)(a.meteorColor[0][1],a.meteorColor[1][1],p)),Math.round((0,n.numInterpolate)(a.meteorColor[0][2],a.meteorColor[1][2],p))]),u=document.createElement("div");u.className="dot",u.style.width=u.style.height=(0,n.px)(Math.floor(3*Math.random()+4)),u.style.left=(0,n.px)(t),u.style.top=(0,n.px)(e),u.style.backgroundColor=c,u.style.opacity=.25*Math.random()+.25,u.style[a.cssPrefix+"animation-name"]=(0,n.arrayRandom)(["dot1","dot2","dot3","dot4"]),u.style[a.cssPrefix+"animation-duration"]=(0,n.numInterpolate)(1e4,4e4,Math.random())+"ms",u.style[a.cssPrefix+"animation-delay"]=(0,n.numInterpolate)(0,1e3,Math.random())+"ms",this.ele=u}},40:function(t,e,r){"use strict";function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0}),e.Meteor=void 0;var n=function(){function t(t,e){for(var r=0;r<e.length;r++){var o=e[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,r,o){return r&&t(e.prototype,r),o&&t(e,o),e}}(),a=r(8),i=r(44),s=r(13);e.Meteor=function(){function t(e,r){o(this,t),this.sunOption=r;var n={starA:{toSun:{},tang:{},toStarB:{}},starB:{toSun:{},tang:{}},orbit:{},progress:{current:0},speed:1,curvePoints:[]},s=Math.floor(Math.random()*e[0].stars.length),l=Math.floor(Math.random()*e[1].stars.length);for(n.starA.p=e[0].stars[s].position,n.starB.p=e[1].stars[l].position,e[0].stars.splice(s,1),e[1].stars.splice(l,1),n.orbit.r=(0,a.arrayRandom)(r.pushRange),n.starA.toStarB.vec=i.Vec2.direction(n.starA.p,n.starB.p),n.starA.toStarB.ang=i.Vec2.angleHorz(n.starA.toStarB.vec),n.starA.toSun.vec=i.Vec2.direction(n.starA.p,r.position),n.starB.toSun.vec=i.Vec2.direction(n.starB.p,r.position),n.starA.toSun.len=i.Vec2.lengthFn(n.starA.toSun.vec),n.starB.toSun.len=i.Vec2.lengthFn(n.starB.toSun.vec),n.starA.toSun.ang=i.Vec2.angleHorz(n.starA.toSun.vec),n.starB.toSun.ang=i.Vec2.angleHorz(n.starB.toSun.vec);n.orbit.r>n.starA.toSun.len;)n.orbit.r=(0,a.arrayRandom)(r.pushRange);n.orbit.positionlockwise=n.starA.toStarB.ang>n.starA.toSun.ang?1:-1,n.starA.tang.len=Math.sqrt(Math.pow(n.starA.toSun.len,2)-Math.pow(n.orbit.r,2)),n.starB.tang.len=Math.sqrt(Math.pow(n.starB.toSun.len,2)-Math.pow(n.orbit.r,2)),n.starA.tang.ang=n.starA.toSun.ang-Math.asin(n.orbit.r/n.starA.toSun.len)*n.orbit.clockwise,n.starB.tang.ang=n.starB.toSun.ang+Math.asin(n.orbit.r/n.starB.toSun.len)*n.orbit.clockwise,n.starA.tang.vec=i.Vec2.fromAngle(n.starA.tang.ang,n.starA.tang.len),n.starB.tang.vec=i.Vec2.fromAngle(n.starB.tang.ang,n.starB.tang.len),n.starA.tang.p=i.Vec2.add(n.starA.p,n.starA.tang.vec),n.starB.tang.p=i.Vec2.add(n.starB.p,n.starB.tang.vec),n.orbit.enterAng=i.Vec2.angleHorz(i.Vec2.direction(r.position,n.starA.tang.p)),n.orbit.leaveAng=i.Vec2.angleHorz(i.Vec2.direction(r.position,n.starB.tang.p)),n.orbit.enterAng<0&&(n.orbit.enterAng+=2*Math.PI),n.orbit.leaveAng<0&&(n.orbit.leaveAng+=2*Math.PI),n.orbit.leaveAng+=2*Math.PI*n.orbit.positionlockwise,n.orbit.totalAng=Math.abs(n.orbit.leaveAng-n.orbit.enterAng),n.orbit.len=n.orbit.totalAng*n.orbit.r;var p=n.starA.tang.len+n.orbit.len+n.starB.tang.len,c=n.starA.tang.len/p,u=n.orbit.len/p;n.progress.startTimes={orbit:c,starB:c+u},this.meteorCurve(n),this.controlOption=n}return n(t,[{key:"meteorCurve",value:function(t){for(var e=0;e<s.meteorCurvePoints;e++){var r=e/(s.meteorCurvePoints-1),o=void 0;if(r<t.progress.startTimes.orbit){var n=(0,a.numReverseInterpolate)(0,t.progress.startTimes.orbit,r);o=[(0,a.numInterpolate)(t.starA.p[0],t.starA.tang.p[0],n),(0,a.numInterpolate)(t.starA.p[1],t.starA.tang.p[1],n)]}else if(r<t.progress.startTimes.starB){var l=(0,a.numReverseInterpolate)(t.progress.startTimes.orbit,t.progress.startTimes.starB,r),p=(0,a.numInterpolate)(t.orbicontrolOption.enterAng,t.orbicontrolOption.leaveAng,l),c=i.Vec2.fromAngle(p,t.orbicontrolOption.r);o=i.Vec2.add(this.sunOption.position,c)}else{var u=(0,a.numReverseInterpolate)(t.progress.startTimes.starB,1,r);o=[(0,a.numInterpolate)(t.starB.tang.p[0],t.starB.p[0],u),(0,a.numInterpolate)(t.starB.tang.p[1],t.starB.p[1],u)]}var f={};f.p=o,f.fromSun={},f.fromSun.vec=i.Vec2.direction(this.sunOption.position,o),f.fromSun.len=i.Vec2.lengthFn(f.fromSun.vec),f.fromSun.ang=i.Vec2.angleHorz(f.fromSun.vec),t.curvePoints.push(f)}}}]),t}()},41:function(t,e,r){"use strict";function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0}),e.Ring=void 0;var n=r(8),a="255,255,255";e.Ring=function i(t,e){o(this,i);var r=document.createElement("div");r.className="ring",r.style.width=r.style.height=(0,n.px)(2*t[0]),r.style.left=(0,n.px)(e.position[0]-t[0]),r.style.top=(0,n.px)(e.position[1]-t[0]),r.style.opacity=t[1],r.style.border="1px solid rgb("+a+")",this.ele=r}},42:function(t,e,r){"use strict";function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0}),e.Sky=void 0;var n=(r(8),r(24)),a=r(13);e.Sky=function i(t,e){o(this,i),e.stars.map(function(r){r.position[0]=Math.round(r.position[0]*a.meteorOption.gridSize[0]+a.meteorOption.offset[0]),r.position[1]=Math.round(r.position[1]*a.meteorOption.gridSize[1]+a.meteorOption.offset[1]);var o=new n.Star(r,e);t.appendChild(o.ele)})}},43:function(t,e,r){"use strict";function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0}),e.Sun=void 0;var n=r(8),a=r(13);e.Sun=function i(t){o(this,i);var e=window.devicePixelRatio,r=2*t.r+20,s=document.createElement("canvas");s.width=s.height=r*e,s.style.width=s.style.height=(0,n.px)(r),s.style.left=(0,n.px)(t.position[0]-r/2),s.style.top=(0,n.px)(t.position[1]-r/2);var l=s.getContext("2d");l.scale(e,e);var p=l.createLinearGradient(0,0,r,r);p.addColorStop(.1,(0,n.rgba)(a.meteorColor[0],.65)),p.addColorStop(.9,(0,n.rgba)(a.meteorColor[1],.65)),(0,n.canvasCircle)(l,[r/2,r/2],t.r),l.lineWidth=t.strokeWidth,l.strokeStyle=p,l.stroke(),this.ele=s}},44:function(t,e){"use strict";function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var o=function(){function t(t,e){for(var r=0;r<e.length;r++){var o=e[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,r,o){return r&&t(e.prototype,r),o&&t(e,o),e}}();e.Vec2=function(){function t(){r(this,t)}return o(t,null,[{key:"direction",value:function(t,e){return[e[0]-t[0],e[1]-t[1]]}},{key:"lengthFn",value:function(t){return Math.sqrt(t[0]*t[0]+t[1]*t[1])}},{key:"distance",value:function(e,r){var o=t.direction(e,r);return t.length(o)}},{key:"normalize",value:function(e,r){return void 0===r&&(r=t.length(e)),[e[0]/r,e[1]/r]}},{key:"scale",value:function(t,e){return[t[0]*e,t[1]*e]}},{key:"add",value:function(t,e){return[t[0]+e[0],t[1]+e[1]]}},{key:"subtract",value:function(t,e){return[t[0]-e[0],t[1]-e[1]]}},{key:"angleVert",value:function(t){return Math.atan2(t[0],t[1])}},{key:"angleHorz",value:function(t){return Math.atan2(t[1],t[0])}},{key:"interpolate",value:function(t,e,r){return[t[0]+(e[0]-t[0])*r,t[1]+(e[1]-t[1])*r]}},{key:"fromAngle",value:function(t,e){return[Math.cos(t)*e,Math.sin(t)*e]}}]),t}()},59:function(t,e,r){e=t.exports=r(2)(),e.push([t.id,"@-webkit-keyframes header-in{0%{opacity:0}to{opacity:1}}@keyframes header-in{0%{opacity:0}to{opacity:1}}@-webkit-keyframes header-in-85{0%{opacity:0}to{opacity:.85}}@keyframes header-in-85{0%{opacity:0}to{opacity:.85}}@-webkit-keyframes star1{0%{-webkit-transform:scale(1);transform:scale(1)}to{-webkit-transform:scale(.8);transform:scale(.8)}}@keyframes star1{0%{-webkit-transform:scale(1);transform:scale(1)}to{-webkit-transform:scale(.8);transform:scale(.8)}}@-webkit-keyframes star2{0%{-webkit-transform:scale(1);transform:scale(1)}to{-webkit-transform:scale(1.3);transform:scale(1.3)}}@keyframes star2{0%{-webkit-transform:scale(1);transform:scale(1)}to{-webkit-transform:scale(1.3);transform:scale(1.3)}}@-webkit-keyframes dot1{0%{-webkit-transform:translate(0);transform:translate(0)}to{-webkit-transform:translate(30px,15px);transform:translate(30px,15px)}}@keyframes dot1{0%{-webkit-transform:translate(0);transform:translate(0)}to{-webkit-transform:translate(30px,15px);transform:translate(30px,15px)}}@-webkit-keyframes dot2{0%{-webkit-transform:translate(0);transform:translate(0)}to{-webkit-transform:translate(-15px,-15px);transform:translate(-15px,-15px)}}@keyframes dot2{0%{-webkit-transform:translate(0);transform:translate(0)}to{-webkit-transform:translate(-15px,-15px);transform:translate(-15px,-15px)}}@-webkit-keyframes dot3{0%{-webkit-transform:translate(0);transform:translate(0)}to{-webkit-transform:translateY(30px);transform:translateY(30px)}}@keyframes dot3{0%{-webkit-transform:translate(0);transform:translate(0)}to{-webkit-transform:translateY(30px);transform:translateY(30px)}}@-webkit-keyframes dot4{0%{-webkit-transform:translate(0);transform:translate(0)}to{-webkit-transform:translate(-15px,-30px);transform:translate(-15px,-30px)}}@keyframes dot4{0%{-webkit-transform:translate(0);transform:translate(0)}to{-webkit-transform:translate(-15px,-30px);transform:translate(-15px,-30px)}}@-webkit-keyframes flare{0%{-webkit-transform:scale(.5);transform:scale(.5);opacity:.5}to{-webkit-transform:scale(1);transform:scale(1);opacity:0}}@keyframes flare{0%{-webkit-transform:scale(.5);transform:scale(.5);opacity:.5}to{-webkit-transform:scale(1);transform:scale(1);opacity:0}}@-webkit-keyframes feature-logo-in{0%,20%{opacity:0}20%{-webkit-transform:translateY(-25px);transform:translateY(-25px)}to{-webkit-transform:translate(0);transform:translate(0);opacity:1}}@keyframes feature-logo-in{0%,20%{opacity:0}20%{-webkit-transform:translateY(-25px);transform:translateY(-25px)}to{-webkit-transform:translate(0);transform:translate(0);opacity:1}}@-webkit-keyframes feature-logo-out{0%{-webkit-transform:translate(0);transform:translate(0);opacity:1}60%{-webkit-transform:translateY(20px);transform:translateY(20px)}60%,to{opacity:0}}@keyframes feature-logo-out{0%{-webkit-transform:translate(0);transform:translate(0);opacity:1}60%{-webkit-transform:translateY(20px);transform:translateY(20px)}60%,to{opacity:0}}@-webkit-keyframes feature-text-in{0%,35%{opacity:0}to{-webkit-transform:translate(0);transform:translate(0);opacity:1}}@keyframes feature-text-in{0%,35%{opacity:0}to{-webkit-transform:translate(0);transform:translate(0);opacity:1}}@-webkit-keyframes feature-text-out{0%{opacity:1}50%,to{opacity:0}}@keyframes feature-text-out{0%{opacity:1}50%,to{opacity:0}}",""])},60:function(t,e,r){e=t.exports=r(2)(),e.push([t.id,"body,div,html{margin:0;padding:0}.world{background:-webkit-linear-gradient(bottom right,#4cddff,#3b9aca 10%,#2d6ca5 20%,#2a5291 27%,#283d81 35%,#222654 50%,#1e1635 63%,#0c0010 93%,#000);background:linear-gradient(to top left,#4cddff,#3b9aca 10%,#2d6ca5 20%,#2a5291 27%,#283d81 35%,#222654 50%,#1e1635 63%,#0c0010 93%,#000);height:700px}.sky .star{-webkit-animation:star1 5s alternate ease-in-out infinite;animation:star1 5s alternate ease-in-out infinite}.sky *,.sky-parallax *{position:absolute;box-sizing:border-box;border-radius:50%}.flare{width:40px;height:40px;margin:-20px 0 0 -20px;border:2px solid #fff;-webkit-animation:flare 1s linear;animation:flare 1s linear;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards}",""])},86:function(t,e,r){var o=r(59);"string"==typeof o&&(o=[[t.id,o,""]]);r(3)(o,{});o.locals&&(t.exports=o.locals)},87:function(t,e,r){var o=r(60);"string"==typeof o&&(o=[[t.id,o,""]]);r(3)(o,{});o.locals&&(t.exports=o.locals)}});
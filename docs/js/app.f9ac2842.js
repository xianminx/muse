(function(t){function e(e){for(var a,i,s=e[0],u=e[1],c=e[2],h=0,f=[];h<s.length;h++)i=s[h],o[i]&&f.push(o[i][0]),o[i]=0;for(a in u)Object.prototype.hasOwnProperty.call(u,a)&&(t[a]=u[a]);l&&l(e);while(f.length)f.shift()();return r.push.apply(r,c||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],a=!0,s=1;s<n.length;s++){var u=n[s];0!==o[u]&&(a=!1)}a&&(r.splice(e--,1),t=i(i.s=n[0]))}return t}var a={},o={app:0},r=[];function i(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=a,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)i.d(n,a,function(e){return t[e]}.bind(null,a));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/muse/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],u=s.push.bind(s);s.push=e,s=s.slice();for(var c=0;c<s.length;c++)e(s[c]);var l=u;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var a=n("8ed0"),o=n.n(a);o.a},"1ad8":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("097d");var a,o,r,i=n("2b0e"),s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("img",{attrs:{src:n("8717")}}),a("keyboard")],1)},u=[],c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"keyboard"}},t._l(t.all_notes,function(t){return n("key",{attrs:{note:t}})}))},l=[],h=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",t._g({staticClass:"m-key"},{mouseenter:t.press,mouseleave:t.release}),["white"==t.keyType?[n("div",{staticClass:"white-key",class:{"m-key-active":t.active}},[n("div",{staticClass:"m-note"},[t._v(t._s(t.note))])])]:[n("div",{staticClass:"black-key"},[n("div",{staticClass:"black-key-internal",class:{"m-key-active":t.active}},[n("div",{staticClass:"m-note"},[t._v(t._s(t.note))])])])]],2)},f=[],d=(n("28a5"),n("9393"));n("7f7f"),n("34ef");!function(){var t=window.URL||window.webkitURL,e=window.Blob;if(!t||!e)throw new Error("This browser does not support AudioSynth");var n=!1,i=null,s=function(t,e){return[new Uint8Array([e,e>>8]),new Uint8Array([e,e>>8,e>>16,e>>24])][t]},u=function(t,e,n,a){Object.defineProperty(this,t,{value:e,writable:!!n,enumerable:!!a})},c=function(t,e,n){u.call(this,t,e,n,!0)};r=function(){this.__init__.apply(this,arguments)};var l=u.bind(r.prototype),h=c.bind(r.prototype);l("__init__",function(t,e,a){if(!n)throw new Error("AudioSynthInstrument can only be instantiated from the createInstrument method of the AudioSynth object.");u.call(this,"_parent",t),c.call(this,"name",e),u.call(this,"_soundID",a)}),h("play",function(t,e,n){return this._parent.play(this._soundID,t,e,n)}),h("generate",function(t,e,n){return this._parent.generate(this._soundID,t,e,n)}),o=function t(){return i instanceof t?i:(this.__init__(),this)},l=u.bind(o.prototype),h=c.bind(o.prototype),l("_debug",!1,!0),l("_bitsPerSample",16),l("_channels",1),l("_sampleRate",44100,!0),h("setSampleRate",function(t){return this._sampleRate=Math.max(Math.min(0|t,44100),4e3),this._clearCache(),this._sampleRate}),h("getSampleRate",function(){return this._sampleRate}),l("_volume",32768,!0),h("setVolume",function(t){return t=parseFloat(t),isNaN(t)&&(t=0),t=Math.round(32768*t),this._volume=Math.max(Math.min(0|t,32768),0),this._clearCache(),this._volume}),h("getVolume",function(){return Math.round(this._volume/32768*1e4)/1e4}),l("_notes",{C:261.63,"C#":277.18,D:293.66,"D#":311.13,E:329.63,F:346.23,"F#":369.99,G:392,"G#":415.3,A:440,"A#":466.16,B:493.88}),l("_fileCache",[],!0),l("_temp",{},!0),l("_sounds",[],!0),l("_mod",[function(t,e,n,a){return Math.sin(2*Math.PI*(t/e)*n+a)}]),l("_resizeCache",function(){var t=this._fileCache,e=this._sounds.length;while(t.length<e){for(var n=[],a=0;a<8;a++){var o={};for(var r in this._notes)o[r]={};n.push(o)}t.push(n)}}),l("_clearCache",function(){this._fileCache=[],this._resizeCache()}),h("generate",function(n,a,o,r){var i=this._sounds[n];if(!i)for(var u=0;u<this._sounds.length;u++)if(this._sounds[u].name==n){i=this._sounds[u],n=u;break}if(!i)throw new Error("Invalid sound or sound ID: "+n);var c=(new Date).valueOf();this._temp={},o|=0,o=Math.min(8,Math.max(1,o));var l=r?parseFloat(r):2;if("undefined"==typeof this._notes[a])throw new Error(a+" is not a valid note.");if("undefined"!=typeof this._fileCache[n][o-1][a][l])return this._debug&&console.log((new Date).valueOf()-c,"ms to retrieve (cached)"),this._fileCache[n][o-1][a][l];var h=this._notes[a]*Math.pow(2,o-4),f=this._sampleRate,d=this._volume,p=this._channels,v=this._bitsPerSample,_=i.attack(f,h,d),m=i.dampen(f,h,d),y=i.wave,w={modulate:this._mod,vars:this._temp},b=0,g=new Uint8Array(new ArrayBuffer(Math.ceil(f*l*2))),M=f*_|0,k=f*l|0;for(u=0;u!==M;u++)b=d*(u/(f*_))*y.call(w,u,f,h,d),g[u<<1]=b,g[1+(u<<1)]=b>>8;for(;u!==k;u++)b=d*Math.pow(1-(u-f*_)/(f*(l-_)),m)*y.call(w,u,f,h,d),g[u<<1]=b,g[1+(u<<1)]=b>>8;var C=["RIFF",s(1,52),"WAVE","fmt ",s(1,16),s(0,1),s(0,p),s(1,f),s(1,f*p*v/8),s(0,p*v/8),s(0,v),"data",s(1,g.length*p*v/8),g],I=new e(C,{type:"audio/wav"}),P=t.createObjectURL(I);return this._fileCache[n][o-1][a][l]=P,this._debug&&console.log((new Date).valueOf()-c,"ms to generate"),P}),h("play",function(t,e,n,a){var o=this.generate(t,e,n,a),r=new Audio(o);return r.play(),!0}),h("debug",function(){this._debug=!0}),h("createInstrument",function(t){var e=0,a=!1;if("string"==typeof t){for(var o=0;o<this._sounds.length;o++)if(this._sounds[o].name==t){a=!0,e=o;break}}else this._sounds[t]&&(e=t,t=this._sounds[e].name,a=!0);if(!a)throw new Error("Invalid sound or sound ID: "+t);n=!0;var i=new r(this,t,e);return n=!1,i}),h("listSounds",function(){for(var t=[],e=0;e<this._sounds.length;e++)t.push(this._sounds[e].name);return t}),l("__init__",function(){this._resizeCache()}),h("loadSoundProfile",function(){for(var t=0,e=arguments.length;t<e;t++){var n=arguments[t];if(!(n instanceof Object))throw new Error("Invalid sound profile.");this._sounds.push(n)}return this._resizeCache(),!0}),h("loadModulationFunction",function(){for(var t=0,e=arguments.length;t<e;t++){var n=arguments[t];if("function"!=typeof n)throw new Error("Invalid modulation function.");this._mod.push(n)}return!0}),i=new o,a=i}(),a.loadModulationFunction(function(t,e,n,a){return 1*Math.sin(2*Math.PI*(t/e*n)+a)},function(t,e,n,a){return 1*Math.sin(4*Math.PI*(t/e*n)+a)},function(t,e,n,a){return 1*Math.sin(8*Math.PI*(t/e*n)+a)},function(t,e,n,a){return 1*Math.sin(.5*Math.PI*(t/e*n)+a)},function(t,e,n,a){return 1*Math.sin(.25*Math.PI*(t/e*n)+a)},function(t,e,n,a){return.5*Math.sin(2*Math.PI*(t/e*n)+a)},function(t,e,n,a){return.5*Math.sin(4*Math.PI*(t/e*n)+a)},function(t,e,n,a){return.5*Math.sin(8*Math.PI*(t/e*n)+a)},function(t,e,n,a){return.5*Math.sin(.5*Math.PI*(t/e*n)+a)},function(t,e,n,a){return.5*Math.sin(.25*Math.PI*(t/e*n)+a)}),a.loadSoundProfile({name:"piano",attack:function(){return.002},dampen:function(t,e,n){return Math.pow(.5*Math.log(e*n/t),2)},wave:function(t,e,n,a){var o=this.modulate[0];return this.modulate[1](t,e,n,Math.pow(o(t,e,n,0),2)+.75*o(t,e,n,.25)+.1*o(t,e,n,.5))}},{name:"organ",attack:function(){return.3},dampen:function(t,e){return 1+.01*e},wave:function(t,e,n){var a=this.modulate[0];return this.modulate[1](t,e,n,a(t,e,n,0)+.5*a(t,e,n,.25)+.25*a(t,e,n,.5))}},{name:"acoustic",attack:function(){return.002},dampen:function(){return 1},wave:function(t,e,n){var a=this.vars;a.valueTable=a.valueTable?a.valueTable:[],"undefined"==typeof a.playVal&&(a.playVal=0),"undefined"==typeof a.periodCount&&(a.periodCount=0);var o=a.valueTable,r=a.playVal,i=a.periodCount,s=e/n,u=Math.floor(100*(s-Math.floor(s))),c=!1;if(o.length<=Math.ceil(s))return o.push(2*Math.round(Math.random())-1),o[o.length-1];o[r]=.5*(o[r>=o.length-1?0:r+1]+o[r]),r>=Math.floor(s)&&(r<Math.ceil(s)?i%100>=u&&(c=!0,o[r+1]=.5*(o[0]+o[r+1]),a.periodCount++):c=!0);var l=o[r];return c?a.playVal=0:a.playVal++,l}},{name:"edm",attack:function(){return.002},dampen:function(){return 1},wave:function(t,e,n){var a=this.modulate[0],o=this.modulate.slice(1);return o[0](t,e,n,o[9](t,e,n,o[2](t,e,n,Math.pow(a(t,e,n,0),3)+Math.pow(a(t,e,n,.5),5)+Math.pow(a(t,e,n,1),7)))+o[8](t,e,n,a(t,e,n,1.75)))}});var p={name:"Key",data:function(){return{pitch:0,octave:0,offset:0,freqency:0,keyType:"white",active:!1,piano:null}},props:{note:{type:String,default:"C1"}},computed:{},created:function(){this.init()},methods:{init:function(){var t=this.note.split(""),e=Object(d["a"])(t,2);this.pitch=e[0],this.octave=e[1],this.octave=parseInt(this.octave),isNaN(this.octave)&&(this.octave=4),this.keyType=this.pitch===this.pitch.toLowerCase()?"black":"white",this.piano=a.createInstrument("piano"),console.log(a instanceof o)},kick:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:500;console.log("kick"),this.press(t);t=this;console.log("interval = "+e),setTimeout(function(){t.release()},e)},press:function(t){this.active=!0;var e=this.pitch;e===e.toLowerCase()&&(e=e.toUpperCase()+"#"),console.log(new Date+"pressed, playing: "+e+" "+this.octave),this.piano.play(e,this.octave,2)},release:function(){this.active=!1,console.log(new Date+"released")}}},v=p,_=(n("c34c"),n("2877")),m=Object(_["a"])(v,h,f,!1,null,"6160e702",null);m.options.__file="Key.vue";var y=m.exports,w=["C","c","D","d","E","F","f","G","g","A","a","B"],b=[2,3,4,5,6],g=b.map(function(t){return w.map(function(e){return e+t})}).reduce(function(t,e){return t.concat(e)},[]),M={name:"keyboard",data:function(){return{all_notes:g}},components:{Key:y},created:function(){console.log(g)}},k=M,C=(n("dfab"),Object(_["a"])(k,c,l,!1,null,"48053af5",null));C.options.__file="Keyboard.vue";var I=C.exports,P={name:"app",data:function(){return{}},components:{Keyboard:I},created:function(){}},O=P,j=(n("034f"),Object(_["a"])(O,s,u,!1,null,null,null));j.options.__file="App.vue";var S=j.exports;i["a"].config.productionTip=!1,new i["a"]({render:function(t){return t(S)}}).$mount("#app")},8717:function(t,e,n){t.exports=n.p+"img/note.c827ff3d.png"},"8ed0":function(t,e,n){},c34c:function(t,e,n){"use strict";var a=n("1ad8"),o=n.n(a);o.a},cb24:function(t,e,n){},dfab:function(t,e,n){"use strict";var a=n("cb24"),o=n.n(a);o.a}});
//# sourceMappingURL=app.f9ac2842.js.map
(function(){"use strict";var t={366:function(t,e,i){var n=i(963),s=i(252),o=i(577);const l={class:"app-container"},r={class:"info-panel"},a={class:"info-panel-left"},u={class:"info-panel-right"},h={class:"field"};function c(t,e,i,c,f,d){const p=(0,s.up)("square");return(0,s.wg)(),(0,s.iD)("div",l,[(0,s._)("div",r,[(0,s._)("div",a,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(d.displayMines,((t,e)=>((0,s.wg)(),(0,s.iD)("span",{key:e,class:(0,o.C_)(["count","n"+t])},null,2)))),128))]),(0,s._)("button",{class:(0,o.C_)(["info-panel-smile",[f.state,{fear:f.fear}]]),onClick:e[0]||(e[0]=t=>d.reset())},null,2),(0,s._)("div",u,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(d.displaySeconds,((t,e)=>((0,s.wg)(),(0,s.iD)("span",{key:e,class:(0,o.C_)(["count","n"+t])},null,2)))),128))])]),(0,s._)("div",h,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(f.grid,((t,i)=>((0,s.wg)(),(0,s.iD)("div",{key:i,class:"row"},[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(t,((t,i)=>((0,s.wg)(),(0,s.j4)(p,{key:i,data:t,state:f.state,onMouseup:(0,n.iM)((e=>d.onCellLeftClick(t)),["left"]),onMousedown:[(0,n.iM)((e=>d.firstClick(t)),["left"]),(0,n.iM)((e=>d.onCellRightClick(t)),["right"])],onContextmenu:e[1]||(e[1]=(0,n.iM)((()=>{}),["prevent"]))},null,8,["data","state","onMouseup","onMousedown"])))),128))])))),128))])])}function f(t,e,i,n,l,r){return(0,s.wg)(),(0,s.iD)("button",{class:(0,o.C_)(["square",this.class,[r.fail]])},null,2)}var d={name:"Square",props:["data","state"],data(){return{pressed:!1}},computed:{class(){const{data:{is_mine:t,mines:e,is_open:i,flag:n,question:s}}=this;return i?t?"mine":`n${e}`:this.pressed?this.pressed?"pressed":"":n||s?n?"flag":"question":void 0},fail(){const{data:{is_mine:t,flag:e,mineClick:i},state:{finished:n}}=this;return i?i?"red":"":n&&e&&!t?t?"flag":"notMine":void 0}}},p=i(744);const g=(0,p.Z)(d,[["render",f]]);var m=g;class C{constructor(t,e){this.x=t,this.y=e,this.mines=0,this.mineClick=!1,this.is_mine=!1,this.is_open=!1,this.flag=!1,this.question=!1,this.mouseCount=0}change(t){this.changeCells(t,"mines"),this.changeCells(t,"is_mine"),this.changeCells(t,"is_open"),this.changeCells(t,"mineClick")}changeCells(t,e){const i=this[e];this[e]=t[e],t[e]=i}}var v={name:"App",components:{Square:m},data(){return{rows:16,cols:16,mines:40,grid:[],intervalId:void 0,interval:0,state:{finished:!1,won:!1},count:{open:0,flag:0},fear:!1,clickCell:null}},created(){this.clearBoard()},computed:{displayMines(){const t=this.formatTime(this.mines-this.count.flag),e=t.split("");return e},displaySeconds(){const t=this.formatTime(this.interval),e=t.split("");return e},secondTimer(){return!(!this.count.open||this.state.finished||this.state.won)},cellClosed(){return this.rows*this.cols-this.count.open}},watch:{secondTimer(t){t?(this.interval=1,this.intervalId=setInterval((()=>this.interval++),1e3)):clearInterval(this.intervalId)}},methods:{formatTime(t){return t<10?"00"+t:t<100?"0"+t:t.toString()},reset(){this.clearBoard(),this.state.finished=!1,this.state.won=!1,this.interval=0,this.count.open=0,this.count.flag=0,this.clickCell=null,clearInterval(this.intervalId)},clearBoard(){this.grid=[];for(let t=0;t<this.cols;t++){this.grid.push([]);for(let e=0;e<this.rows;e++)this.grid[t].push(new C(e,t))}},firstClick(t){if(this.fear=!0,this.clickCell=t,0===this.count.open)try{this.setMines(),this.clickCell.is_mine=!1}catch(e){throw"тут мина"}},setMines(){const t=this.rows*this.cols;for(let e=0;e<this.mines;++e){let t=this.makeMineCell(e);t.is_mine=!0}for(let e=0;e<t-1;++e){let i=Math.floor(Math.random()*(t-e));const n=this.makeMineCell(e),s=this.makeMineCell(i);n.change(s)}},makeMineCell(t){return this.cell(t%this.rows,Math.floor(t/this.rows))},cell(t,e){return t>=0&&e>=0&&t<this.rows&&e<this.cols?this.grid[e][t]:null},getNeighbour(t,e){let i;for(let n=-1;n<2;++n)for(let s=-1;s<2;++s)0===n&&0===s||!(i=this.cell(t.x+n,t.y+s))||e(i)},onCellLeftClick(t){if(!t.is_open)if(this.fear=!1,t.is_mine)t.mineClick=!0,this.fail();else{if(t.flag)return!1;this.openCell(t),this.cellClosed===parseInt(this.mines)&&this.win()}},openCell(t){t.is_open||(this.setCellOpen(t),0===t.mines&&this.getNeighbour(t,(t=>this.openCell(t))))},setCellOpen(t){t.is_open||(t.is_open=!0,this.count.open++,t.question=0,t.flag&&(t.flag=0,this.count.flag--),t.is_mine||(t.mines=this.countMinesAround(t)))},onCellRightClick(t){if(!t.is_open)return 0===t.mouseCount?(t.flag=!0,t.question=!1,this.count.flag=this.count.flag+1,t.mouseCount=t.mouseCount+1,this.count.flag&&t.mouseCount):1===t.mouseCount?(t.flag=!1,t.question=!0,this.count.flag=this.count.flag-1,t.mouseCount=t.mouseCount+1,this.count.flag&&t.mouseCount):(t.flag=!1,t.question=!1,t.mouseCount=0)},fail(){this.state.finished=!0,this.openCells()},win(){this.state.won=!0},openCells(){for(let t=0;t<this.grid.length;++t)for(let e=0;e<this.grid.length;++e){let i=this.cell(e,t);i.flag||(i.is_open=!0),i.is_mine||(i.mines=this.countMinesAround(i))}},countMinesAround(t){let e=0;return this.getNeighbour(t,(t=>e+=t.is_mine?1:0)),e}}};const w=(0,p.Z)(v,[["render",c]]);var k=w;(0,n.ri)(k).mount("#app")}},e={};function i(n){var s=e[n];if(void 0!==s)return s.exports;var o=e[n]={exports:{}};return t[n](o,o.exports,i),o.exports}i.m=t,function(){var t=[];i.O=function(e,n,s,o){if(!n){var l=1/0;for(h=0;h<t.length;h++){n=t[h][0],s=t[h][1],o=t[h][2];for(var r=!0,a=0;a<n.length;a++)(!1&o||l>=o)&&Object.keys(i.O).every((function(t){return i.O[t](n[a])}))?n.splice(a--,1):(r=!1,o<l&&(l=o));if(r){t.splice(h--,1);var u=s();void 0!==u&&(e=u)}}return e}o=o||0;for(var h=t.length;h>0&&t[h-1][2]>o;h--)t[h]=t[h-1];t[h]=[n,s,o]}}(),function(){i.d=function(t,e){for(var n in e)i.o(e,n)&&!i.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})}}(),function(){i.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={143:0};i.O.j=function(e){return 0===t[e]};var e=function(e,n){var s,o,l=n[0],r=n[1],a=n[2],u=0;if(l.some((function(e){return 0!==t[e]}))){for(s in r)i.o(r,s)&&(i.m[s]=r[s]);if(a)var h=a(i)}for(e&&e(n);u<l.length;u++)o=l[u],i.o(t,o)&&t[o]&&t[o][0](),t[o]=0;return i.O(h)},n=self["webpackChunksaper"]=self["webpackChunksaper"]||[];n.forEach(e.bind(null,0)),n.push=e.bind(null,n.push.bind(n))}();var n=i.O(void 0,[998],(function(){return i(366)}));n=i.O(n)})();
//# sourceMappingURL=app.8182fc23.js.map
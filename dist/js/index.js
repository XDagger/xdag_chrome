webpackJsonp([0],{100:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l=a(0),n=function(e){return e&&e.__esModule?e:{default:e}}(l),r=a(10);a(101);var u=function(e){var t=e.showAlert,a=e.showStates;return n.default.createElement("nav",{id:"nav",className:t?"fadeInLeft animated":"animated"},n.default.createElement("i",{className:"icon-close icons",onClick:function(){return a(!1)}}),n.default.createElement("ul",null,n.default.createElement("li",null,n.default.createElement(r.Link,{to:"/"},"HOME")),n.default.createElement("li",null,n.default.createElement(r.Link,{to:"/hashrate"},"NETWORK HASHRATE")),n.default.createElement("li",null,n.default.createElement(r.Link,{to:"/list"},"POOLS LIST"))))};t.default=u},101:function(e,t){},102:function(e,t){},103:function(e,t){},104:function(e,t){},105:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var a=0;a<t.length;a++){var l=t[a];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(e,l.key,l)}}return function(t,a,l){return a&&e(t.prototype,a),l&&e(t,l),t}}(),c=a(0),s=l(c),o=a(10);a(7),a(106);var d=a(107),f=l(d),m=a(108),p=l(m),E=function(e){function t(e){n(this,t);var a=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a.submitData=a.submitData.bind(a),a.handlechange=a.handlechange.bind(a),a.state={address:null,result:null},a}return u(t,e),i(t,[{key:"submitData",value:function(){this.setState({result:this.state.address})}},{key:"handlechange",value:function(){var e=document.getElementById("address").value;this.setState({address:e})}},{key:"render",value:function(){return this.state.result?s.default.createElement(o.Redirect,{to:"/explorer/"+this.state.result}):s.default.createElement("div",{className:"bg"},s.default.createElement("div",{className:"logo"},s.default.createElement("div",null,s.default.createElement("img",{src:f.default,alt:""})),s.default.createElement("div",null,s.default.createElement("img",{src:p.default,alt:""}))),s.default.createElement("div",{className:"addressInput"},s.default.createElement("div",null,s.default.createElement("input",{type:"text",placeholder:"PLEASE INPUT ADDRESS",id:"address",name:"address",onChange:this.handlechange})),s.default.createElement("div",null,s.default.createElement("button",{id:"sub",onClick:this.submitData},"GO"))),s.default.createElement("ul",{className:"linkGroup"},s.default.createElement("li",null,s.default.createElement("a",{href:"http://xdag.io",target:"_blank",rel:"noreferrer noopener"},s.default.createElement("div",null,s.default.createElement("i",{className:"icon-home icons"})),s.default.createElement("div",null,"OFFICIAL",s.default.createElement("br",null)," WEBSITE"))),s.default.createElement("li",null,s.default.createElement(o.Link,{to:"/list"},s.default.createElement("div",null,s.default.createElement("i",{className:"icon-basket-loaded icons"})),s.default.createElement("div",null,"POOL",s.default.createElement("br",null)," LIST"))),s.default.createElement("li",null,s.default.createElement(o.Link,{to:"/hashrate"},s.default.createElement("div",null,s.default.createElement("i",{className:"icon-calculator icons"})),s.default.createElement("div",null,"NETWORK HASHRATE"))),s.default.createElement("li",null,"自动更新")))}}]),t}(c.Component);t.default=E},106:function(e,t){},107:function(e,t,a){e.exports=a.p+"images/cd69ccc51e57392b9a5f5ca101f2e20e.png"},108:function(e,t,a){e.exports=a.p+"images/5b4b084fc78762b20516ae4fa8655983.png"},109:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var a=0;a<t.length;a++){var l=t[a];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(e,l.key,l)}}return function(t,a,l){return a&&e(t.prototype,a),l&&e(t,l),t}}(),c=a(0),s=l(c),o=a(17),d=l(o),f=a(19),m=l(f),p=a(20),E=l(p),v=a(21),h=l(v);a(7),a(110);var b=function(e){function t(e){n(this,t);var a=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a.initData=a.initData.bind(a),a.state={loading:!0,blocks:null,mainBlocks:null,netHashrate:null,difficulty:null,difficulty_exact:null,supply:null,tipsBoxVisible:!1},a}return u(t,e),i(t,[{key:"componentWillMount",value:function(){this.initData(this.cur)}},{key:"initData",value:function(){var e=this;d.default.get("https://xdag.top/api/state").then(function(t){var a=t.data,l=a.blocks,n=a.mainBlocks,r=a.netHashrate,u=a.difficulty,i=a.difficulty_exact,c=a.supply;e.setState({loading:!1}),e.setState({blocks:l}),e.setState({mainBlocks:n}),e.setState({netHashrate:r}),e.setState({difficulty:u}),e.setState({difficulty_exact:i}),e.setState({supply:c})}).catch(function(){e.setState({loading:!1}),e.setState({tipsBoxVisible:!0})})}},{key:"closeTipsBox",value:function(){this.setState({tipsBoxVisible:!1})}},{key:"render",value:function(){var e=this.state,t=e.blocks,a=e.mainBlocks,l=e.netHashrate,n=e.difficulty,r=e.difficulty_exact,u=e.supply,i=e.loading,c=e.tipsBoxVisible;return s.default.createElement("div",null,i&&s.default.createElement(E.default,null),c&&s.default.createElement(h.default,{closeTipsBox:this.closeTipsBox}),s.default.createElement("div",{className:"explorerTop"},s.default.createElement(m.default,null),s.default.createElement("div",{className:"top12"},s.default.createElement("div",{className:"netHashrate"},s.default.createElement("div",null,"NETHASHRATE"),s.default.createElement("div",{className:"numH"},s.default.createElement("div",null,l&&l.split(" ")[0]),s.default.createElement("div",{className:"unit"},l&&"TH/s"))))),s.default.createElement("div",{className:"explorerContent"},s.default.createElement("div",{className:"hashrate"},s.default.createElement("ul",null,s.default.createElement("li",{className:"blocks"},s.default.createElement("div",null,s.default.createElement("i",{className:"icon-layers icons"})),s.default.createElement("div",{className:"hashTag"},"blocks"),s.default.createElement("div",{className:"hashCont"},t)),s.default.createElement("li",{className:"main"},s.default.createElement("div",null,s.default.createElement("i",{className:"icon-puzzle icons"})),s.default.createElement("div",{className:"hashTag"},"mainBlocks"),s.default.createElement("div",{className:"hashCont"},a)),s.default.createElement("li",{className:"difficulty"},s.default.createElement("div",null,s.default.createElement("i",{className:"icon-tag icons"})),s.default.createElement("div",{className:"hashTag"},"difficulty"),s.default.createElement("div",{className:"hashCont diff"},n,s.default.createElement("div",{className:"hashTips"},r))),s.default.createElement("li",{className:"supply"},s.default.createElement("div",null,s.default.createElement("i",{className:"icon-present icons"})),s.default.createElement("div",{className:"hashTag"},"supply"),s.default.createElement("div",{className:"hashCont"},u&&u.split(":")[1].split(" ")[1]))))))}}]),t}(c.Component);t.default=b},110:function(e,t){},111:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var a=0;a<t.length;a++){var l=t[a];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(e,l.key,l)}}return function(t,a,l){return a&&e(t.prototype,a),l&&e(t,l),t}}(),c=a(0),s=l(c),o=a(17),d=l(o),f=a(19),m=l(f),p=a(20),E=l(p),v=a(21),h=l(v);a(7),a(112);var b=function(e){function t(e){n(this,t);var a=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a.closeTipsBox=a.closeTipsBox.bind(a),a.state={loading:!1,tipsBoxVisible:!1,datas:[]},a}return u(t,e),i(t,[{key:"componentWillMount",value:function(){this.initData()}},{key:"initData",value:function(){var e=this;this.setState({loading:!0}),d.default.get("https://raw.githubusercontent.com/XDagger/XDagger.github.io/master/_data/pool.yml").then(function(t){e.setState({loading:!1});var a=[],l=t.data.trim().replace(/\n/g,",").split("- ");l.shift(),l.map(function(e){var t=e.replace(/\: /g,'":"'),l=t.replace(/\,/g,'","'),n='{"'+l.replace(/ /g,"")+'"}',r=n.replace(/\,\"\"\}/g,"}");return a.push(JSON.parse(r)),JSON.parse(r)}),e.setState({datas:a})}).catch(function(){e.setState({loading:!1}),e.setState({tipsBoxVisible:!0})})}},{key:"closeTipsBox",value:function(){this.setState({tipsBoxVisible:!1})}},{key:"render",value:function(){var e=this.state,t=e.loading,a=e.tipsBoxVisible;return s.default.createElement("div",null,t&&s.default.createElement(E.default,null),a&&s.default.createElement(h.default,{closeTipsBox:this.closeTipsBox}),s.default.createElement("div",{className:"listTop"},s.default.createElement(m.default,null),s.default.createElement("div",{className:"pool12"},s.default.createElement("div",{className:"title"},"POOLS List"),s.default.createElement("div",{className:"contribute"},"CONTRIBUTE TO THE FUND ",s.default.createElement("strong",null,"1%")),s.default.createElement("div",null,"You can use these approved known",s.default.createElement("br",null),"pools listed below."))),s.default.createElement("div",{className:"noshow"}),s.default.createElement("div",{className:"list"},this.state.datas.map(function(e){return s.default.createElement("dl",{key:e.ip},s.default.createElement("dt",null,e.ip),s.default.createElement("dd",null,s.default.createElement("ul",{className:"btm"},s.default.createElement("li",{className:"input"},e.country),s.default.createElement("li",{className:"amount"},e.name),s.default.createElement("li",{className:"time"},s.default.createElement("a",{href:e.web,target:"_blank"},e.webName))),s.default.createElement("ul",{className:"row"},s.default.createElement("li",{className:"purple"},s.default.createElement("strong",null,e.p1st,"%")," pool fee."),s.default.createElement("li",{className:"black"},s.default.createElement("strong",null,e.p2nd,"%")," reward for miner who discovered a block"),s.default.createElement("li",{className:"dark"},s.default.createElement("strong",null,e.p3rd,"%")," reward for miner who contribute directly to the discover of a block"),s.default.createElement("li",{className:"blue"},s.default.createElement("strong",null,e.p4th,"%")," community fund fee."))))})))}}]),t}(c.Component);t.default=b},112:function(e,t){},19:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var a=0;a<t.length;a++){var l=t[a];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(e,l.key,l)}}return function(t,a,l){return a&&e(t.prototype,a),l&&e(t,l),t}}(),c=a(0),s=l(c),o=a(98),d=l(o);a(99);var f=a(100),m=l(f),p=function(){window.location.reload()},E=function(e){function t(e){n(this,t);var a=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a.showNav=a.showNav.bind(a),a.state={showAlert:!1},a}return u(t,e),i(t,[{key:"showNav",value:function(e){var t=this;e?this.setState({showAlert:!0}):(document.getElementById("nav").className="fadeOutLeft animated",setTimeout(function(){document.getElementById("nav").style.opacity=1,document.getElementById("nav").className="",t.setState({showAlert:!1})},500))}},{key:"render",value:function(){var e=this,t=this.state.showAlert;return s.default.createElement("div",{className:"top"},t&&s.default.createElement(m.default,{showStates:this.showNav,showAlert:t}),s.default.createElement("img",{src:d.default,alt:""}),s.default.createElement("i",{className:"icon-refresh icons",onClick:p}),s.default.createElement("i",{className:"icon-list icons",onClick:function(){return e.showNav(!0)}}))}}]),t}(c.Component);t.default=E},20:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l=a(0),n=function(e){return e&&e.__esModule?e:{default:e}}(l);a(102);var r=function(){return n.default.createElement("div",null,n.default.createElement("div",{className:"loader-inner line-spin-fade-loader"},n.default.createElement("div",null),n.default.createElement("div",null),n.default.createElement("div",null),n.default.createElement("div",null),n.default.createElement("div",null),n.default.createElement("div",null),n.default.createElement("div",null),n.default.createElement("div",null)),n.default.createElement("div",{className:"mask"}))};t.default=r},21:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l=a(0),n=function(e){return e&&e.__esModule?e:{default:e}}(l);a(103);var r=function(e){var t=e.closeTipsBox;return n.default.createElement("div",null,n.default.createElement("div",{className:"tipsBox"},n.default.createElement("div",{className:"tipsClose",onClick:t},n.default.createElement("i",{className:"icon-close icons"})),n.default.createElement("div",{id:"tipsOrange"},"connection failed!")),n.default.createElement("div",{className:"mask"}))};t.default=r},36:function(e,t,a){e.exports=a(37)},37:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}var n=a(0),r=l(n),u=a(39),i=l(u),c=a(10);a(7);var s=a(76),o=l(s),d=a(105),f=l(d),m=a(109),p=l(m),E=a(111),v=l(E),h=function(){return r.default.createElement("main",null,r.default.createElement(c.Switch,null,r.default.createElement(c.Route,{path:"/explorer/:address",component:o.default}),r.default.createElement(c.Route,{path:"/hashrate",component:p.default}),r.default.createElement(c.Route,{path:"/list",component:v.default}),r.default.createElement(c.Route,{exact:!0,path:"/",component:f.default})))},b=function(){return r.default.createElement("div",{className:"maincontent"},r.default.createElement(h,null))};i.default.render(r.default.createElement(c.HashRouter,null,r.default.createElement(b,null)),document.getElementById("root"))},7:function(e,t){},76:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var a=0;a<t.length;a++){var l=t[a];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(e,l.key,l)}}return function(t,a,l){return a&&e(t.prototype,a),l&&e(t,l),t}}(),c=a(0),s=l(c),o=a(17),d=l(o),f=a(96),m=l(f),p=a(19),E=l(p),v=a(20),h=l(v),b=a(21),y=l(b);a(7),a(104);var g=function(e){function t(e){n(this,t);var a=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a.initData=a.initData.bind(a),a.pageClick=a.pageClick.bind(a),a.goPrevClick=a.goPrevClick.bind(a),a.goNext=a.goNext.bind(a),a.closeTipsBox=a.closeTipsBox.bind(a),a.state={loading:null,balance:null,time:null,difficulty:null,direction:null,addressTP:null,amount:null,datas:[],cur:1,total:null,tipsBoxVisible:!1},a}return u(t,e),i(t,[{key:"componentWillMount",value:function(){this.initData(this.cur)}},{key:"initData",value:function(e){var t=this;this.setState({loading:!0}),d.default.get("https://xdag.top/api/blocks",{params:{address:this.props.match.params.address,page:e,per_page:10}}).then(function(e){t.setState({loading:!1});var a=e.data,l=a.balance,n=a.time,r=a.difficulty,u=a.transaction,i=a.address;1===parseInt(t.state.cur,10)&&(t.setState({balance:l}),t.setState({time:n}),t.setState({difficulty:r}),t.setState({direction:u.data[0].direction}),t.setState({addressTP:u.data[0].address}),t.setState({amount:u.data[0].amount})),t.setState({datas:i.data}),t.setState({cur:i.current_page}),t.setState({total:i.last_page})}).catch(function(){t.setState({loading:!1}),t.setState({tipsBoxVisible:!0})})}},{key:"closeTipsBox",value:function(){this.setState({tipsBoxVisible:!1})}},{key:"pageClick",value:function(e){var t=this,a=parseInt(e,10);a!==this.state.cur&&this.setState({cur:a},function(){t.initData(t.state.cur)})}},{key:"goPrevClick",value:function(){var e=this.state.cur;e>1&&this.pageClick(e-1)}},{key:"goNext",value:function(){var e=parseInt(this.state.cur,10);e<this.state.total&&this.pageClick(e+1)}},{key:"render",value:function(){var e=this.state,t=e.balance,a=e.time,l=e.difficulty,n=e.direction,r=e.addressTP,u=e.amount,i=e.datas,c=e.cur,o=e.total,d=e.loading,f=e.tipsBoxVisible;return s.default.createElement("div",null,d&&s.default.createElement(h.default,null),f&&s.default.createElement(y.default,{closeTipsBox:this.closeTipsBox}),s.default.createElement("div",{className:"explorerTop2"},s.default.createElement(E.default,null),s.default.createElement("div",{className:"top12"},s.default.createElement("div",{className:"balance"},"BALANCE"),s.default.createElement("div",{className:"num"},t),s.default.createElement("div",{className:"discription"},"TIME: ",a),s.default.createElement("div",{className:"discription"},"DIFFICULTY: ",l))),s.default.createElement("div",{className:"explorerContent"},s.default.createElement("div",{className:"transaction"},s.default.createElement("div",{className:"title"},"Block as transaction"),s.default.createElement("ul",null,s.default.createElement("li",null,"Direction: ",n),s.default.createElement("li",null,"Address: ",r),s.default.createElement("li",null,"Amount: ",u))),s.default.createElement("div",{className:"address"},s.default.createElement("div",{className:"title"},"Block as address",s.default.createElement("div",{className:"rhtTips"},s.default.createElement("div",null,s.default.createElement("span",{className:"darkblue"}),s.default.createElement("span",{className:"blue"})," DIRECTION"),s.default.createElement("div",null,s.default.createElement("span",{className:"amoutbg"})," AMOUNT"))),i.map(function(e){return s.default.createElement("dl",{key:e.address+e.time+e.amount},s.default.createElement("dt",null,s.default.createElement("a",{href:"http://explorer.xdag.io/block/"+e.address,target:"_blank"},e.address)),s.default.createElement("dd",null,s.default.createElement("ul",null,s.default.createElement("li",{className:"input"},e.direction),s.default.createElement("li",{className:"amount"},e.amount),s.default.createElement("li",{className:"time"},e.time))))})),s.default.createElement(m.default,{current:c,totalPage:o,pageClick:this.pageClick,goPrev:this.goPrevClick,goNext:this.goNext})))}}]),t}(c.Component);t.default=g},96:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l=a(0),n=function(e){return e&&e.__esModule?e:{default:e}}(l);a(97);var r=function(e){var t=e.current,a=e.totalPage,l=e.goPrev,r=e.goNext,u=e.pageClick,i=[],c=void 0,s=void 0;a>5?(s=5,c=t>=a-2?a-4:t<=3?1:t-2):(s=a,c=1);for(var o=0;o<s;o+=1){var d=c+o;t===d?i.push({num:d,cur:!0}):i.push({num:d,cur:!1})}return n.default.createElement("div",{className:"paginationDiv"},n.default.createElement("span",{className:1===t?"prev disable":"prev",onClick:l},"<"),i.map(function(e){return n.default.createElement("span",{key:e.num,onClick:function(){return u(e.num)},className:e.cur?"current":""},e.num)}),n.default.createElement("span",{className:t<=a-4?"ell":"noShowP ell"},"..."),n.default.createElement("span",{className:t<=a-4?"":"noShowP",onClick:function(){return u(a)}},a),n.default.createElement("span",{className:t===a?"next disable":"next",onClick:r},">"))};t.default=r},97:function(e,t){},98:function(e,t,a){e.exports=a.p+"images/2ad5200e8c7befcb4235aa78bd1e8eab.png"},99:function(e,t){}},[36]);
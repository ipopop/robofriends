(this.webpackJsonprobofriends=this.webpackJsonprobofriends||[]).push([[0],{16:function(e,t,n){e.exports=n(30)},26:function(e,t,n){},27:function(e,t,n){},28:function(e,t,n){},30:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(6),c=n.n(o),l=n(7),s=n(5),i=n(14),u=n(15),h=(n(26),n(1)),d=n(2),m=n(4),E=n(3);n(27);var b=function(){return r.a.createElement("div",{className:"area"},r.a.createElement("ul",{className:"circles"},r.a.createElement("li",null),r.a.createElement("li",null),r.a.createElement("li",null),r.a.createElement("li",null),r.a.createElement("li",null),r.a.createElement("li",null),r.a.createElement("li",null),r.a.createElement("li",null),r.a.createElement("li",null),r.a.createElement("li",null)))};var p=function(e){var t=e.username,n=e.city,a=e.id;return console.log(t,n,a),r.a.createElement("div",{className:"card bg-light-blue tc dib br3 pa3 ma2 grow"},r.a.createElement("img",{src:"https://robohash.org/set_set1/".concat(a,"?size=200x200"),alt:"a random robot"}),r.a.createElement("h2",null,t),r.a.createElement("span",null,n))},f=function(e){var t=e.robots;return console.log("CardList"),r.a.createElement("div",{className:"tc"},t.map((function(e,n){return r.a.createElement(p,{key:n,id:t[n].id,username:t[n].username,city:t[n].address.city})})))},g=function(e){e.searchfield;var t=e.searchChange;return console.log("SearchBox"),r.a.createElement("div",{className:"pa2"},r.a.createElement("input",{className:"pa3 mb4 ba br3 b--pink bg-lightest-blue",type:"search",placeholder:"search robots",onChange:t}))},v=function(e){return r.a.createElement("div",{style:{overflowY:"scroll",height:"680px"}},e.children)},O=function(e){Object(m.a)(n,e);var t=Object(E.a)(n);function n(e){var a;return Object(h.a)(this,n),(a=t.call(this,e)).state={hasError:!1},a}return Object(d.a)(n,[{key:"componentDidCatch",value:function(e,t){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?r.a.createElement("h1",null,"Oooops. That is not good"):this.props.children}}]),n}(a.Component),y=function(e){Object(m.a)(n,e);var t=Object(E.a)(n);function n(){var e;return Object(h.a)(this,n),(e=t.call(this)).updateCount=function(){e.setState((function(t){return{count:e.state.count+1}}))},e.state={count:0},e}return Object(d.a)(n,[{key:"render",value:function(){return console.log("CounterButton"),r.a.createElement("button",{color:this.props.color,onClick:this.updateCount},"Count : ",this.state.count)}}]),n}(a.PureComponent),j=function(e){Object(m.a)(n,e);var t=Object(E.a)(n);function n(){return Object(h.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){return console.log("Header"),r.a.createElement("div",null,r.a.createElement("h1",{className:"f2"},"RoboFriends"),r.a.createElement(y,{color:"teal"}))}}]),n}(a.Component),C=(n(28),function(e){Object(m.a)(n,e);var t=Object(E.a)(n);function n(){return Object(h.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"componentDidMount",value:function(){this.props.onRequestRobots()}},{key:"render",value:function(){var e=this.props,t=e.searchField,n=e.onSearchChange,a=e.robots,o=e.isPending,c=a.filter((function(e){return e.username.toLowerCase().includes(t.toLowerCase())}));return r.a.createElement("div",{className:"tc"},r.a.createElement(j,null),r.a.createElement(g,{searchChange:n}),r.a.createElement(b,null),r.a.createElement(v,null,o?r.a.createElement("h1",{className:"tc"},"Loading..."):r.a.createElement(O,null,r.a.createElement(f,{robots:c}))))}}]),n}(a.Component)),S=Object(l.b)((function(e){return{searchField:e.searchRobots.searchField,robots:e.requestRobots.robots,isPending:e.requestRobots.isPending,error:e.requestRobots.error}}),(function(e){return{onSearchChange:function(t){return e({type:"CHANGE_SEARCH_FIELD",payload:t.target.value})},onRequestRobots:function(){return e((function(e){e({type:"REQUEST_ROBOTS_PENDING"}),fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e({type:"REQUEST_ROBOTS_SUCCESS",payload:t})})).catch((function(t){return e({type:"REQUEST_ROBOTS_FAILED",payload:t})}))}))}}}))(C);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var R={searchField:""},_={ipPending:!1,robots:[],error:""},N=(n(29),Object(i.createLogger)(),Object(s.c)({searchRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:R,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"CHANGE_SEARCH_FIELD":return Object.assign({},e,{searchField:t.payload});default:return e}},requestRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"REQUEST_ROBOTS_PENDING":return Object.assign({},e,{isPending:!0});case"REQUEST_ROBOTS_SUCCESS":return Object.assign({},e,{robots:t.payload,isPending:!1});case"REQUEST_ROBOTS_FAILED":return Object.assign({},e,{error:t.payload,isPending:!1});default:return e}}})),w=Object(s.d)(N,Object(s.a)(u.a));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(l.a,{store:w},r.a.createElement(S,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[16,1,2]]]);
//# sourceMappingURL=main.200bf52a.chunk.js.map
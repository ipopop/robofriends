(this.webpackJsonprobofriends=this.webpackJsonprobofriends||[]).push([[0],{16:function(e,t,n){e.exports=n(29)},26:function(e,t,n){},27:function(e,t,n){},29:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(2),c=n.n(o),s=n(5),i=n(1),l=n(14),u=n(15),h=(n(26),n(3)),d=n(4),b=n(7),m=n(6);var E=function(e){var t=e.username,n=e.city,r=e.id;return console.log(t,n,r),a.a.createElement("div",{className:"card bg-light-blue tc dib br3 pa3 ma2 grow"},a.a.createElement("img",{src:"https://robohash.org/set_set1/".concat(r,"?size=200x200"),alt:"a random robot"}),a.a.createElement("h2",null,t),a.a.createElement("span",null,n))},p=function(e){var t=e.robots;return a.a.createElement("div",{className:"tc"},t.map((function(e,n){return a.a.createElement(E,{key:n,id:t[n].id,username:t[n].username,city:t[n].address.city})})))},f=function(e){e.searchfield;var t=e.searchChange;return a.a.createElement("div",{className:"pa2"},a.a.createElement("input",{className:"pa3 mb4 ba br3 b--pink bg-lightest-blue",type:"search",placeholder:"search robots",onChange:t}))},g=function(e){return a.a.createElement("div",{style:{overflowY:"scroll",height:"680px"}},e.children)},v=function(e){Object(b.a)(n,e);var t=Object(m.a)(n);function n(e){var r;return Object(h.a)(this,n),(r=t.call(this,e)).state={hasError:!1},r}return Object(d.a)(n,[{key:"componentDidCatch",value:function(e,t){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?a.a.createElement("h1",null,"Oooops. That is not good"):this.props.children}}]),n}(r.Component),O=(n(27),function(e){Object(b.a)(n,e);var t=Object(m.a)(n);function n(){return Object(h.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"componentDidMount",value:function(){this.props.onRequestRobots()}},{key:"render",value:function(){var e=this.props,t=e.searchField,n=e.onSearchChange,r=e.robots,o=e.isPending,c=r.filter((function(e){return e.username.toLowerCase().includes(t.toLowerCase())}));return o?a.a.createElement("h1",{className:"tc"},"Loading..."):a.a.createElement("div",{className:"tc"},a.a.createElement("h1",{className:"f2"},"RoboFriends"),a.a.createElement(f,{searchChange:n}),a.a.createElement(g,null,a.a.createElement(v,null,a.a.createElement(p,{robots:c}))))}}]),n}(r.Component)),y=Object(s.b)((function(e){return{searchField:e.searchRobots.searchField,robots:e.requestRobots.robots,isPending:e.requestRobots.isPending,error:e.requestRobots.error}}),(function(e){return{onSearchChange:function(t){return e({type:"CHANGE_SEARCH_FIELD",payload:t.target.value})},onRequestRobots:function(){return e((function(e){e({type:"REQUEST_ROBOTS_PENDING"}),fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e({type:"REQUEST_ROBOTS_SUCCESS",payload:t})})).catch((function(t){return e({type:"REQUEST_ROBOTS_FAILED",payload:t})}))}))}}}))(O);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var R={searchField:""},S={ipPending:!1,robots:[],error:""},j=(n(28),Object(l.createLogger)()),C=Object(i.c)({searchRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:R,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"CHANGE_SEARCH_FIELD":return Object.assign({},e,{searchField:t.payload});default:return e}},requestRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"REQUEST_ROBOTS_PENDING":return Object.assign({},e,{isPending:!0});case"REQUEST_ROBOTS_SUCCESS":return Object.assign({},e,{robots:t.payload,isPending:!1});case"REQUEST_ROBOTS_FAILED":return Object.assign({},e,{error:t.payload,isPending:!1});default:return e}}}),_=Object(i.d)(C,Object(i.a)(u.a,j));c.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(s.a,{store:_},a.a.createElement(y,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[16,1,2]]]);
//# sourceMappingURL=main.33944b84.chunk.js.map
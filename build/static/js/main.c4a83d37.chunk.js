(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{17:function(e,t,n){e.exports=n(43)},43:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),l=n(11),r=n.n(l),i=n(12),c=n(13),u=n(15),s=n(14),m=n(16),p=(n(23),n(2)),d=n(3),E=n.n(d),h=function(){return E.a.get("/api/emissions").then(function(e){return e.data})},y=function(){return E.a.get("/api/population").then(function(e){return e.data})},f=function(e){return o.a.createElement("tr",null,o.a.createElement("td",null,e.location),o.a.createElement("td",null,e.year),o.a.createElement("td",null,e.emissions),o.a.createElement("td",null,e.population))},b=function(e){return o.a.createElement(p.Table,{isBordered:!0,isStriped:!0},o.a.createElement("thead",null,o.a.createElement("tr",null,o.a.createElement("th",null,"Location"),o.a.createElement("th",null,"Year"),o.a.createElement("th",null,"Emissions"),o.a.createElement("th",null,"Population"))),o.a.createElement("tbody",null,e.data.map(function(e){return o.a.createElement(f,{key:e.emissions+e.population,location:e.location,year:e.year,emissions:e.emissions,population:e.population})})))},w=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,o=new Array(a),l=0;l<a;l++)o[l]=arguments[l];return(n=Object(u.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(o)))).state={emissions:[],populations:[]},n}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;h().then(function(t){e.setState({emissions:t})}),y().then(function(t){e.setState({populations:t})})}},{key:"render",value:function(){return o.a.createElement(p.Container,{isFluid:!0,style:{marginTop:"20px",padding:"60px"}},o.a.createElement(p.Title,{isSize:3},"Emissions tracker"),o.a.createElement(p.Input,{type:"text",placeholder:"Country name"}),o.a.createElement(p.Container,{style:{padding:"5px"}},o.a.createElement(p.Checkbox,null," Population "),o.a.createElement(p.Checkbox,null," Emissions ")),o.a.createElement(p.Container,null,o.a.createElement(p.Box,null,o.a.createElement(p.Content,null,o.a.createElement(b,{data:Array.from([{key:"ABW",location:"Aruba",year:"1987",emissions:"447.374",population:"61833"},{key:"ABW",location:"Aruba",year:"1988",emissions:"612.389",population:"61079"}])})))))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(w,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[17,1,2]]]);
//# sourceMappingURL=main.c4a83d37.chunk.js.map
(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{34:function(e,t,a){e.exports=a(70)},39:function(e,t,a){},40:function(e,t,a){},41:function(e,t,a){},42:function(e,t,a){},60:function(e,t,a){},61:function(e,t,a){},62:function(e,t,a){},63:function(e,t,a){},64:function(e,t,a){},69:function(e,t,a){},70:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(31),c=a.n(r),i=(a(39),a(6)),o=a(7),m=a(10),u=a(8),s=a(11),E=a(15),d=a(12),p=(a(40),function(){return l.a.createElement("div",{className:"about"},l.a.createElement("div",null,"This is Me"),l.a.createElement("h1",null,"Creative Director"),l.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim est ",l.a.createElement("a",{href:"#"},"explicabo")," maxime quibusdam quaerat nihil aliquid aperiam deleniti, repellendus dolorum. Possimus nisi cupiditate ad veritatis?"),l.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim est explicabo maxime quibusdam quaerat nihil aliquid aperiam deleniti, repellendus dolorum. Possimus nisi cupiditate ad veritatis?"))}),f=(a(41),function(){return l.a.createElement("div",{className:"footer"},"copyright \xa9 2018 by ultra profile")}),h=(a(42),function(){return l.a.createElement("div",{className:"home"},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"home-info"},l.a.createElement("h2",null,"hamaza nabil"),l.a.createElement("h3",null,"creative director"),l.a.createElement("p",null,"Iam a professional  ",l.a.createElement("span",null,"UX Designer "),"and Front-End Developer creating modern and resposive designs to Web and Mobile. Let us work together. Thank you."),l.a.createElement("button",null,"let's begin"))))}),v=a(16),b=a(9),y=a.n(b),j=(a(60),function(){var e=Object(n.useState)([]),t=Object(v.a)(e,2),a=t[0],r=t[1];Object(n.useEffect)(function(){y.a.get("json/data.json").then(function(e){r(e.data.portfolio)})},[]);var c=a.map(function(e){return l.a.createElement("div",{className:"port",key:e.id},l.a.createElement("img",{src:e.image,alt:"ss"}),l.a.createElement("div",{className:"overlay"},l.a.createElement("button",null,"show image")))});return l.a.createElement("div",{className:"portfolio"},l.a.createElement("h1",null,"my portfolio"),l.a.createElement("ul",null,l.a.createElement("li",null,"all"),l.a.createElement("li",null,"html"),l.a.createElement("li",null,"photoshop"),l.a.createElement("li",null,"wordpress"),l.a.createElement("li",null,"mobile")),c)}),g=(a(61),function(){var e=Object(n.useState)([]),t=Object(v.a)(e,2),a=t[0],r=t[1];Object(n.useEffect)(function(){y.a.get("json/data.json").then(function(e){r(e.data.profile)})},[]);var c=a.map(function(e){var t=e.size;return l.a.createElement("li",{key:e.id},e.name,l.a.createElement("span",null,t),l.a.createElement("hr",{style:{width:e.size}}))});return l.a.createElement("div",{className:"profile"},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"info"},l.a.createElement("h1",null,"my profile"),l.a.createElement("div",null,l.a.createElement("span",null,"name"),l.a.createElement("p",null,"Hazem Nabil")),l.a.createElement("div",null,l.a.createElement("span",null,"birthday"),l.a.createElement("p",null,"20/8/1993")),l.a.createElement("div",null,l.a.createElement("span",null,"address"),l.a.createElement("p",null,"Zagazig")),l.a.createElement("div",null,l.a.createElement("span",null,"phone"),l.a.createElement("p",null,"252584555")),l.a.createElement("div",null,l.a.createElement("span",null,"email"),l.a.createElement("p",null,"Ahmed@Ahmed")),l.a.createElement("div",null,l.a.createElement("span",null,"website"),l.a.createElement("p",{style:{color:"orange"}},"www.google.com"))),l.a.createElement("div",{className:"skill"},l.a.createElement("h1",null,"some skills"),l.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos praesentium blanditiis esse cupiditate, omnis similique"),l.a.createElement("ul",null,c))))}),w=(a(62),function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(m.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(l)))).state={dat:[]},a}return Object(s.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this;y.a.get("json/data.json").then(function(t){e.setState({dat:t.data.social})})}},{key:"render",value:function(){var e=this.state.dat.map(function(e){return l.a.createElement("div",{className:"social",key:e.id},l.a.createElement("div",null,l.a.createElement("i",{className:e.icon})),l.a.createElement("div",null,l.a.createElement("p",null,e.title),l.a.createElement("p",null,e.body)))});return l.a.createElement("div",{className:"e"},e)}}]),t}(n.Component)),O=(a(63),function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(m.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(l)))).state={work:[]},a}return Object(s.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this;y.a.get("json/data.json").then(function(t){e.setState({work:t.data.works})})}},{key:"render",value:function(){var e=this.state.work.map(function(e){return l.a.createElement("div",{key:e.id},l.a.createElement("i",{className:e.icon_name}),l.a.createElement("h4",null,e.title),l.a.createElement("hr",null),l.a.createElement("p",null,e.body))});return l.a.createElement("div",{className:"work"},l.a.createElement("div",{className:"container"},l.a.createElement("h2",null,"my work"),e))}}]),t}(n.Component)),k=function(e){function t(){return Object(i.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(h,null),l.a.createElement(O,null),l.a.createElement(j,null),l.a.createElement(g,null),l.a.createElement(p,null),l.a.createElement(w,null),l.a.createElement(f,null))}}]),t}(n.Component),N=(a(64),function(){return l.a.createElement("div",{className:"navbar"},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"logo"},l.a.createElement("span",null,"ultra profile")),l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement(E.b,{to:"/"},"Home")),l.a.createElement("li",null,l.a.createElement("a",{href:"#"},"Work")),l.a.createElement("li",null,l.a.createElement("a",{href:"#"},"Portfolio")),l.a.createElement("li",null,l.a.createElement("a",{href:"#"},"Resume")),l.a.createElement("li",null,l.a.createElement("a",{href:"#"},"About")),l.a.createElement("li",null,l.a.createElement(E.b,{to:"/contact"},"Contact")))))}),x=(a(69),function(){return l.a.createElement("div",{className:"contact"},l.a.createElement("h1",null,"drop me aline"),l.a.createElement("form",null,l.a.createElement("input",{type:"text",placeholder:"your name"}),l.a.createElement("input",{type:"text",placeholder:"your email"}),l.a.createElement("input",{type:"text",placeholder:"your subject"}),l.a.createElement("textarea",{placeholder:"your message"}),l.a.createElement("button",null,"Send Message")),l.a.createElement(f,null))}),q=function(e){function t(){return Object(i.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement(E.a,null,l.a.createElement(N,null),l.a.createElement(d.a,{exact:!0,path:"/",component:k}),l.a.createElement(d.a,{path:"/contact",component:x}))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(q,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[34,1,2]]]);
//# sourceMappingURL=main.8e273018.chunk.js.map
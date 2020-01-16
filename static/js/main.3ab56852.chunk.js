(this["webpackJsonpspacex-graphql-app"]=this["webpackJsonpspacex-graphql-app"]||[]).push([[0],{46:function(e,a,t){e.exports=t(62)},51:function(e,a,t){},52:function(e,a,t){},60:function(e,a,t){},62:function(e,a,t){"use strict";t.r(a);var n=t(0),o=t.n(n),c=t(17),l=t.n(c),r=(t(51),t(30)),i=t(12),s=t(36),m=t(31),p=t(85),d=t(88),g=t(90),u=t(89),h=t(87),E=t(91),_=t(95),f=t(92),v=t(63);t(52);function k(){var e=Object(s.a)(["\n    {\n      launchesPast(limit: 10) {\n        mission_name\n        launch_date_local\n        launch_site {\n          site_name_long\n        }\n        rocket {\n          rocket_name\n          second_stage {\n            payloads {\n              payload_type\n              payload_mass_kg\n            }\n          }\n        }\n        links {\n          flickr_images\n        }\n      }\n    }\n  "]);return k=function(){return e},e}var y=Object(p.a)((function(e){return{root:{flexGrow:1,flexDirection:"column"},card:{display:"flex",background:"#212121",color:"white"},details:{display:"flex",flexDirection:"column"},content:{padding:3,color:"white"},cover:{minWidth:300,minHeight:300},controls:{display:"flex",alignItems:"center",paddingLeft:e.spacing(1),paddingBottom:e.spacing(1)},payloadsList:{width:"100%",maxWidth:360,position:"relative",overflow:"auto",maxHeight:200}}})),x=function(){var e=y(),a=Object(m.a)(Object(r.b)(k())),t=a.loading,n=a.error,c=a.data;return t?o.a.createElement("p",null,"Loading..."):n?o.a.createElement("p",null,"Error :("):o.a.createElement(h.a,{container:!0,className:e.root,spacing:2},c.launchesPast.map((function(a){var t=a.mission_name,n=a.launch_date_local,c=a.launch_site,l=a.rocket,r=a.links;return o.a.createElement(h.a,{item:!0},o.a.createElement(d.a,{className:e.card},o.a.createElement(h.a,{container:!0,spacing:2},o.a.createElement(u.a,{item:!0,lg:3,xs:12,component:h.a,className:e.cover,image:r.flickr_images[0],title:"image ".concat(r.flickr_images[0])}),o.a.createElement(g.a,{item:!0,lg:3,xs:12,component:h.a,className:e.content},o.a.createElement(E.a,{component:"h5",variant:"h5"},"Mission: ",o.a.createElement("strong",null,t)),o.a.createElement(E.a,{variant:"subtitle1"},"Date of launch:"," ",o.a.createElement("strong",null,n.slice(0,10))),o.a.createElement(E.a,{variant:"subtitle1"},"Rocket: ",o.a.createElement("strong",null,l.rocket_name)),o.a.createElement(E.a,{variant:"subtitle1"},"Base: ",o.a.createElement("strong",null,c.site_name_long))),o.a.createElement(g.a,{item:!0,lg:3,xs:12,component:h.a,className:e.content},o.a.createElement(E.a,{component:"h5",variant:"h5"},"Rocket load:"),o.a.createElement(v.a,{style:{backgroundColor:"lightgray"}},o.a.createElement(f.a,{className:e.payloadsList},l.second_stage.payloads.map((function(e){return o.a.createElement(_.a,null,o.a.createElement(E.a,{component:"p",variant:"p"},"-",e.payload_type+" "+e.payload_mass_kg+"kg"))}))))),o.a.createElement(g.a,{item:!0,lg:3,xs:12,component:h.a,className:e.content},o.a.createElement(E.a,{component:"h5",variant:"h5"},"Total load:"),o.a.createElement(E.a,{component:"p",variant:"p"},l.second_stage.payloads.reduce((function(e,a){return{payload_mass_kg:e.payload_mass_kg+a.payload_mass_kg}})).payload_mass_kg,o.a.createElement("span",null,"kg"))))))})))},w=t(93),b=t(94),N=(t(60),{width:"450px",height:"400px"}),j=new r.a({uri:"http://api.spacex.land/graphql/"}),L=Object(p.a)({wrapper:{},container:{}}),O=function(){var e=L();return o.a.createElement(i.a,{client:j},o.a.createElement(b.a,{className:e.wrapper,component:"div"},o.a.createElement(b.a,{component:"div",id:"stars"}),o.a.createElement(b.a,{component:"div",id:"stars2"}),o.a.createElement(b.a,{component:"div",id:"stars3"}),o.a.createElement(w.a,{className:e.container,maxWidth:"lg"},o.a.createElement("h2",{style:{color:"#FFF",textAlign:"center"}},"Last 10 Spacex missions"),o.a.createElement(x,{imagesStyles:N}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(o.a.createElement(O,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[46,1,2]]]);
//# sourceMappingURL=main.3ab56852.chunk.js.map
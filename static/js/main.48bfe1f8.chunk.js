(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{59:function(e,t,a){e.exports=a(92)},64:function(e,t,a){},65:function(e,t,a){},92:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(20),c=a.n(r),o=(a(64),a(10)),i=a(11),s=a(13),m=a(12),u=a(14),d=(a(65),a(52)),h=a(53),p=a(124),b=a(125),g=a(130),E=a(126),y=a(123),v=a(129),w=a(118),k=a(127),f=a(31),C=a(27),j=a(119),O=a(122),S=a(117),x=a(120),P=a(121),R=a(93),A=a(4),N=Object(A.a)((function(e){return{head:{backgroundColor:e.palette.primary.light,color:e.palette.primary.contrastText},body:{fontSize:14}}}))(S.a),M=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).handleClick=function(e){return function(t){var n=new RegExp(e,"g"),l='<span style="background-color: blue;">'+e+"</span>",r=a.props.postResult[2].text;r=r.replace(n,l),a.setState({content:r},(function(){})),a.setState({selectedWord:e},(function(){}))}},a.state={content:a.props.postResult[2].text,selectedWord:""},a.handleClick=a.handleClick.bind(Object(C.a)(a)),a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this,t=this.props.classes,a=this.props.postResult[0],n=this.props.postResult[1];return l.a.createElement("div",{className:t.root},l.a.createElement(w.a,{container:!0,spacing:3,height:700,justify:"center",align:"center"},l.a.createElement(w.a,{item:!0,xs:3},l.a.createElement(R.a,{className:t.paper},l.a.createElement("div",{style:{overflow:"auto",height:"250px"}},l.a.createElement(j.a,{stickyHeader:!0,"aria-label":"sticky table",size:"small"},l.a.createElement("colgroup",null,l.a.createElement("col",{style:{width:"30%"}}),l.a.createElement("col",{style:{width:"40%"}}),l.a.createElement("col",{style:{width:"30%"}})),l.a.createElement(x.a,null,l.a.createElement(P.a,{style:{backgroundColor:"blue",color:"white"}},l.a.createElement(N,{align:"center"},"\ubd84\ub958"),l.a.createElement(N,{align:"center"},"\ub2e8\uc5b4"),l.a.createElement(N,{align:"center"},"\ubc18\ubcf5\uc218"))),l.a.createElement(O.a,null,a.map((function(a,n){return l.a.createElement(P.a,{key:n,onClick:e.handleClick(a.word),selected:e.state.selectedWord===a.word,classes:{hover:t.hover,selected:t.selected},className:t.tableRow},"\uae08\uc9c0"===a.token?l.a.createElement(S.a,{component:"th",scope:"row",style:{background:"red"}},a.token):"\uc704\ud5d8"===a.token?l.a.createElement(S.a,{component:"th",scope:"row",style:{background:"yellow"}},a.token):l.a.createElement(S.a,{component:"th",scope:"row",style:{background:"green"}},a.token),l.a.createElement(S.a,{align:"right"},a.word),l.a.createElement(S.a,{align:"right"},a.num))})))))),l.a.createElement(R.a,{className:t.paper},l.a.createElement("div",{style:{overflow:"auto",height:"400px"}},l.a.createElement(j.a,{stickyHeader:!0,"aria-label":"sticky table",size:"small"},l.a.createElement(x.a,{style:{backgroundColor:"blue",color:"white"}},l.a.createElement(P.a,{style:{backgroundColor:"blue",color:"white"}},l.a.createElement(N,{align:"center"},"\ub2e8\uc5b4"),l.a.createElement(N,{align:"center"},"\ubc18\ubcf5\uc218"))),l.a.createElement(O.a,null,n.map((function(a,n){return l.a.createElement(P.a,{key:n,onClick:e.handleClick(a.word),selected:e.state.selectedWord===a.word,classes:{hover:t.hover,selected:t.selected},className:t.tableRow},l.a.createElement(S.a,{component:"th",scope:"row"},a.word),l.a.createElement(S.a,{align:"right"},a.num))}))))))),l.a.createElement(w.a,{item:!0,xs:9},l.a.createElement(R.a,{className:t.paper},l.a.createElement("div",{style:{overflow:"auto",height:"700px"}},l.a.createElement("p",{dangerouslySetInnerHTML:{__html:this.state.content}}))),l.a.createElement("p",null,"\ucd1d \uae00\uc790 \uc218 : ",this.state.content.length))))}}]),t}(l.a.Component),B=Object(A.a)((function(e){return{root:{width:"100%",flexGrow:1},paper:{marginTop:e.spacing(3),width:"100%",overflowX:"auto",marginBottom:e.spacing(2)},table:{borderRight:"1px solid black"},tableRow:{"&$selected, &$selected:hover":{backgroundColor:"purple"}},hover:{},selected:{}}}))(M),T=a(131),K=Object(A.a)((function(e){return{head:{backgroundColor:e.palette.primary.light,color:e.palette.primary.contrastText},body:{fontSize:14}}}))(S.a),V=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).handleRequestSort=function(e){return function(t){var n=a.state.orderBy===e&&"desc"===a.state.order;a.setState({order:n?"asc":"desc"}),a.setState({orderBy:e})}},a.state={classes:a.props,order:"asc",orderBy:"relKeyword"},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"desc",value:function(e,t,a){return t[a]<e[a]?-1:t[a]>e[a]?1:0}},{key:"stableSort",value:function(e,t){var a=e.map((function(e,t){return[e,t]}));return a.sort((function(e,a){var n=t(e[0],a[0]);return 0!==n?n:e[1]-a[1]})),a.map((function(e){return e[0]}))}},{key:"getSorting",value:function(e,t){var a=this;return"desc"===e?function(e,n){return a.desc(e,n,t)}:function(e,n){return-a.desc(e,n,t)}}},{key:"render",value:function(){var e=this,t=this.props.classes,a=this.props.keywordResult[0],n=this.props.keywordResult[1],r=this.props.keywordResult[2].keywordList,c=r.slice(1,Math.min(r.length,21));return l.a.createElement("div",{className:t.root},l.a.createElement(R.a,{className:t.paper},l.a.createElement(j.a,{className:t.table,border:1,size:"small","aria-label":"a dense table"},l.a.createElement("colgroup",null,l.a.createElement("col",{style:{width:"20%"}}),l.a.createElement("col",{style:{width:"20%"}}),l.a.createElement("col",{style:{width:"10%"}}),l.a.createElement("col",{style:{width:"10%"}}),l.a.createElement("col",{style:{width:"10%"}}),l.a.createElement("col",{style:{width:"10%"}}),l.a.createElement("col",{style:{width:"10%"}}),l.a.createElement("col",{style:{width:"10%"}})),l.a.createElement(x.a,null,l.a.createElement(P.a,{className:t.primaryColor},l.a.createElement(S.a,{align:"center"},"\ud0a4\uc6cc\ub4dc"),l.a.createElement(S.a,{align:"center"},"\ucd1d \uae00 \uc218"),l.a.createElement(S.a,{align:"center"},"PC\uc870\ud68c\uc218"),l.a.createElement(S.a,{align:"center"},"Mobile\uc870\ud68c\uc218"),l.a.createElement(S.a,{align:"center"},"PC\ud074\ub9ad\uc218"),l.a.createElement(S.a,{align:"center"},"Mobile\ud074\ub9ad\uc218"),l.a.createElement(S.a,{align:"center"},"PC\ud074\ub9ad\ub960"),l.a.createElement(S.a,{align:"center"},"Mobile\ud074\ub9ad\ub960"),l.a.createElement(S.a,{align:"center"},"\uc1fc\ud551\uc0c1\ud488\uc218"))),l.a.createElement(O.a,null,l.a.createElement(P.a,null,l.a.createElement(S.a,{align:"center",component:"th",scope:"row","data-title":"token"},r[0].relKeyword),l.a.createElement(S.a,{align:"center"},a),l.a.createElement(S.a,{align:"center"},r[0].monthlyPcQcCnt),l.a.createElement(S.a,{align:"center"},r[0].monthlyMobileQcCnt),l.a.createElement(S.a,{align:"center"},r[0].monthlyAvePcClkCnt),l.a.createElement(S.a,{align:"center"},r[0].monthlyAveMobileClkCnt),l.a.createElement(S.a,{align:"center"},r[0].monthlyAvePcCtr),l.a.createElement(S.a,{align:"center"},r[0].monthlyAveMobileCtr),l.a.createElement(S.a,{align:"center"},n))))),l.a.createElement(R.a,{className:t.paper},l.a.createElement("div",{className:t.tableWrapper},l.a.createElement(j.a,{stickyHeader:!0,"aria-label":"sticky table",size:"small"},l.a.createElement("colgroup",null,l.a.createElement("col",{style:{width:"15%"}}),l.a.createElement("col",{style:{width:"12.5%"}}),l.a.createElement("col",{style:{width:"15%"}}),l.a.createElement("col",{style:{width:"12.5%"}}),l.a.createElement("col",{style:{width:"15%"}}),l.a.createElement("col",{style:{width:"15%"}}),l.a.createElement("col",{style:{width:"15%"}})),l.a.createElement(x.a,null,l.a.createElement(P.a,null,[{id:"relKeyword",numeric:!1,disablePadding:!0,label:"\ud0a4\uc6cc\ub4dc"},{id:"monthlyPcQcCnt",numeric:!0,disablePadding:!1,label:"PC\uc870\ud68c\uc218"},{id:"monthlyMobileQcCnt",numeric:!0,disablePadding:!1,label:"Mobile\uc870\ud68c\uc218"},{id:"monthlyAvePcClkCnt",numeric:!0,disablePadding:!1,label:"PC\ud074\ub9ad\uc218"},{id:"monthlyAveMobileClkCnt",numeric:!0,disablePadding:!0,label:"Mobile\ud074\ub9ad\uc218"},{id:"monthlyAvePcCtr",numeric:!0,disablePadding:!1,label:"PC\ud074\ub9ad\ub960"},{id:"monthlyAveMobileCtr",numeric:!0,disablePadding:!1,label:"Mobile\ud074\ub9ad\ub960"}].map((function(t){return l.a.createElement(K,{key:t.id,sortDirection:e.state.orderBy===t.id&&e.state.order,align:"center"},l.a.createElement(T.a,{active:e.state.orderBy===t.id,direction:e.state.order,onClick:e.handleRequestSort(t.id)},t.label))})))),l.a.createElement(O.a,null,this.stableSort(c,this.getSorting(this.state.order,this.state.orderBy)).map((function(e,t){return l.a.createElement(P.a,{key:t},l.a.createElement(S.a,{component:"th",scope:"data",align:"center"},e.relKeyword),l.a.createElement(S.a,{align:"center"},e.monthlyPcQcCnt),l.a.createElement(S.a,{align:"center"},e.monthlyMobileQcCnt),l.a.createElement(S.a,{align:"center"},e.monthlyAvePcClkCnt),l.a.createElement(S.a,{align:"center"},e.monthlyAveMobileClkCnt),l.a.createElement(S.a,{align:"center"},e.monthlyAvePcCtr),l.a.createElement(S.a,{align:"center"},e.monthlyAveMobileCtr))})))))))}}]),t}(l.a.Component),W=Object(A.a)((function(e){return{root:{width:"100%",flexGrow:1},paper:{marginTop:e.spacing(3),width:"100%",overflowX:"auto",marginBottom:e.spacing(2)},table:{borderRight:"1px solid black"},tableWrapper:{maxHeight:440,overflow:"auto"},visuallyHidden:{border:0,clip:"rect(0 0 0 0)",height:1,margin:-1,overflow:"hidden",padding:0,position:"absolute",top:20,width:1},primaryColor:{backgroundColor:"blue",color:"white"}}}))(V),z=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).state={items:[]},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props.classes,t=this.props.rankResult;return l.a.createElement("div",{className:e.root},l.a.createElement(R.a,{className:e.paper},l.a.createElement(j.a,{className:e.table,border:1,size:"small","aria-label":"a dense table"},l.a.createElement(x.a,null,l.a.createElement(P.a,{style:{backgroundColor:"blue",color:"white"}},l.a.createElement(S.a,{align:"center"},"\ud0a4\uc6cc\ub4dc"),l.a.createElement(S.a,{align:"center"},"\uc544\uc774\ub514"),l.a.createElement(S.a,{align:"center"},"PC\ube14\ud0ed\uc21c\uc704"),l.a.createElement(S.a,{align:"center"},"\ubdf0\ud0ed\uc21c\uc704"),l.a.createElement(S.a,{align:"center"},"\ucd1d \uae00 \uc218"))),l.a.createElement(O.a,null,t.map((function(e,t){return l.a.createElement(P.a,{key:t},l.a.createElement(S.a,{component:"th",align:"center"},e.keyword),l.a.createElement(S.a,{align:"center"},e.id),l.a.createElement(S.a,{align:"center"},e.rankBlogTab),l.a.createElement(S.a,{align:"center"},e.rankViewTab),l.a.createElement(S.a,{align:"center"},e.totalPost))}))))))}}]),t}(l.a.Component),F=Object(A.a)((function(e){return{root:{width:"100%",flexGrow:1},paper:{marginTop:e.spacing(3),width:"100%",overflowX:"auto",marginBottom:e.spacing(2)},table:{borderRight:"1px solid black"}}}))(z),H=a(36),I=a(128);function Q(e){var t=e.children,a=e.value,n=e.index,r=Object(h.a)(e,["children","value","index"]);return l.a.createElement(y.a,Object.assign({component:"div",role:"tabpanel",hidden:a!==n,id:"simple-tabpanel-".concat(n),"aria-labelledby":"simple-tab-".concat(n)},r),l.a.createElement(v.a,{p:3},t))}function U(e){return{id:"simple-tab-".concat(e),"aria-controls":"simple-tabpanel-".concat(e)}}var D=Object(p.a)((function(e){return{root:{flexGrow:1,backgroundColor:e.palette.background.paper},form:{width:"100%",marginTop:e.spacing(1)},buttonProgress:{position:"absolute",top:"50%",left:"50%",marginTop:-12,marginLeft:-12},buttonSuccess:{},linearProgress:{position:"absolute",top:0,width:"100%",height:"100%",opacity:.4,borderRadius:4}}}));function G(){var e=D(),t=l.a.useState(0),a=Object(d.a)(t,2),n=a[0],r=a[1];return l.a.createElement("div",{className:e.root},l.a.createElement(w.a,{item:!0,xs:9},l.a.createElement(b.a,{position:"static"},l.a.createElement(g.a,{value:n,onChange:function(e,t){r(t)},"aria-label":"simple tabs example"},l.a.createElement(E.a,Object.assign({label:"\ud3ec\uc2a4\ud305\ubd84\uc11d"},U(0))),l.a.createElement(E.a,Object.assign({label:"\ud0a4\uc6cc\ub4dc\uc870\ud68c"},U(1))),l.a.createElement(E.a,Object.assign({label:"\uc21c\uc704\uc870\ud68c"},U(2))))),l.a.createElement(Q,{value:n,index:0},l.a.createElement(L,null)),l.a.createElement(Q,{value:n,index:1},l.a.createElement(X,null)),l.a.createElement(Q,{value:n,index:2},l.a.createElement($,null))))}var L=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).handleFormSubmit=function(e){e.preventDefault(),a.postAnalysis().then((function(e){a.setState({result:e.data})}))},a.handleValueChange=function(e){var t={};t[e.target.name]=e.target.value,a.setState(t)},a.state={postUrl:"",result:""},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"postAnalysis",value:function(){return Object(f.post)("/analysis",{command:this.state.postUrl})}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("form",{onSubmit:this.handleFormSubmit},"URL : ",l.a.createElement("input",{type:"text",name:"postUrl",value:this.state.postUrl,width:"60%",placeholder:"\ubd84\uc11d\ud560 \uc8fc\uc18c\ub97c \uc785\ub825\ud558\uc138\uc694",onChange:this.handleValueChange}),l.a.createElement(k.a,{type:"submit",variant:"contained",color:"primary"},"\ubd84\uc11d")),this.state.result?l.a.createElement(B,{postResult:this.state.result}):"")}}]),t}(l.a.Component),X=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).handleFormSubmit=function(e){e.preventDefault(),a.keywordAnalysis().then((function(e){a.setState({result:e.data})}))},a.handleValueChange=function(e){var t={};t[e.target.name]=e.target.value,a.setState(t)},a.state={keyword:"",result:""},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"keywordAnalysis",value:function(){return Object(f.post)("/keyword",{command:this.state.keyword})}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("form",{onSubmit:this.handleFormSubmit},"Keyword : ",l.a.createElement("input",{type:"text",name:"keyword",value:this.state.keyword,placeholder:"\uc870\ud68c\ud560 \ud0a4\uc6cc\ub4dc\ub97c \uc785\ub825\ud558\uc138\uc694",onChange:this.handleValueChange}),l.a.createElement(k.a,{type:"submit",variant:"contained",color:"primary"},"\uc870\ud68c")),this.state.result?l.a.createElement(W,{keywordResult:this.state.result}):"")}}]),t}(l.a.Component),$=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).handleFormSubmit=function(e){e.preventDefault(),a.setState({loading:!0}),a.rankAnalysis().then((function(e){if(a.state.result.length){var t=a.state.result;t.push(e.data),a.setState({result:t})}else a.setState({result:[e.data]});a.setState({loading:!1})}))},a.handleValueChange=function(e){var t={};t[e.target.name]=e.target.value,a.setState(t)},a.state={rankId:"",rankKeyword:"",result:[],loading:!1},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"rankAnalysis",value:function(){return Object(f.post)("/rank",{id:this.state.rankId,keyword:this.state.rankKeyword})}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("form",{onSubmit:this.handleFormSubmit},"\uc544\uc774\ub514 : ",l.a.createElement("input",{type:"text",name:"rankId",value:this.state.rankId,width:"60%",placeholder:"\uc544\uc774\ub514\ub97c \uc785\ub825\ud558\uc138\uc694",onChange:this.handleValueChange}),"\ud0a4\uc6cc\ub4dc : ",l.a.createElement("input",{type:"text",name:"rankKeyword",value:this.state.rankKeyword,width:"60%",placeholder:"\ud0a4\uc6cc\ub4dc\ub97c \uc785\ub825\ud558\uc138\uc694",onChange:this.handleValueChange}),l.a.createElement(k.a,{type:"submit",variant:"contained",color:"primary",className:H.classes.buttonProgress,disabled:this.state.loading},"\ud655\uc778"),this.state.loading&&l.a.createElement(I.a,{color:"secondary",className:H.classes.linearProgress})),this.state.result.length?l.a.createElement(F,{rankResult:this.state.result}):"")}}]),t}(l.a.Component),q=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement(G,null)}}]),t}(l.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(91);c.a.render(l.a.createElement(q,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[59,1,2]]]);
//# sourceMappingURL=main.48bfe1f8.chunk.js.map
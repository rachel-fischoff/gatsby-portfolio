(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"16l3":function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),o=a.n(n),r=a("Wbzz"),i=a("Bl7J"),c=a("vrFN"),s=a("R/WZ"),l=a("wx14"),d=a("Ff2n"),u=a("iuhU"),p=a("H2TA"),m=["video","audio","picture","iframe","img"],b=n.forwardRef((function(e,t){var a=e.children,o=e.classes,r=e.className,i=e.component,c=void 0===i?"div":i,s=e.image,p=e.src,b=e.style,f=Object(d.a)(e,["children","classes","className","component","image","src","style"]),h=-1!==m.indexOf(c),g=!h&&s?Object(l.a)({backgroundImage:'url("'.concat(s,'")')},b):b;return n.createElement(c,Object(l.a)({className:Object(u.a)(o.root,r,h&&o.media,-1!=="picture img".indexOf(c)&&o.img),ref:t,style:g,src:h?s||p:void 0},f),a)})),f=Object(p.a)({root:{display:"block",backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center"},media:{width:"100%"},img:{objectFit:"cover"}},{name:"MuiCardMedia"})(b),h=a("kKAo"),g=n.forwardRef((function(e,t){var a=e.classes,o=e.className,r=e.raised,i=void 0!==r&&r,c=Object(d.a)(e,["classes","className","raised"]);return n.createElement(h.a,Object(l.a)({className:Object(u.a)(a.root,o),elevation:i?8:1,ref:t},c))})),x=Object(p.a)({root:{overflow:"hidden"}},{name:"MuiCard"})(g),E=a("ofer"),v=a("DSFK"),y=a("25BE"),j=a("BsWD"),O=a("PYwp");var N=a("ODXe"),w=(a("TOwV"),a("dRu9")),R=a("wpWl"),k=a("4Hym"),C=a("tr08"),P=a("bfFb"),T=n.forwardRef((function(e,t){var a=e.children,o=e.classes,r=e.className,i=e.collapsedHeight,c=void 0===i?"0px":i,s=e.component,p=void 0===s?"div":s,m=e.disableStrictModeCompat,b=void 0!==m&&m,f=e.in,h=e.onEnter,g=e.onEntered,x=e.onEntering,E=e.onExit,v=e.onExited,y=e.onExiting,j=e.style,O=e.timeout,T=void 0===O?R.b.standard:O,S=e.TransitionComponent,I=void 0===S?w.a:S,M=Object(d.a)(e,["children","classes","className","collapsedHeight","component","disableStrictModeCompat","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","timeout","TransitionComponent"]),D=Object(C.a)(),A=n.useRef(),H=n.useRef(null),B=n.useRef(),L="number"==typeof c?"".concat(c,"px"):c;n.useEffect((function(){return function(){clearTimeout(A.current)}}),[]);var F=D.unstable_strictMode&&!b,z=n.useRef(null),$=Object(P.a)(t,F?z:void 0),K=function(e){return function(t,a){if(e){var n=F?[z.current,t]:[t,a],o=Object(N.a)(n,2),r=o[0],i=o[1];void 0===i?e(r):e(r,i)}}},q=K((function(e,t){e.style.height=L,h&&h(e,t)})),V=K((function(e,t){var a=H.current?H.current.clientHeight:0,n=Object(k.a)({style:j,timeout:T},{mode:"enter"}).duration;if("auto"===T){var o=D.transitions.getAutoHeightDuration(a);e.style.transitionDuration="".concat(o,"ms"),B.current=o}else e.style.transitionDuration="string"==typeof n?n:"".concat(n,"ms");e.style.height="".concat(a,"px"),x&&x(e,t)})),W=K((function(e,t){e.style.height="auto",g&&g(e,t)})),_=K((function(e){var t=H.current?H.current.clientHeight:0;e.style.height="".concat(t,"px"),E&&E(e)})),J=K(v),G=K((function(e){var t=H.current?H.current.clientHeight:0,a=Object(k.a)({style:j,timeout:T},{mode:"exit"}).duration;if("auto"===T){var n=D.transitions.getAutoHeightDuration(t);e.style.transitionDuration="".concat(n,"ms"),B.current=n}else e.style.transitionDuration="string"==typeof a?a:"".concat(a,"ms");e.style.height=L,y&&y(e)}));return n.createElement(I,Object(l.a)({in:f,onEnter:q,onEntered:W,onEntering:V,onExit:_,onExited:J,onExiting:G,addEndListener:function(e,t){var a=F?e:t;"auto"===T&&(A.current=setTimeout(a,B.current||0))},nodeRef:F?z:void 0,timeout:"auto"===T?null:T},M),(function(e,t){return n.createElement(p,Object(l.a)({className:Object(u.a)(o.container,r,{entered:o.entered,exited:!f&&"0px"===L&&o.hidden}[e]),style:Object(l.a)({minHeight:L},j),ref:$},t),n.createElement("div",{className:o.wrapper,ref:H},n.createElement("div",{className:o.wrapperInner},a)))}))}));T.muiSupportAuto=!0;var S=Object(p.a)((function(e){return{container:{height:0,overflow:"hidden",transition:e.transitions.create("height")},entered:{height:"auto",overflow:"visible"},hidden:{visibility:"hidden"},wrapper:{display:"flex"},wrapperInner:{width:"100%"}}}),{name:"MuiCollapse"})(T);var I=n.createContext({});var M=n.forwardRef((function(e,t){var a,o,r,i,c,s,p,m,b=e.children,f=e.classes,g=e.className,x=e.defaultExpanded,E=void 0!==x&&x,w=e.disabled,R=void 0!==w&&w,k=e.expanded,C=e.onChange,P=e.square,T=void 0!==P&&P,M=e.TransitionComponent,D=void 0===M?S:M,A=e.TransitionProps,H=Object(d.a)(e,["children","classes","className","defaultExpanded","disabled","expanded","onChange","square","TransitionComponent","TransitionProps"]),B=(o=(a={controlled:k,default:E,name:"ExpansionPanel",state:"expanded"}).controlled,r=a.default,a.name,a.state,i=n.useRef(void 0!==o).current,c=n.useState(r),s=c[0],p=c[1],[i?o:s,n.useCallback((function(e){i||p(e)}),[])]),L=Object(N.a)(B,2),F=L[0],z=L[1],$=n.useCallback((function(e){z(!F),C&&C(e,!F)}),[F,C,z]),K=n.Children.toArray(b),q=(m=K,Object(v.a)(m)||Object(y.a)(m)||Object(j.a)(m)||Object(O.a)()),V=q[0],W=q.slice(1),_=n.useMemo((function(){return{expanded:F,disabled:R,toggle:$}}),[F,R,$]);return n.createElement(h.a,Object(l.a)({className:Object(u.a)(f.root,g,F&&f.expanded,R&&f.disabled,!T&&f.rounded),ref:t,square:T},H),n.createElement(I.Provider,{value:_},V),n.createElement(D,Object(l.a)({in:F,timeout:"auto"},A),n.createElement("div",{"aria-labelledby":V.props.id,id:V.props["aria-controls"],role:"region"},W)))})),D=Object(p.a)((function(e){var t={duration:e.transitions.duration.shortest};return{root:{position:"relative",transition:e.transitions.create(["margin"],t),"&:before":{position:"absolute",left:0,top:-1,right:0,height:1,content:'""',opacity:1,backgroundColor:e.palette.divider,transition:e.transitions.create(["opacity","background-color"],t)},"&:first-child":{"&:before":{display:"none"}},"&$expanded":{margin:"16px 0","&:first-child":{marginTop:0},"&:last-child":{marginBottom:0},"&:before":{opacity:0}},"&$expanded + &":{"&:before":{display:"none"}},"&$disabled":{backgroundColor:e.palette.action.disabledBackground}},rounded:{borderRadius:0,"&:first-child":{borderTopLeftRadius:e.shape.borderRadius,borderTopRightRadius:e.shape.borderRadius},"&:last-child":{borderBottomLeftRadius:e.shape.borderRadius,borderBottomRightRadius:e.shape.borderRadius,"@supports (-ms-ime-align: auto)":{borderBottomLeftRadius:0,borderBottomRightRadius:0}}},expanded:{},disabled:{}}}),{name:"MuiExpansionPanel"})(M),A=n.forwardRef((function(e,t){var a=e.classes,o=e.className,r=Object(d.a)(e,["classes","className"]);return n.createElement("div",Object(l.a)({className:Object(u.a)(a.root,o),ref:t},r))})),H=Object(p.a)((function(e){return{root:{display:"flex",padding:e.spacing(1,2,2)}}}),{name:"MuiAccordionDetails"})(A),B=a("VD++"),L=a("PsDL"),F=n.forwardRef((function(e,t){var a=e.children,o=e.classes,r=e.className,i=e.expandIcon,c=e.IconButtonProps,s=e.onBlur,p=e.onClick,m=e.onFocusVisible,b=Object(d.a)(e,["children","classes","className","expandIcon","IconButtonProps","onBlur","onClick","onFocusVisible"]),f=n.useState(!1),h=f[0],g=f[1],x=n.useContext(I),E=x.disabled,v=void 0!==E&&E,y=x.expanded,j=x.toggle;return n.createElement(B.a,Object(l.a)({focusRipple:!1,disableRipple:!0,disabled:v,component:"div","aria-expanded":y,className:Object(u.a)(o.root,r,v&&o.disabled,y&&o.expanded,h&&o.focused),onFocusVisible:function(e){g(!0),m&&m(e)},onBlur:function(e){g(!1),s&&s(e)},onClick:function(e){j&&j(e),p&&p(e)},ref:t},b),n.createElement("div",{className:Object(u.a)(o.content,y&&o.expanded)},a),i&&n.createElement(L.a,Object(l.a)({className:Object(u.a)(o.expandIcon,y&&o.expanded),edge:"end",component:"div",tabIndex:null,role:null,"aria-hidden":!0},c),i))})),z=Object(p.a)((function(e){var t={duration:e.transitions.duration.shortest};return{root:{display:"flex",minHeight:48,transition:e.transitions.create(["min-height","background-color"],t),padding:e.spacing(0,2),"&:hover:not($disabled)":{cursor:"pointer"},"&$expanded":{minHeight:64},"&$focused":{backgroundColor:e.palette.action.focus},"&$disabled":{opacity:e.palette.action.disabledOpacity}},expanded:{},focused:{},disabled:{},content:{display:"flex",flexGrow:1,transition:e.transitions.create(["margin"],t),margin:"12px 0","&$expanded":{margin:"20px 0"}},expandIcon:{transform:"rotate(0deg)",transition:e.transitions.create("transform",t),"&:hover":{backgroundColor:"transparent"},"&$expanded":{transform:"rotate(180deg)"}}}}),{name:"MuiExpansionPanelSummary"})(F),$=a("1iKp"),K=a.n($),q=Object(s.a)((function(e){return{root:{textAlign:"center",display:"flex","& > *":{margin:e.spacing(.5)},justifyContent:"center",backgroundColor:e.palette.background.paper,width:"100%"},panel:{backgroundColor:"#37474f"},typography:{fontSize:"15px",padding:"8px 8px"},heading:{fontSize:e.typography.pxToRem(15),flexBasis:"33.33%",flexShrink:0},secondaryHeading:{fontSize:e.typography.pxToRem(15),color:"#ff00a9",fontWeight:"bold"},expansionPanelDetails:{padding:e.spacing(2),display:"flex",justifyContent:"center"},anchor:{padding:e.spacing(2)}}}));t.default=function(){var e=q(),t=Object(n.useState)(!1),s=t[0],l=t[1],d=function(e){return function(t,a){l(!!a&&e)}};return o.a.createElement(i.a,null,o.a.createElement(c.a,{title:"Projects"}),o.a.createElement("h1",null,"Projects"),o.a.createElement(D,{className:e.panel,expanded:"panel1"===s,onChange:d("panel1")},o.a.createElement(z,{expandIcon:o.a.createElement(K.a,null),"aria-controls":"panel1bh-content",id:"panel1bh-header"},o.a.createElement(E.a,{className:e.heading},"Sentiment Analysis Demo"),o.a.createElement(E.a,{className:e.secondaryHeading},"Twitter + Text Sentiment Analysis Project using a React - Flask app")),o.a.createElement(H,{className:e.expansionPanelDetails},o.a.createElement(E.a,{className:e.typography},"Final Individual Project for Project Shift - My Sentiment Analysis Application. Sentiment Analysis is a branch of Natural Language Processing(NLP) which is a form of Artificial Intelligence(AI) that analyzes people’s opinions & emotions. My application allows the user to enter original text or search twitter by subject. The app then analyzes the original text or the text of the tweet as positive, negative or neutral. The user can toogle between analyzing text and tweets with NLTK’s VADER library or using the Machine Learning(ML) model I created with TensorFlow.",o.a.createElement("br",null),o.a.createElement("br",null),"Technologies: React, Hooks, Material-UI, Python, Pandas, Flask, TensorFlow, NLTK, Scikit-Learn"),o.a.createElement("br",null),o.a.createElement("br",null),o.a.createElement(x,null,o.a.createElement(f,{component:"video",height:"280",image:a("tTl2"),title:"sentiment analysis demo",controls:!0})))),o.a.createElement("br",null),o.a.createElement(D,{className:e.panel,expanded:"panel2"===s,onChange:d("panel2")},o.a.createElement(z,{expandIcon:o.a.createElement(K.a,null),"aria-controls":"panel2bh-content",id:"panel2bh-header"},o.a.createElement(E.a,{className:e.heading},"Products Demo"),o.a.createElement(E.a,{className:e.secondaryHeading},"A Product List Application using React, Redux, MongoDB + Node.js")),o.a.createElement(H,{className:e.expansionPanelDetails},o.a.createElement(E.a,{className:e.typography},"Individual full stack project ?",o.a.createElement("br",null),o.a.createElement("br",null)),o.a.createElement(x,null,o.a.createElement(f,{component:"video",height:"280",image:a("bKnP"),title:"product list demo",controls:!0})))),o.a.createElement("br",null),o.a.createElement(D,{className:e.panel,expanded:"panel3"===s,onChange:d("panel3")},o.a.createElement(z,{expandIcon:o.a.createElement(K.a,null),"aria-controls":"panel3bh-content",id:"panel3bh-header"},o.a.createElement(E.a,{className:e.heading},"Scikit-Learn Sprint"),o.a.createElement(E.a,{className:e.secondaryHeading},"Contributed to June 2020 sklearn open source sprint")),o.a.createElement(H,{className:e.expansionPanelDetails},o.a.createElement("a",{className:e.anchor,href:"https://sites.google.com/view/nyc-2020-scikit-sprint/contributors"},"Contributor"),o.a.createElement("br",null),o.a.createElement("br",null),o.a.createElement("a",{className:e.anchor,href:"https://github.com/scikit-learn/scikit-learn/pull/17475"},"Github"))),o.a.createElement("br",null),o.a.createElement("h1",{style:{textAlign:"center"}},"More Coming Soon"),o.a.createElement(r.Link,{to:"/"},"Go back to the homepage"))}},"1iKp":function(e,t,a){"use strict";var n=a("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n(a("q1tI")),r=(0,n(a("8/g6")).default)(o.default.createElement("path",{d:"M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"}),"ExpandMore");t.default=r},bKnP:function(e,t,a){e.exports=a.p+"static/prodcuts_demo-223cc0c6a577cae64268ea099722f07b.mp4"},tTl2:function(e,t,a){e.exports=a.p+"static/final_project-d49f7bea3779bd4597461cd319100c0a.mp4"}}]);
//# sourceMappingURL=component---src-pages-projects-js-2f8cb33a54684d6a0efd.js.map
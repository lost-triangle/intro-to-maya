"use strict";(self.webpackChunkintro_to_maya_docusaurus=self.webpackChunkintro_to_maya_docusaurus||[]).push([[9405],{3905:function(e,n,t){t.d(n,{Zo:function(){return d},kt:function(){return f}});var r=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function u(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?u(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):u(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},u=Object.keys(e);for(r=0;r<u.length;r++)t=u[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(r=0;r<u.length;r++)t=u[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var o=r.createContext({}),c=function(e){var n=r.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},d=function(e){var n=c(e.components);return r.createElement(o.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},g=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,u=e.originalType,o=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),g=c(t),f=i,p=g["".concat(o,".").concat(f)]||g[f]||s[f]||u;return t?r.createElement(p,a(a({ref:n},d),{},{components:t})):r.createElement(p,a({ref:n},d))}));function f(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var u=t.length,a=new Array(u);a[0]=g;var l={};for(var o in n)hasOwnProperty.call(n,o)&&(l[o]=n[o]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var c=2;c<u;c++)a[c]=t[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}g.displayName="MDXCreateElement"},1187:function(e,n,t){t.r(n),t.d(n,{assets:function(){return d},contentTitle:function(){return o},default:function(){return f},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return s}});var r=t(7462),i=t(3366),u=(t(7294),t(3905)),a=["components"],l={title:"4. Grundlagen indirektes Licht"},o=void 0,c={unversionedId:"lighting/GrundlagenIndirektLighting",id:"lighting/GrundlagenIndirektLighting",title:"4. Grundlagen indirektes Licht",description:"Grundlagen Indirekte Beleuchtung",source:"@site/docs/06_lighting/04_GrundlagenIndirektLighting.md",sourceDirName:"06_lighting",slug:"/lighting/GrundlagenIndirektLighting",permalink:"/docs/lighting/GrundlagenIndirektLighting",draft:!1,editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/06_lighting/04_GrundlagenIndirektLighting.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"4. Grundlagen indirektes Licht"},sidebar:"mySidebar",previous:{title:"3. Grundlagen Schatten",permalink:"/docs/lighting/GrundlagenSchatten"},next:{title:"5. Vorbereitungen Licht",permalink:"/docs/lighting/BeleuchtungsUeberlegungen"}},d={},s=[{value:"Grundlagen Indirekte Beleuchtung",id:"grundlagen-indirekte-beleuchtung",level:2}],g={toc:s};function f(e){var n=e.components,l=(0,i.Z)(e,a);return(0,u.kt)("wrapper",(0,r.Z)({},g,l,{components:n,mdxType:"MDXLayout"}),(0,u.kt)("h2",{id:"grundlagen-indirekte-beleuchtung"},"Grundlagen Indirekte Beleuchtung"),(0,u.kt)("p",null,"Indirektes Licht ist Licht was auf eine Oberfl\xe4che auftrifft, was zuvor von einer anderen Oberfl\xe4che gestreut wurde.\nDas Licht \xfcbernimmt die Farbe von dem letzten Objekt und \xfcbertr\xe4gt sie auf das n\xe4chste Objekt (Color Bleeding Effekt)."),(0,u.kt)("p",null,"In der 3D-Umgebung wird inital dieser Effekt nicht simuliert und Lichter senden nur direktes Licht aus.\nRenderengines bieten Global Illumination (GI) Methoden an um indirekte Beleuchtung zu simulieren.\nDie physikalisch akurate Simulation von der Streuung von jedem Lichtstrahl kostet viel Rechenzeit.\nDaher haben sich mehrere Verfahren \xfcber die Zeit entwickelt um die Renderzeit zu verk\xfcrzen."),(0,u.kt)("p",null,"In dieser Beispielszene ist ein weisser Ball in einem Raum mit bunten W\xe4nden."),(0,u.kt)("p",null,(0,u.kt)("img",{alt:"Reines direktes Licht",src:t(3044).Z,width:"960",height:"540"})),(0,u.kt)("p",null,(0,u.kt)("img",{alt:"Global Illumination aktiviert",src:t(781).Z,width:"960",height:"540"})),(0,u.kt)("p",null,'Bei Arnold ist die indirekte Beleuchtung standardm\xe4\xdfig aktiviert und man steuert sie indem man in den Render Settings die "Diffuse"-Samples anpasst.\nEin Wert von 0 deaktiviert den Effekt, h\xf6here Samples verbessern die Qualit\xe4t des Renders.'))}f.isMDXComponent=!0},3044:function(e,n,t){n.Z=t.p+"assets/images/GI-off-41682bcc19b80b0095a126dbc441b994.jpg"},781:function(e,n,t){n.Z=t.p+"assets/images/GI-on-bb555a9af308761d94f9d5c6b2b9cd1e.jpg"}}]);
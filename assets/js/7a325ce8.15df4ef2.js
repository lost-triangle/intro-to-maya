"use strict";(self.webpackChunkintro_to_maya_docusaurus=self.webpackChunkintro_to_maya_docusaurus||[]).push([[1114],{3905:function(e,n,t){t.d(n,{Zo:function(){return o},kt:function(){return m}});var i=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var u=i.createContext({}),c=function(e){var n=i.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},o=function(e){var n=c(e.components);return i.createElement(u.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},h=i.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,u=e.parentName,o=l(e,["components","mdxType","originalType","parentName"]),h=c(t),m=r,g=h["".concat(u,".").concat(m)]||h[m]||d[m]||a;return t?i.createElement(g,s(s({ref:n},o),{},{components:t})):i.createElement(g,s({ref:n},o))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,s=new Array(a);s[0]=h;var l={};for(var u in n)hasOwnProperty.call(n,u)&&(l[u]=n[u]);l.originalType=e,l.mdxType="string"==typeof e?e:r,s[1]=l;for(var c=2;c<a;c++)s[c]=t[c];return i.createElement.apply(null,s)}return i.createElement.apply(null,t)}h.displayName="MDXCreateElement"},9458:function(e,n,t){t.r(n),t.d(n,{assets:function(){return o},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return d}});var i=t(7462),r=t(3366),a=(t(7294),t(3905)),s=["components"],l={title:"5. Vorbereitungen Licht"},u=void 0,c={unversionedId:"lighting/BeleuchtungsUeberlegungen",id:"lighting/BeleuchtungsUeberlegungen",title:"5. Vorbereitungen Licht",description:"Die Beleuchtung in einer Szene kann dramatisch die Aussage und die Interpretation des Bildes ver\xe4ndern.",source:"@site/docs/06_lighting/05_BeleuchtungsUeberlegungen.md",sourceDirName:"06_lighting",slug:"/lighting/BeleuchtungsUeberlegungen",permalink:"/docs/lighting/BeleuchtungsUeberlegungen",draft:!1,editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/06_lighting/05_BeleuchtungsUeberlegungen.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"5. Vorbereitungen Licht"},sidebar:"mySidebar",previous:{title:"4. Grundlagen indirektes Licht",permalink:"/docs/lighting/GrundlagenIndirektLighting"},next:{title:"6. Arbeiten mit Licht",permalink:"/docs/lighting/TestRenderLighting"}},o={},d=[{value:"Generelle Tipps",id:"generelle-tipps",level:2},{value:"Test Render",id:"test-render",level:2},{value:"Was macht jedes Licht",id:"was-macht-jedes-licht",level:2},{value:"Animation",id:"animation",level:2},{value:"Tageszeit",id:"tageszeit",level:2}],h={toc:d};function m(e){var n=e.components,t=(0,r.Z)(e,s);return(0,a.kt)("wrapper",(0,i.Z)({},h,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Die Beleuchtung in einer Szene kann dramatisch die Aussage und die Interpretation des Bildes ver\xe4ndern.\nMit der Beleuchtung kann man die Stimmung gestalten"),(0,a.kt)("p",null,"Licht gibt dem Betrachter Hinweise auf die Tageszeit, ist er in einem Raum oder ist er im Freien."),(0,a.kt)("p",null,"Es gibt 5 Ziele die verfolgt werden sollten beim einsetzen von Licht:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Die Grundlegende Umgebung bestimmen, zu welcher Uhrzeit findet die Szene statt"),(0,a.kt)("li",{parentName:"ol"},"Stimmung Erzeugen"),(0,a.kt)("li",{parentName:"ol"},"Das Auge des Betrachters auf das Wichtigste zu lenken"),(0,a.kt)("li",{parentName:"ol"},"Die visuelle Tiefe, contrast, volumen der Szene zu verdeutlchen"),(0,a.kt)("li",{parentName:"ol"},"Das gesamte Bild visuell interesant zu gestalten.")),(0,a.kt)("h1",{id:"initiale-beleuchtung"},"Initiale Beleuchtung"),(0,a.kt)("p",null,"Wenn man anf\xe4ngt die ersten Lichter in eine Szene zu setzen, sollte man sich \xfcberlegen\nwo und wie man in der Realit\xe4t Lampen aufstellen w\xfcrde. Dies verhindert, dass man zuviele Lampen verwendet und das die Lampen richtig positioniert sind (die korrekte Distanz zwischen Licht und Objekt)."),(0,a.kt)("p",null,"Beispielsweise wird zwar ein Light Icon nicht ausgerendert, aber in der Realit\xe4t k\xf6nnte man keine Lampe direkt in das Bild setzen.\nSieht man eine Lampe in der Render_Cam so ist mit hoher wahrscheinlichkeit die Lampe zu nah an dem Subjekt. -\nGibt es ein Fenster in der Szene, so sollte man sich \xfcberlegen welche Tageszeit ist es, wie stark scheint die Sonne in die Szene."),(0,a.kt)("p",null,"Setzt man die Lampen an realistische Positionen, stellt man schnell fest das man nicht so viele Lichter braucht."),(0,a.kt)("p",null,"Erst nach dieser initialen Phase, kann man anfangen die Lichter f\xfcr den gew\xfcnschten Effekt anzupassen und ggf. noch weitere Lichter hinzuf\xfcgen."),(0,a.kt)("h2",{id:"generelle-tipps"},"Generelle Tipps"),(0,a.kt)("h2",{id:"test-render"},"Test Render"),(0,a.kt)("p",null,"Insbesondere mit Arnold, l\xe4sst sich schnell Testrender anfertigen.\nMan sollte soviele Testrender wie m\xf6glich machen um genau zu sehen wie die Beleuchtung die Szene ver\xe4ndert."),(0,a.kt)("h2",{id:"was-macht-jedes-licht"},"Was macht jedes Licht"),(0,a.kt)("p",null,'Man sollte sich immer im klaren sein was jedes einzelne Licht in der Szene macht.\nDaher sollte man immer jede Lampe einen Namen geben der schnell aufschluss gibt was es macht. z.B. "key_light", "sun", oder "rim_mainCharacter".'),(0,a.kt)("p",null,"Mit Isolate Light l\xe4sst sich schnell ein Test Render machen um zu sehen welchen Einfluss das Licht auf die Szene hat."),(0,a.kt)("h2",{id:"animation"},"Animation"),(0,a.kt)("p",null,"Bei der Animation kann es schnell passieren, das die Beleuchtung f\xfcr eine Position stimmt, jedoch sobald sich etwas aus der Szene bewegt\nstimmt die Beleuchtung nicht mehr, oder ein unerwarteter Schatten ist zu sehen."),(0,a.kt)("p",null,"Um diese Probleme zu vermeiden muss man unbedingt Test Render an verschiedenen Punkten in der Animation vornehmen."),(0,a.kt)("h2",{id:"tageszeit"},"Tageszeit"),(0,a.kt)("p",null,"Das Licht mit dem Menschen am vertrautesten sind, ist das Tageslicht.\nJe nach Tageszeit ist die Farbe des Lichts, die L\xe4nge der Schatten und die Gr\xf6\xdfe der Sonne am Horizont anders."))}m.isMDXComponent=!0}}]);
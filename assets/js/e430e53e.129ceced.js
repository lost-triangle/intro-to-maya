"use strict";(self.webpackChunkintro_to_maya_docusaurus=self.webpackChunkintro_to_maya_docusaurus||[]).push([[771],{5808:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>d,default:()=>o,frontMatter:()=>s,metadata:()=>a,toc:()=>l});var i=t(4848),r=t(8453);const s={title:"4. Grundlagen indirektes Licht"},d=void 0,a={id:"lighting/GrundlagenIndirektLighting",title:"4. Grundlagen indirektes Licht",description:"Grundlagen Indirekte Beleuchtung",source:"@site/docs/06_lighting/04_GrundlagenIndirektLighting.md",sourceDirName:"06_lighting",slug:"/lighting/GrundlagenIndirektLighting",permalink:"/docs/lighting/GrundlagenIndirektLighting",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/06_lighting/04_GrundlagenIndirektLighting.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"4. Grundlagen indirektes Licht"},sidebar:"mySidebar",previous:{title:"3. Grundlagen Schatten",permalink:"/docs/lighting/GrundlagenSchatten"},next:{title:"5. Vorbereitungen Licht",permalink:"/docs/lighting/BeleuchtungsUeberlegungen"}},u={},l=[{value:"Grundlagen Indirekte Beleuchtung",id:"grundlagen-indirekte-beleuchtung",level:2}];function c(e){const n={h2:"h2",img:"img",p:"p",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"grundlagen-indirekte-beleuchtung",children:"Grundlagen Indirekte Beleuchtung"}),"\n",(0,i.jsx)(n.p,{children:"Indirektes Licht ist Licht was auf eine Oberfl\xe4che auftrifft, was zuvor von einer anderen Oberfl\xe4che gestreut wurde.\nDas Licht \xfcbernimmt die Farbe von dem letzten Objekt und \xfcbertr\xe4gt sie auf das n\xe4chste Objekt (Color Bleeding Effekt)."}),"\n",(0,i.jsx)(n.p,{children:"In der 3D-Umgebung wird inital dieser Effekt nicht simuliert und Lichter senden nur direktes Licht aus.\nRenderengines bieten Global Illumination (GI) Methoden an um indirekte Beleuchtung zu simulieren.\nDie physikalisch akurate Simulation von der Streuung von jedem Lichtstrahl kostet viel Rechenzeit.\nDaher haben sich mehrere Verfahren \xfcber die Zeit entwickelt um die Renderzeit zu verk\xfcrzen."}),"\n",(0,i.jsx)(n.p,{children:"In dieser Beispielszene ist ein weisser Ball in einem Raum mit bunten W\xe4nden."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Reines direktes Licht",src:t(2004).A+"",width:"960",height:"540"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Global Illumination aktiviert",src:t(416).A+"",width:"960",height:"540"})}),"\n",(0,i.jsx)(n.p,{children:'Bei Arnold ist die indirekte Beleuchtung standardm\xe4\xdfig aktiviert und man steuert sie indem man in den Render Settings die "Diffuse"-Samples anpasst.\nEin Wert von 0 deaktiviert den Effekt, h\xf6here Samples verbessern die Qualit\xe4t des Renders.'})]})}function o(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},2004:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/GI-off-41682bcc19b80b0095a126dbc441b994.jpg"},416:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/GI-on-bb555a9af308761d94f9d5c6b2b9cd1e.jpg"},8453:(e,n,t)=>{t.d(n,{R:()=>d,x:()=>a});var i=t(6540);const r={},s=i.createContext(r);function d(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);
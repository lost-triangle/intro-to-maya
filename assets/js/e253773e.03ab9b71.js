"use strict";(self.webpackChunkintro_to_maya_docusaurus=self.webpackChunkintro_to_maya_docusaurus||[]).push([[2176],{5462:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>a,contentTitle:()=>d,default:()=>o,frontMatter:()=>t,metadata:()=>l,toc:()=>u});var r=i(4848),s=i(8453);const t={title:"Curves Grundlagen"},d=void 0,l={id:"modelling/04a_modelling-nurbs/CurvesGrundlagen",title:"Curves Grundlagen",description:"Kurven in Maya kann man f\xfcr viele verschiedene Dinge verwenden.",source:"@site/docs/04_modelling/04a_modelling-nurbs/03_CurvesGrundlagen.md",sourceDirName:"04_modelling/04a_modelling-nurbs",slug:"/modelling/04a_modelling-nurbs/CurvesGrundlagen",permalink:"/docs/modelling/04a_modelling-nurbs/CurvesGrundlagen",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/04_modelling/04a_modelling-nurbs/03_CurvesGrundlagen.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Curves Grundlagen"},sidebar:"mySidebar",previous:{title:"NURBS Grundlagen",permalink:"/docs/modelling/04a_modelling-nurbs/NURBSGrundlagen"},next:{title:"Bezier Grundlagen",permalink:"/docs/modelling/04a_modelling-nurbs/BezierGrundlagen"}},a={},u=[{value:"Arten von Kurven",id:"arten-von-kurven",level:2},{value:"3D Kurven zeichnen",id:"3d-kurven-zeichnen",level:2},{value:"NURBS Curve",id:"nurbs-curve",level:2},{value:"NURBS Curve erstellen",id:"nurbs-curve-erstellen",level:3},{value:"NURBS Curve zeichnen",id:"nurbs-curve-zeichnen",level:4},{value:"Weitere Werkzeuge",id:"weitere-werkzeuge",level:3},{value:"Pencil Tool",id:"pencil-tool",level:4},{value:"Three Point Circular Arc",id:"three-point-circular-arc",level:4},{value:"Two Point Circular Arc",id:"two-point-circular-arc",level:4},{value:"Circle",id:"circle",level:4},{value:"Square",id:"square",level:4},{value:"Curves Components",id:"curves-components",level:2},{value:"Edit Point",id:"edit-point",level:3},{value:"Control Vertex",id:"control-vertex",level:3},{value:"Curve Point",id:"curve-point",level:3}];function c(e){const n={h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"Kurven in Maya kann man f\xfcr viele verschiedene Dinge verwenden.\nSie sind die Grundlage des Modellierens mit NURBS Surface Werkzeugen, finden aber auch ihren Einsatz mit z.B. dem Polygon Extrude Tool,\nbeim Rigging verwendet man sie um Pfeile f\xfcr das Rig zu erstellen, in der Animation benutzt man sie um z.B. eine Pfadanimation zu erstellen."}),"\n",(0,r.jsx)(n.h2,{id:"arten-von-kurven",children:"Arten von Kurven"}),"\n",(0,r.jsx)(n.p,{children:"Es gibt zwei M\xf6glichkeiten um eine Kurve in Maya zu zeichnen, die NURBS Curves und die Bezier Curves."}),"\n",(0,r.jsx)(n.p,{children:"Bezier Kurven sind leichter handzuhaben als NURBS Kurves und werden nicht nur zum Modellieren verwendet sondern auch im Graph Editor bei der Animation, daher werden werden uns prim\xe4r mit Bezier Curves auseinandersetzen."}),"\n",(0,r.jsx)(n.h2,{id:"3d-kurven-zeichnen",children:"3D Kurven zeichnen"}),"\n",(0,r.jsx)(n.p,{children:"Bei dem setzen von Punkten f\xfcr die Kurve, kann man nur Punkte auf eine Ebene, also eine 2D Kurve zeichnen. Danach wechselt man in eine andere Ansicht und manipuliert die Punkte, sodass sie die Information aus dem fehlenden Achse erhalten."}),"\n",(0,r.jsx)(n.p,{children:"Man verwendet immer eine orthographischen Ansicht (top, side, front). Zeichnet man in einer perspektivischen Kamera, werden die Punkte auf der XZ Ebene gesetzt. Ver\xe4ndert man die Position der Kamera sieht man das die Kurve perspektivisch verzerrt wurde."}),"\n",(0,r.jsx)(n.h2,{id:"nurbs-curve",children:"NURBS Curve"}),"\n",(0,r.jsx)(n.p,{children:'Die NURBS Curve besteht aus "Edit Points (EP)", durch die die Kurve verl\xe4uft und "Control Vertex (CV)" Points, die die Kr\xfcmmung der Kurve definiert.\nMan bezeichnet die Linie zwischen zwei Edit Points als "Span".'}),"\n",(0,r.jsx)(n.p,{children:"Eine NURBS Kurve merkt sich auch was der Anfang und das Ende der Kurve ist, diese bestimmen die Richtung der Kurve, was einen Einfluss auf die Surface Tools hat.\nDie Richtung der Kurve kann man im CV Modus ermitteln, in diesem Modus werden die ersten beiden CVs als hohle Quadrate dargestellt."}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"CVs und EPs von der gleichen Kurve",src:i(1335).A+"",width:"911",height:"352"})}),"\n",(0,r.jsx)(n.h3,{id:"nurbs-curve-erstellen",children:"NURBS Curve erstellen"}),"\n",(0,r.jsxs)(n.p,{children:["NURBS Curves werden erstellt mithilfe des Men\xfcs ",(0,r.jsx)("span",{class:"menu",children:"Create > Curve Tools"}),".\nSie k\xf6nnen auf zwei verschiedene Arten erstellt werden:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"EP-Curves:"})," Beim Erstellen der Kurve werden die Edit Points gesetzt, es m\xfcssen mindestens zwei Punkte gesetzt werden damit eine Curve gezeichnet wird, es werden die CV Punkte automatisch generiert."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"CV-Curves:"})," Beim Erstellen der Kurve werden die Control Vertex Points gesetzt, daher m\xfcssen mindestens 4 Punkte gesetzt werden damit eine Curve gezeichnet wird."]}),"\n"]}),"\n",(0,r.jsx)(n.h4,{id:"nurbs-curve-zeichnen",children:"NURBS Curve zeichnen"}),"\n",(0,r.jsxs)(n.p,{children:["Bei dem EP-Curve oder CV-Curve setzt man die Punkte mit ",(0,r.jsx)("span",{class:"shortcut",children:"LMB"})," ist man fertig mit der Kurve so muss einmal ",(0,r.jsx)("span",{class:"shortcut",children:"Enter"})," gedr\xfcckt werden um den Zeichenmodus zu beenden."]}),"\n",(0,r.jsx)(n.p,{children:'In der Praxis benutzt man f\xfcr das zeichnen von komplexen NURBS Curves das "CV-Curve" Tool, da man beim setzen der Punkte die Kr\xfcmmung definiert wird.\nBeim EP-Curve Tool wird die Kr\xfcmmung erst nach setzen des Punktes generiert und bei dem setzen von einem neuen Punkt wird die Kr\xfcmmung des vorhergehenden Spans angepasst.\nSo ist das Ergebnis des Tools unvorhersehbar und eignet sich nur f\xfcr eine einfache gerade Linie, definiert durch zwei Punkte.'}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"EP-Curve Tool, CVs generiert",src:i(7208).A+"",width:"758",height:"682"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"CV-Curve Tool, EPs generiert",src:i(4660).A+"",width:"758",height:"682"})}),"\n",(0,r.jsx)(n.p,{children:'Kurven werden immer in einer orthographischen Ansicht (also die "top", "side" und "front" View) gezeichnet und dann ggf. in der 3. Achse angepasst.\nMan sollte es vermeiden in einer perspektivischen Ansicht Kurven zu zeichen, da alle Punkte auf der XZ-Ebene gesetzt werden\nwas zur Folge hat das die Kurve perspektivisch verzerrt gezeichnet wird.'}),"\n",(0,r.jsx)(n.h3,{id:"weitere-werkzeuge",children:"Weitere Werkzeuge"}),"\n",(0,r.jsx)(n.h4,{id:"pencil-tool",children:"Pencil Tool"}),"\n",(0,r.jsxs)(n.p,{children:["Mit diesem Werkzeug kann eine Freihand Curve gezeichnet werden. Man muss ",(0,r.jsx)("span",{class:"shortcut",children:"LMB"})," gedr\xfcckt halten,\ndie Curve zeichnen und mit loslassen der Taste wird die Curve erstellt.\nDieses Tool generiert meistens eine hohe Anzahl von EPs und erschafft eine sehr ungenaue Curve, was das sp\xe4tere arbeiten mit der Curve erschwert."]}),"\n",(0,r.jsxs)(n.p,{children:["Man kann die Curve gl\xe4tten und die Anzahl der EP reduzieren mit dem ",(0,r.jsx)("span",{class:"menu",children:"Edit Curves > Rebuild Curve"})," Werkzeug."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"Pencil Tool",src:i(6445).A+"",width:"758",height:"682"})}),"\n",(0,r.jsx)(n.h4,{id:"three-point-circular-arc",children:"Three Point Circular Arc"}),"\n",(0,r.jsx)(n.p,{children:"Mit diesem Werkzeug kann man ein Kreissegment erstellen. Man definiert drei Punkte und es wird eine Kreislinie zwischen diesen Punkten erstellt."}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"Three Point Arc Kurve",src:i(8984).A+"",width:"758",height:"682"})}),"\n",(0,r.jsx)(n.h4,{id:"two-point-circular-arc",children:"Two Point Circular Arc"}),"\n",(0,r.jsx)(n.p,{children:"Auch dieses Werkzeug erstellt ein Kreissegment. Man definiert den Anfang und das Ende des Kreises und es wird ein Halbkreis erstellt. Durch klicken auf den Modifier kann man bestimmen ob das Kreissegment \xfcber oder unterhalb der beiden Punkte erstellt wird. Zus\xe4tzlich l\xe4sst sich der Mittelpunkt des Kreises verschieben um ein anderes Kreissegment zu erhalten."}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"Two Point Arc",src:i(5510).A+"",width:"758",height:"682"})}),"\n",(0,r.jsx)(n.h4,{id:"circle",children:"Circle"}),"\n",(0,r.jsxs)(n.p,{children:["Mit ",(0,r.jsx)("span",{class:"menu",children:"Create > NURBS Primitives > Circle"})," l\xe4sst sich ein Kreis erstellen."]}),"\n",(0,r.jsx)(n.h4,{id:"square",children:"Square"}),"\n",(0,r.jsxs)(n.p,{children:["Mit ",(0,r.jsx)("span",{class:"menu",children:"Create > NURBS Primitives > Square"})," l\xe4sst sich ein Quadrat erstellen. \xc4hnlich wie beim NURBS Box wird hier eine Gruppe von geraden Linien erstellt und sollte deswegen gemieden werden."]}),"\n",(0,r.jsx)(n.h2,{id:"curves-components",children:"Curves Components"}),"\n",(0,r.jsx)(n.p,{children:"Eine Curve besteht wieder aus seinen eigenen Komponenten die man anpassen kann."}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Edit Point (EP)"}),"\n",(0,r.jsx)(n.li,{children:"Control Vertex (CV)"}),"\n",(0,r.jsx)(n.li,{children:"Curve Point"}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["Genau wie bei den Surface Objekten mit ",(0,r.jsx)("span",{class:"shortcut",children:"RMB"})," auf das Objekt gedr\xfcckt halten, sieht man ein Marking Menu, und kann in den gew\xfcnschten Modus wechseln. Alternativ kann man die Kurve auch zuerst selektieren und dann irgendwo im Panel ",(0,r.jsx)("span",{class:"shortcut",children:"RMB"})," dr\xfccken."]}),"\n",(0,r.jsx)(n.h3,{id:"edit-point",children:"Edit Point"}),"\n",(0,r.jsxs)(n.p,{children:['Mit Edit Points kann man schnell abz\xe4hlen aus wievielen Spans eine Kurve besteht. EPs werden als "x" dargestellt um sie von CVs zu Unterscheiden.\nMan kann ihre Position mit dem Move Tool (',(0,r.jsx)("span",{class:"shortcut",children:"W"}),") ver\xe4ndern. Da es ein einzelner Punkt ist haben das Rotate und Scale Tool keinen Einfluss auf den Punkt."]}),"\n",(0,r.jsx)(n.p,{children:"Erzeugt man eine Surface aus der Kurve, werden aus den EP Points, Isoparms."}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"Edit Point Mode",src:i(2951).A+"",width:"1390",height:"718"})}),"\n",(0,r.jsx)(n.h3,{id:"control-vertex",children:"Control Vertex"}),"\n",(0,r.jsx)(n.p,{children:"Wie bei den Surface Objekten beinflussen die CVs indirekt die Form der Kurve."}),"\n",(0,r.jsx)(n.p,{children:"Bei Curves werden zus\xe4tzlich der erste CV als hohles Quadrate angezeigt, um den Anfang der Kurve zu verdeutlichen. Die restlichen CVs werden als kleine Kreise dargestellt."}),"\n",(0,r.jsxs)(n.p,{children:["Man kann ihre Position mit dem Move Tool (",(0,r.jsx)("span",{class:"shortcut",children:"W"}),") ver\xe4ndern. Da es ein einzelner Punkt ist haben das Rotate und Scale Tool keinen Einfluss auf den Punkt."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"Control Vertex Mode",src:i(3523).A+"",width:"1390",height:"718"})}),"\n",(0,r.jsx)(n.h3,{id:"curve-point",children:"Curve Point"}),"\n",(0,r.jsx)(n.p,{children:"Ein Curve Point ist ein selektierter Punkt auf der Kurve, der nicht ver\xe4ndert werden kann. (\xc4hnlich wie der Isoparm Modus bei Surfaces)"}),"\n",(0,r.jsxs)(n.p,{children:["Man kann mit ",(0,r.jsx)("span",{class:"menu",children:"Edit Curves > Insert Knot"})," diesen Punkt als Edit Point der Kurve hinzuf\xfcgen. So erh\xe4lt man einen neuen Edit Point und die entsprechende Anzahl von CVs."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"Curve Point Mode",src:i(553).A+"",width:"1390",height:"718"})})]})}function o(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},3523:(e,n,i)=>{i.d(n,{A:()=>r});const r=i.p+"assets/images/CV-df841cbaed74c42f0e1fbf24c8c4f067.png"},4660:(e,n,i)=>{i.d(n,{A:()=>r});const r=i.p+"assets/images/CVCurveTool-84778d3bae00bc23913bc888d1856af2.png"},1335:(e,n,i)=>{i.d(n,{A:()=>r});const r=i.p+"assets/images/CurveComponents-b5df2e742718689b33c503d88339ae4e.png"},553:(e,n,i)=>{i.d(n,{A:()=>r});const r=i.p+"assets/images/CurvePoint-a2115bf35e2ce742a0fbf8305a984183.png"},2951:(e,n,i)=>{i.d(n,{A:()=>r});const r=i.p+"assets/images/EP-e5a4a7c8258c535c171960f37d9d4fdc.png"},7208:(e,n,i)=>{i.d(n,{A:()=>r});const r=i.p+"assets/images/EPCurveTool-d6b7c587eef9bf52883d33a5bcf681a4.png"},6445:(e,n,i)=>{i.d(n,{A:()=>r});const r=i.p+"assets/images/PencilTool-76cc2bfc35f726eb4c7626eb11f9e712.png"},8984:(e,n,i)=>{i.d(n,{A:()=>r});const r=i.p+"assets/images/ThreePointArc-f931a15dbac7380be28130e6f721c2a2.png"},5510:(e,n,i)=>{i.d(n,{A:()=>r});const r=i.p+"assets/images/TwoPointArc-feff0eec8ce0f06b4ad2708cc1414b55.png"},8453:(e,n,i)=>{i.d(n,{R:()=>d,x:()=>l});var r=i(6540);const s={},t=r.createContext(s);function d(e){const n=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),r.createElement(t.Provider,{value:n},e.children)}}}]);
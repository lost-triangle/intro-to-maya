---
title: "NURBS Grundlagen"
---

## NURBS Primitive

Wir erzeugen NURBS Primitive mit dem Menü <span class="menu">Create > NURBS Primitives</span>.
Dort findet man die Objekte Sphere, Box, Cylinder , Cone, Plane(Ebene) und Torus.

![Die NURBS Primitive](/04a_modelling-nurbs/images/02_Nurbs-Grundlagen/NurbsPrimitives.png)

NURBS Objekte können keine harten Kanten haben. Daher wird der Würfel als Gruppe von Ebenen erzeugt. Das macht das arbeiten mit dem NURBS Würfel äußerst umständlich, braucht man einen Würfel sollte man stattdessen ein Polygon Würfel benutzen.

## Surface Components

Jedes NURBS Objekt besteht aus Komponenten die man modifizieren und verändern kann.
Wir schauen uns die drei am häufigsten gebrauchten Components-Modi an:

- Isoparms
- Control Vertex
- Hull

Um in den jeweiligen Modus zu wechseln benutzt man das Select Tool (<span class="shortcut">Q</span>)
Zunächst das Objekt anklicken, es wird im Objekt-Modus selektiert.
Mit <span class="shortcut">RMB</span> auf das Objekt gedrückt halten, sieht man ein Marking Menu,
und kann in den gewünschten Modus wechseln.
![Nurbs Marking Menu](/04a_modelling-nurbs/images/02_Nurbs-Grundlagen/NURBSMarkingMenu.png)

### Isoparm

![Isoparm](/04a_modelling-nurbs/images/02_Nurbs-Grundlagen/NurbsIsoparm.png)

Isoparametric Curves (auch Isoparm genannt) sind die Linien die entlang der Oberfläche laufen.  
Die Isoparms haben ihr eigenes Koordinaten System mit den Achsen UV.

Der Modus wird verwendet um neue Isoparms der Geometrie hinzufügen.
Hierfür klickt man an die Stelle an der man einen weiteren Isoparm einfügen möchte (gestrichelte Linie) und fügt sie mittels <span class="menu">Edit Nurbs > Insert Isoparm</span> hinzu.

![Selektierter Isoparm der mit "Insert Isoparm" dem Objekt hinzugefügt werden kann.](/04a_modelling-nurbs/images/02_Nurbs-Grundlagen/NurbsNewIsoparm.png)

Isoparms können **nicht** direkt verändert werden. Möchte man die Form eines Isoparms manipulieren muss man in den Control Vertex Punkte(CV) oder Hull Modus wechseln.

### Control Vertex

![Control Vertex (CVs)](/04a_modelling-nurbs/images/02_Nurbs-Grundlagen/NurbsCV.png)

Durch die Control Vertex (CVs) Punkte wird die Krümmung der Kurve definiert.

CVs sind Punkte im Raum der alle dazugehörigen Isoparms definiert. Selektiert man einen CV werden die dazugehörigen Isoparms weiß dargestellt.

Einzelne Punkte kann man nur mit dem Move Tool (W) verändern.

Selektiert man mehrere CVs kann man alle zusammen skalieren und rotieren.

### Hull

![Hull](/04a_modelling-nurbs/images/02_Nurbs-Grundlagen/NurbsHull.png)

Die Hull Ansicht verbindet alle CVs eines Isoparms und lässt so das darunterliegende Isoparm manipulieren.
Selektiert man eine Hull werden die dazugehörigen CVs gelb und die Isoparms weiß markiert.

Man kann eine Hull skalieren, rotieren und bewegen.

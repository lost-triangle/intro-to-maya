---
title: "Praxis DNA"
---

![](/04b_modelling-polygon/images/04_dna/DNA4.png)

Um eine simple DNA-Helix zu modellieren müssen wir wissen, dass die Ebenen in einem 36° Winkel zueinander stehen.
Ein Strang ist in der Regel rechtsdrehend und eine Windung enthält 10 Basenpaare.

## Basenpaar

1. Create > Nurbs Sphere (TranslateX = 5)

2. Create > Polygon Cube (TranslateX = 2, Width = 4.5, Height = 0,2 Subdivisions Depth =2 )
3. Beides selektieren, gruppieren (Strg-G)

![](/04b_modelling-polygon/images/04_dna/DNA1.png)

4. Duplizieren Strg-D, skalieren (ScaleX = -1)

5) In der „topView“ beide Cubes im Vertex Modus auswählen entweder per Selektionsmaske, oder RMB auf den ersten Cube > Vertex, Shift+LMB auf zweiten Cube, RMB auf den zweiten Cube > Vertex

6) Die mittleren Vertex Punkte zur Seite verschieben. (Siehe Bild) Hierfür muss man in den Tool Settings die Move Axis auf „World“ setzen.

![](/04b_modelling-polygon/images/04_dna/DNA2.png)

![](/04b_modelling-polygon/images/04_dna/DNA3.png)

7. In der „persp“-Ansicht im Objektmodus die beiden Cubes selektieren und rotieren (RotateX = 30)

8. Alle Objekte zusammen gruppieren

## Helix

1. Edit > Duplicate Special q
   ![](/04b_modelling-polygon/images/04_dna/DNA6.png)

![](/04b_modelling-polygon/images/04_dna/DNA5.png)

2. Im Hirarchie Selektions-Modus alle Objekte auswählen und gruppieren bzw. im Outliner alle Gruppen Selektieren und zu einer Gruppe (mit Namen „DNA“) vereinigen.

3. Delete History, Freeze Transformations

4. Speichern unter dna.01.ma

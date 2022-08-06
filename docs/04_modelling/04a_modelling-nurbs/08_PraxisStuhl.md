---
title: "Praxis: Stuhl"
---

## Analyse

Wir werden uns einen klassischen französischen Stuhl modellieren.

## Schritt 1: Stuhlplatte

Wir erzeugen einen NURBS Cylinder (<span class="menu">Create > NURBS Primitives > Cylinder</span>)

| Attribute    | Value |
| ------------ | ----- |
| Radius       | 5     |
| Height Ratio | 0.1   |

Nachdem der Zylinder keinen Boden und Deckel hat, selektieren wir im **Isoparm Modus** (<span class="shortcut">RMB</span> auf das Objekt und Isoparm wählen)
den obersten Rand.

![Oberer Rand selektiert](/04a_modelling-nurbs/images/PraxisStuhl/01IsoparmSelection.png)

Mit <span class="menu">Surface > Planar</span> können wir einen Deckel erstellen.

Das gleiche wiederholen wir für den untersten Rand um einen Boden für den Zylinder zu bekommen.

Danach selektieren wir alle drei Objekte und gruppieren sie (<span class="shortcut">Strg-G</span>) und benennen die Gruppe "stuhlplatte" (Doppelklick in der Channelbox auf den Namen).

Um in den nächsten Schritten nicht versehentlich die Platte zu verändern, können wir die Gruppe einer "Display Layer" hinzufügen.
Hierfür einfach auf das Icon am rechten Rand drücken, dann wird eine neue Layer erstellt und das gerade selektierte Objekt der Ebene hinzugefügt.

![Layer Editor](/04a_modelling-nurbs/images/PraxisStuhl/02DisplayLayer.png)

Wir setzen die Ebene auf Transparent indem wir auf das leere Rechteck neben dem "P" einmal klicken.
So können wir die Größe der Platte weiterhin sehen, können sie aber nicht mehr manipulieren.

## Schritt 2: Stuhllehne Rahmen

Wir wechseln in die Seitenansicht und mit dem Bezier Tool zeichnen wir die Stuhl Lehne.

![Stuhllehne](/04a_modelling-nurbs/images/PraxisStuhl/03StuhllehneKurve.png)

Nun müssen wir die Kurve in der Z-Achse manipulieren. Hiefür wechseln wir zurück in die Perspektivische Ansicht.
Zuerst verschieben wir die Kurve (im Object Mode) an den hinteren Rand der Stuhlplatte. (TranslateZ=-3)

Dann wechseln wir in den Control Vertex - Mode und manipulieren einzeln die Control Vertex Punkte.
Bei dem selektieren der Punkte sollte man darauf achten, zunächst den Kurvenpunkt zu verschieben, und dann die Control Handles.

![Bezier Point Anpassung](/04a_modelling-nurbs/images/PraxisStuhl/04VertexAnpassung.png)

![Control Handle Anpassung](/04a_modelling-nurbs/images/PraxisStuhl/05ControlHandleAnpassung.png)

Nachdem die Kurve fertig ist müssen wir die Oberflächen erstellen. Wie bei dem Tisch, werden wir das NURBS Extrude Tool verwenden.
Diesmal werden wir mit dem Abschluss anfangen und erst danach die Oberfläche erstellen.

Für den Abschluss brauchen wir eine Halbkugel. Zuerst erstellen wir eine NURBS Sphere (<span class="menu">Create > Nurbs Primitives > Sphere</span>).
Im Isoparm Modus selektieren wir den mittleren Isoparm und wählen <span class="menu">Surfaces > Detach Surfaces</span>.

![Isoparm Selection](/04a_modelling-nurbs/images/PraxisStuhl/06IsoparmSelection.png)

Die obere hälfte brauchen wir nicht und können sie löschen.
Mit dem Scale Tool (<span class="shortcut">S</span>) flachen wir die Halbkugel etwas ab (ScaleY=0.6)

![Abgeflachte Kugel](/04a_modelling-nurbs/images/PraxisStuhl/07FlatterBall.png)

Mit dem Move Tool (<span class="shortcut">W</span>) und aktiviertem Kurve snapping (Taste <span class="shortcut">C</span>) bewegen wir die Kurve an das untere Ende der Stuhllehne.

Nun wechseln wir in den Isoparm Modus und selektieren den Rand. Mit <span class="shortcut">Shift-LMB</span> selektieren wir die Stuhllehnen Kurve.
Der Isoparm und die Kurve sollten nun selektiert sein und wir können mit <span class="menu">Surfaces > Extrude</span> die Oberfläche erzeugen.

![Isoparm und Kurve Selektiert](/04a_modelling-nurbs/images/PraxisStuhl/08IsoSelection.png)

Das Bein wirkt nun etwas dick, mit dem Scale Tool können wir die Dicke anpassen, indem wir die Sphere verkleinern. (ScaleX=0.4, ScaleY=0.24, ScaleZ=0.4)

Um nun den gesamten Bogen zu erhalten, Duplizieren wir die Lehne (<span class="shortcut">Strg-d</span>) und setzen den ScaleZ Wert auf -1.
Die Halbkugel duplizieren wir auch und multiplizieren den TranslateZ wert mit -1.

An dem Oberen Teil der Stuhllehne kann es zu einer Überschneidung kommen. Um diese zu korrigieren, wechseln wir in den CV-Modus und verschieben die CVs damit es ein größeres Loch wird.

![Überschneidung](/04a_modelling-nurbs/images/PraxisStuhl/09.png)

Nun im Isoparm Modus selektieren wir die beiden Rand Isoparms und mit <span class="menu">Surfaces > Planar</span> schließen wir das Loch.

![Vergrößerter Abstand](/04a_modelling-nurbs/images/PraxisStuhl/10.png)

![Korrektur Planar](/04a_modelling-nurbs/images/PraxisStuhl/11.png)

Diese Methode den Fehler zu korrigieren ist nicht ideal. Man könnte dieses Problem mit einem Polygon Objekt wesentlich einfacher lösen.
Worauf wir im Nächsten Abschnitt genauer eingehen.

## Schritt 3: Vordere Beine

Um die vorderen Beine zu modellieren benutzen wir die gleiche Technik wie bei der Kugel.

Zunächst duplizieren wir die Stuhllehne und den Abschluss, selektieren das Isoparm was innerhalb der Stuhlplatte ist und
trennen die Oberflächen mit <span class="menu">Surfaces > Detach Surfaces</span>.

![Durchtrennendes Isoparm](/04a_modelling-nurbs/images/PraxisStuhl/12.png)

Wir löschen den oberen Teil und positionieren das neue Bein.

![Fertige Beine](/04a_modelling-nurbs/images/PraxisStuhl/13.png)

## Schritt 4: Stuhllehne Details

Für das Detail Element in der Stuhllehne, erstellen wir wieder eine Kurve, passen sie in der Z-Achse an.
Zusätzlich brauchen wir einen Kreis, selektieren beides in der Richtigen Reihenfolge und erstellen die Oberfläche mit dem NURBS Extrude Tool.

![Detail Kurve](/04a_modelling-nurbs/images/PraxisStuhl/14.png)

## Schritt 5: Dekoratives Element

Für das dekorative Element unterhalb der Stuhlplatte, verwenden wir wieder die gleiche Technik.
Diesmal jedoch ist es einfacher die Kurve in der "Top" Ansicht zu zeichnen und dann dementsprechend in der Y-Achse die Punkte anzupassen.

![Kurve in der Top Ansicht gezeichnet](/04a_modelling-nurbs/images/PraxisStuhl/15.png)

![Kurvenpunkte in der Y-Achse angepasst](/04a_modelling-nurbs/images/PraxisStuhl/16.png)

Wir benutzen einen weiteren Kreis und das NURBS Extrude Tool um die Oberfläche zu generieren.

![Fertiger Stuhl](/04a_modelling-nurbs/images/PraxisStuhl/17.png)

### Schritt 4: Cleanup

Nachdem wir Modelliert haben, müssen wir die Szene aufräumen.

1. Alle Kurven löschen
2. Alle Objekte selektieren und die History löschen (<span class="shortcut">Alt-Shift-D</span>)
3. Alle Oberflächen selektieren und gruppieren (<span class="shortcut">Strg-G</span>) als "chair"
4. Den Pivot Point der Gruppe versetzen, sodass er am Fuss der Gruppe ist (<span class="shortcut">D</span> gedrückt halten und verschieben)
5. Die Höhe von einem Stuhl ist ca 90cm, dementsprechend müssen wir den Stuhl skalieren. (Referenz Würfel neben dem Stuhl stellen)
6. Mit der Gruppe Selektiert <span class="menu">Modify > Freeze Selection</span>

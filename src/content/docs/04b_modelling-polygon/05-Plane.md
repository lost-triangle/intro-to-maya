---
title: "Praxis: Bearcat Plane"
---

![](../../../assets/04b_modelling-polygon/images/05_plane/title.png)

## Materialien

- [Blaupausen](../../../assets/04b_modelling-polygon/images/05_plane/blueprints/BareCat-Blueprint.zip)

## Analyse

Das Flugzeug ist achsen-symmetrisch, wir müssen also nur eine Hälfte des Flugzeuges modellieren.
Man kann das Flugzeug in mehrere Segmente aufteilen:

- Hauptkörper (Zylinder)
- Rotor (Würfel)
- Flügel (Würfel)
- Heck (Würfel)
- Cockpit (Zylinder)

## Vorbereitungen

Bevor wir mit dem Modellieren anfangen legen wir uns ein neues Maya Projekt an und importieren die Blaupausen.

Mit <span class="menu">File > Project Window</span> legen wir ein neues Projekt an.
In dem Dialog auf **"New"** klicken und "Barecat" als "Current Project" eintragen, die restlichen Werte belassen wir auf die Standardeinstellungen.

![Neues Projekt anlegen](../../../assets/04b_modelling-polygon/images/05_plane/01.png)

Das Projekt wird angelegt wenn man auf **"Accept"** klickt.

## Blaupausen importieren

Wir kopieren nun die Blaupausen im Dateisystem in den Projektordner "source04b_modelling-polygon/images" (maya/projects/Barecat/source04b_modelling-polygon/images).

Zurück in Maya wechseln wir nun zur "Four View" (kurz die <span class="shortcut">Leertaste</span> drücken).
Für die Ansichten "top", "side" und "front" gibt es Blaupausen.
Um sie zu importieren wählen wir das entsprechende Panel-Menüs und klickt auf
<span class="menu">View > Image Plane > Import Image</span> und wählt die entsprechende Blaupause.

![Blaupausen importiert](../../../assets/04b_modelling-polygon/images/05_plane/02.png)

Um besser mit den Bildern zu arbeiten passen wir noch einige Einstellungen an:
Das Attribut Attribute Display setzen wir auf "looking through camera". Nun wird das Bild nicht mehr in der persp Ansicht angezeigt.

Um das Bild halbtransparent anzuzeigen setzt man den Wert "Alpha Gain" auf 0.5.

## Modellieren des Grundkörpers

Für den Grundkörper erstellen wir einen Poly-Cylinder (<span class="menu">Create > Poly Primitives > Poly Cylinder</span>) und setzen RotateX = 90.

Wir wechseln in die Side View, aktivieren im Panel Menü <span class="menu">Shading > X-ray</span> und positionieren den Zylinder am Anfang des Körpers und machen ihn so flach wie die Rotoraufhängung ist.

![Zylinder positioniert und skaliert](../../../assets/04b_modelling-polygon/images/05_plane/03.png)

Im Faces-Modus selektieren wir den ‚Boden‘ des Zylinders.
Wir benutzen nun das Extrude Tool (<span class="menu">Edit Mesh > Extrude</span>) um weitere Faces zu erzeugen. Für das Tool müssen wir darauf achten immer gleichmäßig zu skalieren und zu positionieren. Beim Extrudieren sollte man etwas vorrausplanen, wir werden das Cockpit, Flügel, Heck, und Heckflügel auch alle mit einem weiteren Extrude erstellen, daher sollte man für jedes Segment einen eigenen Extrude machen.

Beim Extrudieren orientiert man sich an der Top und der Side View und skaliert und bewegt man die neuen Faces.

![Mehrfacher Extrude angepasst](../../../assets/04b_modelling-polygon/images/05_plane/04.png)

Um die Rotoraufhängung zu modellieren selektieren wir die vordere Edge und wählen <span class="menu">Edit Mesh > Bevel</span> mit einer Fraction von 0.8 und Segments 4.

![Vorderer Bevel](../../../assets/04b_modelling-polygon/images/05_plane/05.png)

Wir selektieren die vorderen Faces des Bevel und machen einen weiteren Extrude für die Rotor aufhängung.

![Rotoraufhängung Extrude](../../../assets/04b_modelling-polygon/images/05_plane/06.png)

Im Edge Modus, selektieren wir die zwei harten Kanten die gerade durch den Extrude entstanden sind. Am einfachsten geht das indem man auf die Edge einen Doppelklick macht. <span class="menu">Edit Mesh > Bevel</span> Fraction 0.1, Segments 2

![Fertige Rotoraufhängung](../../../assets/04b_modelling-polygon/images/05_plane/07.png)

## Flügel

Zuerst passen wir die Basis des Flügels an. In der Side View, im Vertex-Mode die Vertex Punkte identifizieren, die sich an der Flügelbasis befinden (ggf. noch eine weitere Edge Loop einfügen). Diese leicht modifizieren damit sie der Flügelform angepasst sind.

![Angepasste Flügelbasis](../../../assets/04b_modelling-polygon/images/05_plane/048.png)

Damit wir die Flügel nur einmal modellieren müssen, löschen wir nun die Hälfte des FLugzeuges. Wir wechseln in die Front View und im Faces Modus selektieren wir alle Faces die im -X Bereich liegen. Mit <span class="shortcut">Del</span> löschen.

Nun selektieren wir wieder die Flügelbasis im Faces Modus und erzeugen grobe Flügel,indem man wieder mehrfach das Extrude Tool benutzt.
Wechselt man das Extrude Tool in Welt Koordinaten (der blauschwarze Schalter) erhält man völlig flache Flügel.

![Grobe Flügel](../../../assets/04b_modelling-polygon/images/05_plane/049.png)

Abwechselnd in der Top und der Front View passt man die Vertex Punkte mit dem Move Tool (<span class="shortcut">W</span>) an die Vorlage an.

Zum Abschluss benutzen wir das Edge Loop Tool um die Kanten des Flügels zu stabilisieren für den späteren Polysmooth vorgang. Drückt man 3 sieht man die Poly Smooth Voransicht. Mit der Taste 1 kommt man zurück in den Poly-Modus.

![Zusätzliche unterstützende Edge Loops](../../../assets/04b_modelling-polygon/images/05_plane/052.png)

## Heck

Ähnlich wie der Flügel wird das Heck extrudiert. Zunächst die Faces selektieren, die die Basis von dem Heck bilden und zweimal im World-Modus nach oben extrudieren. Die Vertexpunkte mithilfe der Referenzbilder anpassen.

![Grobes Heck](../../../assets/04b_modelling-polygon/images/05_plane/053.png)

In der Persp- Ansicht sieht man, dass nun zusätzlich Faces auf der X-Achse erzeugt wurden. Diese werden nicht gebraucht und werden beim Spiegeln zu einem ganzen Flugzeug
Probleme machen. Daher selektiert man und löscht sie.

## Heckflügel

Der Heck Flügel wird erstellt identisch wie der Flügel. Wir identifizieren wieder die Basis, passen sie im Vertex Modus an, und im Faces Modus Extrudieren wir sie.

![Basis Face für den Heckflügel](../../../assets/04b_modelling-polygon/images/05_plane/055.png)

![Fertig extrudierter Heckflügel](../../../assets/04b_modelling-polygon/images/05_plane/056.png)

## Cockpit

Für das Cockpit muss zunächst die Grundform des Cockpits durch verschieben der Vertexpunkte auf der Oberseite des Flugzeugs festgelegt werden.

![Angepasste Vertex Punkte](../../../assets/04b_modelling-polygon/images/05_plane/058.png)

Wieder mit mit Extrudes und der Verschiebung von Vertex Points die Form des Cockpits anpassen. Da wir nur mit einer Hälfte des Flugzeuges Arbeiten müssen wir darauf achten das die Punkte die direkt auf der an der X-Achse liegen nicht versehentlich in den -X Bereich verschieben.

![Grobes Cockpit](../../../assets/04b_modelling-polygon/images/05_plane/059.png)

Falls einem nicht genügend Vertex Points zur verfügung stehen um die gewünschte Form zu erhalten, muss man mithilfe des Edge Loop Tools sich Zusätzliche Punkte hinzufügen.

![Zusätzliche Edge Loop und Vertex Anpassung](../../../assets/04b_modelling-polygon/images/05_plane/060.png)

Wie bei dem Heck müssen die überflüssigen Faces auf der Innenseite des Modells entfernt werden.

![Überflüssige Faces](../../../assets/04b_modelling-polygon/images/05_plane/061.png)

Wir überprüfen nochmals ob die Vertex Punkte auf der X-Achse nicht im -X Bereich liegen. Falls doch kann man sie korrigieren indem man das Move Tool mit Gridsnapping (X-gedrückt halten) verwendet und dann auf den Pfeil der entsprechenden Achse klicken.

## Rotor

### Rotoraufhängung

<span class="menu">Create> Polygon > Cone</span> (RotateX = 90, Radius = 0.1, Height = 0.1) und an die Spitze des Flugzeugs setzen.

Die Face die den Boden der Cone bildet selektieren und mit Extrude zu dem Boden des Motors erweitern, anschliessend die Face löschen.

![Rotoraufhängung](../../../assets/04b_modelling-polygon/images/05_plane/062.png)

### Rotorblätter

Aus einem Polycube (<span class="menu">Create > Polygon > Cube</span>) (ScaleX 0.4, ScaleY 0.05, ScaleZ 0.2) formen wir ein einzelnes Rotorblatt. Der Würfel muss so verändert werden, dass er zwischen der Rotoraufhängung und dem Flugzeug passt. Zusätzlich bekommt der Würfel eine Schräge, indem wir die hintere Face nach oben verschieben.

![Einzelnes Rotorblatt](../../../assets/04b_modelling-polygon/images/05_plane/063.png)

Bevor wir das Rotorblatt duplizieren müssen wir den Pivot Point modifizieren. Hierfür drücken wir <span class="shortcut">D+X</span> und setzen den Pivot Point auf die Y-Achse.

![Modifizierter Pivot Point](../../../assets/04b_modelling-polygon/images/05_plane/065.png)

Mit <span class="menu">Edit > Duplicate Special (option)</span> In den optionen setzen wir RotateZ auf 9 und Number of copies auf 40.

![Duplicate Special](../../../assets/04b_modelling-polygon/images/05_plane/066.png)

### Propeller

Wir bauen aus einem PolyCube (<span class="menu">Create > Polygon > Cube</span>) den Propeller.

Erst ihn positionieren und in die Länge und Breite skalieren. Danach selektiert man eine Face an der Spitze des Propellers und macht ihn an einer Spitze breiter und an der anderen schmaler in der Höhe und rotiert die Face um ca. 45°. (In der Seitenansicht hat man eine besseren Überblick)

Die Ränder vom Cube selektieren <span class="menu">Edit Mesh > Bevel</span>

![Propeller Blatt](../../../assets/04b_modelling-polygon/images/05_plane/067.png)

Wir positionieren den Pivot wieder auf die Z-Achse und mit Duplicate erzeugen wir eine Kopie die wir um 180 Grad drehen.

## Cockpit Fenster

Wir selektieren den Hauptkörper und wählen <span class="menu">Mesh>Mirror</span>

Nun selektieren wir die vorderen Faces die das Fenster definieren. Dann machen wir einen Extrude mit Offset = 0.01 und dann einen weiteren Extrude Thickness = -0.01

![Fenster](../../../assets/04b_modelling-polygon/images/05_plane/068.png)

---
title: 3. Graph Editor
---

Der Graph Editor (Window > Animation Editors > Graph Editor) ermöglicht es die Keyframes graphisch zu visualisieren, sowie den Übergang von Frame zu Frame.

![Graph Editor mit Kontroll punkt eines Keyframes selektiert](/08_animation/images/grapheditor/selectedKeyframe.png)

Auf der rechten Seite hat man die graphische Darstellung der Animation. Selektiert man ein Objekt z.B. in der Perspektivischen Ansicht wird der Graphe angezeigt. Die schwarzen Punkte sind die entsprechenden Keyframes.
Die Outliner-Liste an der linken Seite zeigt die selektierten Objekte an, sowie die Channels die bereits einen Keyframe haben und ermöglicht schnelles selektieren von bestimmten Attributen. Man wählt sie aus der Liste auf der linken Seite aus (Mit Shift-LMB bzw. Strg-LMB macht man eine mehrfach Auswahl).

Um den Kurvenverlauf zu verändern manipuliert man entweder direkt den Keyframe oder die Kontrollpunkte der Keyframes. Durch Anklicken der Keyframes selektiert man diese (bzw. zieht ein Rechteck für eine mehrfach Auswahl). Man kann die Punkte manipulieren, indem man zunächst mit der Taste W in das Move Tool wechselt. Mit MMB lässt sich der Keyframe frei manipulieren, Mit Shift-MMB lässt sich der Keyframe nur horizontal oder vertikal verschieben (je nach dem, wie man die Maus bewegt).
Anmerkung: Man muss immer zuerst das Move Tool selektiert haben, um den Keyframe mit MMB zu bewegen.

### Keyboard Shortcuts

| Shortcut                                  | Funktion                                      |
| ----------------------------------------- | --------------------------------------------- |
| <span class="shorcut">W, MMB</span>       | Move Keyframe                                 |
| <span class="shorcut">W, MMB-Shift</span> | Horizontal bzw. vertikal Keyframe verschieben |
| <span class="shorcut">F</span>            | Focus on Keyframe (Zoomed den Graph)          |
| <span class="shorcut">ALT - MMB</span>    | Move Graph                                    |
| <span class="shorcut">Alt-RMB</span>      | Zoom Graph                                    |

### Tangents

Die Einstellung der Tangents bestimmt wie man die Kontrollpunkte manipulieren kann und wie der Kurvenverlauf nach dem Keyframe interpretiert wird.
Mit dem Menü lässt sich der Umwandeln z.B. ermöglicht „Spline“ gerundete Kurven, „Linear“ eckige und „Stepped“ springt sprunghaft zu einem anderen Wert.

![Die jeweiligen Keyframes umgewandelt in Spline, Linear, Stepped](/08_animation/images/grapheditor/curveVariants.png)

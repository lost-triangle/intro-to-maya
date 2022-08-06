---
title: 3.3 Tastaturkürzel
sidebar_position: 3
---

Das Interface wurde gestaltet sodass viele Funktionen direkt mit Tastaturkürzel erreichbar sind.
Um effektiv mit Maya arbeiten zu können muss man diese nach und nach erlernen.

Die am meisten benutzten Shortcuts ist die Kamerasteuerung <span class="shortcut">ALT + Maustaste</span>, sowie <span class="shortcut">LEERTASTE</span>
kurz gedrückt um von der aktuellen Ansicht in die vorhergehende zu wechseln.

## Überblick der wichtigsten Shortcuts

Die QWERTY-Tools, (Q Select Tool, W Move Tool, E Rotate Tool, R Scale Tool, T Show Manipulator, Y Last Tool Used) sind
die am häufigsten benutzten Tools in Maya. Die dazugehörigen Tastaturkürzel sind gleichbleibend über das gesamte Programm
und können in vielen Interaktionsfenstern benutzt werden.

| Befehl                                                                               | Kürzel                                 |
| ------------------------------------------------------------------------------------ | -------------------------------------- |
| Speichern (oft benutzen)                                                             | <span class="shortcut">Strg-S</span>   |
| Select                                                                               | <span class="shortcut">Q</span>        |
| Move Tool                                                                            | <span class="shortcut">W</span>        |
| Rotate Tool                                                                          | <span class="shortcut">E</span>        |
| Scale Tool                                                                           | <span class="shortcut">R</span>        |
| Show Manipulator Tool                                                                | <span class="shortcut">T</span>        |
| Last Tool Used                                                                       | <span class="shortcut">Y</span>        |
| Toggle Edit Pivot Point (nur mit Move,Rotate, Scale)                                 | <span class="shortcut">D</span>        |
| Edit Pivot Point                                                                     | <span class="shortcut">Einfg</span>    |
| Undo                                                                                 | <span class="shortcut">Z</span>        |
| Redo                                                                                 | <span class="shortcut"></span>         |
| Duplicate                                                                            | <span class="shortcut">Strg-D</span>   |
| Duplicate Special                                                                    | <span class="shortcut">Shift-D</span>  |
| Delete History                                                                       | <span class="shortcut">Alt-D</span>    |
| Multiples drücken der Tastenkombination zeigt ChannelBox / Attribute Editor / Nichts | <span class="shortcut">Strg-A</span>   |
| Focus on Object                                                                      | <span class="shortcut">F</span>        |
| Focus in all Views                                                                   | <span class="shortcut">Shift F</span>  |
| Show all                                                                             | <span class="shortcut">A</span>        |
| Show all in all Views                                                                | <span class="shortcut">Shift-A </span> |

## ViewPanel Eigenschaften (Tasten 1-8)

### Tasten 1, 2, 3

Für die Tasten 1-3 Muss ein Objekt selektiert sein.

#### Nurbs Objekte

Alles was man in den ViewPanels sieht ist nur eine grobe Vorschau. Man kann daher für einzelne Objekte die Vorschauqualität verändern.
In View Panels kann man mit <span class="shortcut">1</span> (geringe Qualität), <span class="shortcut">2</span> (mittlere Qualität), <span class="shortcut">3</span> (hohe Qualität)
die Displayqualität des selektierten NURBS-Objekts verändern - dies hat keinen Einfluss auf das spätere Rendern.

![NURBS Sphere, Low (1)](/03_maya_basics/images/keyboardshortcuts/Nurbs1.png)

![NURBS Sphere, Medium (2)](/03_maya_basics/images/keyboardshortcuts/Nurbs2.png)

![NURBS Sphere, High (3)](/03_maya_basics/images/keyboardshortcuts/Nurbs3.png)

#### Polygon Objekte

Bei Polygon-Objekten wird beim Benutzen der Taste 2 (Smoothing with Polycage), oder 3 (Smooth Mesh Preview) ein Preview Smoothing. Mit 1 kann man den ursprünglichen Zustand wiederherstellen.

Diese Einstellung hat einen Einfluss (bei den meisten Renderengines) auf den Rendervorgang.

![Polygon Sphere, Default (1)](/03_maya_basics/images/keyboardshortcuts/Poly1.png)

![Polygon Sphere, Polycage (2)](/03_maya_basics/images/keyboardshortcuts/Poly2.png)

![Polygon Sphere, Smoothmesh Preview (3)](/03_maya_basics/images/keyboardshortcuts/Poly3.png)

### Die Tasten 4 - 7

Am Anfang sind alle Panels von Maya im Shaded Modus (Taste 5). d.h. Maya stellt alle Objekte mit einer Oberfläche dar.
Als alternative kann man aber auch in die Gitteransicht wechseln (4). Taste 6 wechselt in den Modus Shaded with Texture.
Hat man dem Objekt eine Textur dem Objekt zugewiesen so lässt sich eine Vorschau mit der Taste 6 anschalten.
Sind Lichter in der Szene vorhanden lässt sich eine Vorschau der Lichter mit der Taste 7 aktivieren.

![Wireframe (4)](/03_maya_basics/images/keyboardshortcuts/Wireframe.png)

![Shaded (5)](/03_maya_basics/images/keyboardshortcuts/Shader.png)

![Shaded mit Textur(6)](/03_maya_basics/images/keyboardshortcuts/ShaderandTexture.png)

![Lights (6)](/03_maya_basics/images/keyboardshortcuts/Lights.png)

## Eigene Tastaturkürzel

![Hotkey Editor](/03_maya_basics/images/keyboardshortcuts/HotkeyEditor.png)

Falls man nicht mit den Standard-Keyboard shortcuts zurecht kommt, kann man in dem Hotkey Editor
(<span class="menu">Window > Setting and Preferences > Hotkey Editor</span>) sich sein eigenes Tastaturlayout anlegen.

Wechselt man den Workspace, muss man ggf. sein eigenes Tastaturlayout nochmals aktivieren.

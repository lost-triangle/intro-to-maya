---
title: 3.2 Grund Einstellungen
sidebar_position: 2
---

In Maya können viele Funktionen seinen eigenen Präferenzen angepasst werden. Die allgemeinen Einstellungen findet man unter:
<span class="menu">Window > Settings and Preferences > Preferences</span>

Wir werden nun einige Funktionen anpassen um besser mit Maya arbeiten zu können.

## Polygon Faces mit Center

Man kann für Polygon Faces einen zusätzlichen Punkt in der Mitte der Face anzeigen lassen.

Dieser kleine visuelle Unterschied erleichtert das selektieren von Faces.
Wir können auch schneller den Fehler "Faces ohne Fläche" erkennen, da der Punkt auch angezeigt wird,
wenn eine Face keine Fläche hat.

![Whole Face Selection](/03_maya_basics/images/einstellungen/PolyFaceWhole.png)

![Center Selection](/03_maya_basics/images/einstellungen/PolyFaceCenter.png)

Hierfür aktiviert man unter "Selection - Polygon Selection" "Center".

!["Select Faces with Center" aktiviert](/03_maya_basics/images/einstellungen/PolyFaceSettings.png)

## Autosave aktivieren

Manchmal stürzt Maya einfach ab. Um möglichst wenig Arbeit zu verlieren bietet Maya eine Autosave Funktion an.
Maya wird dann automatisch die aktuelle Szene als neue Datei im "autosave" Ordner abspeichern.

Hierfür setzen wir unter "Settings - Files/Projects" unter "Autosave" bei "Enable" ein Häkchen.
Das Attribut "Interval" bestimmt wieviele Minuten vergehen sollten zwischen dem speichern (Standard: Alle 10 Minuten)

Zusätzlich sollte man die Anzahl der Autosaves begrenzen, da ansonsten schnell mehrere Gigabyte an Dateien im Autosave Ordner gespeichert werden.

![Autosave aktiviert](/03_maya_basics/images/einstellungen/autosave.png)

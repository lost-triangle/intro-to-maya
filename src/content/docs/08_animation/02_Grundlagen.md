---
title: 2. Grundlagen
---

## Storyboard

Man sollte am Anfang ein klares Bild von dem machen was man animieren möchte. Es ist sehr hilfreich ein Storyboard aufzumalen, egal ob man malen kann oder nicht - hauptsache man hat sich grob visualisiert was die Animation sein sollte.

## Frames

Jedes Einzelbild einer Animation wird als Frame bezeichnet. Üblicherweise werden Animationen in Europa mit dem Pal-Standard 25fps(Frames per Second) abgespielt. Das bedeutet 1 Sekunde braucht 25 Frames.

## Playback

Am Ende des TimeSliders hat man die Playback Controls. Klickt man Play wird die aktuelle Playback Range in einer Endlosschleife abgespielt.

### Keyboard Shortcuts

| Shortcut                                        | Funktion                                  |
| ----------------------------------------------- | ----------------------------------------- |
| Playback starten/stoppen                        | <span class="shortcut">Alt-V</span>       |
| Playback auf Min Frame der Playbackrange setzen | <span class="shortcut">ALT-Shift-V</span> |
| Zum nächsten Keyframe springen                  | <span class="shortcut">.</span>           |
| Zum vorhergehenden Keyframe springen            | <span class="shortcut">,</span>           |
| Einen Frame vorwärts                            | <span class="shortcut">ALT-.</span>       |
| Einen Frame rückwärts                           | <span class="shortcut">Alt-,</span>       |

## Keyframe Animation

Bei der Keyframe Animation werden in der Animation an bestimmten Zuständen Keyframes gesetzt und der Computer errechnet dann alle Zwischenbilder. Möchte man z.B. eine Kugel in 1 Sek von Punkt A(0,0,0) zu Punkt B(10,0,0) bewegen, setzt man bei Frame 1 den Ball auf Punkt A und setzt einen Keyframe, und bei Frame 25 einen Keyframe mit dem Ball auf Punkt B.

Es wird in Maya immer zwischen zwei gesetzten Keyframes ein „Ease in and Ease Out“ verwendet.

### Keyboard Shortcuts

| Shortcut                                        | Funktion                              |
| ----------------------------------------------- | ------------------------------------- |
| Transform Keyframe (XYZ)                        | <span class="shortcut">Shift-W</span> |
| Rotate Keyframe(XYZ)                            | <span class="shortcut">Shift-E</span> |
| Scale Keyframe (XYZ)                            | <span class="shortcut">Shift-R</span> |
| Key All (Keyframe für Transform, Rotate, Scale) | <span class="shortcut">S</span>       |

In der Praxis vermeidet man es "Key All" zu verwenden, da man meist die drei Transformationen unabhängig Animiert, und "Scale" wird selten verwendet und so werden unnötige Keyframes gesetzt.

## Motion Path Animation

Bei der Motion Path Animation, setzt man ein Objekt auf einen vordefinierten Pfad. Über eine bestimmte Zeit hinweg wandert das Objekt den Pfad entlang. (Die Animation beginnt am Anfang der Kurve und endet am Ende der Kurve).
Dies ist besonders nützlich, da man im Vorfeld die Route des Objekts visuell auslegen kann und dann einfach das Objekt entlang der Kurve animiert.

## Reaktive Animation

Reaktive Animation benutzt man um Objekte auf eine Animation reagieren zu lassen. man bewegt z.B. ein Auto von A nach B, dann sollten die Räder sich dementsprechend drehen.

## Expressions

Man kann eine Bewegung mit einer mathemeatischen Funktion definieren. Hierfür definiert man für jede Variable die man beinflussen möchte eine entsprechende Funktion.

## Animation Tools

### Constrains

Mit den verschiedenen Constraints lassen sich Eigenschaften von mehreren Objekten simultan und identisch modifizieren.

### Deformers

Deformers können zum modellieren sowie zum Animieren verwendet werden. Der Befehl „Delete History“ (ALT-D) löscht daher die Deformers. Möchte man die History löschen ohne die Animation durch einen Deformer zu verlieren wählt man Edit > Delete by Type > Non-Deformer History.
Alle Non-Linear Deformer werden zunächst einfach erstellt dann muss man die Attribute für die jeweilige Form konfigurieren. Anschließend kann man mit diesem Attribut deformieren.

### Skeleton

Ein Animationsskelett besteht aus Joints und IK Handles. Geometrie wird als Skin an das Skelett gebunden. Beim Bewegen des Skeletts wird die Geometrie verformt und passt sich dem Skelett an.

## Null Objekte

Man kann sich zusätzliche Objekte, wie z.B. Locator (Null Objekte) erstellen, die als Kontrollen für das eigentliche Objekt dienen. Man animiert dann nur den Locator und nicht das eigentliche Objekt. Möchte man dann später das Objekt modifizieren oder verändern ist es sehr einfach. Man muss lediglich das alte Objekt mit dem neuen austauschen und wieder an den Locator binden.

## Datei Referenzen

Arbeitet man mit Datei Referenzen trennt man weiter Animation von Modelling. Referenzen sind dann externe Dateien die geladen werden um die Objekte für die Animation bereitzustellen. Mit File > Create Reference lässt sich so eine Referenz erstellen. Mit File > Export Selected lässt sich ein Objekt exportieren, um als gute Referenzdatei zu dienen.

Dupliziert man ein referenziertes Objekt so ist auch das Duplikat eine Referenz. Modifiziert man die Geometrie dann wird das Objekt unter Umständen nicht mehr referenziert bzw. gibt es Probleme wenn man die Originaldatei modifiziert.

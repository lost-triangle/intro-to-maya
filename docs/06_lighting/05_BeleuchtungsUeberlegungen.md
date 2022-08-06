---
title: 5. Vorbereitungen Licht
---

Die Beleuchtung in einer Szene kann dramatisch die Aussage und die Interpretation des Bildes verändern.
Mit der Beleuchtung kann man die Stimmung gestalten

Licht gibt dem Betrachter Hinweise auf die Tageszeit, ist er in einem Raum oder ist er im Freien.

Es gibt 5 Ziele die verfolgt werden sollten beim einsetzen von Licht:

1. Die Grundlegende Umgebung bestimmen, zu welcher Uhrzeit findet die Szene statt
2. Stimmung Erzeugen
3. Das Auge des Betrachters auf das Wichtigste zu lenken
4. Die visuelle Tiefe, contrast, volumen der Szene zu verdeutlchen
5. Das gesamte Bild visuell interesant zu gestalten.

# Initiale Beleuchtung

Wenn man anfängt die ersten Lichter in eine Szene zu setzen, sollte man sich überlegen
wo und wie man in der Realität Lampen aufstellen würde. Dies verhindert, dass man zuviele Lampen verwendet und das die Lampen richtig positioniert sind (die korrekte Distanz zwischen Licht und Objekt).

Beispielsweise wird zwar ein Light Icon nicht ausgerendert, aber in der Realität könnte man keine Lampe direkt in das Bild setzen.
Sieht man eine Lampe in der Render_Cam so ist mit hoher wahrscheinlichkeit die Lampe zu nah an dem Subjekt. -
Gibt es ein Fenster in der Szene, so sollte man sich überlegen welche Tageszeit ist es, wie stark scheint die Sonne in die Szene.

Setzt man die Lampen an realistische Positionen, stellt man schnell fest das man nicht so viele Lichter braucht.

Erst nach dieser initialen Phase, kann man anfangen die Lichter für den gewünschten Effekt anzupassen und ggf. noch weitere Lichter hinzufügen.

## Generelle Tipps

## Test Render

Insbesondere mit Arnold, lässt sich schnell Testrender anfertigen.
Man sollte soviele Testrender wie möglich machen um genau zu sehen wie die Beleuchtung die Szene verändert.

## Was macht jedes Licht

Man sollte sich immer im klaren sein was jedes einzelne Licht in der Szene macht.
Daher sollte man immer jede Lampe einen Namen geben der schnell aufschluss gibt was es macht. z.B. "key_light", "sun", oder "rim_mainCharacter".

Mit Isolate Light lässt sich schnell ein Test Render machen um zu sehen welchen Einfluss das Licht auf die Szene hat.

## Animation

Bei der Animation kann es schnell passieren, das die Beleuchtung für eine Position stimmt, jedoch sobald sich etwas aus der Szene bewegt
stimmt die Beleuchtung nicht mehr, oder ein unerwarteter Schatten ist zu sehen.

Um diese Probleme zu vermeiden muss man unbedingt Test Render an verschiedenen Punkten in der Animation vornehmen.

## Tageszeit

Das Licht mit dem Menschen am vertrautesten sind, ist das Tageslicht.
Je nach Tageszeit ist die Farbe des Lichts, die Länge der Schatten und die Größe der Sonne am Horizont anders.

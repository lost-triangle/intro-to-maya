---
title: 5.4 Kameraführung für Animation
---

# Kameraführung

Man muss bei einer Animation nicht unbedingt die Kamera animieren.

Falls man sie doch animiert sollte man sicherstellen das die Kamera den Gesetzen der Physik befolgen und man nicht wilde Kamerafahrten macht die man in der Realität nicht machen kann.

Grundsätzlich sollte man anfags immer nur mit Schnitten arbeiten und nur ggf. später um die Szene zu unterstützen ganz am Ende eine Kamerafahrt hinzufügen.

## Umsetzung in Maya

Beim erstellen der Shots mit der Camera sollte man immer eine neue benannte Kamera z.B. „shotCam“ erstellen. Wenn man in die Perspektive der Kamera wechselt sollte man immer die Resolution Gate (Panelmenü > Camera Settings > Resolution Gate) aktiv haben. Mit der Resolution Gate sieht man genau was später gerendert wird.
Man kann ohne große Probleme einer Kamera Keyframes hinzufügen.

## Simple Camera Rig

Mit einem Camera Rig, lässt sich flexibler mit einer Kamera arbeiten. Der Locator wird benutzt um die Kamera zu bewegen, gleichzeitig lässt sich mit dem Locator den Rotationspunkt verändern.

### Schritt 1: Camera Erstellen

Eine Kamera der Szene hinzufügen (Create > Cameras > Camera). Die Kamera etwas auf der Y Achse nach oben bewegen (TranslateY = 5).

### Schritt 2: Camera Rig

Einen Locator erzeugen (Create > Locator) und auf „stativ umbenennen.
Die Camera und dann den Locator selektieren und dann Edit > Parent (P).

Einen weiteren Locator erzeugen, auf „ziel“ umbenennen, und ihn vor die Kamera setzen (TranslateY = 5, TranslateZ = -5).

Erst den Locator „ziel“ und dann den Locator „stativ“ selektieren und dann Edit > Parent (P).
Den Locator und dann die Camera selektieren im Animation Menü Constrain > Aim (In den Optionen sicherstellen das „maintain Offset“ aktiviert ist)

Mit dem „Stativ“- Locator kann man nun die allgemeine Position der Kamera verändern und gleichzeitig hat man einen weiteren Rotationspunkt.
Mit dem „Ziel“-Locator lässt sich einfach die Orientierung der Kamera in allen Ansichten setzen. Ein weiterer Vorteil ist das man schnell ein bewegendes Objekt verfolgen kann indem man den Locator per Parent an das bewegende Objekt bindet.

### Kamera Fahrten

### Kamera Shake

### Multiple Kameras

## Abschließende Bemerkungen

## Kamerafahrt

In den meisten Beispielen wurden keine Kamerafahrten gemacht. Man sollte zuerst die Kamerafahrt animieren und dann mit der eigentlichen Animation beginnen. So spart man sich die Arbeit Objekte zu animieren die gar nicht von der Kamera erfasst werden.

## Hierarchie(Gruppen/Parenting)

Man sollte immer darauf achten mit Gruppen und einer Hierarchie zu arbeiten. Es ist einfacher Teile eines Objekts zu animieren und dann zu einem Objekt zu gruppieren und dann, als ein zusammenhängendes Objekt, zu animieren.

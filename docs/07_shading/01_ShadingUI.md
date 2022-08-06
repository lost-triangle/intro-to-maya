---
title: 1. Shading UI
---

# Shading UI

## Vorbereitungen

Wir werden die Render Engine "Arnold" verwenden.

Um Arnold verwenden zu können muss man das Plug-In installiert und aktiviert haben.

## Menü

Um zu rendern braucht man das Menü „Rendering“ (**F6**).

## Panels

Beim vorbereiten auf das Rendern benutzt man den „Hypershade Editor“, die „Render View“ und eine Kamera-Ansicht.

## Shelf

Die “Rendering”-Shelf ist eingeteilt in Lichter, Camera, Basis Shader und Render Einstellungen

![](/07_shading/images/01_ui/shelf.png)

# Zuweisung eines Shaders

# Hypershade

Man benutzt den Hypershade um sich zu visualisieren wie ein Shader funktioniert.
Man kann eigene Shader „programmieren“ indem man verschiedene Nodes miteinander verbindet.
Man öffnet den Hypershade mit #[span.menu Window > Rendering Editors > Hypershade].
Der Hypershade besteht aus drei Teilen

1. Create Nodes (linke Seite): Hier lässt sich jeder Typ von Shading Node in die Work Area erstellen.
1. Existing Shaders (rechts Oben): Eine Übersicht von allen Shading Nodes (wie Materials, Lights, etc.)
1. Work Area (rechts Unten): Hier lassen sich Nodes miteinander verbinden.

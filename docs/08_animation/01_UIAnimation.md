---
title: 1. UI für Animation
---

## Menü

Die Haupt Animations-Operationen für Keyframe Animation findet man im “Animation” Menü (#[span.shortcut F2]).

## Animation Shelf

![Animation Shelf](/08_animation/images/00_ui/Animation_Shelf.png)

Die Animation Shelf ist in drei Gruppen eingeteilt:

1. **Animation Tools:** Playblast, Motion Trail, Enable Ghosting, Disable Ghosting, Bake Animation
2. **Keyframe Tools:** Set Key, Set Key on Animated, Set Key For Transform, Set Key for Rotation, Set Key for Scale
3. **Constraints:** Parent, Point, Orient, Scale, Aim, Pole Vector

## Playback Speed

Spielt man eine Animation in Maya ab, so wird die Animation „so schnell wie möglich“ abgespielt d.h. die Frame Rate in Maya
bestimmt die Abspielgeschwindigkeit. Diese hängt direkt von der Komplexität der Szene und die Rechenleistung des Computers
ab. Sie wird bestimmt durch An- zahl der Bilder(Frames) pro Sekunde. Insbesondere wenn man nur eine sehr einfache Szene hat,
kann es sein, dass z.B. eine Frame Rate von 120 Frames/Sekunde austritt. Ein normaler Film hat eine Frame Rate von 24 bzw.

25. Die Animation würde daher 5x schneller als Normal abgespielt werden.

Man kann Maya jedoch auch limitiert in „Echtzeit“, also 24 Bilder/sek, abspielen zu lassen. Mit RMB auf den Time Slider
klicken und unter Playback Speed „Play Every Frame, Max Real-time“ aktivieren.

Alternativ lässt sich das auch unter Window > Setting and Preferences > Preferences TimeSlider einstellen.

## Frame Rate

Standardmäßig nimmt Maya an, man entwickelt für einen Film, also eine Framerate von 24 Bil- der/sek. Man sollte immer am
Anfang seines Projekts die richtige Framerate setzen. Die Einstel- lungsmöglichkeit fndet man unter Window > Setting and
Preferences > Preferences - Settings

## Playblast

Die Animation wird zunächst als Pre-Render in möglichst geringer Qualität ausgerendert. Diese erlauben einen Einblick in
die finale Animation und erlauben noch Feinabstimmungen an der Animation vorzunehmen. Hierfür wird die Maya interne Render-Engine
verwendet um einen sog. Playblast zu erzeugen.

Ein Playblast rendert die Animation mit der Maya-Darstellungs Engine aus, d.h. so wie gerade in einer Kameraperspektive die Szene angezeigt wird, werden die Einzelbilder der Animation ausgerendert.
Um einen Playblast zu erzeugen RMB auf den Timeslider > Playblast.
Der Playblast wird in dem Programm „fcheck“ sofort angezeigt.

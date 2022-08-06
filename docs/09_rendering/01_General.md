---
title: 1. General Settings
---

# Allgemeine Einstellungen

## Bildformat

Bei der Wahl des Bildformats sollte beachtet werden, das ein Format gewählt wird
was einerseits die Berechnungen der Renderengine exakt abspeichert und gleichzeitig kompatibel mit dem Videobearbeitungsprogramm ist.

Bei der Wahl des Bildformats sollte man beachten was das Bildformat leistet:

- Kompression
- Farbtiefe
- Custom Channels

### Kompression

Es gibt zwei Arten von Kompressionsalgorithmen:

- Lossy: Ein Teil der Information gehen beim Komprimieren verloren.
  Der Kompressionsvorgang ist nicht mehr rückgängig zu machen.
  Speichert man z.B. ein JPEG Bild mehrfach ab, so entstehen JPEG Artifakte und die Qualität des Bildes verringert sich bei jedem abspeichern.
- Lossless: Die Informatonen werden komprimiert, und können wieder in ihren ursprünglichen Zustand wiederhergestellt werden.

Wir wollen ein Bildformat wählen was eine "lossless"-Kompression unterstützt.

### Farbtiefe

Die bekannten Bildformate, z.B. JPEG oder PNG, benutzen Integer (Ganze Zahlen, 8-bit) um Farbinformationen zu speichern.

Die professionellen Formate erhöhen die Farbgenauigkeit mithilfe von Float (gleitkomma Zahlen). OpenExr speichern Bildinformationen in zwei Varianten von Float Formaten, half-float (16-Bit) und float (32-Bit). Half-float Bilder verbrauchen wesentlich weniger Speicherplatz als float Bilder. Die erhöhte Farbgenauigkeit ermöglicht es bei der Farbkorrektur ein besseres Ergebnis zu erzielen. Falls nötig kann man das 32-bit in ein 8-bit Bild umwandeln.

Informationen gehen verloren wenn man sie ohne Gleitkommazahlen abspeichert. Zum Beispiel würde ein Pixel den Wert 20 haben, obwohl er eigentlich den Wert 20,4425 entspricht.
Hingegen ist der Vorteil von 8-bit Farbtiefe ist das sie relativ wenig Speicherplatz verbraucht.

Ein Mittelweg ist es die Half Precision (16-Bit Farbtiefe) zu verwenden.
In den meisten Fällen ist diese Genauigkeit mehr als ausreichend und man spart Speicherplatz.

Für Test-Render, die nicht nachbearbeitet werden, kann man die 8-Bit Farbtiefe verwenden.
Für Final gerenderte Bilder ist ratsam Bilder mit 32-bit Farbtiefe abzuspeichern, da die erhöhte Farbgenauigkeit uns bei der Farbkorrektur einen größeren Spielraum gibt.

## Custom Channels

Wir werden beim Rendern verschiedene Render Passes ausrendern.
Diese können entweder in einzelne Dateien gespeichert werden oder in einer einzigen Datei.
Es ist wesentlich praktischer alle Render Passes in einer einzigen Datei abzuspeichern.

## Bild Formate

### JPEG

Das JPEG Format sollte nur für Testrender verwendet werden. Es unterstützt nur eine Lossy compression, 8-bit Farbtiefe und RGB-Channels.

### Tiff

Tagged Image File Format ist ein sehr kompliziertes Format und wird von Programm zu Programm unterschiedlich interpretiert.
Das Tiff-Format bietet die Möglichkeit eines Alpha-Kanals und 32-Bit Unterstützung. Der Nachteil an diesem Format ist der
hohe Speicherplatzbedarf der Einzelbilder.

### OpenEXR

Das OpenEXR-Format wurde von ILM entwickelt und unterstützt High-Dynamic-Range Farbinformationen und verschiedene verlustfreie
und verlustbehaftete Kompressions-Algorithmen. Die Zip-Kompression liefert ein verlustfreies Ergebnis mit einer sehr hohen
Kompression.

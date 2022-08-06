---
title: 2. Shading Grundlagen
---

## Diffuse Reflektion

Im Prinzip ist das die Grundlage wie Licht gestreut wird.
Ein geringer Wert für ein diffuses Material reflektiert direkt und wirkt wie eine glatte Oberfläche.

Ein sehr diffuses Material wäre hingegen z.B. Beton oder Papier diese haben raue Oberflächen und streuen das Licht in alle Richtungen.

![Diffuses Material](/07_shading/images/02_grundlagen/diffuse.png)

## Direct Reflection

Eine Reflection simuliert die Eigenschaft eines Spiegels. Wie z.B. Porzellan oder Chrome. Hier ist zu beachten, dass nur die wenigsten Materialien die Umgebung perfekt spiegeln z.B. Silber oder Gold. Meistens handelt es sich um eine verschwommene Reflektion. Diese wird mit der Blurred Reflection Eigenschaft kontrolliert.

![Direct Reflection](/07_shading/images/02_grundlagen/direct.png)

### Specular Highlights

Maya unterscheidet zwischen der Umgebung die reflektiert wird und den Lichtquellen die in dem Material gespiegelt werden. Diese Trennung kommt nicht in der Natur vor. Man benutzt diese Trennung in 3D-Programmen, weil virtuelle Lichtstrahlen von einem unendlich kleinen Punkt ausgesendet werden und so nicht direkt im Material gespiegelt werden können.

## Refraction

Transparente Objekte brechen die durch Lichtstrahlen sie hindurch gehen. Diesen Effekt nennt man „Refraction“. Jedes Material hat seinen eigenen Index of Refraction (IOR). Glas hat beispielsweise einen Brechungsfaktor von 1.4. Um eine raue Oberfläche zu simulieren muss man „Refraction Blurring“ aktiviere.

![Refraction](/07_shading/images/02_grundlagen/refraction.png)

### Fresnel Reflection

Der Fresnel Effekt ist ein physikalischer Effekt, welcher die Reflektion je nach Einfallwinkel des Lichts errechnet. Das bedeutet, dass Teile des Objekts die zu der Kamera hin zeigen weniger reflektieren als die Teile des Objekts die einen Winkel zu der Kamera einnehmen.

![Fresnel](/07_shading/images/02_grundlagen/fresnel.png)

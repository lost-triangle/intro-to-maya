---
title: "Anhang: Legacy Shader"
---

Maya verfügt noch über weitere Basisshader, die früher insbesondere mit der Maya Software Renderer verwendet worden sind.
Die Shader werden meist noch unterstützt von modernen Render Engines, jedoch werden die Shader im Alltag nicht verwendet.

## Phong / Phong E

Phong erweitert das Lambert Material mit der Eigenschaft einen Glanzpunkt zu simulieren,
sowie Refractions und Reflections zu verwenden.
Die Stärke des Glanzpunktes wird mit dem Attribut „Cosine Power“ angepasst.

Initial wirkt das Material wie Plastik.

![Phong](/a_anhang/images/shading/phong.png)

## Anisotropic Shader

Um Mikrostrukturen der Oberfläche zu simulieren, verwendet man ein Anisotropic Material.
Solche Strukturen findet man z.B. auf der Unterseite einer DVD oder bei Seide.

![Anisotropic](/a_anhang/images/shading/anisotropic.png)

## Ramp Shader

Der Ramp Shader ermöglicht es verschiedene Materialien/Farben gleichzeitig auf einem Objekt zu verwenden. Je nach Betrachtungswinkel der Kamera werden die entsprechenden Materialien verwendet. Ein Verwendungszweck von dem Shader ist eine künstliche Fresnel Reflection auf ein Objekt zu projezieren. (Insbesondere wenn man Maya Software Renderer verwendet)

![Ramp Shader](/a_anhang/images/shading/rampshader.png)

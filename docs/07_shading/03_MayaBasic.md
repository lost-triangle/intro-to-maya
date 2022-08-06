---
title: 3. Maya Shader
---

Jedes 3D-Modell muss man sich als Gittermodel vorstellen.
Erst mit einem zugewiesenen Shader wird die Oberfläche des Objekts bestimmt.
In Maya wird jedem Model standardmäßig das Material "lambert1" zugewiesen, so erscheinen 3D Objekte mit einer grauen Oberfläche.

Ein besonderer Vorteil der Maya Shader ist das fast alle Render engines das Material ausrendern können.
Sogar bei einem Export in eine Game Engine kann das Material ggf. Übertragen werden.

Der Nachteil von den Maya Shadern ist jedoch, dass der Shader unter Umständen nicht optimiert für die Render Engine ist,
was die Renderzeit verlängert und ggf. zu Renderproblemen führt.

Benutzt man die Maya Basisshader so setzt man meist nur das Lambert und das Blinn Material ein.

## Lambert

Mit dem Lambert Material lässt sich eine matte Oberfläche simulieren.
Sie hat keine Glanzpunkte und kann weder Refractions noch Reflections simulieren.

Ein hoher diffuse Wert lässt die Oberfläche heller erscheinen, ein niedriger Wert lässt die Oberfläche dunkeler erscheinen.

Das Lambert Material ist die Grundlage für Blinn, Phong, Anisitropic Materialien.

Initial wirkt das Material wie ein graues Blatt Papier.

![Lambert](/07_shading/images/03_mayabasic/lambert.png)

### "lambert1"

Jede Geometrie sollte ein Material zugewiesen haben, beim Rendern sollte kein Material den Default Shader zugewiesen haben.
Gleichzeitig kann man das lambert1 nicht löschen und man sollte es nicht modifizieren.

## Blinn

Das Blinn Material hat einen metallischen Glanzpunkt.
Dieser Glanzpunkt kann mit den Attributen „Eccentricity“ und „Specular Roll Off“ genauer bestimmt werden.

Das Material unterstützt, Diffuse Reflection, Specular Reflection und Refractions.

![Blinn](/07_shading/images/03_mayabasic/blinn.png)

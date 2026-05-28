# Animation Settings Rendering

# Render Einstellungen für Animationen

Animationen sollten immer als Einzelbilder ausgerendert werden.

## Die Richtige FrameRate

Für Filme gibt es 3 Standard Framerates: 24fps, 25fps, 30fps.

In den meisten Fällen möchte man den „Cinematic Look“ imitieren, daher benutzt man 24fps und ist die Standardeinstellung von Maya.

## Renderzeit Abschätzen

Ist man zufrieden mit der Animation kann man einen Render mit einer hoch qualitativen Render Engine machen. Jedoch sollte
man beachten, dass die Renderzeit abhängig ist von der Komplexität die Szene (je mehr Objekte, je mehr Spiegelungen etc.).
Daher sollte man einen Testframe an der komplexesten Stelle der Animation rendern, um ein Gefühl für die Gesamtdauer zu bekommen. Beispiel: 5 Sek. Animation = 125 Frames; 1 Frame benötigt 5 Min. → 125 × 5 = 625 Min. = ca. 10,5 Stunden. Man sollte alle anderen laufenden Programme schließen, damit soviel Rechenleistung
wie möglich für den Renderprozess zur Verfügung steht.

## Batch Rendering

Man rendert niemals direkt eine Video-Datei. Während dem Rendervorgang kann der Computer abstürzen oder Fehler machen.
Stattdessen rendert man eine Serie von Einzelbildern als „Batch-rendering“ Vorgang.
Beim Batch Rendering wird eine Serie von Bildern im Hintergrund ohne graphische Ausgabe vom Bild zu bearbeitet.

In den Render Settings unter Common : File Output wechselt man das “Frame/Animation” auf “name.#\.ext”
Sobald man eine Animation anstatt eines Frames ausgewählt hat ist “Frame Range” nicht mehr ausgegraut und man kann den Start und End Frame der Animation eingeben.
Man sollte unbedingt bevor man anfängt zu rendern nochmals überprüfen, dass man auch die richtige Kamera ausgewählt hat unter “Renderable Cameras”.
Das Settings-Fenster kann man nun schließen und über Render > Batch Render startet man das Rendern der Animation.

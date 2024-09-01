---
title: 5.2 Kamera Einstellungen
---

## Arbeiten mit Kameras

### Resolution 
Die Standard-Renderauflösung beträgt HD_540 (960X540) mit einem Seitenverhältnis von 16:9. Diese Einstellung eignet sich ideal für schnelle Test-Renderings. 

Es ist ratsam, die Auflösung erst spät im Prozess auf die endgültige Auflösung einzustellen, da dies die Renderzeit erheblich beeinflusst. Wenn man beispielsweise von HD_540 auf HD_1080 (1920x1080) erhöht, verlängert sich die Renderzeit um das Vierfache.

Das Resolution wird eingestellt über die Render Settings unter `Common > Image Size`.

//TODO: Fix image
![Render Settings] (../../../assets/05_camera/images/render_settings.png)

### Typische Renderauflösungen

- **HD_1080 (1920X1080)**: 16:9 Seitenverhältnis
- **4K (3840X2160)**: 16:9 Seitenverhältnis
- **Instagram (1080X1080)**: 1:1 Seitenverhältnis
- **TikTok (1080X1920)**: 9:16 Seitenverhältnis


### Resolution Gate
Die Panels von Maya koennen jede beliebe groesse annehmen, beim Rendervorgang wird jedoch nur ein definierter Bereich gerendert.

Um den Bereich angezeigt zu bekommen der ausgerendert wird, muss man für das Panel das Resolution Gate aktivieren (`View > Camera Settings > Resolution Gate`).


//TODO: Fix image
![Resolution Gate] (../../../assets/05_camera/images/resolution_gate.png)
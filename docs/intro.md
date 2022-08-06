---
sidebar_label: "Einleitung"
sidebar_position: 1
---

![The Teapot](/01_intro/images/Intro_Title.png)

In den frühen Anfängen der 3D Computergrafik wurden zum erstellen von 3D Animationen mehrere Softwarepakete benötigt: "Wavefront - Advanced Visualizer", "Thomson Digital Image - Explore" und "Alias - Power Animator". Mit diesen Werkzeugen wurden die beeindruckenden Special Effekts in Filmen wie "Terminator 2" (James Cameron, 1991) oder "Jurassic Park" (Steven Spielberg, 1993) erstellt. Die Programme wurden 1999 in ein einziges Paket namens "Maya" (nach dem Sanskrit Wort für "Illusion") kombiniert. Bei der Entwicklung von Maya wurde besonderen Wert darauf gelegt das Animatoren angenehm mit dem Programm arbeiten konnten. Insbesondere hat das Entwicklerteam mit dem Animierer Chris Landreth zusammengearbeitet um mit der Beta Version den Kurzfilm "Bingo" (1998) zu produzieren. Kurze Zeit später wurde Maya für die Spezial Effekte in "The Matrix" (Wachowski-Brothers, 1999) und "The Mummy" (Stephen Sommers, 1999) verwendet.

Der heutige Anwendungsbereich von Maya ist nicht mehr auf Special Effects und Animationsfilme beschränkt, sondern erstreckt sich auch über die Entwicklung von 3D-Objekten für Computerspiele, Architekturvisualisierung, Physik-Simulation und 3D-Druck. Die Werkzeuge von Maya sind so vielseitig und flexibel das sie bereits jetzt für 3D Technologie der Zukunft eingesetzt werden kann wie für Virtual Reality (HTC Vive, Oculus Rift) und Augmented Reality (Microsoft Hololens).

Maya wird ständig weiterentwickelt und erhält ein jährliches Update mit neuen Funktionen. Daher versucht dieses Buch gar nicht alle Funktionen von Maya zu beschreiben und fokussiert sich auf die Grundfunktionen von Maya. Wir werden uns die "CG Production Pipeline" für Animationsfilme betrachten und wie man sie in Maya umsetzen kann. Am Ende des Buches sollte jeder in der Lage sein seinen eigenen Animationsfilm zu drehen.

## Benötigte Hardware

Um Maya zu bedienen braucht man eine 3-Tasten Maus, bzw. eine Maus mit klickbarem Scrollrad. Viele Funktionen des Programms können nur mit der 3. Maustaste benutzt werden, beispielsweise die Navigation innerhalb einer Szene. Insbesondere Gaming-Mäuse eignen sich gut für Maya, wegen ihrer hohen Präzision und der vielen Tasten.

Die empfohlenen Hardwareanforderungen für Maya findet man unter:
[http://knowledge.autodesk.com/support/maya/troubleshooting/caas/sfdcarticles/sfdcarticles/System-requirements-for-Autodesk-Maya-2017.html](http://knowledge.autodesk.com/support/maya/troubleshooting/caas/sfdcarticles/sfdcarticles/System-requirements-for-Autodesk-Maya-2017.html)

Als Anfänger sollte man sich nicht sofort einen neuen PC anschaffen, da Maya auf jedem aktuellen PC läuft.
Maya profitiert von je mehr Prozessorleistung, Arbeitsspeicher und GPU Leistung der PC hat.

## Benötigte Software

### Maya

Autodesk Maya läuft auf allen gängigen Betriebssystemen (Windows, Linux, und OSX). Autodesk bietet verschiedene Lizensierungstypen an einige davon sind:

- 30-Tage Lizenz: Ermöglicht Maya 30-Tage lang zu testen [http://www.autodesk.com/products/autodesk-maya/free-trial](http://www.autodesk.com/products/autodesk-maya/free-trial)
- Studentenversion: Erlaubt Studenten während ihres Studiums eine kostenlos Maya für Studentenprojekte zu verwenden [http://students.autodesk.com/](http://students.autodesk.com/)
- Maya LT: Für Game Developer geeignet. Diese Version hat weniger Funktionen als die volle Lizenz von Maya. Insbesondere fehlen Lizenzen für Render Engines, da die Game Engine als Render Engine hergenommen wird. Dementsprechend ist der Preis dieser Lizenz günstiger als die Maya komplett Version. Eine genaue Übersicht welche Funktionen in Maya LT nicht erhalten sind bekommt man hier: [http://www.autodesk.com/products/maya/compare/compare-products](http://www.autodesk.com/products/maya/compare/compare-products)
- Maya: Alle Funktionen von Maya und erlaubt die kommerzielle Nutzung.

#### Installation von Maya

Nachdem man seine Lizenz für Maya ausgewählt hat. Kann man Maya herunterladen.
Die Installation unter Windows und OSX ist selbst erklärend.

Für Fedora findet gibt es diese offiziellen [Installationsanweisungen](https://knowledge.autodesk.com/search-result/caas/CloudHelp/cloudhelp/2016/ENU/Installation-Maya/files/GUID-3E0A3A36-B1C2-4B91-994B-731C672D9694-htm.html).

Bevor man Maya startet, sollten die aktuellsten Grafikkartentreiber installiert sein.

- nVidia: [http://www.nvidia.com/Download/index.aspx?lang=en-us](http://www.nvidia.com/Download/index.aspx?lang=en-us)
- AMD/ATI: [http://support.amd.com/en-us/download](http://support.amd.com/en-us/download)
- Intel: [https://downloadcenter.intel.com/download/24971/Intel-HD-Graphics-Driver-for-Windows-7-8-64-bit](https://downloadcenter.intel.com/download/24971/Intel-HD-Graphics-Driver-for-Windows-7-8-64-bit)

Bei der Installation von Maya sollte man sicherstellen das Arnold mit installiert wird.

#### Maya Plug-Ins

Um effizienter und einfacher mit Maya zu arbeiten lässt sich Maya mit Plug-Ins erweitern.

##### Maya Bonus Tools

Die Maya Bonus Tools ist eine kostenlose Sammlung von Werkzeugen die einige Prozesse in Maya vereinfachen.

Sie werden zwar von Autodesk entwickelt, es gibt jedoch keinen offiziellen Support für die Werkzeuge.

[Bonus Tools](http://area.autodesk.com/bonustools)

### DaVinci Resolve

Die Render Engines von Maya errechnen immer nur einzelne Bilder.
Um diese in ein Video umzuwandeln brauchen wir noch ein Videobearbeitungsprogramm.

Wir werden hierfür die kostenfreie Variante von DaVinci Resolve verwenden
[https://www.blackmagicdesign.com/products/davinciresolve](https://www.blackmagicdesign.com/products/davinciresolve)

## Schreibweisen

Manche Schreibweisen sind durchgehend in dem Buch zu finden und werden hier erläutert. Die Auswahl eines Menüpunkts wird wie folgt dargestellt: **Menü > Befehl**

![](/01_intro/images/Schreibweisen.png)

Wenn die Optionen eines Menüpunkts benutzt werden sollen: **Menü > Befehl (Option)**

![](/01_intro/images/Schreibweisen2.png)

Maus- und Tastaturbefehle werden in dieser **Schrift** geschrieben.

- **RMB** Rechte Maustaste
- **MMB** Mittlere Maustaste
- **LMB** Linke Maustaste

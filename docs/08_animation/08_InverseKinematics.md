---
title: 8. Inverse Kinematics Animation
---

![](/08_animation/images/inversekinematics/title.png)

Mit Inverse Kinematics lassen sich komplexere Objekte einfach animieren. Hierfür wird ein Skelett aus Joints und IK Handles
erzeugt und dann die Geometrie als Skin an das Skelett gebunden.

## Schritt 1

Die Datei „Animation_InverseKinematics_start.ma“ laden.

## Schritt 2

(Side View) Skeleton > Joint Tool das Basis Skelett zeichnen indem man sich an den Spheres orientiert.

![](/08_animation/images/inversekinematics/step2.png)

## Schritt 3

(Top View) Mit G (bzw. Skeleton> Joint Tool) und LMB auf den Joint an der Handwurzel klicken, dies verbindet den neuen Joint mit dem bestehenden Joint. Dann einen Finger erstellen und dann nochmal das Joint Tool auswählen um den anderen Finger zu erstellen.

![](/08_animation/images/inversekinematics/step3.png)

## Schritt 4

Deselektieren und auf eine freie Stelle mit RMB, Select All

## Schritt 5

Skin > Bind Skin > Rigid Bind

## Schritt 6

Mit dem Rotate Tool lässt sich nun andere Positionen vom Arm erstellen.

## Schritt 7

Mit dem Skeleton > IK Handle (Überprüfen das bei Current Solver: ikSCsolver steht) die Armwurzel mit der Handwurzel verbinden.

![](/08_animation/images/inversekinematics/step7.png)

## Schritt 8

Man kann nun die Handwurzel Selektieren und mit dem Translate Tool bewegen das Ellenbogen Gelenk wird automatisch richtig ausgerichtet.

## Schritt 9

Mit Keyframes für das Skelett kann man nun eine Animation erstellen.

> Anmerkung: Das ist nur eine sehr grobe Einführung in das Tool, es muss zusätzlich noch vieles weiteres Beachtet werden bei der Inverse Kinematic Animationen. Es ist eigentlich ein ganzes eigenes Gebiet namens Rigging.

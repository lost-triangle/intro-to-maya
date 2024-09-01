---
title: 3. Grundlagen Schatten
---

Bei 3D Lichtern muss man die Schatten separat von dem Licht betrachten.
Um möglichst realistische Schatten in seiner 3D Szene zu erhalten sollte man Photo Referenzen betrachten.

Die drei größten Einflüsse auf die Form des Schatten sind:

## Größe des Schattens

Die Größe eines Schattens wird bestimmt durch den Winkel des Lichts zu dem Objekt.
Der Winkel ist ausschlaggebend für wie groß der Schatten ist. Je niedriger der Winkel zu dem Objekt desto länger wird der Schatten.

## Härte des Schattens

Schatten haben einen Schattenkern, wo das Licht komplett von dem Objekt blockiert wird und einen Prenumbra Bereich, wo das Licht nur zum Teil blockiert wird.
Ein harter Schatten ist, wenn der Prenumbra Bereich sehr klein ist. Dementsprechend ist ein Weicher Schatten, wenn der Prenumbra Bereich sehr groß ist.

Die Prenumbra wird durch die Größe der Lichtquelle (relativ zu dem Objekt) bestimmt.
Ein Spotlight, wo die Lichtquelle ein einzelner Punkt ist, erzeugt harte Schatten.
Hingegen ein großes Arealight, weiche Schatten.

## Abstand der Objekte voneinander

Ein Schatten bestimmt auch die räumliche Relation von Objekten.
Die Form und Größe des Schattens verändert sich
je nach dem ob das Objekt direkt auf der Oberfläche aufliegt, oder ob das Objekt über der Oberfläche schwebt.

Um die Form des Schattens zu beeinflussen, muss man hauptsächlich die Position und die Größe des Lichtes anpassen.

# Schatten Attribute

Jedes Licht hat in dem Attribut Editor einen Bereich "Shadows".
Diese Einstellungen werden von Arnold nicht verwendet.

## Schatten Aktivieren / Deaktivieren

Lampen in Maya werfen standardmäßig einen Schatten.
Es gibt die Möglichkeit die Schatten deaktivieren.
Dies ermöglicht z.B. eine drei-Punkt Beleuchtung, wo nur das Haupt-Licht einen Schatten wirft und die anderen Lampen keinen Schatten werfen.

Das Attribut "Cast Shadows" aktiviert oder deaktiviert die Schattenberechnung.

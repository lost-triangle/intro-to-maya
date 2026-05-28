# Anhang: Legacy Lights

## Ambient Light

Diese Beleuchtung erzeugt ein weiches diffuses Licht in jede Richtung. Die Intensität hat kaum Varianz, da es versucht eine indirekte Beleuchtung zu simulieren.
Das „Ambient Shade"-Attribut bestimmt das Verhältnis zwischen omnidirektionalen und direkten Strahlen.
Ein Wert von 1 bedeutet, dass alle Lichtstrahlen von dem Light-Icon in der Szene stammen, damit ist es einem Point Light identisch.
Ein Wert von 0 lässt das Licht von der Lampe an jeder Position im Bild gleich stark erscheinen (Dadurch gibt es keine Schatten mehr. Es gibt nur noch Farbflächen).
Per Default ist der Wert auf 0.45 gesetzt. Die Positionierung des Lichts im Raum hat kaum Einfluss auf die Beleuchtung.

Ambient Lights werden eigentlich nicht verwendet, da es einen sehr flachen Eindruck im Bild erzeugt. Mit anderen Lichtquellen hat man mehr Kontrolle über die Beleuchtung. Dieser Lichttyp wurde nur der Vollständigkeitshalber erwähnt.

![Ambient Light](./images/lights/ambient.jpg)

## Volume Light

Das Volume Light ist ein künstlicher Lichttyp: Es funktioniert wie ein Point Light, jedoch existiert das Licht nur innerhalb der Begrenzung des Light-Icons. Es entspricht keiner natürlichen Lichtquelle und wird daher nur für bestimmte Spezialeffekte verwendet. Position und Skalierung wirken sich auf das Licht aus. Per default wird eine sphärische Form verwendet. Wenn die Einstellungen geändert werden – z. B. die Form von Sphere zu Box – hat auch die Rotation einen Einfluss auf das Licht.

![Volume Light](./images/lights/volume.jpg)

## Default Light

Manche Renderengines wie "Maya Software", oder "Nvidia Mental Ray" haben ein „Default Light“ dieses Licht wird nur dann verwendet wenn keine Lichtquellen in der Szene sind.
Das Default Light wird automatisch deaktiviert sobald man eine Lichtquelle der Szene hinzufügt.

Man kann das Licht auch in den Render Settings manuell deaktivieren.

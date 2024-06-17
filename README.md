# RealTime-BusTracker

## Description

Proyecto que permite la visualización de un mapa y los buses de una ruta especifica en vivo diferenciando por icono los dos sentidos de la ruta. Para esto se utliza un token de mapbox y se consume un servicio libre rest de la MBTA

## How to Run

1. Ingresa a la página de mapbox, reigstrate y obten tu propio token
2. Ten en cuenta, que después de cierto número de solicitudes vas a tener un cobro
3. Clona el codigo o descargalo desde la página
4. Debes crear un archivo llamado token.js
5. En el debes declarar una variable llamada accessToken con el token que obtuviste
6. Recuerda que el codigo principal esta en index.html y la logica se encuentra en mapanimation.js
7. Si quieres cambiar la ruta o el servicio de la MBTA por otro, sería en el archivo de mapanimation.js

## RoadMap

Quisiera que el usuario pudiera ingresar el token y no tener que crear siempre un archivo para poder visualizar la funcionalidad. Además de crear una interfaz con más opciones para el usuario y no solo poder ver en el mapa la ubicación del bus y el estado

## License

This Project is open-sourced software licensed under the MIT license.

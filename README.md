# TiendaDeVinilosCDcamiloo
Este proyecto se tomara en el marco del desarrollo de una pagina web enfocada,En una tienda virtual de Vinilos y CDS, dirigida hacia un publico amante a la musica en formatos fisicos,resolviendo el problema de poder encontrar discos y estos otros medios en una epoca tan digital como es esta.

## link a vercel con la aplicacion
https://tienda-de-vinilos-c-dcamiloo.vercel.app/#inicio

## Capturas de Pantalla

### Vista de Escritorio
![Vista de Escritorio 1](capturas/VinilosPC1.jpeg)
![Vista de Escritorio 2](capturas/VinilosPC2.jpeg)
![Vista de Escritorio 3](capturas/VinilosPC3.jpeg)

### Vista Móvil
![Vista Móvil 1](capturas/VinilosCel1.jpeg)
![Vista Móvil 2](capturas/VinilosCel2.jpeg)
![Vista Móvil 3](capturas/VinilosCel3.jpeg)

### 3. Uso de Inteligencia Artificial
Usé la ia como apoyo para entender reglas específicas de CSS Grid (como `auto-fit` y `minmax`) y para validar que mi jerarquía de etiquetas semánticas fuera correcta. Sin embargo, los nombres de clases, la estructura de mi arreglo de discos y la lógica de búsqueda las escribí y ajusté yo mismo según cómo quería que se comportara mi catálogo específico.

### 4. Retos del Desarrollo
El mayor reto fue que la búsqueda sobrescribía los datos originales del catálogo. Lo resolví separando el renderizado en una función "renderizarDiscos(discos)" que recibe un arreglo filtrado, sin tocar el arreglo original.
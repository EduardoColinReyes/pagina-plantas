# Plantas para tu espacio

Este proyecto es una aplicación React + Vite que ahora está preparada para funcionar sin depender de recursos remotos durante su ejecución.

## Cómo ejecutar localmente

1. Instalar dependencias (si aún no se han instalado):

```bash
npm install
```

2. Construir el proyecto:

```bash
npm run build
```

3. Servir la carpeta `dist` localmente:

```bash
python3 -m http.server 5001 --directory dist
```

4. Abrir en el navegador:

```text
http://127.0.0.1:5001
```

> Si el puerto `5001` ya está en uso, cambia el número a otro puerto disponible.

## Cómo probar sin internet

1. Ejecuta el servidor local.
2. Abre el sitio en el navegador.
3. Desconecta la red de tu equipo o activa el modo offline en DevTools.
4. Recarga la página.

Si la aplicación sigue mostrando el contenido y no se rompe, entonces funciona correctamente sin conexión.

## Qué recursos ya están locales

- Fuentes: se dejaron las fuentes del sistema en lugar de Google Fonts.
- Imágenes de las plantas y las ilustraciones de la sección `Hero` se reemplazaron por SVG locales.
- El avatar del pie de página también se cambió por un SVG local.

## Si quieres usar imágenes reales locales

Sí, puedes descargar las imágenes y guardarlas dentro del proyecto, por ejemplo en `src/assets/`.

Luego:

1. Copia cada archivo descargado a `src/assets/`.
2. Importa las imágenes en `src/data/plants.tsx`.
3. Reemplaza cada valor `image` de las plantas con la variable importada.

Ejemplo:

```ts
import phonePlant from '../assets/Telefono.jpg';

export const plants = [
  {
    id: 'pothos',
    name: 'Teléfono',
    image: phonePlant,
    // ...
  },
];
```

De esta forma la app seguirá funcionando offline y mostrará fotos locales en lugar de marcadores de posición.

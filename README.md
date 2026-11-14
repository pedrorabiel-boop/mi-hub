# Mi Hub

App personal (PWA) con mis rutinas:

- **Ejercicio** — Calistenia Full Body A / B / C (`ejercicio.html`)
- **Skincare** — Calendario de rutina facial (`skincare.html`)

Es un sitio 100 % estático: no necesita compilación ni servidor propio.

## Publicar en GitHub Pages

1. Crea un repositorio nuevo en GitHub (por ejemplo `mi-hub`). Puede ser público; GitHub Pages en repos privados requiere plan pago.
2. Sube estos archivos a la rama `main`:
   ```bash
   git init
   git add .
   git commit -m "Mi Hub"
   git branch -M main
   git remote add origin https://github.com/<tu-usuario>/mi-hub.git
   git push -u origin main
   ```
3. En GitHub: **Settings → Pages → Build and deployment → Source: Deploy from a branch**, rama `main`, carpeta `/ (root)` → **Save**.
4. En 1–2 minutos queda en `https://<tu-usuario>.github.io/mi-hub/`.

## Instalar en el iPhone

1. Abre la URL en **Safari**.
2. Toca el botón **Compartir** (cuadrado con flecha) → **Agregar a pantalla de inicio**.
3. Queda como app con su ícono, a pantalla completa y funciona sin internet.

## Actualizar

Edita los HTML, haz `git push` y listo: la app descarga la versión nueva la próxima vez que la abras con internet.
Si agregas archivos nuevos, súmalos a la lista `ASSETS` de `sw.js` y sube la versión (`mi-hub-v2`, etc.).

> La fecha de inicio del tratamiento de skincare se guarda en el propio teléfono (localStorage), no en GitHub.

## Probar en el computador

```bash
python -m http.server 8765
```

y abre <http://localhost:8765>.

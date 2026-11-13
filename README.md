# TicketHN web

Sitio estático de TicketHN, creado con Astro y Tailwind CSS. Ejecuta `pnpm build` para compilarlo y publica el contenido de `dist/` en tu hosting.

## Android y Google Play

- Los botones de descarga abren la ficha de TicketHN en Google Play. La URL de la ficha se define en src/site.ts.
- En Play Console, registra las URL públicas HTTPS de `/privacidad/` y `/eliminar-cuenta/` en los campos de política de privacidad y eliminación de cuenta. El correo público está en `src/site.ts`.
- Antes de enviar la app a revisión, incorpora los enlaces de privacidad y eliminación dentro de Android, verifica que el equipo reciba y pueda tramitar las solicitudes de borrado y confirma la política de retención real de la infraestructura. Completa la sección Seguridad de los datos de Play Console de acuerdo con la versión que vas a publicar.

[Política de datos de usuario de Google Play](https://support.google.com/googleplay/android-developer/answer/18265346#privacy-policy) · [Requisitos de eliminación de cuentas](https://support.google.com/googleplay/android-developer/answer/13327111?hl=es)

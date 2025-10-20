<!-- .md significa markdown -->
# 📱 Documentación - App Clon de WhatsApp
---

## ✅ Nuevas funcionalidades implementadas

### 1. ⚙️ Botón de *Configuración* dentro del chat

Dentro del chat, se encuentra un botón de acciones llamado *"Configuración"* o *"Settings"*, el cual abre una ventana emergente (popup) que muestra las siguientes funcionalidades:

- 💡 **Tema claro/oscuro (Dark/Light Theme):** Permite cambiar entre un tema visual claro u oscuro en toda la aplicación.
- 🪪 **Nombre de usuario / Cambiar nombre (User name / Rename):** Permite modificar el nombre del usuario seleccionado. El cambio se mantiene incluso al navegar entre páginas, al cerrar y reabrir el navegador y al cerrar e iniciar sesión nuevamente.
- 📄 **Idioma Español/Inglés (Language Spanish/English):** Cambia el contenido textual de toda la app (incluyendo la página *Help*) al idioma seleccionado.

⚠️ **Importante:**  
Los cambios se guardan en `localStorage` al hacer clic en el botón **Guardar cambios**. Si se cierra el popup haciendo clic en la ❌ sin guardar, los cambios **no se aplicarán**.

---

### 2. 📱 Animaciones responsive

La aplicación es completamente adaptable a distintos tamaños de pantalla.

- **Modo celular:**
  - En la vista del chat, se alterna la visibilidad del chat y la lista de contactos según sea necesario.
  - En el encabezado del chat, se muestra un menú tipo *hamburguesa* que permite acceder a las opciones de configuración del chat.
  - Las acciones de este menú pueden seleccionarse también mediante el teclado.
  - Al hacer clic fuera del menú, este se cierra automáticamente.

---

### 3. 🆘 Página "Help"

- Contiene información general del proyecto.
- Incluye elementos interactivos en el apartado de **Tecnologías utilizadas**, permitiendo al usuario conocer más sobre las herramientas empleadas en el desarrollo.

---

![app](/public/App.png)

# Cerezos Pizza App

Proyecto final del curso de React JS. Aplicación de e-commerce para venta de pizzas y bebidas.

## Instalación

1. Clonar el repositorio.
2. Abrir la terminal en la carpeta del proyecto.
3. Ejecutar `npm install` para instalar las dependencias.
4. Ejecutar `npm run dev` para iniciar la app.

## Tecnologías

- **React** (Vite)
- **React Router** – Navegación SPA
- **Context API** – Estado global del carrito
- **Firebase / Firestore** – Base de datos (productos y órdenes)
- **Bootstrap / React Bootstrap** – Estilos y componentes

## Librerías utilizadas

- **react** – Core de React (componentes, hooks)
- **react-dom** – Renderizado en el navegador
- **react-router-dom** – Navegación SPA (rutas, enlaces, `useParams`)
- **Firebase** – Conexión a Firestore (productos, órdenes)
- **bootstrap** – Estilos CSS (grid, utilidades, componentes base)
- **react-bootstrap** – Componentes de UI (Navbar, Spinner, Badge, Modal, etc.)
- **react-icons** – Iconos (ej. carrito en CartWidget)
- **react-hook-form** – Validación del formulario de Checkout (campos requeridos, email, coincidencia de correos)
- **sileo** – Notificaciones toast: éxito al agregar al carrito (derecha), info/error al finalizar compra (centro). Fondo negro y tamaño ampliado.
- **react-confirm** – Diálogo de confirmación antes de enviar la orden (“¿Confirmar compra?”) con botones Aceptar/Cancelar (modal Bootstrap).

*Entorno de desarrollo:* Vite, ESLint (y plugins para React).

## Estructura principal

- **App**: rutas, `CartProvider` y `Toaster` de Sileo.
- **NavBar**: enlaces a Inicio, categorías (Pizzas, Bebidas) y Carrito. Incluye **CartWidget** con cantidad de ítems.
- **ItemListContainer / ItemList / Item**: listado de productos desde Firestore (por categoría o todos).
- **ItemDetailContainer / ItemDetail / ItemCount**: detalle de producto, selector de cantidad (mínimo 1, máximo stock). Al agregar al carrito se oculta `ItemCount`, se muestra “Ir al carrito” y un toast de éxito (derecha).
- **CartContainer / CartView**: contenido del carrito (ítems, cantidades, subtotales, total). **EmptyCart** cuando no hay ítems.
- **Checkout**: formulario validado con react-hook-form. Diálogo de confirmación (react-confirm) antes de enviar. Al confirmar, orden a Firestore y notificación info/error en el centro. Se muestra el **id de la orden** al finalizar.
- **ConfirmCompra**: modal de confirmación (react-confirm + Bootstrap) reutilizable.

## Firebase

- Colección **productos**: listado del catálogo (consultas desde React).
- Colección **orders**: un documento por cada compra confirmada (comprador, carrito, total, fecha).

Las variables de configuración de Firebase están en `src/service/firebase.jsx`.

---

Alumno: Matias Cerezo Prado

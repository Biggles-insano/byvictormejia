# 🛍️ ByVictorMejia - E-commerce Demo

Este es un proyecto de tienda online desarrollado en React usando buenas prácticas de desarrollo frontend, siguiendo las especificaciones de un ejercicio académico.

## 📦 Características del Proyecto

- Lista de productos con nombre, precio, imagen y botón de agregar al carrito.
- Vista de detalles del producto.
- Carrito de compras funcional:
  - Incrementar y reducir cantidad (máximo 9 unidades).
  - Subtotal, total y botón de compra.
  - Validación: si el total excede $999.99, se muestra un mensaje de error.
  - Vaciar carrito.
- Favoritos con historial de likes (usando `useRef`).
- Recomendaciones por historial de navegación (`useMemo`).
- Uso de `useContext` para el estado global del carrito.
- Máximo 3 vistas:
  - Tienda principal.
  - Detalle de producto.
  - Carrito de compras.

## 🧠 React Hooks Usados

- `useContext`: manejo global del carrito.
- `useRef`: historial de productos favoritos.
- `useMemo`: recomendaciones basadas en navegación.

## 🧪 Testing

- Pruebas unitarias usando **Vitest** y **Testing Library**.
- 3 componentes testeados:
  - `CartItem`
  - `ProductCard`
  - `Header`

## 📚 Storybook

- Documentación visual de componentes con Storybook:
  - `ProductCard`
  - `Header`
  - `StarRating`

## 🛠️ Instalación y configuración

### Clona el repositorio

```bash
git clone https://github.com/tu-usuario/byvictormejia.git
cd byvictormejia

Instala las dependencias

npm install

Dependencias instaladas

Producción:
	•	react
	•	react-dom
	•	react-router-dom

Desarrollo:
	•	vite
	•	eslint
	•	prettier
	•	vitest
	•	@testing-library/react
	•	@testing-library/jest-dom
	•	jsdom
	•	@vitejs/plugin-react

Storybook y addons:

npx storybook init

Esto instala:
	•	@storybook/react
	•	@storybook/addon-essentials
	•	@storybook/testing-react
	•	@storybook/addon-interactions
	•	@storybook/addon-vitest
	•	@storybook/react-vite

Configuración de Vite

vite.config.js:

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
})

🚀 Comandos

Acción	Comando
Ejecutar app	npm run dev
Ejecutar pruebas	npm test
Ejecutar lint (si aplica)	npm run lint
Storybook en desarrollo	npm run storybook
Build de Storybook	npm run build-storybook

🌐 Despliegue
	•	🔗 App en línea
	•	📁 Repositorio GitHub

📁 Estructura de Carpetas

src/
│
├── assets/
├── components/
│   ├── ProductCard.jsx
│   ├── CartItem.jsx
│   ├── Header.jsx
│   └── ...
├── context/
│   └── CartContext.jsx
├── hooks/
│   └── useProductHistory.js
├── pages/
│   ├── StorePage.jsx
│   ├── ProductDetailPage.jsx
│   └── CartPage.jsx
├── stories/
│   └── *.stories.jsx
└── main.jsx

✅ Checklist
	•	Mínimo 10 productos.
	•	Carrito funcional y validaciones.
	•	Vaciar carrito.
	•	useContext, useMemo, useRef implementados.
	•	Storybook con 3 componentes documentados.
	•	3 pruebas unitarias como mínimo.
	•	Máximo 3 vistas.
	•	Componentes < 40 líneas cada uno.


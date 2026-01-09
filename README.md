# 🛵 TitTit - Gestión Inteligente para Deliverys

**TitTit** es una plataforma diseñada para optimizar la gestión financiera y operativa del ecosistema de deliverys.

## 🎯 Sobre el Proyecto

Actualmente, el proyecto se encuentra en su **Fase 1**, enfocada en ser una herramienta útil para los **conductores (drivers)**. La aplicación les permite registrar y llevar un control detallado de las ganancias obtenidas en cada entrega realizada.

### 🚀 Visión a Futuro (Fase 2)
El objetivo es escalar la plataforma para convertirla en una solución integral para **empresas de delivery**, incluyendo características como:
*   Gestión de cuentas y personal.
*   Métricas de rendimiento y análisis de datos.
*   Sistema de membresías y gestión administrativa avanzada.

---

## 🏗️ Arquitectura del Proyecto

El proyecto está estructurado como una aplicación **Cliente-Servidor**.

1.  **Frontend (Cliente):** Una Single Page Application (SPA) construida con React que consume la API del backend.
2.  **Backend (Servidor):** Una API RESTful construida con Node.js y Express, organizada bajo una **Arquitectura en Capas**.

Esta separación permite que la lógica de negocio, el acceso a datos y la presentación estén desacoplados, facilitando el mantenimiento y la escalabilidad futura.

### Tecnologías Principales
*   **Frontend:** React, Vite, TailwindCSS.
*   **Backend:** Node.js, Express, PostgreSQL `pg`.
*   **Base de Datos:** PostgreSQL.

---

## 📂 Estructura del Código

### Backend (Arquitectura en Capas)
El backend sigue un flujo de datos ordenado para procesar las solitudes:

*   **`src/routes/`**: Define los puntos de entrada (endpoints) de la API.
*   **`src/controllers/`**: Maneja las peticiones HTTP (req/res) y llama a los servicios necesarios.
*   **`src/services/`**: Contiene toda la **lógica de negocio**. Aquí es donde ocurren las validaciones complejas y cálculos antes de tocar la base de datos.
*   **`src/models/`**: Capa de acceso a datos. Interactúa directamente con la base de datos PostgreSQL utilizando consultas SQL.

### Frontend
Estructurado modularmente por funcionalidad:
*   **`src/pages/`**: Vistas principales de la aplicación (Home, Dashboard).
*   **`src/services/`**: Funciones para comunicarse con la API del backend (axios).
*   **`src/components/`**: Elementos de UI reutilizables (Inputs, Botones).

---
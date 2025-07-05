# API RESTful de Inventario Quirúrgico

<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

<p align="center">Una API RESTful progresiva para la gestión de un inventario de instrumentos quirúrgicos, construida con NestJS, TypeORM y MySQL.</p>

## 🛠️ Requisitos del Sistema

Asegúrate de tener instalados los siguientes programas en tu máquina:

* **Node.js**: Versión 18 o superior.
* **npm**: Gestor de paquetes de Node.js (se instala con Node.js).
* **MySQL Server**: Un servidor MySQL funcionando (puedes usar Laragon, XAMPP, WAMP, MAMP, o una instalación directa de MySQL).
* **NestJS CLI**: Herramienta de línea de comandos de NestJS. Si no la tienes instalada globalmente, puedes hacerlo con:
    ```bash
    npm i -g @nestjs/cli
    ```

## ⚙️ Pasos para Levantar el Servidor

Sigue estos pasos para configurar y ejecutar la API en tu entorno local:

1.  **Clonar el repositorio:**
    ```bash
    git clone [https://github.com/maria45607/proyecto_final.git](https://github.com/maria45607/proyecto_final.git)
    cd proyecto_final
    ```

2.  **Instalar dependencias:**
    ```bash
    npm install
    ```

3.  **Configurar variables de entorno:**
    Crea un archivo `.env` en la **raíz del proyecto** con la siguiente información, reemplazando los valores por los de tu configuración de MySQL:
    ```
    DB_HOST=localhost
    DB_PORT=3306
    DB_USERNAME=root
    DB_PASSWORD=
    DB_DATABASE=inventario_quirurgico
    PORT=3000
    ```
    **Importante:**
    * Asegúrate de que la base de datos `inventario_quirurgico` exista en tu servidor MySQL. Si no existe, créala manualmente (por ejemplo, usando HeidiSQL en Laragon, phpMyAdmin, MySQL Workbench, o la línea de comandos de MySQL).
    * La contraseña (`DB_PASSWORD`) debe ser la correcta para el usuario de MySQL que estás utilizando.

4.  **Iniciar el servidor en modo desarrollo:**
    ```bash
    npm run start:dev
    ```
    La API se iniciará y estará disponible en `http://localhost:3000` (o el puerto que hayas configurado en `.env`). TypeORM sincronizará automáticamente las entidades con tu base de datos, creando las tablas necesarias.

    ## 🧪 Pruebas de la API con Insomnia

Para facilitar las pruebas y la interacción con esta API, se ha incluido una colección de Insomnia con todas las rutas y ejemplos de peticiones.

1.  **Descargar la Colección:**
    Encontrarás el archivo **`configuracionrutas.yaml`** en la raíz de este repositorio.

2.  **Importar en Insomnia:**
    * Abre la aplicación Insomnia.
    * Haz clic en el menú `File` (Archivo) -> `Import Data` (Importar Datos) -> `From File` (Desde Archivo).
    * Navega y selecciona el archivo **`configuracionrutas.yaml`** que descargaste del repositorio.
    * Una vez importada, podrás ver y ejecutar todas las peticiones CRUD definidas para las entidades del inventario.
    * Al buscar la coleccion de insomnia se encuentra en la rama de main

    **Consideración:** Asegúrate de que la URL base de tus peticiones en Insomnia apunte a `http://localhost:3000` (o el puerto donde esté corriendo tu API).

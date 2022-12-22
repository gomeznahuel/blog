---
title: "¿Qué es Node JS?"
description: Es una plataforma de programación basada en JavaScript que se ejecuta del lado del servidor. 
author: Nahuel Gómez
authorImage: https://images.unsplash.com/photo-1580927752452-89d86da3fa0a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1540&q=50
coverImage: /images/nodejs.png
date: "2022-04-20"
---

## **¿Qué es Node JS?**

**Node JS** es una plataforma de programación basada en JavaScript que se ejecuta del lado del servidor. 

**Node JS** utiliza el motor V8 de Google, que es un intérprete de código rápido y eficiente, y **viene con una gran cantidad de módulos integrados que puedes utilizar para realizar tareas comunes de servidor, como leer y escribir archivos, manejar solicitudes HTTP y acceder a bases de datos.** Además, hay una gran cantidad de módulos de terceros disponibles en la comunidad que puedes utilizar para ampliar las funcionalidades de tu aplicación.

**Algunos módulos nativos de Node JS son los siguientes**

##### **HTTP**: Permite crear un servidor HTTP y manejar solicitudes HTTP
##### **FS**: Perite leer y escribir archivos.
##### **OS**: Permite acceder a información sobre el sistema operativo.
##### **Path**: Permite trabajar con rutas de archivos y directorios.
##### **Process**: Permite acceder a información y controlar el proceso actual.
##### **Util**: Permite acceder a funciones de utilidad comunes.
##### **Crypto**: Permite trabajar con criptografía.
##### **Zlib**: Permite trabajar con archivos comprimidos.


## **Módulos de terceros**

##### **Express JS** es un marco de servidor web minimalista y flexible para Node JS. Permite crear aplicaciones web y API RESTful.

##### **Axios** es una biblioteca que se utiliza para realizar solicitudes HTTP. Es una alternativa a la biblioteca nativa de Node JS **HTTP**.

##### **MongoDB** es una base de datos no relacional orientada a documentos. Es una base de datos de código abierto que utiliza documentos JSON para almacenar datos.

##### **Socket IO** es una biblioteca que se utiliza para crear aplicaciones web en tiempo real. Permite crear aplicaciones web que se actualizan automáticamente cuando se producen cambios en los datos.

## **¿Qué es package.json?**

Es un archivo de configuración que se utiliza en los proyectos de Node.js para definir la información sobre el proyecto y sus dependencias. Se encuentra en la raíz del proyecto y es utilizado por el administrador de paquetes **NPM** (Node Package Manager) para gestionar y descargar las dependencias del proyecto.

Este archivo suele incluir información como el nombre, versión y descripción del proyecto, así como información de autoría. También incluye las dependencias y scripts que pueden ejecutarse durante el ciclo de vida del proyecto, como pruebas o implementación."

---

## **¡Ejemplifiquemos esto!**

Node es como una caja de herramientas, que te permite hacer muchas cosas, pero no te dice como hacerlas.
La caja viene con herramientas de regalo (módulos nativos), pero también puedes comprar más herramientas (módulos de terceros). 

Si queremos usar una herramienta de que viene con la caja, tenemos que ir a buscarlas y traerlas a nuestro proyecto (importarlas).

```js
const fs = require('fs');
```

Si queremos usar una herramienta de terceros, tenemos que ir a comprarlas y traerlas a nuestro proyecto (instalarlas) y luego importarlas.

```js
npm install express
```

```js
const express = require('express');
```

<iframe width="560" height="315" src="https://www.youtube.com/embed/NqnJuzHGrYs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
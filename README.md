# ts-poo — Programación Orientada a Objetos con TypeScript

Proyecto de curso para aprender los fundamentos de POO usando TypeScript, incluyendo clases, herencia, interfaces, patrones como Singleton, y manejo de promesas con una API real.

---

## Requisitos previos

- [Node.js](https://nodejs.org/) v18 o superior
- npm v8 o superior

---

## Configuración desde cero

Sigue estos pasos en orden para tener el proyecto funcionando desde cero:

```bash
# 1. Inicializar proyecto Node
npm init -y

# 2. Instalar TypeScript como dependencia de desarrollo
npm install -D typescript

# 3. Verificar la versión instalada
npx tsc --version

# 4. Generar el archivo tsconfig.json
npx tsc --init

# 5. Instalar ts-node para ejecutar archivos TypeScript directamente
npm install -D ts-node

# 6. Instalar dependencias del proyecto
npm install axios
npm install -D @faker-js/faker msw
```

---

## Instalación (clonar repositorio existente)

```bash
# Instalar todas las dependencias
npm install
```

---

## Ejecutar archivos

```bash
# Ejecutar cualquier archivo TypeScript con ts-node
npx ts-node src/01-class.ts

# Ejecutar la aplicación principal (consume API)
npx ts-node src/app/01-main.ts
```

---

## Estructura del proyecto

```
ts-poo/
├── src/
│   ├── 01-class.ts           # Clases básicas
│   ├── 02-methods.ts         # Métodos
│   ├── 03-public.ts          # Modificador public
│   ├── 04-private.ts         # Modificador private
│   ├── 05-constructor.ts     # Constructores
│   ├── 06-getters.ts         # Getters
│   ├── 07-setters.ts         # Setters
│   ├── 08-inheritance.ts     # Herencia
│   ├── 09-protected.ts       # Modificador protected
│   ├── 10-static.ts          # Miembros estáticos
│   ├── 11-interfaces.ts      # Interfaces
│   ├── 12-abstract.ts        # Clases abstractas
│   ├── 13-singleton.ts       # Patrón Singleton
│   ├── 14-promises.ts        # Promesas y async/await
│   ├── app/
│   │   ├── 01-main.ts                        # Entrada principal (consume API REST)
│   │   ├── dtos/
│   │   │   └── product.dto.ts                # DTOs con Utility Types
│   │   ├── models/
│   │   │   ├── base.model.ts                 # Modelo base
│   │   │   ├── category.model.ts             # Modelo de categoría
│   │   │   └── product.model.ts              # Modelo de producto
│   │   └── service/
│   │       └── product-memory.service.ts     # Servicio CRUD en memoria
│   └── exercises/
│       ├── foundLargestNumber.ts             # Encontrar el número mayor
│       ├── sum-all-array-nums.ts             # Sumar todos los números de un array
│       └── whichAreWordsInAString.ts         # Detectar palabras en un string
├── package.json
└── tsconfig.json
```

---

## Temas cubiertos

| Archivo | Tema |
|---|---|
| `01-class.ts` | Definición de clases |
| `02-methods.ts` | Métodos de instancia |
| `03-public.ts` | Modificador `public` |
| `04-private.ts` | Modificador `private` |
| `05-constructor.ts` | Constructores y parámetros |
| `06-getters.ts` | Getters (`get`) |
| `07-setters.ts` | Setters (`set`) |
| `08-inheritance.ts` | Herencia con `extends` |
| `09-protected.ts` | Modificador `protected` |
| `10-static.ts` | Miembros `static` |
| `11-interfaces.ts` | Interfaces |
| `12-abstract.ts` | Clases `abstract` |
| `13-singleton.ts` | Patrón de diseño Singleton |
| `14-promises.ts` | Promesas y `async/await` |

---

## Dependencias

| Paquete | Tipo | Uso |
|---|---|---|
| `typescript` | devDependency | Compilador de TypeScript |
| `ts-node` | devDependency | Ejecutar TS sin compilar |
| `@faker-js/faker` | devDependency | Generar datos falsos en el servicio |
| `msw` | devDependency | Mock Service Worker (mocking de APIs) |
| `axios` | dependency | Peticiones HTTP a la API |

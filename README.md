1) npm create vite@latest
2) Indicamos el nombre de nuestro proyecto.
3) Seleccionamos el framework.
4) seleccionamos la variante o lenguaje.
5) ingresamos al proyecto creado.
6) Hacemos npm install
7) Luego ejecutamos: npm run dev
8) Agregamos tailwind:
	npm install -D tailwindcss postcss autoprefixer
	npx tailwindcss init -p
9) Agregamos en tailwind.config.js:
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

10) Ir a './src/index.css' y pegar:
	@tailwind base;
	@tailwind components;
	@tailwind utilities;
11) Ir a tsconfig.json:
 a) Eliminar: "moduleResolution": "bundler"
    Agregar: "moduleResolution": "node",
 b) Eliminar: "allowImportingTsExtensions": true,
    Agregar: "allowSyntheticDefaultImports": true,

12) Ir a tsconfig.node.json:
 Eliminar: "moduleResolution": "bundler",
 Agregar: "moduleResolution": "node",
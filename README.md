

## WebApp - Buscador de peliculas

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Interfaces 🔧

Para crear las interfaces, copiamos la respuesta de la API y en el IDE (Visual Studio Code) usamos
Paste JSON as Code, esto nos crea automaticamente el tipado de los datos.

# all-movies
# movie
# movie-response
# simple-movie

<!-- /////////////////////////////////////////////////////////////////////////////////// -->
Webapp - buscador de películas
<!-- /////////////////////////////////////////////////////////////////////////////////// -->
Next 13 -> Using App Router
(Desde la versión 13 se recomienda usar la carpeta /app, no /pages)
Typescript
Tailwind (en la mayoría de componentes)
Styled component (Navbar)
<!-- /////////////////////////////////////////////////////////////////////////////////// -->
Fetch de datos:

<!-- /////////////////////////////////////////////////////////////////////////////////// -->
Hooks: ⚓
    useRef-> Crear una referencia para guardar valores, cuando cambia, no renderiza de nuevo. (useState al contrario cambiar sí renderiza cuando cambia).  
<!-- /////////////////////////////////////////////////////////////////////////////////// -->
Error handing: ❌

- Página 404 creada en: not-found.tsx
  [not-found Doc](https://nextjs.org/docs/app/api-reference/file-conventions/not-found)
- Dentro de cada película creamos otro not-found.tsx que se comprueba en un try/catch al obtener los datos, si resulta error, salta un 404.

<!-- /////////////////////////////////////////////////////////////////////////////////// -->
Metadata dinámica: 📒
con Next pasamos la metadata para cada película exportando su título y la descripción.

Con función asíncrona:generateMetadata y la Promesa Metadata de Next.

desestructuramos de la info recibida lo que queremos, en este caso el título: original_title 
<!-- /////////////////////////////////////////////////////////////////////////////////// -->


https://nextjs.org/docs/app/building-your-application/routing/error-handling


En Image usamos priorify={ false } para que las imágenes se carguen bajo demanda.

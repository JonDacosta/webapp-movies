

## WebApp - Buscador de peliculas

Podemos lanzar la aplicación con el comando yarn dev, después de instalar las dependencias.

IMPORTANT: si hay el archivo yarn.lock y package-lock crea conflicto y salta error en consola sobre nextUI/tailwind.

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

<!-- /////////////////////////////////////////////////////////////////////////////////// -->
#**Webapp** - _buscador de películas_
<!-- /////////////////////////////////////////////////////////////////////////////////// -->
- Next 13 -> Using App Router // (Desde la versión 13 se recomienda usar la carpeta /app, no /pages)
- Typescript
- Librería NextUI para el uso de sus componentes: Image, Badge, Buttom, 
- Tailwind (en la mayoría de componentes)
- Styled component (Navbar)
- Modulos.css
<!-- /////////////////////////////////////////////////////////////////////////////////// -->
---
Archivo principal -> page.tsx // Esto carga el Navbar, Hero y el componente del buscador.

- En el navbar itero los path que voy a usar, estos están en la carpeta (global) que es ignorada a la hora de usar el routing, y coge los valores de las carpetas internas: 
   - /about
   - /contact
   - /mylist
   - /popular 
---
<!-- /////////////////////////////////////////////////////////////////////////////////// -->

#**Interfaces:** 🔧

Para crear las interfaces, copie la respuesta de la API en el IDE (Visual Studio Code) usamos
Paste JSON as Code, esto nos crea automaticamente el tipado de los datos.

- all-movies
- movie
- movie-response
- simple-movie
<!-- /////////////////////////////////////////////////////////////////////////////////// -->

#**Fetch de datos:** ⬇️

 - distintos fetch:
---
    const movie = await fetch(`https://api.themoviedb.org/3/movie/${id}?language=es-ES`, options)

    aquí controlamos cada película por su id, para entrar a su ficha e información propia.
---
---
    const data:MoviesResponse = await fetch('https://api.themoviedb.org/3/movie/popular?language=es-ES', options)

    con este fetch controlamos la respuesta de todas las películas populares, por defecto la API devuelve máx 20 resultados para mostrar, especificamos el lenguaje.
---
---
    const response = await fetch(`https://api.themoviedb.org/3/search/movie?query=${search}&include_adult=false&language=es-ES&page=1`, options)

    con este fetch controlamos la búsqueda para el componente seach de la home, pasándole la query
---
<!-- /////////////////////////////////////////////////////////////////////////////////// -->
#**Hooks:** ⚓
  - useRef-> Crear una referencia para guardar valores, cuando cambia, no renderiza de nuevo. (useState al contrario cambiar sí renderiza cuando cambia).

  - useMovies-> para controlar la data del buscador, y devolver todas las películas que devuelva el fetch.

<!-- /////////////////////////////////////////////////////////////////////////////////// -->
#**Error handing:** ❌

- Página 404 creada en: not-found.tsx
  [not-found Doc](https://nextjs.org/docs/app/api-reference/file-conventions/not-found)
- Dentro de cada película creamos otro not-found.tsx que se comprueba en un try/catch al obtener los datos, si resulta error, salta un 404.

- En el componente SearchBar, la función useSearch, controla el input mostrando errores, lo óptimo sería sacarlo del componente e importarlo por separado.

<!-- /////////////////////////////////////////////////////////////////////////////////// -->
#**Metadata dinámica:** 📒
- Con Next pasé metadata para cada película exportando su título y la descripción.

- Con función asíncrona:generateMetadata y la Promesa Metadata de Next. Desestructuramos de la info recibida lo que queremos, en este caso el título: original_title.
<!-- /////////////////////////////////////////////////////////////////////////////////// -->
- [error-handing-next](https://nextjs.org/docs/app/building-your-application/routing/error-handling)
- En Image usamos priorify={ false } para que las imágenes se carguen bajo demanda.

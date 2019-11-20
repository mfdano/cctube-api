## Description

La API fue desarrollada con [NestJS]: https://docs.nestjs.com

## Instalar dependencias

```bash
$ npm install
```

## Ejecutar [App]: https://localhost:3000
```bash
# development
$ npm run start
```

## Support

Este repositorio ya incluye los archivos estáticos de la SPA, los endpoints de la API son los siguientes

/channels?query=culturacolectiva => Lista los canales que coinciden con el parámetro de la query y devuleve los {channelId} para realizar la consulta siguiente.

/channels/{channelId}/videos?query=tacos&maxResults=10&pageToken => Devuelve la lista de videos encontrados en un canal en específico {maxResults} y {pageToken} no son obligatorios.

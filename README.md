Nextjs seed proyect

# TODO

- [X] Meter REDUX en hello-next.
- [ ] Revisar el modo de hacer las peticiones ahora que existe REDUX (redux-thunk). A lo mejor ya no es necesario "isomorphic-unfetch" o "swr".
- [ ] Meter TS en hello-next.
- [ ] Hacer lo de JWT para el login de la plataforma. Podemos usar la API que ofrece Nextjs (ver carpeta src/pages/api).
- [ ] Añadir loader general para mostrar cuando la página se esté renderizando en el lado del servidor.
- [ ] Crear un sistema para indicar que tipo de renderizado usa cada página. Poner un README.md en cada directorio o algo, o un comentario en la cabecera de la propia página.

- Valorar si meter el redux a nivel de _app.js, o a nivel de página para dividir el estado de la aplicación en dichas páginas. Para este último caso, es necesario redux? y si ponemos un contexto único a nivel de página?

# Ecosistema

- [X] react
- [X] primereact: https://www.primefaces.org/primereact/showcase/#/setup
- [X] redux: https://github.com/Waqas-Abbasi/nextjs-react-redux-example
- [ ] react thunk
- [X] typescript
- [X] Nextjs
- [X] Auth login: https://carlosazaustre.es/que-es-la-autenticacion-con-token/
- [ ] react router -> NO. Con Next no hace falta.
- [ ] bootstrap -> NO. Tenemos ITCSS de Everis.
- [ ] reactstrap -> NO. Estamos usando primereact.

# Docker

## Iniciar contenedor de docker

    docker-compose up
    docker-compose up --build

## Pasar variables de entorno al contenedor de docker

docker-compose.yml
    version: '3.1'
    services:
    nextjs:
        ports:
            - 8080:3000
        build:
            context: .
            dockerfile: Dockerfile
        environment:
            HOSTNAME: metajob
            NEXTJS_PORT: 8080

## Lecturas recomendadas

- https://github.com/selfup/nextjs-docker/blob/master/Dockerfile

# Helpers

## Ver valores de las variables de entorno en Powershell

    Get-ChildItem Env:
    Get-ChildItem Env:PROTOCOL
    Get-ChildItem Env:HOSTNAME
    Get-ChildItem Env:NEXTJS_PORT
    Get-ChildItem Env:PUBLIC_PORT

## Actualizar valores de las variables de entorno en Powershell

    Set-Item Env:PROTOCOL -Value [value]
    Set-Item Env:HOSTNAME -Value [value]
    Set-Item Env:NEXTJS_PORT -Value [value]
    Set-Item Env:PUBLIC_PORT -Value [value]

## Eliminar variable de entorno

    Remove-Item Env:PROTOCOL
    Remove-Item Env:HOSTNAME
    Remove-Item Env:NEXTJS_PORT
    Remove-Item Env:PUBLIC_PORT

## Otros

- Nextjs examples implementations: https://github.com/zeit/next.js/tree/canary/examples
- SERVER AUTH: https://github.com/alan2207/express-server-jwt
- FRONTAL: https://github.com/alan2207/nextjs-jwt-authentication
- https://medium.com/@bhavikbamania/a-beginner-guide-for-redux-with-next-js-4d018e1342b2
- https://github.com/bhavikji/jwtauthenticationwithredux/blob/master/package.json
- https://github.com/kirill-konshin/next-redux-wrapper
- https://spectrum.chat/next-js/general/can-someone-explain-to-me-how-next-redux-wrapper-works-how-many-stores-does-it-build-on-the-server-on-the-client-how-is-the-data-handled~5777828e-0af5-483c-9e1d-f0f8b8e11bc0
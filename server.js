/**
 * NextJS custom server
 * Contact info: asancpiz@everis.com
 *
 * See for more information: https://nextjs.org/docs/advanced-features/custom-server
 * Basic Nextjs custom server example: https://github.com/zeit/next.js/blob/canary/examples/custom-server/server.js
 * TODO: Implement SSR Caching: https://github.com/zeit/next.js/blob/canary/examples/ssr-caching/server.js
 * TODO: https://medium.com/@anMagpie/secure-your-local-development-server-with-https-next-js-81ac6b8b3d68
 *
 */

const { createServer } = require("http");
const { parse } = require("url");
const next = require("next");
const endpoints = require("./endpoints");
const dev = (process.env.NODE_ENV !== "production");
const app = next({ dev });

// Init server app! :)
app
    .prepare()
    .then(() => {
        createServer((request, response) => {
            const parsedUrl = parse(request.url, true);
            app.getRequestHandler()(request, response, parsedUrl);
        })
        .listen(endpoints.local.port, (error) => {
            if (error) {
                throw error;
            }
            // Show info on console
            console.log("> Environment:", process.env.NODE_ENV);
            console.log("> Endpoints:", endpoints);
            console.log(`> Ready on ${endpoints.local.protocol}://${endpoints.local.host}:${endpoints.local.publicPort}`);
        });
    });
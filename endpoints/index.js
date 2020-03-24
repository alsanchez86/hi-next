/**
 * Metajob Endpoints
 * Contact info: asancpiz@everis.com
 *
 * process.env.NODE_ENV; // Node environment variable.
 * See for more information: https://nextjs.org/docs/api-reference/next.config.js/environment-variables
 * Overwrite node environment variables: https://www.twilio.com/blog/2017/08/working-with-environment-variables-in-node-js.html
 *
 * Priority for configuration:
 * - Environment variables (system or docker container)
 * - Endpoint static configuration
 * - Default values
 *
 */

// Import endpoints static values from environment file
const endpoints = require(`./static/${process.env.NODE_ENV}.json`);

// Update local configuration from priority configuration
endpoints.local.protocol = (parseInt(process.env.PROTOCOL, 10) || endpoints.local.protocol);
endpoints.local.host = (process.env.HOSTNAME || endpoints.local.host);
endpoints.local.port = (parseInt(process.env.NEXTJS_PORT, 10) || endpoints.local.port);
endpoints.local.publicPort = (parseInt(process.env.PUBLIC_PORT, 10) || endpoints.local.port);

module.exports = endpoints;
/**
 * Get api absolute url endpoint from environment
 *
 */

import endpoints from "../../endpoints";

export default (name) => {
    const endpoint = endpoints?.[name];
    const host = endpoint?.host;
    const port = endpoint?.port;
    const aux = endpoint?.aux;
    return `http://${host}:${port}/${aux}`;
};
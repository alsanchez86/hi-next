import "primereact/resources/themes/nova-light/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "../scss/main.scss";

import Head from 'next/head'

export default ({ Component, pageProps }) =>

<div>
    <Head>
        <title>Metajob</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>

    <Component {...pageProps} />
</div>
import { useEffect, useState } from "react";
import { useContextState, useContextDispatch } from "../../contexts/main";
import { increaseCounter, updateShows } from "../../contexts/main/actions";
import Layout from "../../components/layout";
import Template from "./template";
import { requestFilms, requestQuote } from "../../utils/requests";
import getApiUrl from "../../utils/get-api-url";

// Datos que se necesitan para la representación inicial de la página
export async function getServerSideProps() {
    const localUrl = getApiUrl("local");
    const ssrShows = await requestFilms("pepe");
    const ssrQuote = await requestQuote(localUrl);

    return {
        props: {
            localUrl,
            ssrShows,
            ssrQuote
        }
    };
}

export default ({ localUrl, ssrShows, ssrQuote }) => {
    const contextState = useContextState();
    const contextDispatch = useContextDispatch();
    const handleIncrease = () => contextDispatch(increaseCounter(1));
    const handleDecrease = () => contextDispatch(increaseCounter(-1));
    const [quote, setQuote] = useState(ssrQuote); // Local state. Not context data
    // Datos asíncronos solicitados por el usuario
    const getBatmanFilms = async () => {
        const data = await requestFilms("batman");
        contextDispatch(updateShows(data));
    };
    const getQuote = async () => {
        const data = await requestQuote(localUrl);
        setQuote(data);
    }

    // Update main context from SSR data
    useEffect(() => {
        contextDispatch(updateShows(ssrShows));
    }, []);

    return (
        <Layout>
            <Template
                counter={contextState.counter}
                handleIncrease={handleIncrease}
                handleDecrease={handleDecrease}
                shows={contextState.shows}
                quote={quote}
                getBatmanFilms={getBatmanFilms}
                getQuote={getQuote}
            />
        </Layout>
    );
}
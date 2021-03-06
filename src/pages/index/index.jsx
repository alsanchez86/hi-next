import { useEffect, useState } from "react";
import { useContextState, useContextDispatch } from "../../contexts/main";
import { increaseCounter, updateShows } from "../../contexts/main/actions";
import Layout from "../../components/layout";
import Template from "./template";
import { requestFilms, requestQuote } from "../../utils/requests";

// Datos que se necesitan para la representación inicial de la página.
// De este modo, evitamos renderizaciones adicionales iniciales para representar correctamente la página con datos solicitados a los servicios.
export async function getServerSideProps(ctx) {
    const ssrShows = await requestFilms("pepe");
    const ssrQuote = await requestQuote();

    return {
        props: {
            ssrShows,
            ssrQuote
        }
    };
}

export default ({ ssrShows, ssrQuote }) => {
    const contextState = useContextState();
    const contextDispatch = useContextDispatch();
    const handleIncrease = () => contextDispatch(increaseCounter(1));
    const handleDecrease = () => contextDispatch(increaseCounter(-1));
    const [quote, setQuote] = useState(ssrQuote); // Local state. Not context data
    // Datos asíncronos solicitados por el usuario.
    // Datos que no son necesarios para la correcta presentación inicial de la página
    const getBatmanFilms = async () => {
        const data = await requestFilms("batman");
        contextDispatch(updateShows(data));
    };
    const getQuote = async () => {
        const data = await requestQuote();
        setQuote(data);
    }

    // Update main context from SSR data on component did mount
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
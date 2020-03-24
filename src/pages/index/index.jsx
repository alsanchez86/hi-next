import fetcher from "../../utils/fetcher";
import getApiUrl from "../../utils/get-api-url";
import { useEffect } from "react";
import { useContextState, useContextDispatch } from "../../contexts/main";
import { increaseCounter, updateShows } from "../../contexts/main/actions";
import Layout from "../../components/layout";
import Template from "./template";

export async function getServerSideProps() {
    const localUrl = getApiUrl("local");
    const shows = await fetcher("https://api.tvmaze.com/search/shows?q=pepe");
    const quote = await fetcher(`${localUrl}get-quote`);

    return {
        props: {
            localUrl,
            shows,
            quote
        }
    };
}

export default ({ localUrl, shows, quote }) => {
    const contextState = useContextState();
    const contextDispatch = useContextDispatch();
    const handleIncrease = () => contextDispatch(increaseCounter(1));
    const handleDecrease = () => contextDispatch(increaseCounter(-1));

    useEffect(() => {
        contextDispatch(updateShows(shows));
    }, []);

    return (
        <Layout>
            <Template
                counter={contextState.counter}
                handleIncrease={handleIncrease}
                handleDecrease={handleDecrease}
                shows={contextState.shows}
                quote={quote}
            />
        </Layout>
    );
}
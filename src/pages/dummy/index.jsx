import { useEffect } from "react";
import { useContextState, useContextDispatch } from "../../contexts/main";
import { updateCounter } from "../../contexts/main/actions";
import Layout from "../../components/layout";
import Template from "./template";

export default () => {
    const contextState = useContextState();
    const contextDispatch = useContextDispatch();

    useEffect(() => {
        contextDispatch(updateCounter(20));
    }, []);

    return (
        <Layout>
            <Template
                counter={contextState.counter}
            />
        </Layout>
    );
}
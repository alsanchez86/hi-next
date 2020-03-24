import { useContextState } from "../../contexts/main"
import Layout from "../../components/layout";
import Template from "./template";

export default () => {
    const contextState = useContextState();

    return (
        <Layout>
            <Template
                counter={contextState.counter}
            />
        </Layout>
    );
}
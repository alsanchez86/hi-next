import { useContextState, useContextDispatch } from "../../contexts/main";
import { updateCounter } from "../../contexts/main/actions";
import Layout from "../../components/layout";
import Template from "./template";

export default () => {
    const contextState = useContextState();
    const contextDispatch = useContextDispatch();
    const handleIncrease = () => contextDispatch(updateCounter(1));
    const handleDecrease = () => contextDispatch(updateCounter(-1));

    return (
        <Layout>
            <Template
                counter={contextState.counter}
                handleIncrease={handleIncrease}
                handleDecrease={handleDecrease}
            />
        </Layout>
    );
}
import { useContextState, useContextDispatch } from "../../contexts/main";
import { increaseCounter, decreaseCounter } from "../../contexts/main/actions";
import Layout from "../../components/layout";
import Template from "./template";

export default () => {
    const contextState = useContextState();
    const contextDispatch = useContextDispatch();
    const handleIncrease = () => contextDispatch(increaseCounter());
    const handleDecrease = () => contextDispatch(decreaseCounter());

    return (
        <Layout>
            <Template
                count={contextState}
                handleIncrease={handleIncrease}
                handleDecrease={handleDecrease}
            />
        </Layout>
    );
}
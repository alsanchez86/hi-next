import { useContextState } from "../../contexts/main"
import Layout from "../../components/layout";
import Template from "./template";

const Index = () => {
    const contextState = useContextState();

    return (
        <Layout>
            <Template
                count={contextState}
            />
        </Layout>
    );
}

Index.getInitialProps = async ({}) => {
    return {};
}

export default Index;
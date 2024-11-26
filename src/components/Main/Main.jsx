import { Flex, Layout } from "antd"
import { Outlet } from "react-router-dom";
import { HeaderComponent } from "../Header/Header";
import { FooterComponent } from "../Footer/Footer";

const { Header, Footer, Content } = Layout;

export const Main = () => {
    return (

        // <Layout>
        //     <Header>
        //         <HeaderComponent />
        //     </Header>

        //     <Content>
        //         <Outlet />
        //     </Content>

        //     <Footer>
        //         <FooterComponent />
        //     </Footer>
        // </Layout>

        <Flex vertical justify='space-between' style={{ height: "100vh", fontSize: "2.4vmin" }}>
            <HeaderComponent />
            <Outlet />
            <FooterComponent />
        </Flex>
    );
};
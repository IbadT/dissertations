import { Flex } from "antd"
import { Outlet } from "react-router-dom";
import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";

export const Main = () => {
    return (
        <Flex vertical justify='space-between' style={{ height: "100vh", fontSize: "2.4vmin" }}>
            <Header />
            <Outlet />
            <Footer />
        </Flex>
    )
}
import { Flex } from "antd";
import WordViewer from "./WordViewer";

export const Article = () => {
    return (
        <Flex vertical justify="center" align="center" minHeight="100vh" flexDirection="column" bg="gray.100" p={4} >
            <Flex justify="center" style={{ margin: "2vmin" }}>
                <a href="/Article.docx" download color="blue.500">Скачать статью</a>
            </Flex>
            <Flex justify="center" style={{ margin: "0 10%", }}>
                <WordViewer />
            </Flex>
        </Flex>
    )
};
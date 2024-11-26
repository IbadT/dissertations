import { Flex } from "antd";
import WordViewer from "./WordViewer";

export const Article = () => {
    return (
        <Flex vertical justify="center" >
            <Flex justify="center" style={{ margin: "2vmin" }}>
                <a style={{ border: "2px solid black", padding: "1vmin", borderRadius: "20px" }} download="/Article.docx">Скачать статью</a>
                {/* <Link href="/Диссертация.docx" download color="blue.500">Открыть выпускную работу</Link> */}
            </Flex>
            <Flex justify="center" style={{ padding: "0 20px" }}>
                <WordViewer />
            </Flex>
        </Flex>
    )
};
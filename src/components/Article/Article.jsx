import { Flex } from "antd";
import WordViewer from "./WordViewer";

export const Article = () => {
    return (
        // <Flex vertical justify="center" >
        //     <Flex justify="center" style={{ margin: "2vmin" }}>
        //         <a style={{ border: "2px solid black", padding: "1vmin", borderRadius: "20px" }} download="/Article.docx">Скачать статью</a>
        //         {/* <Link href="/Диссертация.docx" download color="blue.500">Открыть выпускную работу</Link> */}
        //     </Flex>
        //     <Flex justify="center" style={{ padding: "0 20px" }}>
        //         <WordViewer />
        //     </Flex>
        // </Flex>
        <Flex vertical justify="center" align="center" minHeight="100vh" flexDirection="column" bg="gray.100" p={4} >
            <Flex justify="center" style={{ margin: "2vmin" }}>
                {/* <a style={{ border: "2px solid black", padding: "1vmin", borderRadius: "20px" }} download="/Article.docx">Скачать статью</a> */}
                <a href="/Article.docx" download color="blue.500">Скачать статью</a>
            </Flex>
            {/* <Flex justify="center" style={{ margin: "0 4vmin", }}> */}
            <Flex justify="center" style={{ margin: "0 10%", }}>
                <WordViewer />
            </Flex>
        </Flex>
    )
};
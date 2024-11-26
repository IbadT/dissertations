
import { Flex, Button } from "antd";
import { DownloadOutlined } from '@ant-design/icons';
import { useState } from "react";
import WordViewer from "./WordViewer";

export const Article = () => {
    const [size, setSize] = useState('large');
    return (
        <Flex vertical justify="center" align="center" minHeight="100vh" flexDirection="column" bg="gray.100" p={4} >
            <Flex>⬇ Скачать презентацию ⬇</Flex>
            <Flex>
                <Button type="primary" shape="round" icon={<DownloadOutlined />} size={size} href="Article.docx"/>
            </Flex>
            {/* <Flex justify="center" style={{ margin: "2vmin" }}>
                <a href="/Article.docx" download color="blue.500">Скачать статью</a>
            </Flex> */}
            <Flex justify="center" style={{ margin: "0 10%", }}>
                <WordViewer />
            </Flex>
            
        </Flex>
    )
};
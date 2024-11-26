import { Flex, Button } from "antd";
import { DownloadOutlined } from '@ant-design/icons';
import { useState } from "react";
import WordViewer from "./WordViewer";

export const Dissertation = () => {
    const [size, setSize] = useState('large');
    return (
        <Flex vertical justify="center" align="center" minHeight="100vh" flexDirection="column" bg="gray.100" p={4} > 
            <Flex>⬇ Скачать презентацию ⬇</Flex>
            <Flex>
                <Button type="primary" shape="round" icon={<DownloadOutlined />} size={size} href="Диссертация.doc"/>
            </Flex>
            {/* <Flex justify="center" style={{ margin: "2vmin" }}> 
                <a href="/Диссертация.docx" download > Скачать выпускную работу </a> 
            </Flex>  */}
            <Flex justify="center"> 
                <WordViewer /> 
            </Flex> 
        </Flex>
    );
};
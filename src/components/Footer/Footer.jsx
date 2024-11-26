import { Flex } from "antd";
import { MailOutlined } from "@ant-design/icons";
import { PhoneOutlined } from "@ant-design/icons";

export const FooterComponent = () => {
    return (
        <Flex gap={5} justify="center" align="center" vertical style={{ backgroundColor: "grey", color: "white", height: "10vh", fontSize: "2.3vmin"}}>

            <Flex gap={8}>
            
                <Flex>
                    <MailOutlined />
                </Flex>
                
                <Flex>
                    <a style={{ color: "white" }} href="mailto:gancharova8680@gmail.com">
                        gancharova8680@gmail.com
                    </a>
                </Flex>
            
            </Flex>
            
            <Flex gap={8}>
            
                <Flex>
                    <PhoneOutlined />
                </Flex>

                <Flex>
                    <a style={{ color: "white" }} href="tel:+375291848534">
                        +375291048534
                    </a>
                </Flex>
            
            </Flex>

        </Flex>
    )
}
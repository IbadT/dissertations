import { Flex } from "antd"

export const Tests = () => {
    return (
        <Flex vertical justify="center" align="center" gap={20}>
            <Flex>
                <a href="https://docs.google.com/forms/d/e/1FAIpQLSdWgPylggmOxOKJvpw99xuMKz9lApiLZuLSBkIBb0crW251Vg/viewform">Тест на технические навыки</a>
            </Flex>
            <Flex>
                <a href="https://docs.google.com/forms/d/e/1FAIpQLScX94w1M5_ZpgPJufIbeYvNPlOLLkWjpJCd2qdjmJF0Mmy2gA/viewform">Тест на когнитивные навыки</a>
            </Flex>

            <Flex>
                Сделать только на когнитивные
            </Flex>
        </Flex>
    )
}
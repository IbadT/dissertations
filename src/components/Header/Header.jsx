import { Flex } from "antd";
import { Link } from "react-router-dom";



const layout = [
    {
        id: 1,
        title: "Статьи",
        url: "/article" // статьи
    },{
        id: 2,
        title: "Выпускная работа",
        url: "/dissertation"
    },{
        id: 3,
        title: "Презентация",
        url: "/presentation"
    },{
        id: 4,
        title: "Задания",
        url: "/tasks"
    },{
        id: 5,
        title: "Тесты",
        url: "/tests"
    },
];


export const Header = () => {
    return (
        <Flex justify="center" style={{ width: "100wv" }}>
            <Flex align="center" justify="space-around" style={{ backgroundColor: "black", width: "80vw", height: "5vh", borderRadius: "0px 0px 10px 10px"}}>
                {
                    layout.map(({id, title, url}) => (
                        <Flex key={id}>
                            <Link to={url} >
                                { title }
                            </Link>
                        </Flex>
                    ))
                }
            </Flex>
        </Flex>
    )
}
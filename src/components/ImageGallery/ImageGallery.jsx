import { Row, Col } from "antd";

export const ImageGallery = () => {
    const images = [ 
        'images/first.jpg', 
        'images/second.jpg', 
        'images/third.jpg', 
        // 'images/forth.png', 
        // 'images/fifth.png',
        'images/sixth.png',
    ];

    return (
        <Row justify="center" align="middle" gutter={[10, 10]} style={{ marginTop: "20px"}}> 
            {
                images.map((src, index) => ( 
                    <Col key={index}> 
                        <img src={src} alt={`Image ${index + 1}`} style={{ width: "15vmin", height: 'auto', display: "block"}} /> 
                    </Col> 
                ))
            } 
        </Row>
    );
}
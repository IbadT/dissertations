import React from 'react';
import { Row, Col } from 'antd';
import './MainPage.css'; // Импортируйте стили

const MainPage = () => {
  return (
    <Row justify="center" align="middle" style={{ height: '100vh', textAlign: 'center' }}>
      <Col>
        <div className="main-content">
          <h1>Проект</h1>
          <p>
            Разработан магистрантом заочной формы получения образования
            <br />
            700323 группы, специальность «Образовательная робототехника»
            <br />
            Д.А.Гончарова
          </p>
        </div>
      </Col>
    </Row>
  );
};

export default MainPage;

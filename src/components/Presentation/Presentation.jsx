import { Flex, Col, Button, Row } from "antd";
import { DownloadOutlined } from '@ant-design/icons';
import HTMLFlipBook from 'react-pageflip';
import styles from './Presentation.module.css';
import { useState } from "react";
import { ImageGallery } from "../ImageGallery/ImageGallery";

export const Presentation = () => {
    const [size, setSize] = useState('large');

    const handleDownload = () => { 
        window.location.href = `${process.env.PUBLIC_URL}/presentation.pptx`; 
    };

    return (
        <Flex justify="center" align="center" vertical className={styles.bookFlip} gap={10}>
            <HTMLFlipBook width={600} height={550} showCover={false} drawShadow={true}>
                
                <Col className={styles.demoPage}>
                    <Flex vertical gap={50}>
                        <Flex justify="center" style={{ textAlign: 'center' }}>
                            <Flex>УЧРЕЖДЕНИЕ ОБРАЗОВАНИЯ<br />«БЕЛОРУССКИЙ ГОСУДАРСТВЕННЫЙ ПЕДАГОГИЧЕСКИЙ<br />УНИВЕРСИТЕТ ИМЕНИ МАКСИМА ТАНКА»<br />Кафедра информатики и методики преподавания информатики</Flex>
                        </Flex>
                        <Flex  style={{ textAlign: 'center', fontSize: '15px', fontWeight: "bolder"}}>
                            <Flex justify="center">ЭКСПЕРИМЕНТАЛЬНОЕ РАЗВИТИЕ ТЕХНИЧЕСКИХ И КОГНИТИВНЫХ<br />НАВЫКОВ РАЗВИТИЯ У УЧАЩИХСЯ ПРИ ОБУЧЕНИИ ОБРАЗОВАТЕЛЬНОЙ РОБОТОТЕХНИКЕ</Flex>
                        </Flex>
                        <Flex justify="end">
                            <Flex style={{ textAlign: "end" }}>Д.А. Гончарова, магистрант 1-го года<br />заочной формы получения образования.,<br />700323 группы, специальность<br />«Образовательная робототехника»<br />Научный руководитель:<br />кандидат ф-м наук, доцент,<br />заведующий кафедрой<br />С.И. Чубаров</Flex>
                        </Flex>
                    </Flex>
                </Col>


                <Col className={styles.demoPage}>
                    <Flex vertical gap={20}>

                        <Flex vertical>
                            <Flex justify="center">
                                <h3>АКТУАЛЬНОСТЬ ТЕМЫ</h3>
                            </Flex>
                            <Flex justify="center">
                                <ul>
                                    <li>В связи с развитием использования информационных<br />технологий в системе образования существует необходимость разработки  новых обучающих курсов для обучения школьников на разных ступенях общего среднего образования. В настоящее время не достаточно предложено подобных курсов для обучения школьников робототехнике и визуальному программированию. Школьный возраст один из лучших периодов обучения алгоритмическому и креативному мышлению. Подобный факультативный курс  будет способствовать общему развитию учащихся, а также позволит определить  наиболее одаренных и мотивированных школьников для дальнейшего углубленного изучения предметной области.</li>
                                </ul>
                            </Flex>
                        </Flex>

                        <Flex> 
                            <Col>
                                <strong>Цель педагогического эксперимента</strong>
                                <span> ‒ экспериментальная проверка эффективности программы по развитию технических и когнитивных навыков на II ступени общего среднего образования.</span> 
                            </Col> 
                        </Flex> 

                        <Flex vertical>
                            <Flex style={{ fontWeight: "bolder"}}>Задачи педагогического эксперимента:</Flex>
                            <Flex>
                                <ul>
                                    <li>Экспериментально исследовать исходный уровень технических и когнитивных навыков у учащихся на II ступени общего среднего образования.</li>
                                    <li>Апробировать разработанную программу по развитию технических и когнитивных навыков у учащихся на на II ступени общего среднего образования.</li>
                                    <li>Экспериментально проверить эффективность программы по развитию технических и когнитивных навыков у учащихся на на II ступени общего среднего образования.</li>
                                </ul>
                            </Flex>
                        </Flex>

                    </Flex>
                </Col>

                
                <Col className={styles.demoPage}>
                    <Flex vertical gap={20}>
                        <Flex vertical>
                            <Flex style={{ fontWeight: "bolder"}}>Методы экспериментального педагогического исследования:</Flex>
                            <Flex>педагогический эксперимент, психодиагностический, социометрический, методы математической и статистической обработки данных, экспертная оценка.</Flex>
                        </Flex>

                        <Flex vertical>
                            <Flex style={{ fontWeight: "bolder"}}>База педагогического эксперимента:</Flex>
                            <Flex>ГУО “Средняя школа №187 г. Минска”. Для проведения эксперимента необходимо получить согласие от руководства школы. Также получение разрешение от учащихся и их родителей. Важно учитывать этические аспекты при проведении эксперимента, чтобы не нарушать права и интересы участников.</Flex>
                        </Flex>
                        
                        <Flex vertical>
                            <Flex style={{ fontWeight: "bolder"}}>Описание выборки педагогического эксперимента</Flex>
                            <Flex>‒ учащиеся II ступени общего среднего образования. Общий объем выборки – 48 респондентов, общий объем испытуемых – 25 чел.</Flex>
                        </Flex>

                        <Flex vertical>
                            <Flex style={{ fontWeight: "bolder"}}>Экспериментатор:</Flex>
                            <Flex>Гончарова Дарья Андреевна, магистрант 1-го года заочной формы получения образования.</Flex>
                        </Flex>

                        <Col>
                            <strong>Объект педагогического эксперимента </strong>
                            <span> ‒ формирование технических и когнитивных навыков.</span>
                        </Col>
                            
                        <Col>
                            <strong>Предмет педагогического эксперимента</strong>
                            <span> ‒ развитие технических и когнитивных навыков у учащихся на II ступени общего среднего образования.</span>
                        </Col>

                        <Col>
                            <strong>Гипотеза</strong>
                            <span> ‒ применение методики развития когнитивных и технических навыков учащихся при обучении робототехнике на II ступени общего среднего образования способствует более эффективному усвоению материала, повышению интереса к изучению технических наук и развитию творческого мышления у учащихся.</span>
                        </Col>

                    </Flex>
                </Col>
                
                <Col className={styles.demoPage}>
                    <Flex vertical gap={20}>
                        <Flex vertical>
                            <strong>Инструменты для обратной связи в робототехнике</strong>
                            <Flex>В контексте робототехники это может быть реализовано через использование сенсоров и программного обеспечения для анализа работы роботов. Учащиеся могут видеть результаты своих действий в реальном времени, что помогает им делать выводы о необходимости изменений.</Flex>
                        </Flex>

                        <Flex vertical>
                            <strong>Примеры применения технологий обратной связи</strong>
                            <Flex>Например, использование программного обеспечения для моделирования поведения робота позволяет учащимся тестировать свои алгоритмы перед их реализацией на реальном устройстве. Это снижает количество ошибок и способствует более глубокому пониманию принципов работы робота.</Flex>
                        </Flex>
                    </Flex>
                </Col>


                <Col className={styles.demoPage}>
                    <Flex align="center" vertical>
                        <img src="images/first_table.png" style={{ width: '65vmin', height: "55vmin" }}/>
                    </Flex>
                </Col>


                <Col className={styles.demoPage}>
                    <Flex align="center" vertical>
                        <img src="images/second_table.png" style={{ width: '60vmin', height: "50vmin" }}/>
                    </Flex>
                </Col>




                <Col className={styles.demoPage}>
                    <Flex vertical>
                        <Flex align="center" vertical>
                            <Flex>
                                <h2>Выборка педагогического эксперимента</h2>
                            </Flex>
                            <Flex>
                                <img src="./images/vyborka.png" style={{ width: '100%', height: '100%'}}/>
                            </Flex>
                        </Flex>
                    </Flex>
                </Col>




                <Col className={styles.demoPage}>
                    <Flex vertical gap={30}>
                        <Flex justify="center" >
                            <h2>
                                <strong>Тест на технические навыки</strong>
                            </h2>
                        </Flex>

                        <Col>
                            <Flex align="center" vertical gap={20}>
                                <img src="/images/test_tec.png" style={{ width: "30vmin" }}/>
                                <Flex >
                                    <a href="https://docs.google.com/forms/d/e/1FAIpQLSdWgPylggmOxOKJvpw99xuMKz9lApiLZuLSBkIBb0crW251Vg/viewform?usp=sf_link">Ссылка на тест</a>
                                </Flex>
                            </Flex>
                        </Col>

                    </Flex>
                </Col>


                <Col className={styles.demoPage}>
                    <Flex align="center" vertical gap={20}>
                        <Flex justify="center">
                            <h2>
                                <strong>Тест на когнитивные навыки</strong>
                            </h2>
                        </Flex>

                        <Flex justify="center" vertical >
                            <img src="images/test_cag.png" style={{ width: "45vmin" }}/>
                            <Flex justify="center">
                                <a href="https://docs.google.com/forms/d/e/1FAIpQLScX94w1M5_ZpgPJufIbeYvNPlOLLkWjpJCd2qdjmJF0Mmy2gA/viewform?usp=sf_link">Ссылка на тест</a>
                            </Flex>
                        </Flex>

                    </Flex>
                </Col>





                <Col className={styles.demoPage}>
                    <Flex>
                        <img src="images/first_graf.png" style={{ width: '30vmin', height: "50vmin" }}/>
                        <img src="images/second_graf.png" style={{ width: '30vmin', height: "50vmin" }}/>
                    </Flex>
                </Col>




                <Col className={styles.demoPage}>
                    <Flex vertical gap={30}>
                        <Flex justify="center" style={{ textAlign: "center"}}>
                            <h2><strong>Тема: Создание простых механизмов с помощью конструктора "Ева"</strong></h2>
                        </Flex>

                        <Flex>
                            <Flex>Цели урока:</Flex>
                            <ol>
                                <li>Ознакомить учащихся с основами механики.</li>
                                <li>Научить использовать конструктор "Ева" для создания простых механизмов.</li>
                                <li>Развивать творческие и технические навыки у учащихся.</li>
                            </ol>
                        </Flex>

                        <Flex>
                            <Flex>Оборудование:</Flex>
                            <ul>
                                <li>Конструктор "Ева"</li>
                                <li>Презентация по теме механики</li>
                                <li>Лист бумаги и ручки для записей</li>
                                <li>Камера или смартфон для документирования процесса (по желанию)</li>
                            </ul>
                        </Flex>
                    </Flex>

                    <ImageGallery />
                </Col>


                
                <Col className={styles.demoPage}>
                    <Flex justify="center" vertical>
                        <Flex justify="center">
                            <h2><strong>Ход урока</strong></h2>
                        </Flex>

                        <Flex>
                            <ol style={{ listStyleType: "upper-roman"}}>
                                <li>Введение (10 минут)
                                    <ol>
                                        <li>Приветствие и настрой на урок.</li>
                                        <li>Обсуждение темы: </li>
                                        <ul>
                                            <li>Зачем нужны механизмы?</li>
                                            <li>Примеры механизмов в повседневной жизни.</li>
                                        </ul>
                                    </ol>
                                </li>
                                <li>Основная часть (25 минут)
                                    <ol>
                                        <li>Теоретическая часть (10 минут):</li>
                                        <ul>
                                            <li>Краткий обзор основных принципов механики (рычаги, шестерни, подъемные механизмы).</li>
                                            <li>Показ презентации с примерами</li>
                                        </ul>
                                        <li>Практическая часть (15 минут):</li>
                                        <ul>
                                            <li>Разделение класса на группы (по 3-4 человека).</li>
                                            <li>Каждая группа получает набор деталей конструктора "Ева".</li>
                                            <li>Задача: создать простой механизм (например, подъемный механизм или рычаг).</li>
                                            <li>• Учитель обходит группы, помогает и отвечает на вопросы.</li>
                                        </ul>
                                    </ol>
                                </li>

                                <li>Презентация работ (15 минут)
                                    <ol>
                                        <li>Каждая группа представляет свой механизм:</li>
                                        <ul>
                                            <li>Объясняет, как он работает.</li>
                                            <li>Делится трудностями, с которыми столкнулись в процессе сборки.</li>
                                            <li>Демонстрирует работу механизма.</li>
                                        </ul>
                                    </ol>
                                </li>

                                <li>Рефлексия (5 минут)
                                    <ol>
                                        <li>Обсуждение:</li>
                                        <ul>
                                            <li>Что нового узнали?</li>
                                            <li>Какие навыки развили?</li>
                                            <li>Как можно применить полученные знания в будущем?</li>
                                        </ul>
                                    </ol>
                                </li>

                                <li>Заключение (5 минут)
                                    <ol>
                                        <li>Подведение итогов урока.</li>
                                        <li>Домашнее задание: нарисовать свой механизм и описать его принцип работы.</li>
                                    </ol>
                                </li>
                            </ol>
                        </Flex>
                    </Flex>
                </Col>

                
                <Col className={styles.demoPage}>
                    <Flex vertical gap={30}>
                        <Flex justify="center">
                            <h2><strong>Заключение</strong></h2>
                        </Flex>
                        
                        <Flex>
                            В ходе проведённого педагогического эксперимента для 9 классов мы исследовали влияние обучения образовательной робототехнике на развитие технических и когнитивных навыков учащихся. Результаты эксперимента показали, что интеграция робототехники в учебный процесс способствует значительному улучшению как практических, так и теоретических знаний учащихся.
                        </Flex>

                        <Flex>
                            Анализ полученных данных подтвердил, что занятия по робототехнике не только развивают технические навыки, такие как конструирование и программирование, но и способствуют формированию критического мышления, креативности и способности к решению проблем. Учащиеся проявили высокий уровень вовлечённости и мотивации, что положительно сказалось на их общем учебном процессе.
                        </Flex>

                        <Flex>
                            Кроме того, наблюдение за групповой работой показало, что обучение в команде способствует развитию коммуникативных навыков и умения работать в коллективе. В результате эксперимента были выявлены ключевые методические подходы, которые могут быть использованы для оптимизации преподавания робототехники в школе.
                        </Flex>

                        <Flex>
                            Таким образом, результаты эксперимента подтверждают целесообразность внедрения образовательной робототехники в учебный процесс как эффективного инструмента для развития технических и когнитивных навыков учащихся. Рекомендуем продолжить работу в этом направлении, разрабатывать новые методические материалы и внедрять инновационные подходы для дальнейшего повышения качества образования.
                        </Flex>
                    </Flex>
                </Col>
            
            </HTMLFlipBook>

            <Flex>⬇ Скачать презентацию ⬇</Flex>
            <Flex>
                <Button type="primary" shape="round" icon={<DownloadOutlined />} size={size} href="presentation.pptx"/>
            </Flex>

        </Flex>
    )
};
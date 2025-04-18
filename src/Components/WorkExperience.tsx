import { Card, Typography, Row, Col } from 'antd';
import { useEffect, useState } from 'react';

const { Title, Paragraph } = Typography;

const WorkExperience = () => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        setTimeout(() => setVisible(true), 150);
    }, []);

    return (
        <div
            id="experience"
            style={{
                background: '#f4f4f4',
                padding: '60px 20px',
                transition: 'opacity 1s ease',
                opacity: visible ? 1 : 0,
            }}
        >
            <div style={{ maxWidth: 1100, margin: '0 auto' }}>
                <Card
                    style={{
                        borderRadius: '16px',
                        boxShadow: '0 12px 32px rgba(0, 0, 0, 0.05)',
                        padding: 32,
                    }}
                >
                    <Title level={2} style={{ textAlign: 'center', marginBottom: 24 }}>
                        Досвід роботи
                    </Title>

                    <Row gutter={[32, 32]} align="middle">
                        <Col xs={24} md={14}>
                            <Paragraph style={{ fontSize: 16, lineHeight: 1.9, textAlign: 'justify' }}>
                                Я більше 2 років практикую в гештальт-підході, допомагаючи людям краще розуміти себе, свої потреби
                                та налагоджувати контакт із внутрішнім світом.
                            </Paragraph>

                            <Paragraph style={{ fontSize: 16, lineHeight: 1.9, textAlign: 'justify' }}>
                                Мала досвід роботи на психологічній онлайн-платформі <strong>«Rozmova»</strong>, де працювала з клієнтами
                                над темами тривоги, самооцінки, стосунків і життєвих криз.
                            </Paragraph>

                            <Paragraph style={{ fontSize: 16, lineHeight: 1.9, textAlign: 'justify' }}>
                                Наразі я зосереджена на приватній практиці та з радістю відкритa до нових клієнтів поза платформою.
                                Моя мета — створити безпечний простір для глибокої та чесної розмови, що веде до змін.
                            </Paragraph>
                        </Col>

                        <Col xs={24} md={10}>
                            <img
                                src="https://images.pexels.com/photos/4101143/pexels-photo-4101143.jpeg"
                                alt="Терапевтична сесія"
                                style={{
                                    width: '100%',
                                    borderRadius: 12,
                                    boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
                                    objectFit: 'cover',
                                }}
                            />
                        </Col>
                    </Row>
                </Card>
            </div>
        </div>
    );
};

export default WorkExperience;

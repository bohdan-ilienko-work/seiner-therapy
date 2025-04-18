//Components/Services.tsx
import { Card, Typography, Row, Col } from 'antd'
import { useEffect, useState } from 'react'

const { Title, Paragraph } = Typography

const services = [
    {
        title: 'Індивідуальна терапія',
        description:
            'Підтримка у складних життєвих ситуаціях, дослідження внутрішніх конфліктів, розвиток самопізнання та прийняття себе.',
    },
    {
        title: 'Підтримка у кризах',
        description:
            'Допомога під час втрат, змін, розлучень, переїздів, вигорання — все, що потребує адаптації та ресурсу.',
    },
    {
        title: 'Робота з тривогою',
        description:
            'Навчання розпізнаванню тривоги, емоційна регуляція, зменшення напруги та повернення контролю над життям.',
    },
    {
        title: 'Питання самооцінки',
        description:
            'Допомога у формуванні здорового уявлення про себе, подоланні внутрішньої критики та розвитку впевненості.',
    },
    {
        title: 'Стосунки та межі',
        description:
            'Опрацювання труднощів у парі, з близькими або на роботі. Вивчення особистих меж і патернів взаємодії.',
    },
]

const Services = () => {
    const [visible, setVisible] = useState(false)

    useEffect(() => {
        setTimeout(() => setVisible(true), 150)
    }, [])

    return (
        <div
            style={{
                background: '#f9f9f9',
                padding: '40px 20px',
                transition: 'opacity 1s ease',
                opacity: visible ? 1 : 0,
            }}
        >
            <div style={{ maxWidth: 1100, margin: '0 auto' }}>
                <Title level={2} style={{ textAlign: 'center', marginBottom: 40 }}>
                    Мої послуги
                </Title>

                <Row gutter={[24, 24]}>
                    {services.map((service, index) => (
                        <Col key={index} xs={24} sm={12} md={12} lg={8}>
                            <Card
                                style={{
                                    height: '100%',
                                    borderRadius: '12px',
                                    boxShadow: '0 8px 24px rgba(0,0,0,0.05)',
                                }}
                                styles={{ body: { padding: '24px' } }}
                                hoverable
                            >
                                <Title level={4} style={{ marginBottom: 12 }}>
                                    {service.title}
                                </Title>
                                <Paragraph style={{ fontSize: 15, lineHeight: 1.8, textAlign: 'justify' }}>
                                    {service.description}
                                </Paragraph>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </div>
        </div>
    )
}

export default Services

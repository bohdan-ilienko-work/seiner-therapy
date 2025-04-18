//Components/Education.tsx
import { Card, Typography, Timeline, Row, Col, Carousel } from 'antd'
import { useEffect, useState } from 'react'

const { Title, Paragraph, Text } = Typography

const Education = () => {
    const [visible, setVisible] = useState(false)

    useEffect(() => {
        setTimeout(() => setVisible(true), 150)
    }, [])

    const images = [
        '/seiner-therapy/certificates/diploma.jpg',
        '/seiner-therapy/certificates/gestalt.jpg',
        '/seiner-therapy/certificates/neo.jpg',
    ]

    return (
        <div
            id="education"
            style={{
                background: '#f9f9f9',
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
                    <Title level={2} style={{ textAlign: 'center', marginBottom: 32 }}>
                        Освіта та сертифікація
                    </Title>

                    <Row
                        gutter={[32, 32]}
                        style={{ alignItems: 'center', flexWrap: 'wrap' }}
                    >
                        <Col xs={24} md={12}>
                            <Carousel autoplay dots style={{ borderRadius: 12 }}>
                                {images.map((src, idx) => (
                                    <div
                                        key={idx}
                                        style={{
                                            display: 'flex',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            height: 360,
                                            overflow: 'hidden',
                                            borderRadius: 12,
                                            padding: 12,
                                        }}
                                    >
                                        <img
                                            src={src}
                                            alt={`certificate-${idx}`}
                                            style={{
                                                maxHeight: '100%',
                                                maxWidth: '100%',
                                                objectFit: 'contain',
                                                borderRadius: 8,
                                                boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
                                            }}
                                        />
                                    </div>
                                ))}
                            </Carousel>
                        </Col>

                        <Col xs={24} md={12}>
                            <Timeline
                                mode="left"
                                items={[
                                    {
                                        label: '2019 – 2024',
                                        children: (
                                            <>
                                                <Text strong>Київський національний економічний університет</Text>
                                                <Paragraph style={{ margin: 0 }}>
                                                    Ступінь бакалавра з економічної та соціальної психології. Освітня програма:{' '}
                                                    <em>Економічна та соціальна психологія</em>.
                                                </Paragraph>
                                            </>
                                        ),
                                    },
                                    {
                                        label: '2022 – 2023',
                                        children: (
                                            <>
                                                <Text strong>Український Гештальт Інститут</Text>
                                                <Paragraph style={{ margin: 0 }}>
                                                    Сертифікат «Основи гештальт-терапії» (180 годин навчання, І ступінь).
                                                </Paragraph>
                                            </>
                                        ),
                                    },
                                    {
                                        label: '2021 – 2022',
                                        children: (
                                            <>
                                                <Text strong>НВО «Неоіатрія»</Text>
                                                <Paragraph style={{ margin: 0 }}>
                                                    Курс лекцій з психіатричної пропедевтики, діагностики та психологічної
                                                    реабілітації психічних розладів (76 годин).
                                                </Paragraph>
                                            </>
                                        ),
                                    },
                                ]}
                            />
                        </Col>
                    </Row>
                </Card>
            </div>
        </div>
    )
}

export default Education

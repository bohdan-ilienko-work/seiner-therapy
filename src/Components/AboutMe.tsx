//Components/AboutMe.tsx
import { Typography, Avatar, Card, Divider, Tag } from 'antd'
import { useEffect, useState } from 'react'

const { Title, Paragraph, Text } = Typography

const FULL_NAME = 'Анастасія Кириленко'
const NAME = 'Анастасія'
const JOB_TITLE = 'Гештальт-терапевт, сертифікований спеціаліст з досвідом понад 2 років'

const AboutMe = () => {
    const [fadeIn, setFadeIn] = useState(false)

    useEffect(() => {
        setTimeout(() => setFadeIn(true), 100) // невелика затримка для анімації
    }, [])

    return (
        <div
            style={{
                background: '#f9f9f9',
                padding: '40px 20px',
                minHeight: '100vh',
                transition: 'opacity 1s ease',
                opacity: fadeIn ? 1 : 0,
            }}
        >
            <Card
                style={{
                    maxWidth: 1100,
                    margin: '0 auto',
                    padding: '40px 32px',
                    borderRadius: '16px',
                    boxShadow: '0 12px 32px rgba(0, 0, 0, 0.06)',
                    background: '#ffffff',
                }}
            >
                <div style={{ textAlign: 'center', marginBottom: 32 }}>
                    <Avatar
                        size={120}
                        src="/ava.jpg"
                        style={{
                            backgroundColor: '#d9d9d9',
                            boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                        }}
                    />
                    <Title level={2} style={{ marginTop: 20, marginBottom: 4 }}>
                        {FULL_NAME}
                    </Title>
                    <Text type="secondary" style={{ fontSize: 16 }}>
                        {JOB_TITLE}
                    </Text>
                    <Divider style={{ marginTop: 24, borderColor: '#f0f0f0' }} />
                </div>

                <Paragraph style={{ fontSize: 17, lineHeight: 1.9, textAlign: 'justify', marginBottom: 24 }}>
                    Мене звати <strong>{NAME}</strong>, і я допомагаю людям краще розуміти себе, справлятись з емоційними труднощами та будувати здорові стосунки. У своїй роботі я використовую <em>гештальт-підхід</em>, який фокусується на усвідомленні, досвіді "тут і зараз" та підтримці особистої відповідальності.
                </Paragraph>

                <Paragraph style={{ fontSize: 17, lineHeight: 1.9, textAlign: 'justify' }}>
                    Я працюю з темами тривоги, самооцінки, внутрішніх конфліктів, життєвих криз, стосунків у парі та пошуку себе. Створюю безпечний простір, де клієнт може досліджувати свої переживання, розвивати усвідомленість і рухатися до змін.
                </Paragraph>

                <Divider orientation="left" style={{ fontWeight: 'bold', color: '#999' }}>
                    Напрямки роботи
                </Divider>
                <div style={{ marginBottom: 16 }}>
                    {['Тривожні стани', 'Відносини в парі', 'Втрати', 'Кризи і зміни', 'Самооцінка', 'Емоційна регуляція'].map((item) => (
                        <Tag key={item} color="processing" style={{ marginBottom: 8 }}>
                            {item}
                        </Tag>
                    ))}
                </div>

                <Paragraph style={{ fontSize: 15, color: '#888', textAlign: 'center', marginTop: 32 }}>
                    Якщо ви відчуваєте потребу в підтримці — я тут, аби вас вислухати та бути поруч у процесі змін.
                </Paragraph>
            </Card>
        </div>
    )
}

export default AboutMe

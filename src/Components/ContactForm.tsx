//Components/ContactForm.tsx
import { Button, Card, Form, Input, Typography } from 'antd'
import { useEffect, useState } from 'react'

const { Title, Paragraph } = Typography
const { TextArea } = Input


interface FormValues {
    name: string
    contact: string
    message: string
}

const ContactForm = () => {
    const [visible, setVisible] = useState(false)

    useEffect(() => {
        setTimeout(() => setVisible(true), 150)
    }, [])

    const onFinish = (values: FormValues) => {
        const { name, contact, message } = values
        const formattedMessage = `
        Ім’я: ${name}
        Контакт: ${contact}
        Повідомлення: ${message}
        `

        window.open(
            `mailto:anastasiakirilenko29@gmail.com?subject=Запитання від ${name}&body=${encodeURIComponent(
                formattedMessage
            )}`
        )
    }

    return (
        <div
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
                    <Title level={2} style={{ textAlign: 'center', marginBottom: 16 }}>
                        Зв’язатися зі мною
                    </Title>
                    <Paragraph style={{ textAlign: 'center', marginBottom: 32 }}>
                        Якщо у вас є запитання або ви хочете записатись на консультацію — залиште своє повідомлення, і я з вами зв’яжусь.
                    </Paragraph>

                    <Form
                        layout="vertical"
                        onFinish={onFinish}
                        requiredMark={false}
                        autoComplete="off"
                    >
                        <Form.Item
                            label="Ваше ім’я"
                            name="name"
                            rules={[{ required: true, message: 'Будь ласка, введіть ім’я' }]}
                        >
                            <Input placeholder="Наприклад, Олена" />
                        </Form.Item>

                        <Form.Item
                            label="Email або телефон"
                            name="contact"
                            rules={[{ required: true, message: 'Вкажіть спосіб зв’язку' }]}
                        >
                            <Input placeholder="email@gmail.com або +38..." />
                        </Form.Item>

                        <Form.Item
                            label="Ваше повідомлення"
                            name="message"
                            rules={[{ required: true, message: 'Напишіть коротке повідомлення' }]}
                        >
                            <TextArea rows={8} placeholder="З чим би ви хотіли попрацювати..." style={{ resize: 'none' }} />
                        </Form.Item>

                        <Form.Item style={{ textAlign: 'center', marginTop: 24 }}>
                            <Button type="primary" htmlType="submit" size="large">
                                Надіслати
                            </Button>
                        </Form.Item>
                    </Form>
                </Card>
            </div>
        </div>
    )
}

export default ContactForm

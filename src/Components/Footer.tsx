import { Layout, Typography, FloatButton } from 'antd'
import {
    InstagramOutlined,
    PhoneOutlined,
    SendOutlined,
    MailOutlined,
    ArrowUpOutlined,
} from '@ant-design/icons'

const { Footer: AntFooter } = Layout
const { Text, Link } = Typography

const Footer = () => {
    return (
        <AntFooter
            style={{
                background: '#f9f9f9',
                padding: '40px 20px',
                textAlign: 'center',
                position: 'relative',
            }}
        >
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 24,
                    alignItems: 'center',
                }}
            >
                <div
                    style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        justifyContent: 'center',
                        gap: '16px 32px',
                    }}
                >
                    <Link href="mailto:anastasiakirilenko29@gmail.com">
                        <MailOutlined /> Email
                    </Link>
                    <Link
                        href="https://t.me/osseiner"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <SendOutlined /> Telegram
                    </Link>
                    <Link
                        href="https://www.instagram.com/osseiner/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <InstagramOutlined /> Instagram
                    </Link>
                    <Link href="tel:+380991234567">
                        <PhoneOutlined /> +38 (066) 616-71-28
                    </Link>
                </div>

                <Text type="secondary" style={{ fontSize: 13 }}>
                    © {new Date().getFullYear()} Анастасія Кириленко · Усі права захищено
                </Text>
            </div>

            <FloatButton.BackTop
                visibilityHeight={200}
                icon={<ArrowUpOutlined />}
                style={{ right: 24, bottom: 24 }}
            />
        </AntFooter>
    )
}

export default Footer

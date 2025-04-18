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
                background: '#f4f4f4',
                padding: '40px 20px',
                textAlign: 'center',
                borderTop: '1px solid #eee',
                marginTop: 80,
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
                        <PhoneOutlined /> +38 (099) 123 45 67
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

import { Layout, Menu, Dropdown, Space, Drawer, Button } from 'antd'
import type { MenuProps } from 'antd'
import {
    InstagramOutlined,
    PhoneOutlined,
    SendOutlined,
    DownOutlined,
    MenuOutlined,
    MailOutlined
} from '@ant-design/icons'
import { useEffect, useState } from 'react'

const { Header: AntHeader } = Layout

const sections = ['about', 'services', 'education', 'contact-with-me']

const Header = () => {
    const [current, setCurrent] = useState('about')
    const [scrolled, setScrolled] = useState(false)
    const [drawerOpen, setDrawerOpen] = useState(false)
    const [isMobile, setIsMobile] = useState(false)

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768)
        }
        const handleScroll = () => {
            setScrolled(window.scrollY > 50)

            const offsets = sections.map((id) => {
                const el = document.getElementById(id)
                if (!el) return { id, offset: Infinity }
                return { id, offset: Math.abs(el.getBoundingClientRect().top) }
            })

            const nearest = offsets.reduce((a, b) => (a.offset < b.offset ? a : b))
            setCurrent(nearest.id)
        }

        handleResize()
        window.addEventListener('resize', handleResize)
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('resize', handleResize)
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    const menuItems: MenuProps['items'] = [
        {
            label: <a href="#about" onClick={() => setDrawerOpen(false)}>Про мене</a>,
            key: 'about',
        },
        {
            label: <a href="#services" onClick={() => setDrawerOpen(false)}>Послуги</a>,
            key: 'services',
        },
        {
            label: <a href="#education" onClick={() => setDrawerOpen(false)}>Освіта</a>,
            key: 'education',
        },
        {
            label: <a href="#contact-with-me" onClick={() => setDrawerOpen(false)}>Зв’язатися зі мною</a>,
            key: 'contact-with-me',
        },
    ]

    const contactDropdownItems: MenuProps['items'] = [
        {
            key: 'email',
            label: (
                <a href="mailto:anastasiakirilenko29@gmail.com">
                    <MailOutlined /> Email
                </a>
            ),
        },
        {
            key: 'tg',
            label: (
                <a href="https://t.me/osseiner" target="_blank" rel="noopener noreferrer">
                    <SendOutlined /> Telegram
                </a>
            ),
        },
        {
            key: 'insta',
            label: (
                <a href="https://www.instagram.com/osseiner/" target="_blank" rel="noopener noreferrer">
                    <InstagramOutlined /> Instagram
                </a>
            ),
        },
        {
            key: 'phone',
            label: (
                <a href="tel:+380991234567">
                    <PhoneOutlined /> +38 (066) 616-71-28
                </a>
            ),
        },
    ]

    const ContactDropdown = (
        <Dropdown menu={{ items: contactDropdownItems }} trigger={['hover', 'click']}>
            <a onClick={(e) => e.preventDefault()}>
                <Space>
                    Контакти
                    <DownOutlined style={{ fontSize: 10 }} />
                </Space>
            </a>
        </Dropdown>
    )

    return (
        <AntHeader
            style={{
                position: 'sticky',
                top: 0,
                zIndex: 10,
                width: '100%',
                background: scrolled ? '#ffffff' : 'transparent',
                boxShadow: scrolled ? '0 2px 8px rgba(0,0,0,0.05)' : 'none',
                transition: 'all 0.3s ease',
                padding: '0 40px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                height: 64,
            }}
        >
            <div style={{ fontWeight: 600, fontSize: 20, color: '#222' }}>Seiner.th</div>

            {isMobile ? (
                <>
                    <Button
                        icon={<MenuOutlined />}
                        onClick={() => setDrawerOpen(true)}
                        type="text"
                    />
                    <Drawer
                        title="Меню"
                        placement="right"
                        closable={true}
                        onClose={() => setDrawerOpen(false)}
                        open={drawerOpen}
                    >
                        <Menu
                            mode="vertical"
                            selectedKeys={[current]}
                            items={[...menuItems, { key: 'contact', label: ContactDropdown }]}
                        />
                    </Drawer>
                </>
            ) : (
                <Menu
                    mode="horizontal"
                    selectedKeys={[current]}
                    style={{ borderBottom: 'none', background: 'transparent' }}
                    items={[...menuItems, { key: 'contact', label: ContactDropdown }]}
                />
            )}
        </AntHeader>
    )
}

export default Header

import { Layout, Menu } from "antd"
import { useState } from "react"
import type { MenuProps } from "antd"

const { Sider: AntdSider } = Layout 
type MenuItem = Required<MenuProps>['items'][number]

const items: MenuItem[] = [
    getItem("Grid size", '1'),
    getItem("Cursor Position", '2'),
    getItem("Search Algorithm", '3')
]

const Sider = () => {
    const [collapsed, setCollapsed] = useState<boolean>(false)
    return (
        <AntdSider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
            <Menu theme="dark" mode="inline" items={items} />
        </AntdSider>
    )
}

function getItem(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
): MenuItem {
    return {
        key,
        icon,
        label,
    } as MenuItem;
}


export {
    Sider
}
import { Layout } from "antd"
import { useState } from "react"

const {Sider: AntdSider} = Layout 

const Sider = () => {
    const [collapsed, setCollapsed] = useState<boolean>(false)
    return (
        <AntdSider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
            left sidebar
        </AntdSider>
    )
}

export {
    Sider
}
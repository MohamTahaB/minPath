import { Layout, Typography } from "antd"

const { Header: AntdHeader } = Layout 
const {Title} = Typography

const Header = () => {
    return (
        <AntdHeader style={{ display: "flex", alignItems: "center", justifyContent:'center' }}>
            <Title style={{ color: "white" }}>Min Path</Title>
        </AntdHeader>
    );
}

export {
    Header
}
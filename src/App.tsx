import { useState } from "react";
import { BlockTable } from "./components/BlockTable";
import { InputNumber, Layout } from "antd";
import { table } from "./logic/searchLogic";
import { Header } from "./components/Header";
import { Sider } from "./components/Sider";

const { Content } = Layout;

function App() {
    const [size, setSize] = useState<number | null>(4);
    const currentTable = table(size === null ? 3 : size);
    console.log("testing the table gen", currentTable);
    return (
        <Layout style={{ minHeight: "100vh" }}>
            <Header />
            <Layout>
                <Sider />
                <Content>
                    <div>
                        <BlockTable
                            size={size === null ? 3 : size}
                            table={currentTable}
                        />
                        <div>
                            <InputNumber
                                min={4}
                                max={10}
                                value={size}
                                onChange={setSize}
                            />
                        </div>
                    </div>{" "}
                </Content>
            </Layout>
        </Layout>
    );
}

export default App;

import { useState } from "react";
import { BlockTable } from "./components/BlockTable";
import { InputNumber } from "antd";

function App() {
    const [size, setSize] = useState<number | null>(4);
    return (
        <div>
            <BlockTable size={(size === null ? 3 : size)} />
            <div>
                <InputNumber min={4} max={10} value={size} onChange={setSize} />
            </div>
        </div>
    );
}

export default App;

import { useState } from "react";
import { BlockTable } from "./components/BlockTable";
import { InputNumber } from "antd";
import { table } from "./logic/searchLogic";

function App() {
    const [size, setSize] = useState<number | null>(4);
    const currentTable = table(size === null ? 3 : size);
    console.log("testing the table gen", currentTable);
    return (
        <div>
            <BlockTable size={size === null ? 3 : size} table={currentTable} />
            <div>
                <InputNumber min={4} max={10} value={size} onChange={setSize} />
            </div>
        </div>
    );
}

export default App;

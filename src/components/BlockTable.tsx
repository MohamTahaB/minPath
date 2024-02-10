import { Flex } from "antd";
import { Block } from "./Block";
import { Cell, Table } from "../logic/searchLogic";

type BlockTableProps = {
    size: number;
    table: Table;
};

type BlockRowProps = {
    row: Cell[];
};

const BlockTable = ({ size, table }: BlockTableProps) => {
    const blockRows = Array.from(table.cells, (_, index) => (
        <BlockRow key={index} row={table.cells[index]} />
    ));
    return (
        <div>
            <Flex justify="center" align="center" vertical>
                {blockRows}
            </Flex>
        </div>
    );
};

const BlockRow = ({ row }: BlockRowProps) => {
    const blocks = Array.from(row, (_, index) => (
        <Block key={index} cell={row[index]} />
    ));
    return (
        <div>
            <Flex justify="center" align="center">
                {blocks}
            </Flex>
        </div>
    );
};

export { BlockTable };

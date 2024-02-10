import { Flex } from "antd";
import { Block } from "./Block";

type BlockTableProps = {
    size: number;
};

type BlockRowProps = {
    size: number;
};

const BlockTable = ({ size }: BlockTableProps) => {
    const blockRows = Array.from({ length: size }, (_, index) => (
        <BlockRow key={index} size={size}/>
    ))
    return (
        <div>
            <Flex justify="center" align="center" vertical>
                {blockRows}
            </Flex>
        </div>
    );
};

const BlockRow = ({ size }: BlockRowProps) => {

    const blocks = Array.from({ length: size }, (_, index) => (
        <Block key={index}/>
    ))
    return (
        <div>
            <Flex justify="center" align="center">
                {blocks}
            </Flex>
        </div>
    );
}

export {
    BlockTable
}
import { Cell } from "../logic/searchLogic";

type BlockProps = {
    cell: Cell;
};

const Block = ({ cell }: BlockProps) => {
    return (
        <div
            style={{
                padding: "8px",
                height: "50px",
                width: "50px",
                borderTop: cell.walls.wallUp
                    ? "3px solid #000000"
                    : "1px solid #ccc",
                borderBottom: cell.walls.wallDown
                    ? "3px solid #000000"
                    : "1px solid #ccc",
                borderRight: cell.walls.wallRight
                    ? "3px solid #000000"
                    : "1px solid #ccc",
                borderLeft: cell.walls.wallLeft
                    ? "3px solid #000000"
                    : "1px solid #ccc",
            }}
        ></div>
    );
};

export { Block };

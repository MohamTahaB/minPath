type Walls = {
    wallUp: boolean
    wallDown: boolean
    wallLeft: boolean
    wallRight: boolean
}

type Cell = {
    x: number
    y: number
    walls: Walls
}

type Cursor = {
    x: number
    y: number
}

type Table = {
    cells: Cell[][]
    cursor: Cursor
}

function table(size: number): Table {
    const cells: Cell[][] = []

    for (let y = 0; y < size; y++) {
        const row: Cell[] = []
        for (let x = 0; x < size; x++) {
            row.push({
                x,
                y,
                walls: {
                    wallDown: false,
                    wallLeft: false,
                    wallRight: false,
                    wallUp: false,
                }
            })
            
        }
        cells.push(row)
    }
    return {
        cells: cells,
        cursor: {
            x: 0,
            y: 0
        } 
    }
}

export {table}


export type {
    Walls,
    Cell,
    Cursor, 
    Table
}

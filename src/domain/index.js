// src/domain/index.js
// 这是唯一且完整的导出入口，删除该文件中其他所有的 export 语句
export { 
    createSudoku, 
    createSudokuFromJSON, 
    createGame, 
    createGameFromJSON 
} from '../node_modules/@sudoku/stores/grid.js';

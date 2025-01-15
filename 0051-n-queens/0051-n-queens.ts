function solveNQueens(n: number): string[][] {
    const solutions: string[][] = [];
    const queens: number[] = Array(n).fill(-1);
    const cols = new Array(n).fill(false);
    const diag1 = new Array(2 * n - 1).fill(false);
    const diag2 = new Array(2 * n - 1).fill(false);

     const backtrack = (row: number)=> {
        if (row === n) {
            const board = queens.map(col => '.'.repeat(col) + 'Q' + '.'.repeat(n - col - 1));
            solutions.push(board);
            return;
        }

        for (let col = 0; col < n; col++) {
            if (cols[col] || diag1[row - col + n - 1] || diag2[row + col]) {
                continue;
            }

            queens[row] = col;
            cols[col] = true;
            diag1[row - col + n - 1] = true;
            diag2[row + col] = true;

            backtrack(row + 1);

            cols[col] = false;
            diag1[row - col + n - 1] = false;
            diag2[row + col] = false;
        }
    }

    backtrack(0);
    return solutions;
}

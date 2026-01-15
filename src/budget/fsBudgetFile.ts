const fs = require('node:fs/promises')

export async function getBudget(): Promise<number> {
    try {
        const data = await fs.readFile('./src/budget/budget.txt', { encoding: 'utf8' });
        return +data
    } catch (err) {
        console.error(err);
        throw new Error("fail get budget");
    }
}

export async function updateBudget(budget: number) {
    try {
        await fs.writeFile('./src/budget/budget.txt', +budget);
    } catch (err) {
        console.error(err);
    }
}
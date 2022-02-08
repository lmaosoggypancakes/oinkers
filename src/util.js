export const calculate_balance = (transactions) => {
    if (!(Symbol.iterator in Object(transactions))) return 0;
    console.log(transactions);
    let sum = 0
    for(let t of transactions) {
        sum += t.amount
    }
    const ret = Math.round(sum * 100) / 100   
    return ret
}

export const running_total = (transactions) => {
    const amounts = transactions.map(t => t.amount)
    const reducer = (sum => value => sum += value)(0)
    return amounts.map(reducer)
}
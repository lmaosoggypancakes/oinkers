export const calculate_balance = (transactions) => {
    let sum = 0
    for(let t of transactions) {
        sum += t.amount
    }
    const ret = Math.round(sum * 100) / 100   
    return ret
}
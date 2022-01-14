export const calculate_balance = (transactions) => {
    let sum = 0
    for(t of transactions) {
        sum += transactions.amount
    }
    return Math.round(sum * 100) / 100
}
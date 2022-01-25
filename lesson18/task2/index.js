export const wallet = {
  transactions: [1, 3, 339, 647, 2, 47],
  getMax() {
    return Math.max(...this.transactions)
  },
  getMin() {
    return Math.min(...this.transactions)
  }
}

console.log(wallet.getMin());
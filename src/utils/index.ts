export const parseToBrl = (amount = 0) => {
  return new Intl.NumberFormat('pr-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(amount)
}

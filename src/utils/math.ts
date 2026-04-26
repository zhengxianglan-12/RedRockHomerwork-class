// 工具函数1：计算折扣
export function calculateDiscount(price: number, discount: number = 0.2): number {
  if (price < 0) throw new Error('价格不能为负数')
  if (discount < 0 || discount > 1) throw new Error('折扣必须在0-1之间')
  return price * (1 - discount)
}

// 工具函数2：格式化价格
export function formatPrice(price: number, currency: string = '¥'): string {
  if (price < 0) throw new Error('价格不能为负数')
  return `${currency}${price.toFixed(2)}`
}
import { describe, it, expect } from 'vitest'
import { calculateDiscount, formatPrice } from './math'

// 测试 calculateDiscount
describe('calculateDiscount 函数', () => {
  it('应该正确计算8折', () => {
    expect(calculateDiscount(100, 0.2)).toBe(80)  // 100元打8折=80
  })

  it('默认应该打8折', () => {
    expect(calculateDiscount(100)).toBe(80)  // 不传折扣，默认8折
  })

  it('价格负数应该报错', () => {
    expect(() => calculateDiscount(-10)).toThrow('价格不能为负数')
  })

  it('折扣超出范围应该报错', () => {
    expect(() => calculateDiscount(100, 1.5)).toThrow('折扣必须在0-1之间')
  })
})

// 测试 formatPrice
describe('formatPrice 函数', () => {
  it('应该正确格式化价格', () => {
    expect(formatPrice(100)).toBe('¥100.00')
  })

  it('应该支持其他货币', () => {
    expect(formatPrice(100, '$')).toBe('$100.00')
  })

  it('应该处理小数', () => {
    expect(formatPrice(99.9)).toBe('¥99.90')
  })

  it('价格负数应该报错', () => {
    expect(() => formatPrice(-10)).toThrow('价格不能为负数')
  })
})
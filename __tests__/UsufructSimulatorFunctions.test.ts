import { mountValuesUsufruct } from "./class/UsufructSimulatorClass";
import { calculateUsufruct } from "../src/utils/UsufructSimulatorFunctions"

const test1 = new mountValuesUsufruct(100000, 50, 'a.a.', 9000) // 1 ano e 2 meses
const test2 = new mountValuesUsufruct(100000, 10, 'a.a.', 100) // Pelo resto da vida
const test3 = new mountValuesUsufruct(1000, 10, 'a.a.', 1007.97) //1 mês + toast
const test4 = new mountValuesUsufruct(1000, 10, 'a.a.', 1007.98) //0 mês + toast
const test5 = new mountValuesUsufruct(100000, 10, 'a.a.', 1000) // 16 anos e 9 meses
const test6 = new mountValuesUsufruct(10000, 500, 'a.m.', 10000) // Pelo resto da vida
const test7 = new mountValuesUsufruct(100000, 10, 'a.m.', 15000) // 11 meses
const test8 = new mountValuesUsufruct(100000, 10, 'a.m.', 200000) // 0 mês
const test9 = new mountValuesUsufruct(100000, 10, 'a.m.', 11000) // 2 anos e 1 mês
const test10 = new mountValuesUsufruct(100000, 10, 'a.m.', 12000) // 1 ano e 6 meses
const test11 = new mountValuesUsufruct(100000, 50, 'a.a.', 10000) // 1 ano
const test12 = new mountValuesUsufruct(100000, 150, 'a.a.', 9400) // 2 anos

describe(`Testes função "calculateUsufruct"`, () => {
    test(`Teste com valores ${test1}`, () => {
        expect(calculateUsufruct(test1.profitability, test1.equity, test1.monthlyWithdrawal)).toBe('1 ano e 2 meses')
    }),
    test(`Teste com valores ${test2}`, () => {
        expect(calculateUsufruct(test2.profitability, test2.equity, test2.monthlyWithdrawal)).toBe('Pelo resto da vida')
    }),
    test(`Teste com valores ${test3}`, () => {
        expect(calculateUsufruct(test3.profitability, test3.equity, test3.monthlyWithdrawal)).toBe('1 mês')
    }),
    test(`Teste com valores ${test4}`, () => {
        expect(calculateUsufruct(test4.profitability, test4.equity, test4.monthlyWithdrawal)).toBe('0 mês')
    }),
    test(`Teste com valores ${test5}`, () => {
        expect(calculateUsufruct(test5.profitability, test5.equity, test5.monthlyWithdrawal)).toBe('16 anos e 9 meses')
    }),
    test(`Teste com valores ${test6}`, () => {
        expect(calculateUsufruct(test6.profitability, test6.equity, test6.monthlyWithdrawal)).toBe('Pelo resto da vida')
    }),
    test(`Teste com valores ${test7}`, () => {
        expect(calculateUsufruct(test7.profitability, test7.equity, test7.monthlyWithdrawal)).toBe('11 meses')
    }),
    test(`Teste com valores ${test8}`, () => {
        expect(calculateUsufruct(test8.profitability, test8.equity, test8.monthlyWithdrawal)).toBe('0 mês')
    }),
    test(`Teste com valores ${test9}`, () => {
        expect(calculateUsufruct(test9.profitability, test9.equity, test9.monthlyWithdrawal)).toBe('2 anos e 1 mês')
    }),
    test(`Teste com valores ${test10}`, () => {
        expect(calculateUsufruct(test10.profitability, test10.equity, test10.monthlyWithdrawal)).toBe('1 ano e 6 meses')
    }),
    test(`Teste com valores ${test11}`, () => {
        expect(calculateUsufruct(test11.profitability, test11.equity, test11.monthlyWithdrawal)).toBe('1 ano')
    }),
    test(`Teste com valores ${test12}`, () => {
        expect(calculateUsufruct(test12.profitability, test12.equity, test12.monthlyWithdrawal)).toBe('2 anos')
    })
})

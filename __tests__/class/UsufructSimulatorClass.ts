interface Option{
    name: string;
    code: string;
}
interface Profitability {
    value: number;
    option: Option;
}
export class mountValuesUsufruct{
    equity: number;
    profitability: Profitability;
    monthlyWithdrawal: number;
    constructor(equity: number, profitabilityValue: number, profitabilityOption: string, monthlyWithdrawal: number){
        this.equity = equity
        this.profitability = {
            value: profitabilityValue,
            option: {
                name: profitabilityOption,
                code: profitabilityOption
            }
        }
        this.monthlyWithdrawal = monthlyWithdrawal
    }
}
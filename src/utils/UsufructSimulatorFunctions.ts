// Metódos @/views/simulators/UsufructSimulator
interface Option {
    name: string;
    code: string;
}
interface Profitability {
    value: number;
    option: Option;
}
function calculateUsufruct(profitability: Profitability, equity: number, monthlyWithdrawal: number) {
    const calculateProfitability = profitability.option.name === 'a.m.' ? (profitability.value as number) / 100 : convertTaxeToMonthly(profitability.value as number);
    const result = Math.floor(Math.log((monthlyWithdrawal as number) / ((monthlyWithdrawal as number) - (equity as number) * calculateProfitability)) / Math.log(1 + calculateProfitability));

    return isNaN(result) || result === Infinity || result > 1200 ? 'Pelo resto da vida' : formatYearsAndMonths(result);
}
// função que transforma meses em anos e meses
function formatYearsAndMonths(months: number) {
    const years = Math.floor(months / 12);
    const remainingMonths = months % 12;
    if (years === 0) return `${remainingMonths} m${remainingMonths > 1 ? 'e' : 'ê'}s${remainingMonths > 1 ? 'es' : ''}`;
    if (remainingMonths === 0) return `${years} ano${years > 1 ? 's' : ''}`;
    return `${years} ano${years > 1 ? 's' : ''} e ${remainingMonths} m${remainingMonths > 1 ? 'e' : 'ê'}s${remainingMonths > 1 ? 'es' : ''}`;
}
function convertTaxeToMonthly(taxe: number) {
    return Math.pow(1 + taxe / 100, 1 / 12) - 1;
}

export { calculateUsufruct }

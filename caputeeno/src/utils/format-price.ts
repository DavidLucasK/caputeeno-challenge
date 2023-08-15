export function formatPrice(valueInCents: number) {
    const formattedValue = valueInCents / 100;
    return `R$${formattedValue.toFixed(2)}`;
}
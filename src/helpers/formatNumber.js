/*formateo de precios sin decimales*/

export const formatNumber = (number) => {
    return new Intl.NumberFormat('de-DE', {minimumFractionDigits: 0}).format(number);
}

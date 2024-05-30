export function decimalPlaces(n: number, places: number = 2) {
    let s = n.toFixed(places);
    if (places > 0) s = s.replace(/\.?0*$/m, '');
    return s;
}

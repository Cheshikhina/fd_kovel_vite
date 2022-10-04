/**
 * Debounce для повторяющихся функций
 *
 * @param {function} fn
 * @param {number} interval
 * @returns {function(): void}
 */
export function debounce(fn, interval) {
    let timer;
    return function debounced() {
        clearTimeout(timer);
        const args = arguments;
        const that = this;
        timer = setTimeout(function callOriginalFn() {
            fn.apply(that, args);
        }, interval);
    };
}

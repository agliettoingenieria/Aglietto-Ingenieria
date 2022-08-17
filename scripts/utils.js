export const areEquals = (source, compare) => source === compare;
/**
 *
 * @param {IntersectionObserverCallback} cb
 * @param {IntersectionObserverInit} observerOptions
 * @returns { IntersectionObserver } Observer
 */
export const Observer = (cb, observerOptions) => new IntersectionObserver();

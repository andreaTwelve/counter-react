export const INCREMENT = 'increment';
export const DECREMENT = 'decrement';
export const TOTALINCREMENT = 'totalIncrement';
export const CLEARZERO = 'clearZero';

export function increment() {
    return {
        type: INCREMENT
    }
}
export function decrement() {
    return {
        type: DECREMENT
    }
}

export function totalIncrement() {
    return {
        type: TOTALINCREMENT
    }
}

export const clearZero = count => ({
    type: CLEARZERO,
    count
});


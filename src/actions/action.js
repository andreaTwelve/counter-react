export const INCREMENT = 'increment';
export const DECREMENT = 'decrement';
export const TOTALINCREMENT = 'totalIncrement';

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

import EventRegistry from "eventemitter3";
declare function emit<T extends Record<string, object>, E extends Extract<keyof T, string> = Extract<keyof T, string>>(event: E, payload: T[E], ...args: any[]): boolean;
declare function on<T extends Record<string, object>, E extends Extract<keyof T, string> = Extract<keyof T, string>>(event: E, callback: (payload: T[E]) => void, ...args: any[]): EventRegistry<string | symbol, any>;
declare function once<T extends Record<string, object>, E extends Extract<keyof T, string> = Extract<keyof T, string>>(event: E, callback: (payload: T[E]) => void, ...args: any[]): EventRegistry<string | symbol, any>;
export declare const EventEmitter: {
    emit: typeof emit;
    eventNames: () => (string | symbol)[];
    listenerCount: (event: string | symbol) => number;
    listeners: <T extends string | symbol>(event: T) => ((...args: any[]) => void)[];
    off: <T extends string | symbol>(event: T, fn?: (...args: any[]) => void, context?: any, once?: boolean) => EventRegistry<string | symbol, any>;
    on: typeof on;
    once: typeof once;
    removeAllListeners: (event?: string | symbol) => EventRegistry<string | symbol, any>;
};
export {};

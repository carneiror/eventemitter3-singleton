import EventRegistry from "eventemitter3";

const registry = new EventRegistry();

const { eventNames, listenerCount, listeners, off, removeAllListeners } = registry;

function emit<
  T extends Record<string, object>,
  E extends Extract<keyof T, string> = Extract<keyof T, string>
>(event: E, payload: T[E], ...args: any[]) {
  return registry.emit(event, payload, ...args);
}

function on<
  T extends Record<string, object>,
  E extends Extract<keyof T, string> = Extract<keyof T, string>
>(event: E, callback: (payload: T[E]) => void, ...args: any[]) {
  return registry.on(event, callback, ...args);
}

function once<
  T extends Record<string, object>,
  E extends Extract<keyof T, string> = Extract<keyof T, string>
>(event: E, callback: (payload: T[E]) => void, ...args: any[]) {
  return registry.once(event, callback, ...args);
}

export const EventEmitter = {
  emit,
  eventNames,
  listenerCount,
  listeners,
  off,
  on,
  once,
  removeAllListeners
};
"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
var eventemitter3_1 = require("eventemitter3");
var registry = new eventemitter3_1.default();
var eventNames = registry.eventNames, listenerCount = registry.listenerCount, listeners = registry.listeners, off = registry.off, removeAllListeners = registry.removeAllListeners;
function emit(event, payload) {
    var args = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        args[_i - 2] = arguments[_i];
    }
    return registry.emit.apply(registry, __spreadArray([event, payload], args, false));
}
function on(event, callback) {
    var args = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        args[_i - 2] = arguments[_i];
    }
    return registry.on.apply(registry, __spreadArray([event, callback], args, false));
}
function once(event, callback) {
    var args = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        args[_i - 2] = arguments[_i];
    }
    return registry.once.apply(registry, __spreadArray([event, callback], args, false));
}
exports.default = {
    emit: emit,
    eventNames: eventNames,
    listenerCount: listenerCount,
    listeners: listeners,
    off: off,
    on: on,
    once: once,
    removeAllListeners: removeAllListeners
};

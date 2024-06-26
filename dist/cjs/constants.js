"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MESSAGES = void 0;
const MESSAGES = {
    ON: 'Gamepad detected.',
    OFF: 'Gamepad disconnected.',
    INVALID_PROPERTY: 'Invalid property.',
    INVALID_VALUE_NUMBER: 'Invalid value. It must be a number between 0.00 and 1.00.',
    INVALID_BUTTON: (name) => `Button "${name}" does not exist.`,
    UNKNOWN_EVENT: 'Unknown event name.',
    NO_SUPPORT: 'Your web browser does not support the Gamepad API.'
};
exports.MESSAGES = MESSAGES;

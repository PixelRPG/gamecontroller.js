// This file is the entry point for modules, use this if you do not want to set the global window.gameControl object

export { MESSAGES } from "./constants";
export { isGamepadSupported } from "./tools";
export * from "./types";

import gameControl from "./gamecontrol";

export { gameControl };
export default gameControl;

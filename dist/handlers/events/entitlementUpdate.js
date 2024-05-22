"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("../../core");
const DiscordEventHandler_1 = require("../../structures/extended/DiscordEventHandler");
exports.default = new DiscordEventHandler_1.DiscordEventHandler({
    name: "entitlementUpdate",
    version: "1.5.0",
    description: "This event is fired when an entitlement is updated",
    listener: async function (old, now) {
        const commands = this.commands.get("entitlementUpdate");
        for (const command of commands) {
            core_1.Interpreter.run({
                obj: now,
                command,
                client: this,
                states: {
                    entitlement: {
                        new: now,
                        old
                    },
                },
                data: command.compiled.code,
                args: [],
            });
        }
    }
});
//# sourceMappingURL=entitlementUpdate.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("../../core");
const DiscordEventHandler_1 = require("../../structures/extended/DiscordEventHandler");
exports.default = new DiscordEventHandler_1.DiscordEventHandler({
    name: "autoModerationRuleUpdate",
    version: "1.5.0",
    description: "This event is fired when an automod rule is updated",
    listener: async function (old, newer) {
        const commands = this.commands.get("autoModerationRuleUpdate");
        for (const command of commands) {
            core_1.Interpreter.run({
                obj: newer,
                command,
                client: this,
                states: {
                    automodRule: {
                        new: newer,
                        old,
                    }
                },
                data: command.compiled.code,
                args: [],
            });
        }
    },
    intents: ["Guilds", "AutoModerationConfiguration"],
});
//# sourceMappingURL=autoModerationRuleUpdate.js.map
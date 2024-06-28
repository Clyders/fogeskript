"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$roll",
    version: "1.0.0",
    description: "Returns a random roll number (no cache)",
    unwrap: true,
    output: structures_1.ArgType.Number,
    brackets: true,
    args: [
        {
            name: "min",
            description: "The minimum possible number",
            rest: false,
            required: true,
            type: structures_1.ArgType.Number,
        },
        {
            name: "max",
            description: "The max possible number",
            rest: false,
            type: structures_1.ArgType.Number,
        },
        {
            name: "decimals",
            description: "Whether to use decimals",
            rest: false,
            type: structures_1.ArgType.Boolean,
        },
    ],
    execute(ctx, [min, max, decimals]) {
        const roll = max ? Math.random() * (max - min) + min : Math.random() * min;
        return this.success(!decimals ? Math.floor(roll) : roll);
    },
});
//# sourceMappingURL=roll.js.map

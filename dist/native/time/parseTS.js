"use strict";

Object.defineProperty(exports, "__esModule", { value: true });

const structures_1 = require("../../structures");

exports.default = new structures_1.NativeFunction({
    name: "$parseTS",
    version: "1.0.0",
    description: "Parse the Timestamps",
    unwrap: true,
    args: [
        {
            name: "timestamp",
            description: "The timestamp...",
            required: true,
            type: structures_1.ArgType.String,
            rest: false,
        },
    ],
    brackets: true,
    execute(ctx, [timestamp]) {
        
    const currentTime = Math.floor(Date.now() / 1000);
    const difference = Math.abs(currentTime - timestamp);
    
    const hours = Math.floor(difference / 3600);
    const minutes = Math.floor((difference % 3600) / 60);
    const seconds = difference % 60;

    const result = `${hours}h${minutes}m${seconds}s`;

    return this.success(result);
}
    },
);
//# sourceMappingURL=parseTS.js.map

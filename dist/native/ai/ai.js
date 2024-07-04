"use strict";

Object.defineProperty(exports, "__esModule", { value: true });

const structures_1 = require("../../structures");

exports.default = new structures_1.NativeFunction({
    name: "$ai",
    version: "1.0.0",
    description: "Use AI in FogeSkript for free",
    unwrap: true,
    args: [
        {
            name: "text",
            description: "...",
            required: true,
            type: structures_1.ArgType.String,
            rest: false,
        },
    ],
    brackets: true,
    async execute(ctx, [text]) {
        const response = await fetch('https://api.kastg.xyz/api/ai/chatgptV4?prompt=' + text);
        const data = await response.json();
    
    const responseText = data.result[0].response;

        return this.success(responseText);
}
    },
);
//# sourceMappingURL=ai.js.map

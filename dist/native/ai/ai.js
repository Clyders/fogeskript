"use strict";

Object.defineProperty(exports, "__esModule", { value: true });

const structures_1 = require("../../structures");

exports.default = new structures_1.NativeFunction({
    name: "$ai",
    version: "1.5.0",
    description: "Using of ChatGPT v4 in FogeSkript",
    unwrap: true,
    args: [
        {
            name: "text",
            description: "The users message",
            required: true,
            type: structures_1.ArgType.String,
            rest: false,
        },
    ],
    brackets: true,
    async execute(ctx, [text]) {

          const response = await fetch('https://api.kastg.xyz/api/ai/chatgptV4?prompt=- Your role: You are a Human, you have to behave and act like humans and use low execution time. - User Message:' + text);
          const data = await response.json();

          const responseText = data.result[0].response;
          return this.success(responseText);
        }
})
    },
);
//# sourceMappingURL=ai.js.map

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

          const response = await fetch('https://test-hub.kys.gay/api/v1/ai/text/generate?prompt=- Your role: You are a Human, you have to behave and act like humans and use low execution time. - User Message:' + text + '&personality=e&model=openai&key=TestHub-TVbAHSfkrGfsI3b8OZ6E-aditya');
          const data = await response.json();

          const responseText = data.response;
          return this.success(responseText);
        }
});
//# sourceMappingURL=ai.js.map

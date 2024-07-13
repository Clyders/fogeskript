"use strict";

Object.defineProperty(exports, "__esModule", { value: true });

const structures_1 = require("../../structures");
const { DataBase } = require("@tryforge/forge.db/dist/util"); 

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
        
        const name = "tokens";
        function subtractNumber(value, amount) {
          return value - amount;
        }
        const data2 = await DataBase.get({ name, id: ctx.user?.id, type: "user" }).then((x) => x?.value);
        
        if (data2 === undefined || data2 === 0) {
          return this.success("You have no tokens left, get back tomorrow");
        } else {
          let value = data2 !== undefined ? subtractNumber(Number(data2), 100) : 0;
          await DataBase.set({ name, id: ctx.user?.id, value, type: "user" });

          const response = await fetch('https://api.kastg.xyz/api/ai/chatgptV4?prompt=' + text);
          const data = await response.json();

          const responseText = data.result[0].response;
          return this.success(responseText);
        }
}
    },
);
//# sourceMappingURL=ai.js.map

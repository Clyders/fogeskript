"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
const { DataBase } = require("@tryforge/forge.db/dist/util"); 

exports.default = new structures_1.NativeFunction({
    name: "$tokens",
    version: "1.0.0",
    description: "Tokens for $ai usage",
    unwrap: true,
    async execute(ctx) {
        const name = "tokens";
        const data = await DataBase.get({ name, id: ctx.user?.id, type: "user" }).then((x) => x?.value);
        return this.success(data);

}
    },
);
//# sourceMappingURL=ai.js.map

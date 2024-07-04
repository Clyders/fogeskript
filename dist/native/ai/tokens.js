"use strict";

Object.defineProperty(exports, "__esModule", { value: true });

const { structures_1, IExtendedCompilationResult, Interpreter, NativeFunction } = require("../../structures");
const { DataBase } = require("@tryforge/forge.db/dist/util");
const { ForgeDB } = require("@tryforge/forge.db");

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
        const data = await DataBase.get({"tokens", id: ctx.user?.id, value, type: "user" }).then((x) => x?.value);
if (data === null || data === undefined) {
    if (def) return this.successJSON(def);
    else if (ForgeDB.defaults && name in ForgeDB.defaults) {
        const defData = ForgeDB.defaults[name];
        if (typeof defData === "object" && defData !== null && "functions" in defData) {
            const d = defData;
            // Run
            const result = await Interpreter.run(
                ctx.clone({
                    data: d,
                    allowTopLevelReturn: true,
                    doNotSend: true,
                    redirectErrorsToConsole: true,
                })
            );
            return result === null ? this.stop() : this.successJSON(result);
        } else return this.successJSON(defData);
    }
}

return this.successJSON("Tokens left:" + data);

}
    },
);
//# sourceMappingURL=ai.js.map

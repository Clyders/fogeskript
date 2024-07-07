"use strict";

Object.defineProperty(exports, "__esModule", { value: true });

const { structures_1, IExtendedCompilationResult, Interpreter, NativeFunction } = require("../../structures");
const { DataBase } = require("@tryforge/forge.db/dist/util");
const { ForgeDB } = require("@tryforge/forge.db");

exports.default = new structures_1.NativeFunction({
    name: "$tokens",
    version: "1.0.0",
    description: "Tokens for $ai usage",
    unwrap: true,
    brackets: false,
    async execute(ctx) {
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

return this.successJSON(data);

}
    },
);
//# sourceMappingURL=ai.js.map

import { ArgType, IExtendedCompilationResult, Interpreter, NativeFunction  } from "../../structures"
import { DataBase } from "@tryforge/forge.db/dist/util"
import { ForgeDB } from "@tryforge/forge.db"

export default new NativeFunction({
    name: "$tokens",
    version: "1.0.0",
    description: "Tokens left for the $ai usage",
    unwrap: true,
    brackets: true,
      async execute(ctx) {

const data = await DataBase.get({ "tokens", id: ctx.user?.id, value, type: "user" }).then((x) => x?.value)
        if (data === null || data === undefined) {
            if (def) return this.successJSON(def)
            else if (ForgeDB.defaults && name in ForgeDB.defaults) {
                const defData = ForgeDB.defaults[name]
                if (typeof defData === "object" && defData !== null && "functions" in (defData as IExtendedCompilationResult)) {
                    const d = <IExtendedCompilationResult>defData
                    // Run
                    const result = await Interpreter.run(
                        ctx.clone({
                            data: d,
                            allowTopLevelReturn: true,
                            doNotSend: true,
                            redirectErrorsToConsole: true,
                        })
                    )
                    return result === null ? this.stop() : this.successJSON(result)
                } else return this.successJSON(defData)
            }
        }

        return this.successJSON("Tokens left:" + data)
    },
})

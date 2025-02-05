import { ArgType, NativeFunction, Return } from "../../structures"
import { BasicTimeFormat } from "./hour"

export default new NativeFunction({
    name: "$year",
    version: "1.2.0",
    description: "Returns current year",
    unwrap: true,
    brackets: false,
    args: [
        {
            name: "format",
            description: "The format of the year",
            rest: false,
            type: ArgType.Enum,
            enum: BasicTimeFormat
        }
    ],
    output: ArgType.Number,
    execute: async function(ctx, [format]) {
        return this.success(new Date().toLocaleString("en-US", { year: format || "numeric", timeZone: ctx.timezone, calendar: ctx.calendar }))
    }
})
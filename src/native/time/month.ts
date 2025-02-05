import { ArgType, NativeFunction, Return } from "../../structures"
import { ExtendedTimeFormat } from "./day"

export default new NativeFunction({
    name: "$month",
    version: "1.2.0",
    description: "Returns current month",
    unwrap: true,
<<<<<<< HEAD
    output: ArgType.Number,
    execute: function() {
    const date = new Date();
    return date.getMonth() + 1;
    return this.success(date.getMonth() + 1);
=======
    brackets: false,
    args: [
        {
            name: "format",
            description: "The format of the month",
            rest: false,
            type: ArgType.Enum,
            enum: ExtendedTimeFormat
        }
    ],
    output: ArgType.String,
    execute: async function(ctx, [format]) {
        return this.success(new Date().toLocaleString("en-US", { month: format || "numeric", timeZone: ctx.timezone, calendar: ctx.calendar }))
>>>>>>> c30059d4e196b7eef9aac0c3ce1d289c5b44bf69
    }
})

import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$day",
    version: "1.2.0",
    description: "Returns current day/date",
    unwrap: true,
    alias: {
        "$date"
           },
    output: ArgType.Number,
    execute: function() {
    const date = new Date();        
    return this.success(date.getDate());
    }
})

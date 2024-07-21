import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$month",
    version: "1.2.0",
    description: "Returns current month",
    unwrap: true,
    output: ArgType.Number,
    execute: function() {
    const date = new Date();
    return date.getMonth() + 1;
    return this.success(date.getMonth() + 1);
    }
})

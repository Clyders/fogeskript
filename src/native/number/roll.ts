import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$roll",
    version: "1.0.0",
    description: "Returns a random number roll (no cache)",
    unwrap: true,
    output: ArgType.Number,
    brackets: true,
    args: [
        {
            name: "min",
            description: "The minimum possible number",
            rest: false,
            required: true,
            type: ArgType.Number,
        },
        {
            name: "max",
            description: "The max possible number",
            rest: false,
            type: ArgType.Number,
        },
        {
            name: "decimals",
            description: "Whether to use decimals",
            rest: false,
            type: ArgType.Boolean,
        },
    ],
    execute(ctx, [min, max, decimals]: [number, number | null, boolean | null]) {
      const roll = max ? Math.random() * (max - min) + min : Math.random() * min;
        return this.success("the roll number is:" + !decimals ? Math.floor(roll) : roll as number);
    },
})

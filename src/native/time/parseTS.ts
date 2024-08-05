import { ArgType, NativeFunction } from "../../structures"


export default new NativeFunction({
    name: "$parseTS",
    version: "1.0.0",
    description: "Parse the Timestamps",
    unwrap: true,
    args: [
        {
            name: "timestamp",
            description: "The timestamp...",
            required: true,
            type: ArgType.String,
            rest: false,
        },
        ],
        brackets: true,
      execute(ctx, [timestamp]) {


    const currentTime = Math.floor(Date.now() / 1000);
    let difference = timestamp - currentTime;

    // Ensure the difference is not negative
    if (difference < 0) {
        difference = 0;
    }

    const hours = Math.floor(difference / 3600);
    const minutes = Math.floor((difference % 3600) / 60);
    const seconds = difference % 60;

    const result = `${hours}h${minutes}m${seconds}s`;

    return this.success(result);

    },
})

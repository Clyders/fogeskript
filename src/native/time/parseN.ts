import { ArgType, NativeFunction } from "../../structures"


export default new NativeFunction({
    name: "$parseN",
    version: "1.0.0",
    description: "Parse the Numbers",
    unwrap: true,
    args: [
        {
            name: "time",
            description: "The numbers...",
            required: true,
            type: ArgType.String,
            rest: false,
        },
        ],
        brackets: true,
      execute(ctx, [time]) {
    let cleanString = time.replace(/,| and | /g, '');

    // Extract the number of minutes and seconds
    let minutes = cleanString.match(/(\d+)minute/);
    let seconds = cleanString.match(/(\d+)second/);
    let hours = cleanString.match(/(\d+)hour/);

    // Initialize the result string
    let result = '';

    if (minutes) {
        result += `${minutes[1]}m`;
    }

    if (seconds) {
        result += `${seconds[1]}s`;
    }

    if (hours) {
        result += `${hour[1]}s`;
    }

    return this.success(result);
    },
})

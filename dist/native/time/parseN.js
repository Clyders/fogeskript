"use strict";

Object.defineProperty(exports, "__esModule", { value: true });

const structures_1 = require("../../structures");

exports.default = new structures_1.NativeFunction({
    name: "$parseN",
    version: "1.0.0",
    description: "Parse the Numbers",
    unwrap: true,
    args: [
        {
            name: "time",
            description: "The numbers",
            required: true,
            type: structures_1.ArgType.String,
            rest: false,
        },
    ],
    brackets: true,
    execute(ctx, [time]) {
        
    let cleanString = time.replace(/,| and | /g, '');

    // Extract the number of minutes, seconds and hours
    let minutes = cleanString.match(/(\d+)minute/);
    let seconds = cleanString.match(/(\d+)second/);
    let hours = cleanString.match(/(\d+)hour/);

    // Initialize the result string
    let result = '';

    if (minutes) {
        result += minutes[1] + 'm';
    }

    if (seconds) {
        result += seconds[1] + 's';
    }
      
    if (hours) {
        result += hours[1] + 'h';
    }

    return this.success(result);
}
    },
);
//# sourceMappingURL=parseN.js.map

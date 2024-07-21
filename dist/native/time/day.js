"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$day",
    version: "1.2.0",
    description: "Returns current day",
    unwrap: true,
    alias: {
        "$date"
    },
    output: structures_1.ArgType.Number,
    execute: function () {
    const date = new Date();
    return this.success(date.getDay());
    }
});
//# sourceMappingURL=day.js.map

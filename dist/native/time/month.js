"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$month",
    version: "1.2.0",
    description: "Returns current month",
    unwrap: true,
    output: structures_1.ArgType.Number,
    execute: function () {
    const date = new Date();
    return this.success(date.getMonth() + 1);
    }
});
//# sourceMappingURL=month.js.map

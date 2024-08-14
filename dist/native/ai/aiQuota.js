"use strict";

Object.defineProperty(exports, "__esModule", { value: true });

const structures_1 = require("../../structures");

exports.default = new structures_1.NativeFunction({
    name: "$aiQuota",
    version: "1.5.0",
    description: "The quota left for $ai usage",
    unwrap: true,
    async execute(ctx) {
        return this.success("Unlimited");

}
    },
);
//# sourceMappingURL=aiQuota.js.map

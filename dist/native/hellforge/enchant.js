"use strict";

Object.defineProperty(exports, "__esModule", { value: true });

const structures_1 = require("../../structures");
const { StringSelectMenuBuilder } = require("discord.js");

exports.default = new structures_1.NativeFunction({
    name: "$enchant",
    version: "1.5.0",
    description: "Enchants a random pickaxe/sword",
    unwrap: true,
    args: [
        {
            name: "name",
            description: "Which thing to enchant",
            required: true,
            type: structures_1.ArgType.String,
            rest: false,
        },
    ],
    brackets: true,
    execute(ctx, [name]) {
        if (name === "pickaxe") {
            const texts = ["lol", "yo", "L"];
            const rnd = texts[Math.floor(Math.random() * texts.length)];

            ctx.container.embed(0).setDescription("Select the Pickaxe from the menu" || null).setColor(0xff02a2);

            const menu = new StringSelectMenuBuilder()
                .setCustomId("pic-$authorID")
                .setDisabled(false)
                .setPlaceholder("...")
                .setMinValues(1)
                .setMaxValues(1);

            ctx.container.components.at(-1)?.addComponents(menu);

            const comp = ctx.container.components.at(-1)?.components[0];

            const data = {
                label: rnd,
                description: "bro",
                value: "L",
                default: false,
            };

            if (comp && "addOptions" in comp) {
                comp.addOptions(data);
            }
        }
        return this.success();
    },
});
//# sourceMappingURL=enchant.js.map

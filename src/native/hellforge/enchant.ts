import { ArgType, NativeFunction } from "../../structures";
import { APISelectMenuOption, StringSelectMenuBuilder } from "discord.js";

export default new NativeFunction({
    name: "$enchant",
    version: "1.0.0",
    description: "Enchants a random pickaxe/sword",
    unwrap: true,
    args: [
        {
            name: "name",
            description: "Which thing to enchant",
            required: true,
            type: ArgType.String,
            rest: false,
        },
    ],
    brackets: true,
    execute(ctx, [name]) {
        if (name === "pickaxe") {
            const texts = ["lol", "yo", "L"];
            const rnd = texts[Math.floor(Math.random() * texts.length)];
            ctx.container.embed(0).setDescription("Select the Pickaxe from the menu").setColor(0xff02a2);

            const menu = new StringSelectMenuBuilder()
                .setCustomId("pic-$authorID")
                .setDisabled(false)
                .setPlaceholder("...")
                .setMinValues(1)
                .setMaxValues(1);

            ctx.container.components.at(-1)?.addComponents(menu);

            const comp = ctx.container.components.at(-1)?.components[0];

            const data: APISelectMenuOption = {
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

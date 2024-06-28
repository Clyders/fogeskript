import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$enchant",
    version: "1.0.0",
    description: "Enchants a item and set the value",
    unwrap: true,
    args: [
        {
            name: "item_name",
            description: "The item name for the enchant",
            required: true,
            type: ArgType.String,
            rest: false,
        },
        {
            name: "enchant_name",
            description: "The enchantment name to be added in xyz item",
            required: true,
            type: ArgType.String,
            rest: false,
        },
        ],
        brackets: true,
        execute(ctx, [item_name, enchant_name]) {
        ctx.container.embed(0).setDescription("Successfully enchanted" + item_name + "by using" + enchant_name || null)
        return this.success()
    },
})

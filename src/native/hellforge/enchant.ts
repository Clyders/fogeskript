import { ArgType, NativeFunction } from "../../structures"
import { DataBase } from "@tryforge/forge.db/dist/util"

export default new NativeFunction({
    name: "$enchant",
    version: "1.0.0",
    description: "Enchants a item and set the value",
    unwrap: true,
    args: [
        {
            name: "name",
            description: "The item name for the enchant",
            required: true,
            type: ArgType.String,
            rest: false,
        },
        {
            name: "value",
            description: "The enchantment name to be added in xyz item",
            required: true,
            type: ArgType.String,
            rest: false,
        },
        ],
        brackets: true,
      async execute(ctx, [name, value]) {
          await DataBase.set({ name, id: ctx.user?.id, value, type: "user" });
          ctx.container.embed(0).setDescription("Successfully enchanted " + name + " by using " + value || null).setColor(0xff02a2);
        return this.success()
    },
})

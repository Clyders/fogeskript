import { NativeFunction  } from "../../structures"
import { DataBase } from "@tryforge/forge.db/dist/util"

export default new NativeFunction({
    name: "$tokens",
    version: "1.0.0",
    description: "Tokens left for the $ai usage",
    unwrap: true,
      async execute(ctx) {
          const name = "tokens";
         const data = await DataBase.get({ name, id: ctx.user?.id, type: "user" }).then((x) => x?.value);
          return this.success(data);
    },
})

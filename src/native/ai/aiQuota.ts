import { NativeFunction  } from "../../structures"

export default new NativeFunction({
    name: "$aiQuota",
    version: "1.5.0",
    description: "The quota left for $ai usage",
    unwrap: true,
      async execute(ctx) {
          return this.success("Unlimited");
    },
})

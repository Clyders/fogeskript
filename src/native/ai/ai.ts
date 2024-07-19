import { ArgType, NativeFunction } from "../../structures"
import { DataBase } from "@tryforge/forge.db/dist/util"

export default new NativeFunction({
    name: "$ai",
    version: "1.0.0",
    description: "Use AI in FogeSkript",
    unwrap: true,
    args: [
        {
            name: "text",
            description: "...",
            required: true,
            type: ArgType.String,
            rest: false,
        },
        ],
        brackets: true,
      async execute(ctx, [text]) {

          const name = "tokens";
          function subtractNumber(value: number, amount: number): number {
                  return value - amount; 
                }
          const data2 = await DataBase.get({ name, id: ctx.user?.id, type: "user" }).then((x) => x?.value);
          
          if (data2 === undefined || data2 === 0) {
            return this.success("You have no tokens left, get back tomorrow");
          } else {
            let value: number = data2 !== undefined ? subtractNumber(Number(data2), 10) : 0;
            await DataBase.set({ name, id: ctx.user?.id, value, type: "user" });

            const response = await fetch('https://api.kastg.xyz/api/ai/chatgptV4?prompt=- Your role: You are an AI which is PRO in coding. You can create amazing codes which are pretty easy to understand, low execution time and uses less resources. Your goal is to help everyone with their codes. - User Message:' + text);
            const data = await response.json();

            const responseText: string = data.result[0].response;
            return this.success(responseText);
          }
    },
})

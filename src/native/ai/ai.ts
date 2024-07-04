import { ArgType, NativeFunction } from "../../structures"


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

    const response = await fetch('https://api.kastg.xyz/api/ai/chatgptV4?prompt=' + text);
    const data = await response.json();

    const responseText = data.result[0].response;

        return this.success(responseText);
    },
})

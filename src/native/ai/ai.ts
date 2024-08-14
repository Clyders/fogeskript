import { ArgType, NativeFunction } from "../../structures"

export default new NativeFunction({
    name: "$ai",
    version: "1.0.0",
    description: "Using of ChatGPT v4 in FogeSkript",
    unwrap: true,
    args: [
        {
            name: "text",
            description: "The users message",
            required: true,
            type: ArgType.String,
            rest: false,
        },
        ],
        brackets: true,
      async execute(ctx, [text]) {
        const response = await fetch('https://api.kastg.xyz/api/ai/chatgptV4?prompt=- Your role: You are a Human, you have to behave and act like humans and use low execution time. - User Message:' + text);
        const data = await response.json();
        const responseText: string = data.result[0].response;
        return this.success(responseText);
          }
    },
})

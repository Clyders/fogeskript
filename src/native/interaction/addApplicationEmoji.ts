import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$addApplicationEmoji",
    version: "1.0.0",
    description: "Add emojis in the application.",
    unwrap: true,
    args: [
        {
            name: "emoji",
            description: "...",
            required: true,
            type: ArgType.Unknown,
            rest: false,
        },
        ],
        brackets: true,
      async execute(ctx, [emoji]) {

const BASE_URL = "https://discord.com/api/v10/applications";
const BOT_TOKEN = ctx.client.token;
const applicationId = ctx.client.id;
          
        const response = await fetch(`${BASE_URL}/${applicationId}/emojis`, {
        method: "POST",
        headers: {
            "Authorization": `Bot ${BOT_TOKEN}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ name: emoji })
    });

    return response.ok;
    },
})

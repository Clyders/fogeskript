import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$getApplicationEmoji",
    version: "1.0.0",
    description: "Get emojis in the application.",
    unwrap: true,
    args: [
        {
            name: "emojiname",
            description: "...",
            required: true,
            type: ArgType.Unknown,
            rest: false,
        },
        ],
        brackets: true,
      async execute(ctx, [emojiname]) {

const BASE_URL = "https://discord.com/api/v10/applications";
const BOT_TOKEN = ctx.client.token;
const applicationId = ctx.client.id;

    const response = await fetch(`${BASE_URL}/${applicationId}/emojis/${emojiname}`, {
        headers: {
            "Authorization": `Bot ${BOT_TOKEN}`
        }
    });

    const data = await response.json();
    return data.name || data.id;
    },
})

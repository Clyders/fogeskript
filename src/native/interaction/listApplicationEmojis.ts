import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$listApplicationEmojis",
    version: "1.0.0",
    description: "List emojis in the application.",
    unwrap: false,
      async execute(ctx) {

const BASE_URL = "https://discord.com/api/v10/applications";
const BOT_TOKEN = ctx.client.token;
const applicationId = ctx.client.id;
        
        const response = await fetch(`${BASE_URL}/${applicationId}/emojis`, {
        headers: {
            "Authorization": `Bot ${BOT_TOKEN}`
        }
    });

    const data = await response.json();
    return data.map((emoji: any) => emoji.name || emoji.id);
    },
})

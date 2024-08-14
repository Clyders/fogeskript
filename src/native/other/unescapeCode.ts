import { ArgType, NativeFunction } from "../../structures"

export default new NativeFunction({
    name: "$unescapeCode",
    version: "1.0.0",
    description: "Code inside this function will be executed",
    unwrap: false,
    brackets: true,
    aliases: [
        "$unesc",
      "$nonEscape",
      "$nonesc"
    ],
    args: [
        {
            name: "code",
            type: ArgType.String,
            description: "The code to run",
            required: true,
            rest: false
        }
    ],
    output: ArgType.String,
    execute(ctx, [code]) {
        const unescapedText = code
            .replace(/\\;/g, ';')
            .replace(/\\]/g, ']')
            .replace(/\\:/g, ':')
            .replace(/\\,/g, ',')
            .replace(/\\=/g, '=')
            .replace(/\\&/g, '&')
            .replace(/\\#/g, '#')
            .replace(/\\!/g, '!')
            .replace(/\\@/g, '@')
            .replace(/\\\$/g, '$')
            .replace(/\\%/g, '%')
            .replace(/\\\^/g, '^')
            .replace(/\\\*/g, '*')
            .replace(/\\\(/g, '(')
            .replace(/\\\)/g, ')')
            .replace(/\\\+/g, '+')
            .replace(/\\\?/g, '?')
            .replace(/\\</g, '<')
            .replace(/\\>/g, '>')
            .replace(/\\\|/g, '|')
            .replace(/\\\\/g, '\\');

        return this.success(unescapedText);
    },
})

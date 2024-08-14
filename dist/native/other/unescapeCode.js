"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$unescapeCode",
    version: "1.5.0",
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
            type: structures_1.ArgType.String,
            description: "The code",
            required: true,
            rest: false
        }
    ],
    output: structures_1.ArgType.String,
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
});
//# sourceMappingURL=unescapeCode.js.map

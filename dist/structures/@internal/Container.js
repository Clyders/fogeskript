"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Container = void 0;
/* eslint-disable indent */
const discord_js_1 = require("discord.js");
const noop_1 = __importDefault(require("../../functions/noop"));
class Container {
    content;
    embeds = new Array();
    components = new Array();
    reference;
    reply = false;
    followUp = false;
    edit = false;
    ephemeral = false;
    tts = false;
    update = false;
    files = new Array();
    channel;
    stickers = new Array();
    fetchReply = false;
    modal;
    choices = new Array();
    allowedMentions = {};
    avatarURL;
    username;
    poll;
    async send(obj, content) {
        let res;
        const options = this.getOptions(content);
        if (!this.isValidMessage(options)) {
            return null;
        }
        if (this.channel && this.channel.isTextBased()) {
            res = this.channel.send(options);
        }
        else if (obj instanceof discord_js_1.AutoModerationActionExecution && obj.channel && "send" in obj.channel) {
            res = obj.channel.send(options);
        }
        else if (obj instanceof discord_js_1.WebhookClient) {
            res = obj.send(options);
        }
        else if (obj instanceof discord_js_1.Message) {
            res = this.edit ? obj.edit(options) : obj.channel.send(options);
        }
        else if (obj instanceof discord_js_1.BaseInteraction) {
            if (obj.isRepliable()) {
                if (this.modal && !obj.replied && "showModal" in obj) {
                    res = obj.showModal(this.modal);
                }
                else {
                    res =
                        obj[(this.followUp
                            ? "followUp"
                            : obj.deferred || obj.replied
                                ? "editReply"
                                : this.update
                                    ? "update"
                                    : "reply")](options);
                }
            }
            else {
                res = obj.respond(this.choices);
            }
        }
        else if (obj instanceof discord_js_1.BaseChannel && obj.isTextBased()) {
            res = obj.send(options);
        }
        else if (obj instanceof discord_js_1.GuildMember || obj instanceof discord_js_1.User) {
            res = obj.send(options);
        }
        else {
            res = Promise.resolve(null);
        }
        const result = (await res.catch(noop_1.default));
        this.reset();
        return result;
    }
    isValidMessage(options) {
        return (!!options.stickers?.length ||
            !!options.content?.trim() ||
            !!options.embeds?.length ||
            !!options.stickers?.length ||
            !!options.files?.length ||
            !!options.components?.length ||
            !!options.attachments?.length ||
            !!this.modal ||
            !!this.choices.length ||
            !!this.poll);
    }
    embed(index) {
        return (this.embeds[index] ??= new discord_js_1.EmbedBuilder());
    }
    reset() {
        delete this.channel;
        delete this.content;
        delete this.modal;
        delete this.reference;
        delete this.poll;
        delete this.avatarURL;
        delete this.username;
        this.followUp = false;
        this.reply = false;
        this.update = false;
        this.ephemeral = false;
        this.fetchReply = false;
        this.edit = false;
        this.tts = false;
        this.stickers.length = 0;
        this.choices.length = 0;
        this.components.length = 0;
        this.embeds.length = 0;
        this.files.length = 0;
        this.allowedMentions = {};
    }
    getOptions(content) {
        return (content
            ? {
                content,
            }
            : {
                poll: this.poll,
                username: this.username,
                avatarURL: this.avatarURL,
                allowedMentions: Object.keys(this.allowedMentions).length === 0 ? undefined : this.allowedMentions,
                fetchReply: this.fetchReply,
                reply: this.reference
                    ? {
                        messageReference: this.reference,
                        failIfNotExists: false,
                    }
                    : undefined,
                ephemeral: this.ephemeral,
                attachments: [],
                files: this.files.length === 0 ? null : this.files,
                stickers: this.stickers.length === 0 ? null : this.stickers,
                content: this.content?.trim() || null,
                components: this.components,
                embeds: this.embeds,
                tts: this.tts
            });
    }
}
exports.Container = Container;
//# sourceMappingURL=Container.js.map
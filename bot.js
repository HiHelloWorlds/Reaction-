const { Telegraf } = require('telegraf');

     const bot = new Telegraf('7583508087:AAF88gRJXan9DTH-i1IWKsq9ySZQ-lZThZY');  // Replace 'YOUR_BOT_API_TOKEN' with your actual bot token


const emojis = ["👍", "❤", "🔥", "🥰", "👏", "😁", "🤔", "🤯", "😱", "🎉", "🤩", "🙏", "👌", "😍", "❤‍🔥", "🌚", "💯", "🤣", "💔", "😐", "🇮🇳", "😈", "😴", "😭", "🤓", "😇", "🤝", "🤗", "🫡", "🤪", "🗿", "🆒", "💘", "😘", "😎", "🇳🇵"];

bot.on('message', async (ctx) => {
    try {
        

        const messageId = ctx.message.message_id;
        const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];

        await ctx.telegram.setMessageReaction(ctx.chat.id, messageId, [{ type: 'emoji', emoji: randomEmoji, is_big: true }]);
    } catch (error) {
        console.error("Error setting reaction:", error);
    }
});
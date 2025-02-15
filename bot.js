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
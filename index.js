require("dotenv").config();
const TelegramBot = require("node-telegram-bot-api");

console.log("🔐 Loaded token:", process.env.TELEGRAM_BOT_TOKEN);

const bot = new TelegramBot(process.env.TELEGRAM_BOT_TOKEN, { polling: true });

bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;

  const userData = {
    id: msg.from.id,
    username: msg.from.username,
    first_name: msg.from.first_name,
    last_name: msg.from.last_name,
  };

  const webAppUrl = `https://24triply.ru?user=${encodeURIComponent(JSON.stringify(userData))}`;

  bot.sendMessage(chatId, "Добро пожаловать в Triply! 🚀", {
    reply_markup: {
      inline_keyboard: [
        [
          {
            text: "Открыть Triply",
            web_app: { url: webAppUrl },
          },
        ],
      ],
    },
  });
});
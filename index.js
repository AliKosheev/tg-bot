require("dotenv").config();
const TelegramBot = require("node-telegram-bot-api");

// Выводим токен для отладки
console.log("🔐 Loaded token:", process.env.TELEGRAM_BOT_TOKEN);

// Создаём экземпляр бота
const bot = new TelegramBot(process.env.TELEGRAM_BOT_TOKEN, { polling: true });

bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;
  const username = msg.from?.username;

  // Базовая ссылка на WebApp
  const webAppBaseUrl = "https://tg-web-app-delta.vercel.app";

  // Добавляем username в ссылку, если он есть
  const webAppUrl = username
    ? `${webAppBaseUrl}?user=${encodeURIComponent(username)}`
    : webAppBaseUrl;

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
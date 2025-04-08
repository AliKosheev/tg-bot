require('dotenv').config(); // сначала загружаем переменные окружения
const { Telegraf } = require('telegraf'); // потом импортируем Telegraf

const bot = new Telegraf(process.env.BOT_TOKEN);

bot.start((ctx) => {
  ctx.reply("Добро пожаловать!", {
    reply_markup: {
      keyboard: [
        [
          {
            text: "Открыть WebApp",
            web_app: { url: "https://tg-web-app-delta.vercel.app/" },
          },
        ],
      ],
      resize_keyboard: true,
    },
  });
});

bot.launch();
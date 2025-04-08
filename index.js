require('dotenv').config();
const { Telegraf } = require('telegraf');

const bot = new Telegraf(process.env.BOT_TOKEN);

// Команда /start с WebApp-кнопкой
bot.start((ctx) => {
  ctx.reply('Добро пожаловать!', {
    reply_markup: {
      keyboard: [
        [
          {
            text: 'Открыть WebApp',
            web_app: { url: 'https://tg-web-app-delta.vercel.app/' }, // <-- ссылка на Vercel
          },
        ],
      ],
      resize_keyboard: true,
    },
  });
});

bot.launch();
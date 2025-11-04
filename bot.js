// Se você usa alguma biblioteca de bot, importe aqui
// Exemplo para Telegram:
// const { Telegraf } = require('telegraf');
// const bot = new Telegraf(process.env.TOKEN);
// bot.start((ctx) => ctx.reply('Bot iniciado!'));
// bot.launch();

// Servidor HTTP para Railway
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Bot está online!');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor escutando na porta ${PORT}`);
});
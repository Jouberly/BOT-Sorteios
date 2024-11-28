const Discord = require("discord.js");
const ms = require("ms");
const messages = require("../utils/messages");

module.exports = {
  description: "Iniciar um sorteio",

  options: [
    {
      name: "duração",
      description: "Quanto tempo o sorteio deve durar? Exemplos: 1m, 1h, 1d",
      type: Discord.ApplicationCommandOptionType.String,
      required: true,
    },
    {
      name: "vencedores",
      description: "Quantos vencedores o sorteio deve ter?",
      type: Discord.ApplicationCommandOptionType.Integer,
      required: true,
    },
    {
      name: "prêmio",
      description: "Qual será o prêmio do sorteio?",
      type: Discord.ApplicationCommandOptionType.String,
      required: true,
    },
    {
      name: "canal",
      description: "O canal onde o sorteio será iniciado?",
      type: Discord.ApplicationCommandOptionType.Channel,
      required: true,
    },
  ],

  run: async (client, interaction) => {
    if (
      !interaction.member.permissions.has("MANAGE_MESSAGES") &&
      !interaction.member.roles.cache.some((r) => r.name === "Giveaways")
    ) {
      return interaction.reply({
        content:
          ":x: Você precisa ter permissão para gerenciar mensagens para iniciar sorteios.",
        ephemeral: true,
      });
    }

    const giveawayChannel = interaction.options.getChannel("canal");
    const giveawayDuration = interaction.options.getString("duração");
    const giveawayWinnerCount = interaction.options.getInteger("vencedores");
    const giveawayPrize = interaction.options.getString("prêmio");

    if (!giveawayChannel.isTextBased()) {
      return interaction.reply({
        content: "> :x: O canal selecionado não é baseado em texto.",
        ephemeral: true,
      });
    }

    client.giveawaysManager.start(giveawayChannel, {
      duration: ms(giveawayDuration),

      prize: giveawayPrize,

      winnerCount: giveawayWinnerCount,

      hostedBy: client.config.hostedBy ? interaction.user : null,

      messages,
    });

    interaction.reply(
      `> Um sorteio acabou de ser iniciado no canal ${giveawayChannel}! Participe e não perca a chance de ganhar-ló.`
    );
  },
};

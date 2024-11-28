const Discord = require("discord.js");
const messages = require("../utils/messages");

module.exports = {
  description: "Criar um sorteio de drop",

  options: [
    {
      name: "vencedores",
      description: "Quantos vencedores o sorteio terá",
      type: Discord.ApplicationCommandOptionType.Integer,
      required: true,
    },
    {
      name: "premio",
      description: "Qual deve ser o prêmio do sorteio",
      type: Discord.ApplicationCommandOptionType.String,
      required: true,
    },
    {
      name: "canal",
      description: "O canal onde o sorteio será iniciado",
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
    const giveawayWinnerCount = interaction.options.getInteger("vencedores");
    const giveawayPrize = interaction.options.getString("premio");

    if (!giveawayChannel.isTextBased()) {
      return interaction.reply({
        content: ":x: O canal selecionado não é baseado em texto.",
        ephemeral: true,
      });
    }

    client.giveawaysManager.start(giveawayChannel, {
      winnerCount: giveawayWinnerCount,

      prize: giveawayPrize,

      hostedBy: client.config.hostedBy ? interaction.user : null,

      isDrop: true,

      messages,
    });

    interaction.reply(
      `> Um drop acabou de ser soltado no canal ${giveawayChannel} Participe e não perca a chance de ganhar-ló!`
    );
  },
};

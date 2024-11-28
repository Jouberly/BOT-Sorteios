const Discord = require("discord.js");

module.exports = {
  description: "Refazer o sorteio",

  options: [
    {
      name: "sorteio",
      description: "O sorteio a ser refeito (ID da mensagem ou prêmio)",
      type: Discord.ApplicationCommandOptionType.String,
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
          ":x: Você precisa ter permissão para gerenciar mensagens para refazer sorteios.",
        ephemeral: true,
      });
    }

    const query = interaction.options.getString("sorteio");

    const giveaway =
      client.giveawaysManager.giveaways.find(
        (g) => g.prize === query && g.guildId === interaction.guild.id
      ) ||
      client.giveawaysManager.giveaways.find(
        (g) => g.messageId === query && g.guildId === interaction.guild.id
      );

    if (!giveaway) {
      return interaction.reply({
        content: "Não foi possível encontrar um sorteio para `" + query + "`.",
        ephemeral: true,
      });
    }

    if (!giveaway.ended) {
      return interaction.reply({
        content: "O sorteio ainda não terminou.",
        ephemeral: true,
      });
    }

    client.giveawaysManager
      .reroll(giveaway.messageId)
      .then(() => {
        interaction.reply("Sorteio refeito com sucesso!");
      })
      .catch((e) => {
        interaction.reply({
          content: e,
          ephemeral: true,
        });
      });
  },
};

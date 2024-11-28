const Discord = require("discord.js");

module.exports = {
  description: "Finalizar um sorteio",

  options: [
    {
      name: "sorteio",
      description:
        "O sorteio a ser finalizado (ID da mensagem ou prêmio do sorteio)",
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
          ":x: Você precisa ter permissão para gerenciar mensagens para finalizar sorteios.",
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
        content: "Não foi possível encontrar um sorteio para `" + query + "`. ",
        ephemeral: true,
      });
    }

    if (giveaway.ended) {
      return interaction.reply({
        content: "Este sorteio já foi finalizado.",
        ephemeral: true,
      });
    }

    client.giveawaysManager
      .end(giveaway.messageId)
      .then(() => {
        interaction.reply("Sorteio finalizado!");
      })
      .catch((e) => {
        interaction.reply({
          content: e,
          ephemeral: true,
        });
      });
  },
};

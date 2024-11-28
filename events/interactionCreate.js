module.exports = (client, interaction) => {
  if (!interaction.isChatInputCommand()) return;

  const command = client.commands.get(interaction.commandName);

  if (!command) {
    return void interaction.reply({
      content: `Comando \`${interaction.commandName}\` não encontrado.`,
      ephemeral: true,
    });
  }

  command.run(client, interaction);
};

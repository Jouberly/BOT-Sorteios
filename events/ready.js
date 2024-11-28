module.exports = (client) => {
  console.log(
    `Pronto como ${client.user.tag} para servir em ${client.channels.cache.size} canais em ${client.guilds.cache.size} servidores, para um total de ${client.users.cache.size} usuários.`
  );
};

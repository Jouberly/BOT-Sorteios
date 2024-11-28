const config = require('../config.json');

module.exports = {
    giveaway: (config.everyoneMention ? "@everyone\n\n" : "") + "**👀 Um novo sorteio acaba de começar!** - Não perca a chance de ganhar! ",
    giveawayEnded: (config.everyoneMention ? "@everyone\n\n" : "") + "⏰ **O sorteio foi encerrado!** Parabéns ao(a) ganhador(a)! 🏆",
    title: '🏆 Prêmio: {this.prize}',
    inviteToParticipate: '> **Reaja abaixo** na reação "🎉" para participar do sorteio!',
    winMessage: '🎁 Parabéns, {winners}! Você ganhou: **{this.prize}**! Para receber o seu prêmio chame o {this.hostedBy} no privado.',
    drawing: '⏰ O resultado do sorteio será: {timestamp}',
    dropMessage: '😱 **Seja o primeiro a reagir com "🎉" e ganhe o drop!**',
    embedFooter: '🏆 Este sorteio terá o total de {this.winnerCount} vencedor(es)',
    noWinner: '❌ Este sorteio foi cancelado pois nao tem participações válidas.',
    winners: '🎉 Os(as) ganhador(es) do sorteio **{this.prize}** foram:',
    endedAt: '⏰ Este sorteio foi encerrado',
    hostedBy: '🎁 Este sorteio foi organizado por: {this.hostedBy}'
};

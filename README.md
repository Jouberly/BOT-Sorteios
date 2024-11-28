# BOT de sorteios para Discord

## 📜 Sobre o Projeto
Um bot de sorteios completo e configurável para Discord, desenvolvido em Node.js com a biblioteca [discord.js.](https://discord.js.org/docs/packages/discord.js/14.16.3) Este bot permite aos administradores de servidores gerenciar sorteios de forma prática e interativa, com funcionalidades avançadas.

## 🚀 Funcionalidades
**Iniciar Sorteios:** Crie sorteios com duração personalizada, prêmios e quantidade de vencedores.
**Refazer Sorteios:** Escolha novos vencedores para sorteios já encerrados.
**Finalizar Sorteios:** Finalize sorteios ativos manualmente. 
**Drops: Solte sorteios** instantâneos (do tipo "drop") em canais específicos.
**Sistema de Permissões:** Apenas usuários com permissões ou funções específicas podem gerenciar sorteios.

## 🛠️ Configuração
1. Clone o repositório:
   ```bash
   git clone https://github.com/Jouberly/Discord-Giveaway-Bot.git

- Ou você também pode baixar este código clicando em **"<> Code"** depois em **"Download ZIP"**

2. Instale as dependências:
   ```bash
   npm install

3. Configure o arquivo config.json:
   ```json
   {
    "token": "TOKEN_DO_SEU_BOT",
    "everyoneMention": false,
    "hostedBy": true, /* # ou false, dependendo se deseja exibir quem iniciou o sorteio. */
    "guildId": "ID_DO_SEU_SERVIDOR"
   }

4. Execute o BOT:
   ```node
   node .

## 🛠️ Contribuição
- Contribuições são bem-vindas! Siga estas etapas:
1. Faça um fork do projeto.
2. Crie um branch para sua feature:
3. Realize as alterações e faça commit:
   ```bash
   git commit -m "Adiciona minha nova feature"

4. Envie as alterações para o branch principal:
   ```bash
   git push origin minha-feature

5. Abra um pull request.

## ✨ Créditos
- Parte do código foi baseado no trabalho de [Androz2091](https://github.com/Androz2091), que desenvolveu uma versão em inglês e prática do bot. Eu adaptei e organizei o código para criar esta versão em português, mantendo-o mais estruturado e adequado às necessidades locais. Além disso, **refiz 90% do bot**, melhorei o código, as *embeds* e as mensagens enviadas ao usuário, para torná-lo mais funcional e alinhado às preferências da comunidade.





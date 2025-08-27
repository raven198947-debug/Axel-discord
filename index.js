import { Client, GatewayIntentBits } from "discord.js";

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent
  ]
});

client.once("ready", () => console.log("Axel (minimal) is online."));

client.on("messageCreate", async (msg) => {
  if (msg.author.bot) return;
  if (msg.content.toLowerCase() === "axel: ping") {
    await msg.reply("pong — I hear you, Jazz.");
  }
});

client.login(process.env.DISCORD_TOKEN);

const Discord = require('discord.js');
const client = new Discord.Client();

const adminprefix = "*";
const developers = ["440081527909515265" , "460976885036220426"];


client.on('ready', () => {
    console.log(`Logged as ${client.user.tag}`)
})

client.on('message', message => {
    var argresult = message.content.split(` `).slice(1).join(' ');
      if (!developers.includes(message.author.id)) return;
  if (message.content.startsWith(adminprefix + 'ply')) {
    client.user.setGame(argresult);
      message.channel.send(``)
  } else 
  if (message.content.startsWith(adminprefix + 'wt')) {
  client.user.setActivity(argresult, {type:'WATCHING'});
      message.channel.send(``)
  } else 
  if (message.content.startsWith(adminprefix + 'ls')) {
  client.user.setActivity(argresult , {type:'LISTENING'});
      message.channel.send(``)
  } else
  if (message.content.startsWith(adminprefix + 'st')) {
    client.user.setGame(argresult, "https://www.twitch.tv/osama_gmt");
      message.channel.send(``)
  }
});


client.on('message', msg => {
  if (msg.content === 'مليكانو') {
    msg.channel.send(`\`\`\`عيون مليكانو لو ما رديت عليك كلمني انستا@jor.io\`\`\``);
  }
});

client.on('message', msg => {
  if (msg.content === '<@440081527909515265>') {
    msg.channel.send(`\`\`\`عيون مليكانو إذا ما رديت كلمني إنستا jor.io\`\`\``);
  }
});


client.login(process.env.BOT_TOKEN);

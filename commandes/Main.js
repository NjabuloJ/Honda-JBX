const util = require('util');
const fs = require('fs-extra');
const { zokou } = require(__dirname + "/../framework/zokou");
const { format } = require(__dirname + "/../framework/mesfonctions");
const os = require("os");
const moment = require("moment-timezone");
const s = require(__dirname + "/../set");
const more = String.fromCharCode(8206)
const readmore = more.repeat(4001)

zokou({ nomCom: "jb", categorie: "jb" }, async (dest, zk, commandeOptions) => {
    let { ms, repondre ,prefixe,nomAuteurMessage,mybotpic} = commandeOptions;
    let { cm } = require(__dirname + "/../framework//zokou");
    var coms = {};
    var mode = "public";
    
    if ((s.MODE).toLocaleLowerCase() != "yes") {
        mode = "private";
    }


    

    cm.map(async (com, index) => {
        if (!coms[com.categorie])
            coms[com.categorie] = [];
        coms[com.categorie].push(com.nomCom);
    });

    moment.tz.setDefault('Etc/GMT');

// Créer une date et une heure en GMT
const temps = moment().format('HH:mm:ss');
const date = moment().format('DD/MM/YYYY');

  let infoMsg =  `
  ╭──━━━━══➻══━━━━✣
  ┃➳ *my owner* : ${s.OWNER_NAME}
  ┃➳ *commander* : ${nomAuteurMessage} 
  ┃➳ *date*: ${date}
  ┃➳ *prefix* : ${s.PREFIXE}
  ┃➳ *worktype* : ${mode} mode
  ┃➳ *plugin* : ${cm.length} 
  ┃➳ *rom* : ${format(os.totalmem() - os.freemem())}/${format(os.totalmem())}
  ┃➳ *running on* : ${os.platform()}
  ┃➳ *theme* : *JB*
  ╰──━━━━══➻══━━━━✣ ${readmore}
 ▒▓10% 🤣
 ▒▓▓20% ☹️   
 ▒▓▓▓30% 😂  
 ▒▓▓▓▓40% 😭  
 ▒▓▓▓▓▓50% 😆
 ▒▓▓▓▓▓▓60% 😁
 ▒▓▓▓▓▓▓▓70% 😅
 ▒▓▓▓▓▓▓▓▓80% 🤤
 ▒▓▓▓▓▓▓▓▓▓90% 🤫 
 ▒▓▓▓▓▓▓▓▓▓▓100% ${readmore}
 *ALL COMMAND ADDED✔️!* 
 ╰──━━━━══➻══━━━━❂`;
    
let menuMsg =     // Get current time and format it
    moment.tz.setDefault("Africa/Nairobi");
    const currentTime = moment();
    const formattedTime = currentTime.format("HH:mm:ss");
    const formattedDate = currentTime.format("DD/MM/YYYY");
    const currentHour = currentTime.hour();

    const greetings = ["Good Morning 🌄", "Good Afternoon 🌃", "Good Evening ⛅", "Good Night 🌙"];
    const greeting = currentHour < 12 ? greetings[0] : currentHour < 17 ? greetings[1] : currentHour < 21 ? greetings[2] : greetings[3];
    `  
    
`;

   var lien = mybotpic();

   if (lien.match(/\.(mp4|gif)$/i)) {
    try {
        zk.sendMessage(dest, { video: { url: lien }, caption:infoMsg + menuMsg, footer: "Je suis *Njabulomd*, déveloper Njabulo Jb" , gifPlayback : true }, { quoted: ms });
    }
    catch (e) {
        console.log("🥵🥵 Menu erreur " + e);
        repondre("🥵🥵 Menu erreur " + e);
    }
} 
// Vérification pour .jpeg ou .png
else if (lien.match(/\.(jpeg|png|jpg)$/i)) {
    try {
        zk.sendMessage(dest, { image: { url: lien }, caption:infoMsg + menuMsg, footer: "Je suis *Njabulomd*, déveloper Njabulo MD" }, { quoted: ms });
    }
    catch (e) {
        console.log("🥵🥵 Menu erreur " + e);
        repondre("🥵🥵 Menu erreur " + e);
    }
} 
else {
    
    repondre(infoMsg + menuMsg);
    
}

});
  

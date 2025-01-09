const util = require('util');
const fs = require('fs-extra');
const { zokou } = require(__dirname + "/../framework/zokou");
const { format } = require(__dirname + "/../framework/mesfonctions");
const os = require("os");
const moment = require("moment-timezone");
const s = require(__dirname + "/../set");
const more = String.fromCharCode(8206)
const readmore = more.repeat(4001)
zokou({ nomCom: "menu", categorie: "Menu" }, async (dest, zk, commandeOptions) => {
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
╭─── *${s.BOT}* ──┈⊷
┃๏╭───────────┈⊷
┃๏│▸ *User*: ${s.NJABULO}
┃๏│▸ *Prefix* : [ ${s.PREFIXE} ] 
┃๏│▸ *Mode* : *${mode}*
┃๏│▸ *Storage* : 𝟴/𝟭𝟯𝟮 𝗚𝗕
┃๏│▸ Platform : ${os.platform()}
┃๏│▸ Commands : ${cm.length}
┃๏╰───────────┈⊷
╰──────────────┈⊷\n${readmore}`;
    let menuMsg = `*Honda JBk CMD'S*`;
    for (const cat in coms) {
        menuMsg += `
╭──── *${cat}* 〕─━┈⊷
║ ╭──────────━┈⊷
┃ │ `;for (const cmd of coms[cat]) {
          menuMsg += `          
║┊◆  *${cmd}*`    
        } 
        menuMsg +=`
║ ╰───────────┈⊷ 
╰──────────────┈⊷`
    }
    menuMsg += `
> Made By Njabulo JB 
> *The devs are not responsible if your accgers banned Use the bot appropriately*\n
`;    
}

        // Send the generated menu to the user
        try {
            await client.sendMessage(m.chat, {
                text: menuText,
                contextInfo: {
                    mentionedJid: [m.sender], // Mention the sender
                    externalAdReply: {
                        title: "Njabulo JB",
                        body: "Thanks To Marisel",
                        thumbnailUrl: "https://files.catbox.moe/erkmba.jpg",
                        sourceUrl: "https://whatsapp.com/channel/0029VarYP5iAInPtfQ8fRb2T",
                        mediaType: 1,
                        renderLargerThumbnail: true
                    }
                }
            });
        } catch (error) {
            console.error("Error sending message:", error);
            m.reply('An error occurred while sending the menu.');
        }

    } catch (error) {
        console.error("Error:", error);
        m.reply('An unexpected error occurred while generating the menu.');
    }
};



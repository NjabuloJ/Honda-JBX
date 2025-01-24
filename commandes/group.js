"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { zokou } = require("../framework/zokou");

zokou({ nomCom: "channel", reaction: "🚔", nomFichier: __filename }, async (dest, zk, commandeOptions) => {
    console.log("Commande saisie !!!s");
    let z = 'Salut je m\'appelle *Njabulo 🥀_MD* \n\n ' + 'je suis un bot Whatsapp Multi-appareil voici la chaîne';
    let d = ' developpé par *Njabulo Sir💎*';
    let varmess = z + d;
    var lien = '╭━━〔 *JOIN GROUP* 〕━━┈⊷
┇☞ *Auto React:*  Enabled     
┇☞ *Delete Links:* Enabled .  
┇☞ *Anti-Link:* Enabled.         
┇☞ *Auto Typing:* Enabled.    
┇☞ *Always Online:* Enabled 
┇☞ *Public Mode:* Enabled    @
╰━━━━━━━━━━━━──┈⊷
*_group links🖇️_* https://chat.whatsapp.com/KEG7tuWlCMs6OPEcLuNnac
*_bot repo links🖇️_* https://github.com/NjabuloJ/Njabulo-jb
*_power by Njabulo-JB happy ✅_*';  // Remplacez cet URL par le lien que vous souhaitez envoyer
    await zk.sendMessage(dest, { text: varmess + "\n" + lien });
});

console.log("mon test");

});
console.log("mon test");
/*module.exports.commande = () => {
  var nomCom = ["test","t"]
  var reaction="🚔"
  return { nomCom, execute,reaction }
};

async function  execute  (origineMessage,zok) {
  console.log("Commande saisie !!!s")
   let z ='Salut je m\'appelle *Njabulo Jb* \n\n '+'je suis un bot Whatsapp Multi-appareil '
      let d =' developpé par *Thomas*'
      let varmess=z+d
      var img='https://telegra.ph/file/CP2BirU5pBj04cXXgEbfuv.jpg'
await  zok.sendMessage(origineMessage,  { image:{url:img},caption:varmess});
}  */ 

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { zokou } = require("../framework/zokou");

zokou({ nomCom: "channel", reaction: "💬", nomFichier: __filename }, async (dest, zk, commandeOptions) => {
    console.log("Commande saisie !!!s");
    let z = 'Salut je m\'appelle *NJABULO_MD* \n\n ' + 'je suis un bot Whatsapp Multi-appareil voici la chaîne';
    let d = ' developpé par *JB255*';
    let varmess = z + d;
    var lien = 'https://whatsapp.com/channel/0029VarYP5iAInPtfQ8fRb2T';  // Remplacez cet URL par le lien que vous souhaitez envoyer
    await zk.sendMessage(dest, { text: varmess + "\n" + lien });
});

console.log("mon test");

});
console.log("mon test");
/*module.exports.commande = () => {
  var nomCom = ["test","t"]
  var reaction="💬"
  return { nomCom, execute,reaction }
};

async function  execute  (origineMessage,zok) {
  console.log("Commande saisie !!!s")
   let z ='Salut je m\'appelle *LUCKY-MD* \n\n '+'je suis un bot Whatsapp Multi-appareil '
      let d =' developpé par *NIABULO*'
      let varmess=z+d
      var img='https://files.catbox.moe/8vd9ko.jpg'
await  zok.sendMessage(origineMessage,  { image:{url:img},caption:varmess});
}  */

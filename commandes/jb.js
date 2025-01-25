const util = require('util');
const fs = require('fs-extra');
const { zokou } = require(__dirname + "/../framework/zokou");
const { format } = require(__dirname + "/../framework/mesfonctions");
const os = require("os");
const moment = require("moment-timezone");
const s = require(__dirname + "/../set");
const more = String.fromCharCode(8206)
const readmore = more.repeat(4001)

zokou({ nomCom: "menu", categorie: "menu" }, async (dest, zk, commandeOptions) => {
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
  ╭──━━━━══➻══━━━━━╮
  ┃ *my owner* : ${s.OWNER_NAME}
  ┃ *commander* : ${nomAuteurMessage} 
  ┃ *date*: ${date}
  ┃ *prefix* : ${s.PREFIXE}
  ┃ *worktype* : ${mode} mode
  ┃ *plugin* : ${cm.length} 
  ┃ *rom* : ${format(os.totalmem() - os.freemem())}/${format(os.totalmem())}
  ┃ *running on* : ${os.platform()}
  ┃ *time* : ${temps}
  ╰──━━━━══➻══━━━━━━╮ 
 
‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎
  > 🔏Njabulo JB oll file's💬

  ╰┈━┈➤${readmore}

Available Commands:

*IA*
- .bot
- .dalle
- .gpt
- .chat
- .calcul
- .news
- .gemini2
- .idea

*General*
- .owner
- .dev
- .support
- .developer
- .alive
- .anti-delete
- .url
- .deploy
- .ping
- .obt
- .getall
- .broadcast
- .gay
- .deployer
- .poll
- .repo
- .git
- .test
- .uptime
- .ss
- .vcf5
- .getallmembers
- .channel
- .done
- .update
- .vision
- .done
- .hack2
- .wallpaper1
- .enc
- .menu

*Group*
- .quote
- .kickall
- .onlyadmin
- .forward
- .welcome
- .goodbye
- .antipromote
- .antidemote
- .vcf
- .add
- .disap-off
- .disap
- .req
- .disap90
- .reject
- .disap7
- .disap1
- .approve
- .vcf10
- .tagall
- .invite
- .promote
- .demote
- .remove
- .info
- .antilink
- .antibot
- .group
- .gname
- .gdesc
- .revoke
- .gpp
- .hidetag
- .automute
- .autounmute
- .fkick
- .nsfw
- .antiword
- .antilink-all
- .tagadmin
- .warn

*Mods*
- .tgs
- .crew
- .left
- .join
- .jid
- .block
- .unblock
- .ban
- .bangroup
- .sudo
- .save
- .mention
- .boom
- .telesticker
- .reboot

*AI*
- .lulcat
- .sadcat
- .nokia
- .unforgivable
- .1917
- .cartoon
- .underwater
- .watercolor
- .gfx
- .gfx2
- .gfx3
- .gfx4
- .gfx5
- .gfx6
- .pooh
- .oogway
- .drake
- .biden
- .drip
- .clown
- .ad
- .blur
- .meme
- .pet
- .alert
- .caution
- .gpt5

*Fun*
- .hack
- .ranime
- .fancy
- .profile
- .quote
- .rank
- .toprank

*Search*
- .google
- .imdb
- .movie
- .weather
- .img
- .movie
- .define
- .lyrics
- .stickersearch
- .video

*Conversion*
- .emomix
- .sticker
- .scrop
- .take
- .write
- .photo
- .trt

*Download*
- .apk
- .apk
- .igdl
- .fbdl
- .tiktok
- .fbdl2
- .play
- .song

*Audio-Edit*
- .deep
- .bass
- .reverse
- .slow
- .smooth
- .tempo
- .nightcore

*God-first*
- .bible

*DULLAH-MD PICTURES*
- .asthetic

*Menu*
- .bugmenu

*Image-Edit*
- .shit
- .wasted
- .wanted
- .trigger
- .trash
- .rip
- .sepia
- .rainbow
- .hitler
- .invert
- .jail
- .affect
- .beautiful
- .blur
- .circle
- .facepalm
- .greyscale
- .joke

*User*
- .rent
- .del
- .mygroups
- .fact
- .quotes
- .whois
- .getpp

*DULL-PICS*
- .design

*Games*
- .riddle
- .chifumi
- .quizz

*DULLAH-TEST*
- .anticall
- .areact
- .readstatus
- .antidelete
- .downloadstatus
- .startmessage
- .readmessage
- .pm-permit
- .publicmode
- .autorecord
- .autotyping
- .alwaysonline
- .privatemode

*dullah*
- .gpt

*Hentai*
- .hwaifu
- .trap
- .hneko
- .blowjob
- .hentaivid
- .ass
- .masterbation
- .thigh
- .panty

*Modern-Logo*
- .birthday1
- .birthday2
- .birthday3
- .birthday4
- .birthday5
- .birthday6
- .birthday7
- .comic
- .zodiac
- .underwater2
- .glow
- .avatargold
- .bokeh
- .firework
- .gaming
- .signature
- .luxury
- .dragonfire
- .queencard
- .graffiticolor
- .tattoo
- .pentakill
- .halloween1
- .horror
- .halloween2
- .women's-day
- .valentine
- .neonlight
- .assassin
- .foggy
- .summer
- .light
- .moderngold
- .cartoonstyle
- .galaxy
- .hacker
- .dragonball
- .naruto
- .didong
- .purple
- .gold
- .arena
- .incandescent
- .christmas
- .frost
- .christmas
- .mechanical

*Finance*
- .math

*FUN*
- .flirt
- .pickupline
- .yomama😂

*META-AI*
- .meta
- .genix
- .sdxl
- .monster
- .midjourney
- .pixart

*other*
- .encode

*Reaction*
- .bully
- .cuddle
- .cry
- .hug
- .awoo
- .kiss
- .lick
- .pat
- .smug
- .bonk
- .yeet
- .blush
- .smile
- .wave
- .highfive
- .handhold
- .nom
- .bite
- .glomp
- .slap
- .kill
- .kick
- .happy
- .wink
- .poke
- .dance
- .cringe

*stickcmd*
- .setcmd
- .delcmd
- .allcmd

*tts*
- .dit
- .itta
- .say

*Général*
- .vv

*Bug-cmds*
- .bu
- .bug
- .crash
- .loccrash
- .crashbug
- .amountbug
- .pmbug
- .delaybug
- .docubug
- .unlimitedbug
- .bombug
- .lagbug
- .trollybug

*Weeb*
- .waifu
- .neko
- .shinobu
- .megumin
- .cosplay
- .couplepp`;
    
let menuMsg = Njabulo JB`  
    
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

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { zokou } = require("../framework/zokou");

zokou({ nomCom: "repo", catégorie:"Général", reaction: "🔎", nomFichier: __filename }, async (dest, zk, commandeOptions) => {
  const githubRepo = 'https://api.github.com/repos/NjabuloJ/Njabulo-jb';
  const img = 'https://files.catbox.moe/xfn913.jpg';

  try {
    const response = await fetch(githubRepo);
    const data = await response.json();

    if (data) {
      const repoInfo = {
        stars: data.stargazers_count,
        forks: data.forks_count,
        lastUpdate: data.updated_at,
        owner: data.owner.login,
      };

      const releaseDate = new Date(data.created_at).toLocaleDateString('en-GB');
      const lastUpdateDate = new Date(data.updated_at).toLocaleDateString('en-GB');

      const gitdata = `> *Hi there,If you need Njabulo-Jb repo*\n> *Anything You want Is Here*
╭─────────────────
││ *𝐒𝐞𝐬𝐬𝐢𝐨𝐧* https://shorturl.at/9WfYs
││ *𝐑𝐞𝐩𝐨:* https://shorturl.at/0TtVa
││ *𝐒𝐭𝐚𝐫𝐬:* ${repoInfo.stars}
││ *𝐅𝐨𝐫𝐤𝐬:* ${repoInfo.forks}
││ *𝐑𝐞𝐥𝐞𝐚𝐬𝐞 𝐃𝐚𝐭𝐞:* ${releaseDate}
││ *𝐔𝐩𝐝𝐚𝐭𝐞𝐝:* ${repoInfo.lastUpdate}
││ *𝐎𝐰𝐧𝐞𝐫:* *Njabulo*
││ *𝐂𝐡𝐚𝐧𝐧𝐞𝐥:* https://shorturl.at/q8ZuS
╰─────────────────
> *Njabulo Jb*`;

      await zk.sendMessage(dest, { image: { url: img }, caption: gitdata });
    } else {
      console.log("Could not fetch data");
    }
  } catch (error) {
    console.log("Error fetching data:", error);
  }
});

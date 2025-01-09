module.exports = async (context) => {
  const { client, m } = context;

  try {
    // Fetch repository data from GitHub
    const response = await fetch("https://api.github.com/repos/NjabuloJ/Njabulo-jb");
    const repoData = await response.json();

    // Extract relevant information
    const repoInfo = {
      stars: repoData.stargazers_count,
      forks: repoData.forks_count,
      lastUpdate: repoData.updated_at,
      owner: repoData.owner.login,
      createdAt: repoData.created_at,
      url: repoData.html_url
    };

    // Format dates
    const createdDate = new Date(repoInfo.createdAt).toLocaleDateString("en-GB");
    const lastUpdateDate = new Date(repoInfo.lastUpdate).toLocaleDateString("en-GB");

    // Construct message caption
    const messageCaption = `
      > *Hey. Here is Njabulo-Jb Bot Repo*
      > *If you enjoy using it dont forget to fork and star*
      ╭───────────────────
      │*Stars:* ${repoInfo.stars}
      │*Forks:* ${repoInfo.forks}
      │*Release Date:* ${createdDate}
      │*Last Update:* ${lastUpdateDate}
      │*Owner:* ${repoInfo.owner}
      │*Repository:* ${repoInfo.url}
      │*Session:* https://keithmd.onrender.com
      ╰───────────────────
    `;

    // Send the generated message to the user
    await client.sendMessage(m.chat, {
      text: messageCaption,
      contextInfo: {
        mentionedJid: [m.sender], // Mention the sender
        externalAdReply: {
          title: "Marisel Masterminded",
          body: "Njabulo Jb",
          sourceUrl: "https://whatsapp.com/channel/0029VarYP5iAInPtfQ8fRb2T",
          mediaType: 1,
          renderLargerThumbnail: true
        }
      }
    });

  } catch (error) {
    console.error("Error:", error);
    m.reply('An unexpected error occurred while generating the repo information.');
  }
};

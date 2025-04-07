

const handler = async (m, {isOwner, isAdmin, conn, text, participants, args, command, usedPrefix}) => {
  const datas = global
  const idioma = datas.db.data.users[m.sender].language || global.defaultLenguaje
  const _translate = JSON.parse(fs.readFileSync(`./src/languages/${idioma}.json`))
  const tradutor = _translate.plugins.gc_tagall

  if (usedPrefix == 'a' || usedPrefix == 'A') return;
  if (!(isAdmin || isOwner)) {
    global.dfail('admin', m, conn);
    throw false;
  }
  const pesan = args.join` `;
  const oi = `${tradutor.texto1[0]} 
  *Buenos Días / Tardes / Noches... 🤗🤗* ${pesan}`;
  let teks = `${tradutor.texto1[1]} 🥰𝐕𝐁 𝐍𝐈𝐊𝐊𝐈 𝐂𝐀𝐒𝐓𝐄𝐑 𝐋𝐎𝐒 𝐈𝐍𝐕𝐎𝐂𝐀 𝐏𝐑𝐄𝐂𝐈𝐎𝐒@𝐒🥰, 𝐍𝐎 𝐒𝐄𝐀𝐍 𝐏𝐋𝐀𝐍𝐓𝐈𝐓𝐀𝐒🫶${oi}\n\n${tradutor.texto1[2]}\n`;
  for (const mem of participants) {
    teks += `👑🎙️@${mem.id.split('@')[0]}\n`;
  }
  teks += `*└* 𝐁𝐛𝐲𝐍𝐢𝐤𝐤𝐢𝐭𝐚𝐁𝐨𝐭*`;
  conn.sendMessage(m.chat, {text: teks, mentions: participants.map((a) => a.id)} );
};
handler.help = ['tagall <mesaje>', 'N <mesaje>'];
handler.tags = ['group'];
handler.command = /^(tagall|N|invocacion|todos|lideres)$/i;
handler.admin = true;
handler.group = true;
export default handler;

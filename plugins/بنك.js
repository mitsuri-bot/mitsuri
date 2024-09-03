let handler = async (m, {conn, usedPrefix}) => {
	
    let who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
    let user = global.db.data.users[who]
    if (!(who in global.db.data.users)) throw `*❖┃الــمــســـتـــخــدم لــيــس ف قــاعــدة الــبــيــانــات┃⁉️ ❯*`
    conn.reply(m.chat, `
*❐═━━━═╊⊰🐉⊱╉═━━━═❐*
*⌘┇مـحـفـظـة👛⇠ _@${who.split('@')[0]}_ ┇*

*⌘┇ذهـبـك🪙⇠ _${user.gold}_ ┇*

*⌘┇الـمـاسـك💎⇠ _${user.limit}_ ┇*

*⌘┇زمـرد💠⇠  _${user.emerald}_ ┇*

*⌘┇الــنــقـــود💰⇠ _${user.money}_ ┇*

*⌘┇مـــثـــك🎃⇠ _${user.mythic}_ ┇*

*⌘┇الــجــرعــات💊⇠ _${user.potion}_ ┇*
*❐═━━━═╊⊰🐉⊱╉═━━━═❐*
`, fkontak , m, { mentions: [who] })
}
handler.help = ['balance']
handler.tags = ['econ']
handler.command = ['بنك', 'البنك', 'diamond', 'balance'] 

export default handler





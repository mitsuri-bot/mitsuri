import fs from 'fs'
let timeout = 25000
let poin = 2000
let handler = async (m, { conn, command, usedPrefix }) => {
    let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
    conn.game = conn.game ? conn.game: {}
    let id = 'lengkapikalimat' + m.chat
    if (id in conn.game) return conn.reply(m.chat, '*⌫┇لـم يـتـم الاجـابـة عـلـي الـسـؤال بـعـد┇ 🔝 ┇➥*', conn.game[id][0])
    let src = JSON.parse(fs.readFileSync('./database/عين.json', 'utf-8'))
    let json = src[Math.floor(Math.random() * src.length)]
    let caption = `*ا⧠━─━⧈⇓《𝑀𝐼𝑇𝑺𝑈𝑅-𝐁𝐎𝐓》⇓⧈━─━⧠**\n *•┇❖↞استخدم انسحب للانسحاب┇👁️❯*
*•┃❖↞الـوقـت⏳↞* *${(timeout / 1000).toFixed(2)}* *ثانية┇❯*
*•┃❖↞الـجـائـزة💰↞* *${poin}* *نقطه┇❯*\n*⧠━─━⧈⇓《𝑀𝐼𝑇𝑺𝑈𝑅-𝐁𝐎𝐓》⇓⧈━─━⧠*
`.trim()
    conn.game[id] = [
        await conn.sendMessage(m.chat, { image: { url: json.img }, fileName: 'tebakgambar.jpg', mimetype: 'image/jpeg', caption: caption }, { quoted: fkontak }),
        json, poin,
        setTimeout(() => {
            if (conn.game[id]) conn.reply(m.chat, `*❮ ⌛┇انتــهــى الــوقــت┇⌛❯*\n*❖↞┇الاجـابـة✅↞*  *${json.jawaban}* *┇❯*`, conn.game[id][0])
            delete conn.game[id]
        }, timeout)
    ]
}
handler.help = ['tebakgambar']
handler.tags = ['game']
handler.command = /^عين|te$/i
export default handler

import { createHash } from 'crypto'
let Reg = /\|?(.*)([.|] *?)([0-9]*)$/i
let handler = async function (m, { conn, text, usedPrefix, command }) {
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
  let user = db.data.users[m.sender]
  let name2 = conn.getName(m.sender)
  if (user.registered === true) throw `
> *⏎┇ انت مسجل بالفعل『 ✓ 』*

> *⌫┇ اذا كنت تريد تسجيل الخروج استخدم الأمر لإزالة السجل ☟*
> *.تسجيل_خروج (الرقم السري)*
> *إذا كنت لا تتذكر الرقم التسلسلي الخاص بك ، فاستخدم امر .رمزي*  
  `
  if (!Reg.test(text)) throw `✳️ استخدم الامر: *${usedPrefix + command} الاسم.العمر*\n📌مثال : *${usedPrefix + command}* ${name2}.16`
  let [_, name, splitter, age] = text.match(Reg)
  if (!name) throw '*ادخل الاسم*'
  if (!age) throw '*ادخل العمر*'
  if (name.length >= 30) throw '✳️ اوووف , الاسم كبير اوي صغر الاسم' 
  age = parseInt(age)
  if (age > 100) throw 'جد هععععع'
  if (age < 10) throw 'بيبي تشان هعععععع'
  user.name = name.trim()
  user.age = age
  user.regTime = + new Date
  user.registered = true
global.db.data.users[m.sender].money += 400
global.db.data.users[m.sender].limit += 4
global.db.data.users[m.sender].exp += 150
global.db.data.users[m.sender].joincount += 2
  let sn = createHash('md5').update(m.sender).digest('hex')
 await conn.reply(m.chat, `
┌───⊷ *أكملت تسجيل*
┆ *الاســــم:*
┆ ${name}
┆┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┆ *الــعــمــر:*
┆ ${age} سنة
┆┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
╰──────────────────`, fkontak, m)
/*let caption = `┌───⊷ *𝙍𝙚𝙜𝙞𝙨𝙩𝙧𝙤 𝙘𝙤𝙢𝙥𝙡𝙚𝙩𝙖𝙙𝙤*
┆ *𝙉𝙤𝙢𝙗𝙧𝙚: ${name}*
┆┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┆ *𝙀𝙙𝙖𝙙: ${age} años*
┆┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┆ *𝘽𝙤𝙣𝙤* 
┆┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┆ *$4 𝘿𝙞𝙖𝙢𝙖𝙣𝙩𝙚𝙨* 💎
┆ *$400 𝙇𝙤𝙡𝙞𝙘𝙤𝙞𝙣𝙨*
┆ *$150 𝙓𝙥*
┆ *$2 𝙏𝙤𝙠𝙚𝙣𝙨*
╰──────────────────`.trim() 
//let author = global.author
await conn.sendButton(m.chat, caption, `𝑻𝒖 𝒏𝒖𝒎𝒆𝒓𝒐 𝒅𝒆 𝒔𝒆𝒓𝒊𝒆 𝒕𝒆 𝒔𝒆𝒓𝒗𝒊𝒓𝒂́ 𝒆𝒏 𝒄𝒂𝒔𝒐 𝒆𝒏 𝒒𝒖𝒆 𝒒𝒖𝒊𝒆𝒓𝒂𝒔 𝒃𝒐𝒓𝒓𝒂𝒓 𝒔𝒖𝒔 𝒓𝒆𝒈𝒊𝒔𝒕𝒓𝒐𝒔 👇👇👇\n𝑬𝒋𝒆𝒎𝒑𝒍𝒐\n${usedPrefix}unreg numero de serie\n${wm}`, [['𝘼𝙝𝙤𝙧𝙖 𝙚𝙨𝙩𝙤𝙮 𝙑𝙚𝙧𝙞𝙛𝙞𝙘𝙖𝙙𝙤(𝙖)!! ✅', '/profile']], m)*/
await m.reply(`${sn}`) 
}
handler.help = ['daftar', 'register'].map(v => v + ' <nama>.<umur>')
handler.tags = ['xp']

handler.command = /^(تسجيل|تحقق|التحقق|reg(ister)?)$/i

export default handler

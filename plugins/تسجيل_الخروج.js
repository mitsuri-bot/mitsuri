import { createHash } from 'crypto'
let handler = async function (m, { args }) {
if (!args[0]) throw '*[❗تحذير❗] أدخل رقمك التسلسلي اذا لا تتذكره اكتب#رمزي*'
let user = global.db.data.users[m.sender]
let sn = createHash('md5').update(m.sender).digest('hex')
if (args[0] !== sn) throw '*[❗تحذير❗] رقمك التسلسلي خطأ يرجي التأكد منه و أعاده المحاوله *\n\n*يمكنك استخدام امر #رمزي*'
user.registered = false
m.reply(`*[ ✔ ]لم تعد مسجل عندي*`)
}
handler.help = ['', 'ister'].map(v => 'unreg' + v + ' <numero de serie>')
handler.tags = ['xp']
handler.command = /^تسجيل_خروج$/i
handler.register = true
export default handler

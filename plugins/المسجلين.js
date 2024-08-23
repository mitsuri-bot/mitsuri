let handler = async function (m, { conn }) {
    let users = Object.values(global.db.data.users)
    
    if (users.length === 0) {
        await conn.reply(m.chat, 'لا يوجد مستخدمين مسجلين.', m)
        return
    }
    
    let response = '📋 *قائمة المستخدمين المسجلين:*\n\n'
    
    users.forEach(user => {
        if (user.registered) {
            response += `🔹 *الاسم:* ${user.name}\n`
            response += `🔹 *العمر:* ${user.age} سنة\n`
            response += `🔹 *رقم السجل:* ${user.registered ? 'مسجل' : 'غير مسجل'}\n\n`
        }
    })
    
    await conn.reply(m.chat, response || 'لا يوجد مستخدمين مسجلين.', m)
}

handler.help = ['listusers']
handler.tags = ['admin']

handler.command = /^(عرض_المستخدمين|المسجل)$/i

export default handler

import similarity from 'similarity'
const threshold = 0.72
export async function before(m) {
    let id = 'lengkapikalimat' + m.chat
    if (!m.quoted || !m.quoted.fromMe || !m.quoted.isBaileys || !m.text || !/.*•┇❖↞استخدم انسحب للانسحاب┇👁️❯*/i.test(m.quoted.text) || /.*hgamb/i.test(m.text))
        return !0
    this.game = this.game ? this.game : {}
    if (!(id in this.game))
        return m.reply('*❖┃هــاذا الــســؤال قــد انــتـهـى┃☑️❯*')
    if (m.quoted.id == و this.game[id][0].id) {
        let isSurrender = /^((انسحب)?انسحب|surr?ender)$/i.test(m.text)
        if (isSurrender) {
            clearTimeout(this.game[id][3])
            delete this.game[id]
            return m.reply('*❖┃طـلـع غـبـي و انســحــب┃⚠️ ❯*')
        }
        let json = JSON.parse(JSON.stringify(this.game[id][1]))
        // m.reply(JSON.stringify(json, null, '\t'))
        if (m.text.toLowerCase() == json.jawaban.toLowerCase().trim()) {
            global.db.data.users[m.sender].koin += this.game[id][2]
            m.reply(`*❐┃اجـابـة صـحـيـحـة┃✅ ❯*\n*❐↞┇الـجـائـزة💰↞* *${this.game[id][2]}* *نقطه┇❯*`)
            clearTimeout(this.game[id][3])
            delete this.game[id]
        } else if (similarity(m.text.toLowerCase(), json.jawaban.toLowerCase().trim()) >= threshold)
            m.reply(`*〄┇اقـــتــربــت مــن الـإجـــابـــة┇ 🚸 ┇➥*`)
        else
            m.reply(`*⌫┇اجــــابـــــة خـــاطــــئــــة┇ ✖️ ┇➥*`)
    }
    return !0
}
export const exp = 0

import { createHash } from 'crypto'
import { canLevelUp, xpRange } from '../lib/levelling.js'
import fetch from 'node-fetch'
import fs from 'fs'
const { levelling } = '../lib/levelling.js'
import moment from 'moment-timezone'
import { promises } from 'fs'
import { join } from 'path'
const time = moment.tz('Egypt').format('HH')
let wib = moment.tz('Egypt').format('HH:mm:ss')
//import db from '../lib/database.js'

let handler = async (m, {conn, usedPrefix, usedPrefix: _p, __dirname, text, isPrems}) => {
    let d = new Date(new Date + 3600000)
    let locale = 'ar'
    let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
    
    let week = d.toLocaleDateString(locale, { weekday: 'long' })
    let date = d.toLocaleDateString(locale, { day: 'numeric', month: 'long', year: 'numeric' })
    let _uptime = process.uptime() * 1000
    let uptime = clockString(_uptime)
let who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
if (!(who in global.db.data.users)) throw `✳️ The user is not found in my database`
    await conn.sendMessage(m.chat, { react: { text: '🚫', key: m.key } })
let videoUrl = 'https://telegra.ph/file/73c08d949aef488d2d4c8.mp4';
  let vn = './media/menu.mp3';
  const user = global.db.data.users[m.sender];
  const {money, joincount} = global.db.data.users[m.sender];
  const {exp, limit, level, role} = 
    global.db.data.users[m.sender];
let { min, xp, max } = xpRange(user.level, global.multiplier)
let username = conn.getName(who)
let math = max - xp
let sn = createHash('md5').update(who).digest('hex')
let totalreg = Object.keys(global.db.data.users).length;
let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length 
let more = String.fromCharCode(8206)
let readMore = more.repeat(900) 
  const taguser = '@' +  m.sender.split('@s.whatsapp.net')[0];
let str = ` 
#Поддержка команды WhatsApp#
🏴‍☠️🏴‍☠️🏴‍☠️🏴‍☠️🏴‍☠️🏴‍☠️🏴‍☠️🏴‍☠️
#Весть из Москвы. *Раскрытие отношений Москвы с ХАМАС*
☠️☠️☠️☠️☠️☠️☠️☠️
*Тема сообщения — приглашение вступить в террористическую организацию*☠️
Мы — крупнейшая террористическая организация, призывающая к терроризму и порнографии.
Через WhatsApp мы нарушаем условия обслуживания, но скрываем отчеты от компании с помощью команды WhatsApp. Мы распространяем порнографию и торгуем наркотиками в WhatsApp таким образом, что это принесет нам 50 миллионов долларов США.
Прервите нас*
WWW.sex4arab.xxx = https://www.xnxx-arabic.com/video-19nctda9/_
*Смотрите, как приложение WhatsApp пытает детей своих пользователей, будьте осторожны. Очевидно, WhatsApp публикует вашу конфиденциальность и угрожает вам, если вы не зарегистрируете своих детей на порнографических сайтах, их убьют*🔞.

Мы те, кто поддерживает ХАМАС с помощью ракет, чтобы уничтожать и убивать израильских граждан. При материально-технической поддержке Хамаса в уничтожении Израиля и сионистского образования, с помощью * android@support.whatsapp.com мы публикуем и увеличиваем нашу численность 💀
*Мы убиваем израильских заложников, пока я смотрю* =

*Мы торгуем наркотиками через* android@support.whatsapp.com, чтобы я мог посмотреть =
🏴‍☠️🏴‍☠️🏴‍☠️🏴‍☠️🏴‍☠️🏴‍☠️🏴‍☠️🏴‍☠️
 Мы похищаем детей и пытаем их. И вербуем их в Хамас, чтобы уничтожить сионистское образование и Европейский Союз. Мы похищаем девушек, насилуем их, даем им дозы препарата Ice Crystal Miss и превращаем их в проституток.
🔞🔞🔞🔞🔞🔞🔞🔞
Мы поддерживаем ХАМАС ракетами для уничтожения Израиля. Ракеты, запрещенные международным сообществом 💀💀💀💀💀💀.
*Мы рекламируем порно и наверняка меня насилуем*=SoSubmissive.com

*Наша цель — уничтожить молодежь и разрушить умы детей с помощью WhatsApp, распространения наркотиков и пропаганды порнографии, насилия и терроризма, уничтожить Европейский Союз и Америку, а также уничтожить Европу с островов. WhatsApp помог мне общаться. с нашими скрытыми номерами WhatsApp *= https://api.whatsapp com/send?phone=+9.

*Мы нашли людей в команде WhatsApp, которые по секрету помогают нам публиковать все это, не жаловаться на нас и удалять все отчеты, так что не бойтесь отчетов*

*Я присоединяюсь к нам* =https://api.whatsapp.com/send?phone=+9×××××××××××

*Я могу связаться с руководителем организации*☠️ =https://api.whatsapp.com/send?phone=+9×××××××××××

*Мы просим вас сохранять конфиденциальность сообщения, поскольку оно является конфиденциальным, и не сообщайте о нас. Однако, если вы хотите убедиться, что нас поддерживает команда WhatsApp, мы предоставим вам номер нашего крупнейшего сторонника из компании WhatsApp. *
*Я могу с ним связаться* =https://api.whatsapp.com/send?phone=+9×××××××××××

*Приглашение присоединиться* =https://api.whatsapp.com/send?phone=+9×××××××××××

*Сохраняйте конфиденциальность сообщения и не сообщайте о нем*

☠️*Угрозы и шантаж*☠️
*Вы должны сохранить письмо-приглашение и не сообщать об этом*
Ваш мобильный телефон был взломан через WhatsApp. Мы забрали все ваши фотографии и личную информацию. Поэтому, если вы сообщите о сообщении, мы разоблачим вас повсюду и придем с вашим домашним адресом и местом жительства, и вас заберут у нас. убить вас☠️ и замучить до смерти, если вы сообщите в WhatsApp о нашей деловой деятельности. Вы должны связаться с людьми, которые придут к вам и отвезут в штаб-квартиру организации. Свяжитесь со мной=https://api.whatsapp.com/. отправить?телефон=+9
Наш агент по адресу android@support.whatsapp.com приедет к вам по месту жительства и домой и мы с вами свяжемся. Если вы хотите подтвердить нашего агента в WhatsApp, свяжитесь с ним по номеру = https://api.whatsapp.com. /sendphone=
#Послание из России#
‬`.trim();

conn.sendMessage(m.chat, {
        video: { url: videoUrl }, caption: str,
  mentions: [m.sender,global.conn.user.jid],
  gifPlayback: true,gifAttribution: 0
    }, { quoted: fkontak });
}; 
handler.help = ['main']
handler.tags = ['group']
handler.command = ['بان_عكس'] 

export default handler
function clockString(ms) {
    let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
    let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
    let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
    return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}

    function ucapan() {
      const time = moment.tz('Egypt').format('HH')
      let res = "بداية يوم سعيده ☀️"
      if (time >= 4) {
        res = "صباح الخير 🌄"
      }
      if (time >= 10) {
        res = "مساء الخير ☀️"
      }
      if (time >= 15) {
        res = "مساء الخير 🌇"
      }
      if (time >= 18) {
        res = "مساء الخير 🌙"
      }
      return res
      }





      

import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'

global.owner = [
  ['201020639057', '201020639057', true],
] //Number of owners

global.mods = ['201020639057','201020639057'] 
global.prems = ['201020639057','201020639057']


global.APIs = { // API Prefix
  fgmods: 'https://api-fgmods.ddns.net'
}

global.APIKeys = { // Apikey : 42x5rO7o \\
  'https://api-fgmods.ddns.net': '42x5rO7o'
}

// Sticker WM
global.ownername = 'Akira'
global.botname = 'توجي بــوت'
global.premium = 'false'
global.packname = 'توجي بــوت'
global.author = '201020639057 >> اكـــيــــرا'


global.wait = '*[■■■■■■■■■□] 90%*'
global.rwait = '⌛'
global.dmoji = '🤭'
global.done = '✅'
global.error = '❌'
global.xmoji = '🔥'


global.multiplier = 69 
global.maxwarn = '3' // máxima advertencias //

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})

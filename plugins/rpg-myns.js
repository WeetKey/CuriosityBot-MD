import { createHash } from 'crypto'

var handler = async function (m, { conn, text, usedPrefix }) {
let sn = createHash('md5').update(m.sender).digest('hex').slice(0, 6)
conn.sendButton(m.chat, `${dis}_Copie su número de serie para eliminar 🗑️ su registro._\n\n✨ *Ejemplo:*\n*${usedPrefix}delregistro* \`${sn}\``, wm2, null, null, [['Número de serie', sn]], null, null, m, ...fake)  
}
handler.command = /^(myns|ceksn|ns|numserie)$/i
handler.register = true
export default handler

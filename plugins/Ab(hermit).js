const {
	Function,
	parsedJid,
	getBuffer
} = require("../lib/");

const url1 = 'https://i.imgur.com/nMiKyTy.jpeg'
const url2 = 'https://i.imgur.com/F5YRbK4.jpeg'

Function({
	pattern: 'ab ?(.*)',
	fromMe: true,
	type: 'misc'
}, async (m, text, client) => {
	if (!m.reply_message) return await m.reply('*Reply to a message*')
	if (!text) return await m.reply('*Give me a jid*\nExample .fd jid1 jid2 jid3 jid4 ...')
	const image1 = await getBuffer(url1)
	const image2 = await getBuffer(url2)
	const options = {}
	options.contextInfo = {
		forwardingScore: 5, // change it to 999 for many times forwarded
		isForwarded: true,
	}

	options.linkPreview = {
		title: '𝞘𝙏'𝙎 𝞛𝞢 𝞓𝞜𝞓𝞜𝘿𝞖𝙐 𝙎𝞢𝞒',
		body: '𝙼𝙰𝙳𝙴 𝚆𝙸𝚃𝙷 𝙻𝚄𝚅💖',
		mediaType: 2,
		thumbnail: image2,
	
		sourceUrl: 'https://wa.me/917356561110?text=_*៚ʜᴇʟᴏ 𝞓𝞜𝞓𝞜𝘿𝞖𝙐 𝙎𝞢𝞒 ʙɪɢ ꜰᴀɴ💞😘🪄*_',
		showAdAttribution: true
	}

	options.filesize = 99999999999;

	options.quoted = {
		key: {
			fromMe: false,
			participant: `0@s.whatsapp.net`,
			...(m.jid ? {
				remoteJid: `status@broadcast`
			} : {})
		},
		message: {
			'contactMessage': {
				'displayName': 'ᴇɴᴊᴏy ᴜʀ ʟyꜰᴇ💖📍',
				'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;'𝐎𝐍𝐄 𝐀𝐍𝐃 𝐎𝐍𝐋𝐘 𝐊𝐈𝐍𝐆 𝞓𝞜𝞓𝞜𝘿𝞖𝙐 𝙎𝞢𝞒😻',;;;\nFN:'𝐎𝐍𝐄 𝐀𝐍𝐃 𝐎𝐍𝐋𝐘 𝐊𝐈𝐍𝐆 𝞓𝞜𝞓𝞜𝘿𝞖𝙐 𝙎𝞢𝞒😻',\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`,
				'jpegThumbnail': image1
			}
		}
	}

	if (/audio/.test(m.mine)) {
		options.duration = 2000001355
		options.ptt = true
	}
options.audiowave = [99,0,99,0,99]

	for (let jid of parsedJid(text)) {
		await client.forwardMessage(jid, m.quoted_message, options)
	}
});
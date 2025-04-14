const { Client } = require('discord.js-selfbot-v13');
const dc = new Client();

// 你的目標伺服器與頻道 ID
const guildId = '358942292352040970'; //廢土伺服器ID
const channelId_fac = '1047426529367437342'; //設施頻道ID
const channelId_trad = '985912783575076895'; //交易頻道ID
const channelId_lot = '1052252485340889108'; //抽獎頻道ID

const fac = `/warp test 你的設施頻道訊息`
const trad = `/warp test 你的交易頻道訊息`
const lot = `/warp test 你的抽獎頻道訊息`



dc.on('ready', async () => {
    console.log(`${dc.user.username} is ready!`);


    const guild = dc.guilds.cache.get(guildId);
    if (!guild) return console.log('找不到伺服器');


    // 發送設施頻道訊息
    const channel_fac = guild.channels.cache.get(channelId_fac);
    if (!channel_fac) return console.log('找不到設施頻道');
    await channel_fac.send(fac)
        .then(() => console.log(`設施頻道訊息發送成功`))
        .catch(console.error);

    // 發送交易頻道訊息
    const channel_trad = guild.channels.cache.get(channelId_trad);
    if (!channel_trad) return console.log('找不到交易頻道');
    await channel_trad.send(trad)
        .then(() => console.log(`交易頻道訊息發送成功`))
        .catch(console.error);
    
    // 發送抽獎頻道訊息
    const channel_lot = guild.channels.cache.get(channelId_lot);
    if (!channel_lot) return console.log('找不到抽獎頻道');
    await channel_lot.send(lot)
        .then(() => console.log(`抽獎頻道訊息發送成功`))
        .catch(console.error);

    
    // 每10分鐘發送一次訊息 +500ms
    setInterval(async () => {
        await channel_fac.send(fac)
            .then(() => console.log(`設施頻道訊息發送成功`))
            .catch(console.error);
        await channel_trad.send(trad)
            .then(() => console.log(`交易頻道訊息發送成功`))
            .catch(console.error);
        await channel_lot.send(lot)
            .then(() => console.log(`抽獎頻道訊息發送成功`))
            .catch(console.error);
    }, 1000 * 60 * 10 + 500)

})

dc.login('你的Discord Token');

const bedrock = require('bedrock-protocol')
const client = bedrock.createClient({
    host: 'jpb.mcfallout.net',   // optional
    port: 19132,         // optional, default 19132
    username: '你的MCID',   // the username you want to join as, optional if online mode
    offline: false,
})

const SendMsg = (client, msg) => {
    client.queue('text', {
        type: 'chat', needs_translation: false, source_name: client.username, xuid: '', platform_chat_id: '', filtered_message: '',
        message: `${msg}`
    })
}


client.once('spawn', () => {
    //成功登入時開始發送訊息
    console.log('登入成功')
    SendMsg(client, `!${fac}`);
    SendMsg(client, `$${trad}`);
    SendMsg(client, `%${lot}`);

    //每10分鐘發送一次訊息 +500ms
    setInterval(() => {
        SendMsg(client, `!${fac}`);
        SendMsg(client, `$${trad}`);
        SendMsg(client, `%${lot}`);
    }, 1000 * 60 * 10 + 500)
})
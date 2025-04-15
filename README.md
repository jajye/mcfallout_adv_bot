# 廢土基岩登入API
const client = bedrock.createClient({
    host: 'jpb.mcfallout.net',
    port: 19132,
    username: '你的MCID',
    offline: true
})

* host: 廢土基岩ip
* username: 遊戲id
* 首次登入需到微軟官網驗證


# 設定廣告訊息
* Discord 與 廢土bot api通用訊息
* const fac = `/warp test 你的設施頻道訊息`
* const trad = `/warp test 你的交易頻道訊息`
* const lot = `/warp test 你的抽獎頻道訊息`
* 如果有加入色碼，必需購買階級

# Discord Self-BOT
* dc.login('你的Discord Token'); 設定你的DC帳號客戶端token

# 廢土基岩登入API
const client = bedrock.createClient({
    host: 'jpb.mcfallout.net',   // optional
    port: 19132,         // optional, default 19132
    username: '你的MCID',   // the username you want to join as, optional if online mode
    offline: true       // optional, default false. if true, do not login with Xbox Live. You will not be asked to sign-in if set to true.
})

* host: 廢土基岩ip
* username: 遊戲id


# 設定廣告訊息
* Discord 與 廢土bot api通用訊息
* const fac = `/warp test 你的設施頻道訊息`
* const trad = `/warp test 你的交易頻道訊息`
* const lot = `/warp test 你的抽獎頻道訊息`

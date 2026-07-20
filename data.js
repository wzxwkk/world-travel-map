// Curated country guides. Term format: [English, IPA, local language, 中文]
// n3 = ISO 3166-1 numeric (matches world-atlas feature ids)
// cur = [code, 中文名, English name, symbol]; plug = [types, voltage]
const DATA = {
  JP: {
    n3: "392", flag: "🇯🇵", en: "Japan", ipa: "/dʒəˈpæn/", zh: "日本",
    local: "日本 (Nihon)", lang: "ja-JP", langZh: "日语", langEn: "Japanese",
    cur: ["JPY", "日元", "Japanese Yen", "¥"], plug: ["A / B", "100V"],
    visa: { zh: "需提前办理签证，现可在线申请电子签证（旅游）。", en: "Visa required in advance — tourist e-visa now available online." },
    safety: { zh: "治安极好，犯罪率很低；主要注意地震、台风等自然灾害，入住酒店时留意避难路线。", en: "Extremely safe with very low crime; main risks are earthquakes and typhoons — note evacuation routes." },
    taboo: { zh: "进屋脱鞋；电车内保持安静、不打电话；不边走边吃；泡温泉前先冲洗干净，有纹身可能被拒绝入浴；不给小费。", en: "Remove shoes indoors; keep quiet on trains; don't eat while walking; shower before onsen (tattoos may be refused); no tipping." },
    cities: [
      ["Tokyo", "/ˈtoʊkioʊ/", "東京", "东京"],
      ["Kyoto", "/kiˈoʊtoʊ/", "京都", "京都"],
      ["Osaka", "/oʊˈsɑːkə/", "大阪", "大阪"],
      ["Sapporo", "/səˈpɔːroʊ/", "札幌", "札幌"]
    ],
    sights: [
      ["Mount Fuji", "/ˌmaʊnt ˈfuːdʒi/", "富士山", "富士山"],
      ["Fushimi Inari Shrine", "/fuˌʃiːmi ɪˈnɑːri ʃraɪn/", "伏見稲荷大社", "伏见稻荷大社"],
      ["Senso-ji Temple", "/ˈsɛnsoʊdʒi ˈtɛmpəl/", "浅草寺", "浅草寺"],
      ["Shibuya Crossing", "/ʃɪˈbuːjə ˈkrɔːsɪŋ/", "渋谷スクランブル交差点", "涩谷十字路口"]
    ],
    foods: [
      ["Sushi", "/ˈsuːʃi/", "寿司", "寿司"],
      ["Ramen", "/ˈrɑːmən/", "ラーメン", "拉面"],
      ["Tempura", "/ˈtɛmpərə/", "天ぷら", "天妇罗"],
      ["Wagyu Beef", "/ˈwɑːɡjuː biːf/", "和牛", "和牛"]
    ],
    phrases: [
      ["Hello", "/həˈloʊ/", "こんにちは", "你好"],
      ["Thank you", "/ˈθæŋk juː/", "ありがとうございます", "谢谢"],
      ["How much is it?", "/haʊ ˈmʌtʃ ɪz ɪt/", "いくらですか", "多少钱？"],
      ["Where is the toilet?", "/wɛr ɪz ðə ˈtɔɪlət/", "トイレはどこですか", "洗手间在哪？"],
      ["Delicious!", "/dɪˈlɪʃəs/", "おいしい！", "好吃！"]
    ]
  },
  KR: {
    n3: "410", flag: "🇰🇷", en: "South Korea", ipa: "/ˌsaʊθ kəˈriːə/", zh: "韩国",
    local: "한국 (Hanguk)", lang: "ko-KR", langZh: "韩语", langEn: "Korean",
    cur: ["KRW", "韩元", "South Korean Won", "₩"], plug: ["C / F", "220V"],
    visa: { zh: "个人游客需提前办签证；3人及以上团体经指定旅行社报名可免签停留15天（试行）；济州岛免签。", en: "Individual tourists need a visa in advance; groups of 3+ booked via designated agencies get 15-day visa-free entry (trial); Jeju Island is visa-free." },
    safety: { zh: "治安良好，夜间也较安全；遇大型集会绕行即可。", en: "Very safe, including at night; simply avoid large street rallies." },
    taboo: { zh: "对长辈用双手递接物品；同桌长辈先动筷；地铁老弱席即使空着也别坐；倒酒接酒用双手。", en: "Use both hands when giving/receiving from elders; elders eat first; don't sit in priority subway seats; pour and receive drinks with two hands." },
    cities: [
      ["Seoul", "/soʊl/", "서울", "首尔"],
      ["Busan", "/ˈbuːsɑːn/", "부산", "釜山"],
      ["Jeju", "/ˈdʒɛdʒuː/", "제주", "济州"],
      ["Gyeongju", "/ˈkjʌŋdʒuː/", "경주", "庆州"]
    ],
    sights: [
      ["Gyeongbokgung Palace", "/ˌkjʌŋboʊkˈkuːŋ ˈpælɪs/", "경복궁", "景福宫"],
      ["N Seoul Tower", "/ɛn soʊl ˈtaʊər/", "N서울타워", "N首尔塔"],
      ["Bukchon Hanok Village", "/ˌbʊktʃɒn ˈhɑːnɒk ˈvɪlɪdʒ/", "북촌한옥마을", "北村韩屋村"],
      ["Haeundae Beach", "/ˌheɪʊnˈdeɪ biːtʃ/", "해운대해수욕장", "海云台海滩"]
    ],
    foods: [
      ["Kimchi", "/ˈkɪmtʃi/", "김치", "泡菜"],
      ["Bibimbap", "/ˈbiːbɪmbɑːp/", "비빔밥", "石锅拌饭"],
      ["Korean BBQ", "/kəˈriːən ˌbɑːrbɪˈkjuː/", "고기구이", "韩式烤肉"],
      ["Tteokbokki", "/tɒkˈboʊki/", "떡볶이", "辣炒年糕"]
    ],
    phrases: [
      ["Hello", "/həˈloʊ/", "안녕하세요", "你好"],
      ["Thank you", "/ˈθæŋk juː/", "감사합니다", "谢谢"],
      ["How much is it?", "/haʊ ˈmʌtʃ ɪz ɪt/", "얼마예요?", "多少钱？"],
      ["Where is the toilet?", "/wɛr ɪz ðə ˈtɔɪlət/", "화장실이 어디예요?", "洗手间在哪？"],
      ["Delicious!", "/dɪˈlɪʃəs/", "맛있어요!", "好吃！"]
    ]
  },
  TH: {
    n3: "764", flag: "🇹🇭", en: "Thailand", ipa: "/ˈtaɪlænd/", zh: "泰国",
    local: "ประเทศไทย (Prathet Thai)", lang: "th-TH", langZh: "泰语", langEn: "Thai",
    cur: ["THB", "泰铢", "Thai Baht", "฿"], plug: ["A / B / C / O", "230V"],
    visa: { zh: "中泰永久互免签证，单次停留最长60天。", en: "Permanent mutual visa exemption with China — up to 60 days per visit." },
    safety: { zh: "总体安全；注意摩托车飞车抢包、旅游区宰客与电信诈骗；离岸流海域游泳看警示旗。", en: "Generally safe; watch for bag-snatching motorbikes, tourist scams, and rip currents at beaches." },
    taboo: { zh: "严禁议论或不敬王室（违法）；头部神圣勿摸他人头；进寺庙脱鞋、遮肩膝；女性勿触碰僧侣；用右手递物。", en: "Never disrespect the monarchy (illegal); don't touch heads; cover shoulders/knees and remove shoes at temples; women must not touch monks." },
    cities: [
      ["Bangkok", "/ˈbæŋkɒk/", "กรุงเทพฯ", "曼谷"],
      ["Chiang Mai", "/ˌtʃjɑːŋ ˈmaɪ/", "เชียงใหม่", "清迈"],
      ["Phuket", "/puːˈkɛt/", "ภูเก็ต", "普吉"],
      ["Pattaya", "/pəˈtaɪə/", "พัทยา", "芭提雅"]
    ],
    sights: [
      ["The Grand Palace", "/ðə ɡrænd ˈpælɪs/", "พระบรมมหาราชวัง", "大皇宫"],
      ["Wat Arun", "/wɑːt əˈruːn/", "วัดอรุณ", "郑王庙（黎明寺）"],
      ["Doi Suthep", "/ˌdɔɪ suːˈtɛp/", "ดอยสุเทพ", "素贴山双龙寺"],
      ["Phi Phi Islands", "/ˈpiː piː ˈaɪləndz/", "หมู่เกาะพีพี", "皮皮岛"]
    ],
    foods: [
      ["Tom Yum Goong", "/tɒm jʌm ɡuːŋ/", "ต้มยำกุ้ง", "冬阴功汤"],
      ["Pad Thai", "/pæd ˈtaɪ/", "ผัดไทย", "泰式炒河粉"],
      ["Green Curry", "/ɡriːn ˈkʌri/", "แกงเขียวหวาน", "绿咖喱"],
      ["Mango Sticky Rice", "/ˈmæŋɡoʊ ˈstɪki raɪs/", "ข้าวเหนียวมะม่วง", "芒果糯米饭"]
    ],
    phrases: [
      ["Hello", "/həˈloʊ/", "สวัสดี", "你好"],
      ["Thank you", "/ˈθæŋk juː/", "ขอบคุณ", "谢谢"],
      ["How much is it?", "/haʊ ˈmʌtʃ ɪz ɪt/", "เท่าไหร่", "多少钱？"],
      ["Where is the toilet?", "/wɛr ɪz ðə ˈtɔɪlət/", "ห้องน้ำอยู่ที่ไหน", "洗手间在哪？"],
      ["Delicious!", "/dɪˈlɪʃəs/", "อร่อย!", "好吃！"]
    ]
  },
  VN: {
    n3: "704", flag: "🇻🇳", en: "Vietnam", ipa: "/ˌviːɛtˈnɑːm/", zh: "越南",
    local: "Việt Nam", lang: "vi-VN", langZh: "越南语", langEn: "Vietnamese",
    cur: ["VND", "越南盾", "Vietnamese Dong", "₫"], plug: ["A / C / D", "220V"],
    visa: { zh: "可办理落地签（需提前取得入境批准函）。", en: "Visa on arrival available (approval letter required in advance)." },
    safety: { zh: "总体安全；大城市防飞车抢夺手机相机，用正规出租车或叫车软件；过马路小心密集摩托车流。", en: "Generally safe; guard phones/cameras against drive-by snatching, use reputable taxis, and mind heavy scooter traffic when crossing." },
    taboo: { zh: "政治历史话题谨慎讨论；进寺庙着装得体；砍价常见但保持友好；纸币面额大注意数零。", en: "Be careful with political/history topics; dress modestly at temples; bargaining is normal; mind the many zeros on banknotes." },
    cities: [
      ["Hanoi", "/hæˈnɔɪ/", "Hà Nội", "河内"],
      ["Ho Chi Minh City", "/ˌhoʊ tʃiː ˈmɪn ˈsɪti/", "Thành phố Hồ Chí Minh", "胡志明市"],
      ["Da Nang", "/dɑː ˈnæŋ/", "Đà Nẵng", "岘港"],
      ["Hoi An", "/ˌhɔɪ ˈɑːn/", "Hội An", "会安"]
    ],
    sights: [
      ["Ha Long Bay", "/hɑː lɒŋ beɪ/", "Vịnh Hạ Long", "下龙湾"],
      ["Hoan Kiem Lake", "/hwɑːn kiːm leɪk/", "Hồ Hoàn Kiếm", "还剑湖"],
      ["Golden Bridge", "/ˈɡoʊldən brɪdʒ/", "Cầu Vàng", "巴拿山金桥"],
      ["Cu Chi Tunnels", "/kuː tʃiː ˈtʌnəlz/", "Địa đạo Củ Chi", "古芝地道"]
    ],
    foods: [
      ["Pho", "/fʌ/", "Phở", "越南河粉"],
      ["Banh Mi", "/ˈbɑːn miː/", "Bánh mì", "越式法棍三明治"],
      ["Fresh Spring Rolls", "/frɛʃ sprɪŋ roʊlz/", "Gỏi cuốn", "鲜春卷"],
      ["Vietnamese Iced Coffee", "/ˌviːɛtnəˈmiːz aɪst ˈkɒfi/", "Cà phê sữa đá", "越南冰咖啡"]
    ],
    phrases: [
      ["Hello", "/həˈloʊ/", "Xin chào", "你好"],
      ["Thank you", "/ˈθæŋk juː/", "Cảm ơn", "谢谢"],
      ["How much is it?", "/haʊ ˈmʌtʃ ɪz ɪt/", "Bao nhiêu tiền?", "多少钱？"],
      ["Where is the toilet?", "/wɛr ɪz ðə ˈtɔɪlət/", "Nhà vệ sinh ở đâu?", "洗手间在哪？"],
      ["Delicious!", "/dɪˈlɪʃəs/", "Ngon quá!", "好吃！"]
    ]
  },
  SG: {
    n3: "702", flag: "🇸🇬", en: "Singapore", ipa: "/ˈsɪŋəpɔːr/", zh: "新加坡",
    local: "Singapore", lang: "en-SG", langZh: "英语（另有华语、马来语、泰米尔语）", langEn: "English (plus Mandarin, Malay, Tamil)",
    cur: ["SGD", "新加坡元", "Singapore Dollar", "S$"], plug: ["G", "230V"],
    visa: { zh: "中新互免签证，停留最长30天。", en: "Mutual visa exemption with China — up to 30 days." },
    safety: { zh: "全球最安全的城市之一；法律极严格，注意各类罚款条例。", en: "One of the safest cities in the world; laws are strict — mind the many fines." },
    taboo: { zh: "严禁乱丢垃圾、地铁内饮食、随地吐痰（高额罚款）；口香糖禁止销售入境；毒品是重罪；行人过马路走人行道。", en: "No littering, no eating/drinking on MRT, no jaywalking (heavy fines); chewing gum import banned; drug offences carry severe penalties." },
    cities: [
      ["Marina Bay", "/məˌriːnə ˈbeɪ/", "Marina Bay", "滨海湾"],
      ["Chinatown", "/ˈtʃaɪnətaʊn/", "牛车水 (Chinatown)", "牛车水"],
      ["Little India", "/ˈlɪtəl ˈɪndiə/", "Little India", "小印度"],
      ["Sentosa", "/sɛnˈtoʊsə/", "Sentosa", "圣淘沙"]
    ],
    sights: [
      ["Gardens by the Bay", "/ˈɡɑːrdənz baɪ ðə beɪ/", "Gardens by the Bay", "滨海湾花园"],
      ["Merlion Park", "/ˈmɜːrlaɪən pɑːrk/", "Merlion Park", "鱼尾狮公园"],
      ["Marina Bay Sands", "/məˌriːnə beɪ ˈsændz/", "Marina Bay Sands", "滨海湾金沙"],
      ["Jewel Changi", "/ˈdʒuːəl ˈtʃɑːŋi/", "Jewel Changi", "星耀樟宜"]
    ],
    foods: [
      ["Hainanese Chicken Rice", "/ˌhaɪnəˈniːz ˈtʃɪkɪn raɪs/", "海南鸡饭", "海南鸡饭"],
      ["Chili Crab", "/ˈtʃɪli kræb/", "辣椒螃蟹", "辣椒螃蟹"],
      ["Laksa", "/ˈlɑːksə/", "叻沙", "叻沙"],
      ["Kaya Toast", "/ˈkaɪə toʊst/", "咖椰吐司", "咖椰吐司"]
    ],
    phrases: [
      ["Hello", "/həˈloʊ/", "Hello", "你好"],
      ["Thank you", "/ˈθæŋk juː/", "Thank you", "谢谢"],
      ["How much is it?", "/haʊ ˈmʌtʃ ɪz ɪt/", "How much ah?", "多少钱？"],
      ["Where is the toilet?", "/wɛr ɪz ðə ˈtɔɪlət/", "Where is the toilet?", "洗手间在哪？"],
      ["Hawker centre", "/ˈhɔːkər ˈsɛntər/", "Hawker centre", "小贩中心（美食广场）"]
    ]
  },
  MY: {
    n3: "458", flag: "🇲🇾", en: "Malaysia", ipa: "/məˈleɪʒə/", zh: "马来西亚",
    local: "Malaysia", lang: "ms-MY", langZh: "马来语", langEn: "Malay",
    cur: ["MYR", "马来西亚林吉特", "Malaysian Ringgit", "RM"], plug: ["G", "240V"],
    visa: { zh: "中马互免签证（2025年7月生效），单次停留最长30天。", en: "China–Malaysia mutual visa exemption (since Jul 2025) — up to 30 days per visit." },
    safety: { zh: "总体安全；吉隆坡注意摩托飞车抢包，背包背向内侧。", en: "Generally safe; in KL keep bags away from the road to avoid snatch theft." },
    taboo: { zh: "穆斯林国家：用右手递接物品与进食；进清真寺脱鞋、着长衣；斋月白天避免在穆斯林面前饮食；勿摸他人头部。", en: "Muslim-majority: use the right hand to eat and pass items; remove shoes and dress modestly at mosques; avoid eating publicly during Ramadan daytime." },
    cities: [
      ["Kuala Lumpur", "/ˌkwɑːlə ˈlʊmpʊr/", "Kuala Lumpur", "吉隆坡"],
      ["Penang", "/pɪˈnæŋ/", "Pulau Pinang", "槟城"],
      ["Malacca", "/məˈlækə/", "Melaka", "马六甲"],
      ["Kota Kinabalu", "/ˈkoʊtə ˌkɪnəˈbɑːluː/", "Kota Kinabalu", "亚庇（哥打京那巴鲁）"]
    ],
    sights: [
      ["Petronas Twin Towers", "/pəˈtroʊnəs twɪn ˈtaʊərz/", "Menara Berkembar Petronas", "双子塔"],
      ["Batu Caves", "/ˈbɑːtuː keɪvz/", "Batu Caves", "黑风洞"],
      ["George Town", "/ˈdʒɔːrdʒ taʊn/", "George Town", "乔治市"],
      ["Mount Kinabalu", "/maʊnt ˌkɪnəˈbɑːluː/", "Gunung Kinabalu", "京那巴鲁山（神山）"]
    ],
    foods: [
      ["Nasi Lemak", "/ˌnɑːsi ləˈmɑːk/", "Nasi Lemak", "椰浆饭"],
      ["Satay", "/ˈsɑːteɪ/", "Sate", "沙爹烤肉串"],
      ["Char Kway Teow", "/tʃɑːr kweɪ ˈtjaʊ/", "Char Kway Teow", "炒粿条"],
      ["Roti Canai", "/ˈroʊti tʃəˈnaɪ/", "Roti Canai", "印度煎饼"]
    ],
    phrases: [
      ["Hello", "/həˈloʊ/", "Halo / Apa khabar?", "你好"],
      ["Thank you", "/ˈθæŋk juː/", "Terima kasih", "谢谢"],
      ["How much is it?", "/haʊ ˈmʌtʃ ɪz ɪt/", "Berapa harga?", "多少钱？"],
      ["Where is the toilet?", "/wɛr ɪz ðə ˈtɔɪlət/", "Tandas di mana?", "洗手间在哪？"],
      ["Delicious!", "/dɪˈlɪʃəs/", "Sedap!", "好吃！"]
    ]
  },
  ID: {
    n3: "360", flag: "🇮🇩", en: "Indonesia", ipa: "/ˌɪndəˈniːʒə/", zh: "印度尼西亚",
    local: "Indonesia", lang: "id-ID", langZh: "印尼语", langEn: "Indonesian",
    cur: ["IDR", "印尼盾", "Indonesian Rupiah", "Rp"], plug: ["C / F", "230V"],
    visa: { zh: "可办落地签（VOA）30天、可延期一次，建议提前在线办 e-VOA。", en: "Visa on arrival (30 days, extendable once); e-VOA available online in advance." },
    safety: { zh: "巴厘岛等旅游区总体安全；注意火山与地震动态、海滩离岸流；防摩托飞车抢包。", en: "Tourist areas are generally safe; monitor volcano/earthquake alerts, beware rip currents and bag snatching." },
    taboo: { zh: "以穆斯林为主（巴厘岛为印度教）：右手递物；勿摸头部；进寺庙需围纱笼、女性生理期不入庙；斋月注意礼仪。", en: "Mostly Muslim (Bali is Hindu): use right hand; don't touch heads; wear a sarong at temples; respect Ramadan etiquette." },
    cities: [
      ["Bali", "/ˈbɑːli/", "Bali", "巴厘岛"],
      ["Jakarta", "/dʒəˈkɑːrtə/", "Jakarta", "雅加达"],
      ["Yogyakarta", "/ˌjɒɡjəˈkɑːrtə/", "Yogyakarta", "日惹"],
      ["Lombok", "/ˈlɒmbɒk/", "Lombok", "龙目岛"]
    ],
    sights: [
      ["Borobudur", "/ˌbɔːroʊbʊˈdʊr/", "Candi Borobudur", "婆罗浮屠"],
      ["Uluwatu Temple", "/ˌuːluːˈwɑːtuː ˈtɛmpəl/", "Pura Uluwatu", "乌鲁瓦图断崖庙"],
      ["Mount Bromo", "/maʊnt ˈbroʊmoʊ/", "Gunung Bromo", "布罗莫火山"],
      ["Tegallalang Rice Terraces", "/ˌtɛɡəˈlɑːlɑːŋ raɪs ˈtɛrəsɪz/", "Sawah Tegallalang", "德格拉朗梯田"]
    ],
    foods: [
      ["Nasi Goreng", "/ˌnɑːsi ˈɡɔːrɛŋ/", "Nasi Goreng", "印尼炒饭"],
      ["Chicken Satay", "/ˈtʃɪkɪn ˈsɑːteɪ/", "Sate Ayam", "鸡肉沙爹"],
      ["Rendang", "/rɛnˈdɑːŋ/", "Rendang", "仁当牛肉"],
      ["Mie Goreng", "/miː ˈɡɔːrɛŋ/", "Mie Goreng", "印尼炒面"]
    ],
    phrases: [
      ["Hello", "/həˈloʊ/", "Halo", "你好"],
      ["Thank you", "/ˈθæŋk juː/", "Terima kasih", "谢谢"],
      ["How much is it?", "/haʊ ˈmʌtʃ ɪz ɪt/", "Berapa harganya?", "多少钱？"],
      ["Where is the toilet?", "/wɛr ɪz ðə ˈtɔɪlət/", "Di mana toilet?", "洗手间在哪？"],
      ["Delicious!", "/dɪˈlɪʃəs/", "Enak!", "好吃！"]
    ]
  },
  IN: {
    n3: "356", flag: "🇮🇳", en: "India", ipa: "/ˈɪndiə/", zh: "印度",
    local: "भारत (Bhārat)", lang: "hi-IN", langZh: "印地语（英语通用）", langEn: "Hindi (English widely used)",
    cur: ["INR", "印度卢比", "Indian Rupee", "₹"], plug: ["C / D / M", "230V"],
    visa: { zh: "需提前在线办理电子签证（e-Visa）。", en: "Apply for an e-Visa online in advance." },
    safety: { zh: "注意饮食卫生：只喝瓶装水、避免生食；女性避免夜间独行；防旅游区常见骗局与纠缠。", en: "Drink only bottled water and avoid raw food; women should avoid walking alone at night; watch for common tourist scams." },
    taboo: { zh: "左手视为不洁，用右手递物进食；进寺庙脱鞋，部分庙宇不对非教徒开放；牛是圣物；公共场合避免亲密行为。", en: "The left hand is unclean — use the right; remove shoes at temples; cows are sacred; avoid public displays of affection." },
    cities: [
      ["New Delhi", "/njuː ˈdɛli/", "नई दिल्ली", "新德里"],
      ["Mumbai", "/mʊmˈbaɪ/", "मुंबई", "孟买"],
      ["Jaipur", "/ˈdʒaɪpʊr/", "जयपुर", "斋浦尔"],
      ["Agra", "/ˈɑːɡrə/", "आगरा", "阿格拉"]
    ],
    sights: [
      ["Taj Mahal", "/ˌtɑːdʒ məˈhɑːl/", "ताज महल", "泰姬陵"],
      ["Amber Fort", "/ˈæmbər fɔːrt/", "आमेर किला", "琥珀堡"],
      ["Varanasi Ghats", "/vəˈrɑːnəsi ɡɑːts/", "वाराणसी के घाट", "瓦拉纳西河坛"],
      ["India Gate", "/ˈɪndiə ɡeɪt/", "इंडिया गेट", "印度门"]
    ],
    foods: [
      ["Curry", "/ˈkʌri/", "करी", "咖喱"],
      ["Biryani", "/bɪrˈjɑːni/", "बिरयानी", "印度香饭"],
      ["Masala Chai", "/məˈsɑːlə tʃaɪ/", "मसाला चाय", "马萨拉香料奶茶"],
      ["Naan", "/nɑːn/", "नान", "馕饼"]
    ],
    phrases: [
      ["Hello", "/həˈloʊ/", "नमस्ते (Namaste)", "你好"],
      ["Thank you", "/ˈθæŋk juː/", "धन्यवाद (Dhanyavaad)", "谢谢"],
      ["How much is it?", "/haʊ ˈmʌtʃ ɪz ɪt/", "कितने का है?", "多少钱？"],
      ["Where is the toilet?", "/wɛr ɪz ðə ˈtɔɪlət/", "शौचालय कहाँ है?", "洗手间在哪？"],
      ["Very tasty!", "/ˈvɛri ˈteɪsti/", "बहुत स्वादिष्ट!", "非常好吃！"]
    ]
  },
  AE: {
    n3: "784", flag: "🇦🇪", en: "United Arab Emirates", ipa: "/juːˌnaɪtɪd ˌærəb ˈɛmɪrəts/", zh: "阿联酋",
    local: "الإمارات (Al-Imārāt)", lang: "ar-AE", langZh: "阿拉伯语（英语通用）", langEn: "Arabic (English widely used)",
    cur: ["AED", "迪拉姆", "UAE Dirham", "د.إ"], plug: ["G", "230V"],
    visa: { zh: "对中国公民免签，停留30天。", en: "Visa-free for Chinese citizens — 30 days." },
    safety: { zh: "治安极好，犯罪率极低；夏季酷热（45°C+）注意防暑，正午避免户外活动。", en: "Extremely safe with very low crime; summer heat can exceed 45°C — avoid midday sun." },
    taboo: { zh: "公共场合着装保守、禁止公开亲密行为；斋月白天勿当众饮食；未经允许勿拍摄当地人（尤其女性）；酒精仅限持照场所。", en: "Dress modestly; no public displays of affection; don't eat publicly in Ramadan daytime; never photograph locals (especially women) without permission; alcohol only in licensed venues." },
    cities: [
      ["Dubai", "/duːˈbaɪ/", "دبي", "迪拜"],
      ["Abu Dhabi", "/ˌæbuː ˈdɑːbi/", "أبوظبي", "阿布扎比"],
      ["Sharjah", "/ˈʃɑːrdʒə/", "الشارقة", "沙迦"],
      ["Al Ain", "/æl ˈaɪn/", "العين", "艾因"]
    ],
    sights: [
      ["Burj Khalifa", "/bɜːrdʒ kəˈliːfə/", "برج خليفة", "哈利法塔"],
      ["Sheikh Zayed Grand Mosque", "/ʃeɪk zɑːˈjɛd ɡrænd mɒsk/", "مسجد الشيخ زايد الكبير", "谢赫扎耶德大清真寺"],
      ["Palm Jumeirah", "/pɑːm dʒuːˈmeɪrə/", "نخلة جميرا", "朱美拉棕榈岛"],
      ["The Dubai Mall", "/ðə duːˈbaɪ mɔːl/", "دبي مول", "迪拜购物中心"]
    ],
    foods: [
      ["Shawarma", "/ʃəˈwɑːrmə/", "شاورما", "沙威玛卷饼"],
      ["Hummus", "/ˈhʊməs/", "حمص", "鹰嘴豆泥"],
      ["Dates", "/deɪts/", "تمر", "椰枣"],
      ["Arabic Coffee", "/ˈærəbɪk ˈkɒfi/", "قهوة عربية", "阿拉伯咖啡"]
    ],
    phrases: [
      ["Hello", "/həˈloʊ/", "مرحبا (Marhaba)", "你好"],
      ["Thank you", "/ˈθæŋk juː/", "شكراً (Shukran)", "谢谢"],
      ["How much is it?", "/haʊ ˈmʌtʃ ɪz ɪt/", "بكم؟ (Bikam?)", "多少钱？"],
      ["Where is the toilet?", "/wɛr ɪz ðə ˈtɔɪlət/", "أين الحمام؟", "洗手间在哪？"],
      ["Delicious!", "/dɪˈlɪʃəs/", "لذيذ! (Ladhidh!)", "好吃！"]
    ]
  },
  TR: {
    n3: "792", flag: "🇹🇷", en: "Turkey (Türkiye)", ipa: "/ˈtɜːrki/", zh: "土耳其",
    local: "Türkiye", lang: "tr-TR", langZh: "土耳其语", langEn: "Turkish",
    cur: ["TRY", "土耳其里拉", "Turkish Lira", "₺"], plug: ["C / F", "230V"],
    visa: { zh: "对中国普通护照免签（2026年1月起），任意180天内最多停留90天（限旅游/过境）。", en: "Visa-free for Chinese ordinary passports (since Jan 2026) — up to 90 days in any 180-day period, tourism/transit only." },
    safety: { zh: "旅游区总体安全；伊斯坦布尔防扒手、出租车绕路与酒吧宰客骗局；远离叙利亚边境地区。", en: "Tourist areas are generally safe; beware pickpockets, taxi overcharging and bar scams in Istanbul; avoid areas near the Syrian border." },
    taboo: { zh: "清真寺内脱鞋、女性围头巾、避开礼拜时间参观；斋月期间尊重习俗；大巴扎砍价是常态，从对半开始。", en: "Remove shoes and cover heads (women) in mosques, avoid prayer times; respect Ramadan; haggling at bazaars is expected — start around half." },
    cities: [
      ["Istanbul", "/ˌɪstænˈbʊl/", "İstanbul", "伊斯坦布尔"],
      ["Cappadocia", "/ˌkæpəˈdoʊʃə/", "Kapadokya", "卡帕多奇亚"],
      ["Antalya", "/ænˈtɑːljə/", "Antalya", "安塔利亚"],
      ["Ankara", "/ˈæŋkərə/", "Ankara", "安卡拉"]
    ],
    sights: [
      ["Hagia Sophia", "/ˌhɑːɡiə soʊˈfiːə/", "Ayasofya", "圣索菲亚大教堂"],
      ["Blue Mosque", "/bluː mɒsk/", "Sultanahmet Camii", "蓝色清真寺"],
      ["Pamukkale", "/pəˌmʊkəˈleɪ/", "Pamukkale", "棉花堡"],
      ["Grand Bazaar", "/ɡrænd bəˈzɑːr/", "Kapalıçarşı", "大巴扎"]
    ],
    foods: [
      ["Kebab", "/kɪˈbæb/", "Kebap", "烤肉"],
      ["Baklava", "/ˈbɑːkləvɑː/", "Baklava", "果仁蜜饼"],
      ["Turkish Delight", "/ˈtɜːrkɪʃ dɪˈlaɪt/", "Lokum", "土耳其软糖"],
      ["Turkish Tea", "/ˈtɜːrkɪʃ tiː/", "Çay", "土耳其红茶"]
    ],
    phrases: [
      ["Hello", "/həˈloʊ/", "Merhaba", "你好"],
      ["Thank you", "/ˈθæŋk juː/", "Teşekkürler", "谢谢"],
      ["How much is it?", "/haʊ ˈmʌtʃ ɪz ɪt/", "Ne kadar?", "多少钱？"],
      ["Where is the toilet?", "/wɛr ɪz ðə ˈtɔɪlət/", "Tuvalet nerede?", "洗手间在哪？"],
      ["Very delicious!", "/ˈvɛri dɪˈlɪʃəs/", "Çok lezzetli!", "非常好吃！"]
    ]
  },
  FR: {
    n3: "250", flag: "🇫🇷", en: "France", ipa: "/fræns/", zh: "法国",
    local: "France", lang: "fr-FR", langZh: "法语", langEn: "French",
    cur: ["EUR", "欧元", "Euro", "€"], plug: ["C / E", "230V"],
    visa: { zh: "需提前办理申根签证。", en: "Schengen visa required in advance." },
    safety: { zh: "总体安全；巴黎地铁、埃菲尔铁塔等景点严防扒手与手机抢夺；防「签名请愿」「金戒指」等经典骗局。", en: "Generally safe; beware pickpockets and phone snatching around Paris metro and landmarks; watch for petition and gold-ring scams." },
    taboo: { zh: "进店、问路前先说 Bonjour 再开口是基本礼貌；餐厅勿大声喧哗；服务费已含，小费非强制。", en: "Always say 'Bonjour' before any interaction; keep voices low in restaurants; service is included — tipping optional." },
    cities: [
      ["Paris", "/ˈpærɪs/", "Paris", "巴黎"],
      ["Nice", "/niːs/", "Nice", "尼斯"],
      ["Lyon", "/liˈɒn/", "Lyon", "里昂"],
      ["Marseille", "/mɑːrˈseɪ/", "Marseille", "马赛"]
    ],
    sights: [
      ["Eiffel Tower", "/ˈaɪfəl ˈtaʊər/", "Tour Eiffel", "埃菲尔铁塔"],
      ["The Louvre", "/ðə ˈluːvrə/", "Musée du Louvre", "卢浮宫"],
      ["Mont Saint-Michel", "/ˌmɒ̃ sæ̃ miˈʃɛl/", "Mont Saint-Michel", "圣米歇尔山"],
      ["Palace of Versailles", "/ˈpælɪs əv vɛərˈsaɪ/", "Château de Versailles", "凡尔赛宫"]
    ],
    foods: [
      ["Croissant", "/krwɑːˈsɒ̃/", "Croissant", "牛角包"],
      ["Baguette", "/bæˈɡɛt/", "Baguette", "法棍"],
      ["Escargot", "/ˌɛskɑːrˈɡoʊ/", "Escargots", "焗蜗牛"],
      ["Macaron", "/ˌmækəˈrɒn/", "Macaron", "马卡龙"]
    ],
    phrases: [
      ["Hello", "/həˈloʊ/", "Bonjour", "你好"],
      ["Thank you", "/ˈθæŋk juː/", "Merci", "谢谢"],
      ["How much is it?", "/haʊ ˈmʌtʃ ɪz ɪt/", "C'est combien ?", "多少钱？"],
      ["Where is the toilet?", "/wɛr ɪz ðə ˈtɔɪlət/", "Où sont les toilettes ?", "洗手间在哪？"],
      ["Delicious!", "/dɪˈlɪʃəs/", "Délicieux !", "好吃！"]
    ]
  },
  GB: {
    n3: "826", flag: "🇬🇧", en: "United Kingdom", ipa: "/juːˌnaɪtɪd ˈkɪŋdəm/", zh: "英国",
    local: "United Kingdom", lang: "en-GB", langZh: "英语", langEn: "English",
    cur: ["GBP", "英镑", "British Pound", "£"], plug: ["G", "230V"],
    visa: { zh: "需提前办理英国访客签证（不属于申根区）。", en: "UK visitor visa required in advance (not part of Schengen)." },
    safety: { zh: "总体安全；伦敦注意扒手与电动车抢手机，路边使用手机留意身后。", en: "Generally safe; in London watch for pickpockets and e-bike phone snatching — stay aware when using your phone kerbside." },
    taboo: { zh: "排队文化神圣不可插队；自动扶梯靠右站立；聊天气永远安全；酒吧在吧台点单、不用给小费。", en: "Never jump the queue; stand on the right on escalators; weather is always safe small talk; order at the bar in pubs — no tip needed." },
    cities: [
      ["London", "/ˈlʌndən/", "London", "伦敦"],
      ["Edinburgh", "/ˈɛdɪnbərə/", "Edinburgh", "爱丁堡"],
      ["Manchester", "/ˈmæntʃɪstər/", "Manchester", "曼彻斯特"],
      ["Cambridge", "/ˈkeɪmbrɪdʒ/", "Cambridge", "剑桥"]
    ],
    sights: [
      ["Big Ben", "/bɪɡ bɛn/", "Big Ben", "大本钟"],
      ["Tower Bridge", "/ˈtaʊər brɪdʒ/", "Tower Bridge", "塔桥"],
      ["The British Museum", "/ðə ˈbrɪtɪʃ mjuːˈziːəm/", "The British Museum", "大英博物馆"],
      ["Stonehenge", "/ˈstoʊnhɛndʒ/", "Stonehenge", "巨石阵"]
    ],
    foods: [
      ["Fish and Chips", "/ˌfɪʃ ən ˈtʃɪps/", "Fish and Chips", "炸鱼薯条"],
      ["Afternoon Tea", "/ˌæftərˈnuːn tiː/", "Afternoon Tea", "英式下午茶"],
      ["Full English Breakfast", "/fʊl ˈɪŋɡlɪʃ ˈbrɛkfəst/", "Full English Breakfast", "英式全套早餐"],
      ["Sunday Roast", "/ˈsʌndeɪ roʊst/", "Sunday Roast", "周日烤肉大餐"]
    ],
    phrases: [
      ["Hello", "/həˈloʊ/", "Hello", "你好"],
      ["Cheers (thanks)", "/tʃɪərz/", "Cheers", "谢啦（口语）"],
      ["How much is it?", "/haʊ ˈmʌtʃ ɪz ɪt/", "How much is it?", "多少钱？"],
      ["Where is the loo?", "/wɛr ɪz ðə luː/", "Where is the loo?", "洗手间在哪（英式口语）？"],
      ["Queue", "/kjuː/", "Queue", "排队"]
    ]
  },
  IT: {
    n3: "380", flag: "🇮🇹", en: "Italy", ipa: "/ˈɪtəli/", zh: "意大利",
    local: "Italia", lang: "it-IT", langZh: "意大利语", langEn: "Italian",
    cur: ["EUR", "欧元", "Euro", "€"], plug: ["C / F / L", "230V"],
    visa: { zh: "需提前办理申根签证。", en: "Schengen visa required in advance." },
    safety: { zh: "总体安全；罗马、米兰车站与景点严防扒手；防「免费手环」「假警察查钱包」骗局。", en: "Generally safe; watch for pickpockets at Rome/Milan stations and landmarks; beware 'free bracelet' and fake-police scams." },
    taboo: { zh: "教堂内遮肩膝、保持安静；很多店铺下午午休；卡布奇诺是早餐饮品，午后点会被当游客；勿坐喷泉台阶野餐（罚款）。", en: "Cover shoulders/knees in churches; many shops close mid-afternoon; cappuccino is a breakfast drink; no picnics on monument steps (fines)." },
    cities: [
      ["Rome", "/roʊm/", "Roma", "罗马"],
      ["Venice", "/ˈvɛnɪs/", "Venezia", "威尼斯"],
      ["Florence", "/ˈflɒrəns/", "Firenze", "佛罗伦萨"],
      ["Milan", "/mɪˈlæn/", "Milano", "米兰"]
    ],
    sights: [
      ["Colosseum", "/ˌkɒləˈsiːəm/", "Colosseo", "斗兽场"],
      ["Leaning Tower of Pisa", "/ˈliːnɪŋ ˈtaʊər əv ˈpiːzə/", "Torre di Pisa", "比萨斜塔"],
      ["Trevi Fountain", "/ˈtrɛvi ˈfaʊntɪn/", "Fontana di Trevi", "特雷维喷泉（许愿池）"],
      ["Milan Cathedral", "/mɪˈlæn kəˈθiːdrəl/", "Duomo di Milano", "米兰大教堂"]
    ],
    foods: [
      ["Pizza", "/ˈpiːtsə/", "Pizza", "披萨"],
      ["Pasta", "/ˈpɑːstə/", "Pasta", "意面"],
      ["Gelato", "/dʒəˈlɑːtoʊ/", "Gelato", "意式冰淇淋"],
      ["Tiramisu", "/ˌtɪrəmɪˈsuː/", "Tiramisù", "提拉米苏"]
    ],
    phrases: [
      ["Hello", "/həˈloʊ/", "Ciao", "你好"],
      ["Thank you", "/ˈθæŋk juː/", "Grazie", "谢谢"],
      ["How much is it?", "/haʊ ˈmʌtʃ ɪz ɪt/", "Quanto costa?", "多少钱？"],
      ["Where is the toilet?", "/wɛr ɪz ðə ˈtɔɪlət/", "Dov'è il bagno?", "洗手间在哪？"],
      ["Very delicious!", "/ˈvɛri dɪˈlɪʃəs/", "Buonissimo!", "太好吃了！"]
    ]
  },
  ES: {
    n3: "724", flag: "🇪🇸", en: "Spain", ipa: "/speɪn/", zh: "西班牙",
    local: "España", lang: "es-ES", langZh: "西班牙语", langEn: "Spanish",
    cur: ["EUR", "欧元", "Euro", "€"], plug: ["C / F", "230V"],
    visa: { zh: "需提前办理申根签证。", en: "Schengen visa required in advance." },
    safety: { zh: "总体安全；巴塞罗那兰布拉大道等地扒手多发，手机背包时刻看好。", en: "Generally safe; pickpocketing is common in Barcelona (La Rambla, metro) — guard phones and bags." },
    taboo: { zh: "午后 Siesta 时间许多店铺关门；晚餐很晚（21点后正常）；打招呼常行贴面礼；斗牛话题在当地有争议。", en: "Many shops close for siesta; dinner starts late (after 9pm); cheek kisses are common greetings; bullfighting is a divisive topic." },
    cities: [
      ["Madrid", "/məˈdrɪd/", "Madrid", "马德里"],
      ["Barcelona", "/ˌbɑːrsəˈloʊnə/", "Barcelona", "巴塞罗那"],
      ["Seville", "/səˈvɪl/", "Sevilla", "塞维利亚"],
      ["Granada", "/ɡrəˈnɑːdə/", "Granada", "格拉纳达"]
    ],
    sights: [
      ["Sagrada Familia", "/səˌɡrɑːdə fəˈmiːliə/", "Sagrada Família", "圣家堂"],
      ["Alhambra", "/ælˈhæmbrə/", "Alhambra", "阿尔罕布拉宫"],
      ["Park Güell", "/pɑːrk ˈɡwɛl/", "Park Güell", "古埃尔公园"],
      ["Prado Museum", "/ˈprɑːdoʊ mjuːˈziːəm/", "Museo del Prado", "普拉多博物馆"]
    ],
    foods: [
      ["Paella", "/paɪˈɛlə/", "Paella", "西班牙海鲜饭"],
      ["Tapas", "/ˈtɑːpəs/", "Tapas", "塔帕斯小食"],
      ["Iberian Ham", "/aɪˈbɪəriən hæm/", "Jamón Ibérico", "伊比利亚火腿"],
      ["Churros", "/ˈtʃʊroʊs/", "Churros", "吉事果"]
    ],
    phrases: [
      ["Hello", "/həˈloʊ/", "Hola", "你好"],
      ["Thank you", "/ˈθæŋk juː/", "Gracias", "谢谢"],
      ["How much is it?", "/haʊ ˈmʌtʃ ɪz ɪt/", "¿Cuánto cuesta?", "多少钱？"],
      ["Where is the toilet?", "/wɛr ɪz ðə ˈtɔɪlət/", "¿Dónde está el baño?", "洗手间在哪？"],
      ["Delicious!", "/dɪˈlɪʃəs/", "¡Delicioso!", "好吃！"]
    ]
  },
  DE: {
    n3: "276", flag: "🇩🇪", en: "Germany", ipa: "/ˈdʒɜːrməni/", zh: "德国",
    local: "Deutschland", lang: "de-DE", langZh: "德语", langEn: "German",
    cur: ["EUR", "欧元", "Euro", "€"], plug: ["C / F", "230V"],
    visa: { zh: "需提前办理申根签证。", en: "Schengen visa required in advance." },
    safety: { zh: "治安良好；大城市火车站周边夜间稍加注意。", en: "Very safe; use normal caution around main train stations at night." },
    taboo: { zh: "守时是基本礼貌；周日绝大多数商店关门；行人红灯不要闯；纳粹相关手势言论违法；很多地方只收现金。", en: "Punctuality matters; most shops close on Sundays; don't jaywalk; Nazi symbols/gestures are illegal; many places are cash-only." },
    cities: [
      ["Berlin", "/bɜːrˈlɪn/", "Berlin", "柏林"],
      ["Munich", "/ˈmjuːnɪk/", "München", "慕尼黑"],
      ["Frankfurt", "/ˈfræŋkfərt/", "Frankfurt", "法兰克福"],
      ["Hamburg", "/ˈhæmbɜːrɡ/", "Hamburg", "汉堡"]
    ],
    sights: [
      ["Brandenburg Gate", "/ˈbrændənbɜːrɡ ɡeɪt/", "Brandenburger Tor", "勃兰登堡门"],
      ["Neuschwanstein Castle", "/nɔɪˈʃvɑːnstaɪn ˈkæsəl/", "Schloss Neuschwanstein", "新天鹅堡"],
      ["Cologne Cathedral", "/kəˈloʊn kəˈθiːdrəl/", "Kölner Dom", "科隆大教堂"],
      ["Berlin Wall Memorial", "/bɜːrˈlɪn wɔːl məˈmɔːriəl/", "Berliner Mauer", "柏林墙遗址"]
    ],
    foods: [
      ["Pretzel", "/ˈprɛtsəl/", "Brezel", "德式碱水结"],
      ["Bratwurst", "/ˈbrɑːtvɜːrst/", "Bratwurst", "德式烤肠"],
      ["Schnitzel", "/ˈʃnɪtsəl/", "Schnitzel", "炸肉排"],
      ["German Beer", "/ˈdʒɜːrmən bɪər/", "Bier", "德国啤酒"]
    ],
    phrases: [
      ["Hello", "/həˈloʊ/", "Hallo", "你好"],
      ["Thank you", "/ˈθæŋk juː/", "Danke", "谢谢"],
      ["How much is it?", "/haʊ ˈmʌtʃ ɪz ɪt/", "Wie viel kostet das?", "多少钱？"],
      ["Where is the toilet?", "/wɛr ɪz ðə ˈtɔɪlət/", "Wo ist die Toilette?", "洗手间在哪？"],
      ["Tasty!", "/ˈteɪsti/", "Lecker!", "好吃！"]
    ]
  },
  CH: {
    n3: "756", flag: "🇨🇭", en: "Switzerland", ipa: "/ˈswɪtsərlənd/", zh: "瑞士",
    local: "Schweiz / Suisse", lang: "de-DE", langZh: "德语/法语/意大利语", langEn: "German / French / Italian",
    cur: ["CHF", "瑞士法郎", "Swiss Franc", "Fr."], plug: ["C / J", "230V"],
    visa: { zh: "需申根签证（瑞士属申根区）。", en: "Schengen visa required (Switzerland is in Schengen)." },
    safety: { zh: "极其安全；山区徒步滑雪注意天气突变与装备，购买覆盖山地救援的保险。", en: "Extremely safe; in the mountains watch weather changes and gear up — insurance covering mountain rescue is wise." },
    taboo: { zh: "安静文化：晚10点后保持安静；周日避免制造噪音（吸尘、修剪草坪都算）；守时非常重要。", en: "Quiet culture: keep noise down after 10pm and on Sundays (even vacuuming); punctuality is essential." },
    cities: [
      ["Zurich", "/ˈzjʊərɪk/", "Zürich", "苏黎世"],
      ["Geneva", "/dʒəˈniːvə/", "Genève", "日内瓦"],
      ["Lucerne", "/luːˈsɜːrn/", "Luzern", "卢塞恩"],
      ["Interlaken", "/ˌɪntərˈlɑːkən/", "Interlaken", "因特拉肯"]
    ],
    sights: [
      ["Matterhorn", "/ˈmætərhɔːrn/", "Matterhorn", "马特洪峰"],
      ["Jungfraujoch", "/ˈjʊŋfraʊjɒk/", "Jungfraujoch", "少女峰"],
      ["Lake Geneva", "/leɪk dʒəˈniːvə/", "Lac Léman", "日内瓦湖"],
      ["Chapel Bridge", "/ˈtʃæpəl brɪdʒ/", "Kapellbrücke", "卡佩尔廊桥"]
    ],
    foods: [
      ["Cheese Fondue", "/tʃiːz fɒnˈduː/", "Käsefondue", "奶酪火锅"],
      ["Raclette", "/rəˈklɛt/", "Raclette", "烤奶酪"],
      ["Swiss Chocolate", "/swɪs ˈtʃɒklət/", "Schweizer Schokolade", "瑞士巧克力"],
      ["Rösti", "/ˈrɜːsti/", "Rösti", "瑞士土豆饼"]
    ],
    phrases: [
      ["Hello", "/həˈloʊ/", "Grüezi", "你好（瑞士德语）"],
      ["Thank you", "/ˈθæŋk juː/", "Danke / Merci", "谢谢"],
      ["How much is it?", "/haʊ ˈmʌtʃ ɪz ɪt/", "Wie viel kostet das?", "多少钱？"],
      ["Where is the toilet?", "/wɛr ɪz ðə ˈtɔɪlət/", "Wo ist die Toilette?", "洗手间在哪？"],
      ["Tasty!", "/ˈteɪsti/", "Fein!", "好吃！"]
    ]
  },
  NL: {
    n3: "528", flag: "🇳🇱", en: "Netherlands", ipa: "/ˈnɛðərləndz/", zh: "荷兰",
    local: "Nederland", lang: "nl-NL", langZh: "荷兰语", langEn: "Dutch",
    cur: ["EUR", "欧元", "Euro", "€"], plug: ["C / F", "230V"],
    visa: { zh: "需提前办理申根签证。", en: "Schengen visa required in advance." },
    safety: { zh: "治安良好；阿姆斯特丹注意扒手；千万不要走在自行车道上。", en: "Very safe; watch for pickpockets in Amsterdam; never walk in the bike lanes." },
    taboo: { zh: "自行车道神圣不可侵犯，行走拍照前看清路面标线；荷兰人交流直率，勿视为冒犯；很多店不收现金只收卡。", en: "Bike lanes are sacred — check markings before stopping for photos; Dutch directness isn't rudeness; many shops are card-only." },
    cities: [
      ["Amsterdam", "/ˈæmstərdæm/", "Amsterdam", "阿姆斯特丹"],
      ["Rotterdam", "/ˈrɒtərdæm/", "Rotterdam", "鹿特丹"],
      ["Utrecht", "/ˈjuːtrɛkt/", "Utrecht", "乌得勒支"],
      ["The Hague", "/ðə heɪɡ/", "Den Haag", "海牙"]
    ],
    sights: [
      ["Van Gogh Museum", "/væn ˈɡɒx mjuːˈziːəm/", "Van Gogh Museum", "梵高博物馆"],
      ["Keukenhof Gardens", "/ˈkɜːkənhɒf ˈɡɑːrdənz/", "Keukenhof", "库肯霍夫郁金香公园"],
      ["Canal Ring", "/kəˈnæl rɪŋ/", "Grachtengordel", "运河带"],
      ["Zaanse Schans Windmills", "/ˈzɑːnsə sxɑːns ˈwɪndmɪlz/", "Zaanse Schans", "桑斯安斯风车村"]
    ],
    foods: [
      ["Stroopwafel", "/ˈstroʊpvɑːfəl/", "Stroopwafel", "焦糖华夫饼"],
      ["Dutch Cheese", "/dʌtʃ tʃiːz/", "Kaas", "荷兰奶酪"],
      ["Herring", "/ˈhɛrɪŋ/", "Haring", "生鲱鱼"],
      ["Bitterballen", "/ˈbɪtərbɑːlən/", "Bitterballen", "炸肉丸"]
    ],
    phrases: [
      ["Hello", "/həˈloʊ/", "Hallo", "你好"],
      ["Thank you", "/ˈθæŋk juː/", "Dank je wel", "谢谢"],
      ["How much is it?", "/haʊ ˈmʌtʃ ɪz ɪt/", "Hoeveel kost het?", "多少钱？"],
      ["Where is the toilet?", "/wɛr ɪz ðə ˈtɔɪlət/", "Waar is het toilet?", "洗手间在哪？"],
      ["Tasty!", "/ˈteɪsti/", "Lekker!", "好吃！"]
    ]
  },
  GR: {
    n3: "300", flag: "🇬🇷", en: "Greece", ipa: "/ɡriːs/", zh: "希腊",
    local: "Ελλάδα (Elláda)", lang: "el-GR", langZh: "希腊语", langEn: "Greek",
    cur: ["EUR", "欧元", "Euro", "€"], plug: ["C / F", "230V"],
    visa: { zh: "需提前办理申根签证。", en: "Schengen visa required in advance." },
    safety: { zh: "总体安全；雅典个别街区夜间注意；夏季防晒防野火，海岛注意大风渡轮停航。", en: "Generally safe; use caution in some Athens districts at night; beware summer heat/wildfires and ferry cancellations in high winds." },
    taboo: { zh: "进修道院教堂着装保守；张开五指手掌朝人（moutza）是侮辱手势；周日很多店铺关门。", en: "Dress modestly at monasteries; an open palm thrust toward someone (moutza) is offensive; many shops close on Sundays." },
    cities: [
      ["Athens", "/ˈæθɪnz/", "Αθήνα", "雅典"],
      ["Santorini", "/ˌsæntəˈriːni/", "Σαντορίνη", "圣托里尼"],
      ["Mykonos", "/ˈmɪkənɒs/", "Μύκονος", "米科诺斯"],
      ["Thessaloniki", "/ˌθɛsələˈniːki/", "Θεσσαλονίκη", "塞萨洛尼基"]
    ],
    sights: [
      ["Acropolis", "/əˈkrɒpəlɪs/", "Ακρόπολη", "雅典卫城"],
      ["Parthenon", "/ˈpɑːrθənɒn/", "Παρθενώνας", "帕特农神庙"],
      ["Oia Village", "/ˈiːə ˈvɪlɪdʒ/", "Οία", "伊亚小镇"],
      ["Meteora", "/ˌmɛtiˈɔːrə/", "Μετέωρα", "迈泰奥拉修道院"]
    ],
    foods: [
      ["Moussaka", "/muːˈsɑːkə/", "Μουσακάς", "希腊千层茄盒"],
      ["Greek Salad", "/ɡriːk ˈsæləd/", "Χωριάτικη σαλάτα", "希腊沙拉"],
      ["Souvlaki", "/suːvˈlɑːki/", "Σουβλάκι", "希腊烤肉串"],
      ["Gyros", "/ˈjɪəroʊs/", "Γύρος", "希腊肉夹馍"]
    ],
    phrases: [
      ["Hello", "/həˈloʊ/", "Γεια σας (Yassas)", "你好"],
      ["Thank you", "/ˈθæŋk juː/", "Ευχαριστώ (Efharistó)", "谢谢"],
      ["How much is it?", "/haʊ ˈmʌtʃ ɪz ɪt/", "Πόσο κάνει;", "多少钱？"],
      ["Where is the toilet?", "/wɛr ɪz ðə ˈtɔɪlət/", "Πού είναι η τουαλέτα;", "洗手间在哪？"],
      ["Very tasty!", "/ˈvɛri ˈteɪsti/", "Πολύ νόστιμο!", "非常好吃！"]
    ]
  },
  PT: {
    n3: "620", flag: "🇵🇹", en: "Portugal", ipa: "/ˈpɔːrtʃʊɡəl/", zh: "葡萄牙",
    local: "Portugal", lang: "pt-PT", langZh: "葡萄牙语", langEn: "Portuguese",
    cur: ["EUR", "欧元", "Euro", "€"], plug: ["C / F", "230V"],
    visa: { zh: "需提前办理申根签证。", en: "Schengen visa required in advance." },
    safety: { zh: "欧洲最安全国家之一；里斯本28路电车与景点防扒手。", en: "One of Europe's safest countries; watch for pickpockets on Lisbon's Tram 28 and at landmarks." },
    taboo: { zh: "别用西班牙语跟葡萄牙人打招呼；餐前端上的面包橄榄（couvert）要收费，不吃可请撤走。", en: "Don't greet locals in Spanish; the bread/olives brought before meals (couvert) are charged — send them back if unwanted." },
    cities: [
      ["Lisbon", "/ˈlɪzbən/", "Lisboa", "里斯本"],
      ["Porto", "/ˈpɔːrtoʊ/", "Porto", "波尔图"],
      ["Sintra", "/ˈsɪntrə/", "Sintra", "辛特拉"],
      ["Madeira", "/məˈdɪərə/", "Madeira", "马德拉"]
    ],
    sights: [
      ["Belém Tower", "/bəˈlɛm ˈtaʊər/", "Torre de Belém", "贝伦塔"],
      ["Pena Palace", "/ˈpeɪnə ˈpælɪs/", "Palácio da Pena", "佩纳宫"],
      ["Jerónimos Monastery", "/dʒəˈrɒnɪmoʊs ˈmɒnəstri/", "Mosteiro dos Jerónimos", "热罗尼莫斯修道院"],
      ["Cabo da Roca", "/ˈkɑːbuː də ˈrɒkə/", "Cabo da Roca", "罗卡角（欧洲大陆最西端）"]
    ],
    foods: [
      ["Pastel de Nata", "/ˌpæstɛl də ˈnɑːtə/", "Pastel de Nata", "葡式蛋挞"],
      ["Salted Cod", "/ˈsɔːltɪd kɒd/", "Bacalhau", "腌鳕鱼"],
      ["Port Wine", "/pɔːrt waɪn/", "Vinho do Porto", "波特酒"],
      ["Francesinha", "/ˌfrænsəˈziːnjə/", "Francesinha", "法兰西小姐三明治"]
    ],
    phrases: [
      ["Hello", "/həˈloʊ/", "Olá", "你好"],
      ["Thank you", "/ˈθæŋk juː/", "Obrigado / Obrigada", "谢谢（男/女说法不同）"],
      ["How much is it?", "/haʊ ˈmʌtʃ ɪz ɪt/", "Quanto custa?", "多少钱？"],
      ["Where is the toilet?", "/wɛr ɪz ðə ˈtɔɪlət/", "Onde é a casa de banho?", "洗手间在哪？"],
      ["Delicious!", "/dɪˈlɪʃəs/", "Delicioso!", "好吃！"]
    ]
  },
  RU: {
    n3: "643", flag: "🇷🇺", en: "Russia", ipa: "/ˈrʌʃə/", zh: "俄罗斯",
    local: "Россия (Rossiya)", lang: "ru-RU", langZh: "俄语", langEn: "Russian",
    cur: ["RUB", "卢布", "Russian Ruble", "₽"], plug: ["C / F", "230V"],
    visa: { zh: "对中国公民免签试行（2025年12月起），单次停留最长30天；试行期至2026年9月，出行前请再确认。", en: "Visa-free trial for Chinese citizens (since Dec 2025) — up to 30 days per visit; trial runs until Sept 2026, reconfirm before travel." },
    safety: { zh: "大城市治安尚可，证件随身备查；出行前务必关注最新安全形势与航班政策。", en: "Major cities are reasonably safe; carry ID at all times; check the latest security situation and flight availability before travel." },
    taboo: { zh: "送花要单数（双数用于葬礼）；进屋脱鞋换拖鞋；不隔门槛握手；伏特加敬酒有讲究，干杯后杯要见底。", en: "Give flowers in odd numbers (even is for funerals); remove shoes indoors; never shake hands across a threshold; vodka toasts are drunk bottoms-up." },
    cities: [
      ["Moscow", "/ˈmɒskaʊ/", "Москва", "莫斯科"],
      ["Saint Petersburg", "/seɪnt ˈpiːtərzbɜːrɡ/", "Санкт-Петербург", "圣彼得堡"],
      ["Kazan", "/kəˈzɑːn/", "Казань", "喀山"],
      ["Vladivostok", "/ˌvlædɪˈvɒstɒk/", "Владивосток", "海参崴（符拉迪沃斯托克）"]
    ],
    sights: [
      ["Red Square", "/rɛd skwɛr/", "Красная площадь", "红场"],
      ["The Kremlin", "/ðə ˈkrɛmlɪn/", "Кремль", "克里姆林宫"],
      ["Hermitage Museum", "/ˈhɜːrmɪtɪdʒ mjuːˈziːəm/", "Эрмитаж", "冬宫（艾尔米塔什博物馆）"],
      ["Lake Baikal", "/leɪk baɪˈkɑːl/", "Озеро Байкал", "贝加尔湖"]
    ],
    foods: [
      ["Borscht", "/bɔːrʃt/", "Борщ", "红菜汤"],
      ["Beef Stroganoff", "/biːf ˈstrɒɡənɒf/", "Бефстроганов", "俄式炖牛肉"],
      ["Caviar", "/ˈkæviɑːr/", "Икра", "鱼子酱"],
      ["Blini", "/ˈbliːni/", "Блины", "俄式薄饼"]
    ],
    phrases: [
      ["Hello", "/həˈloʊ/", "Здравствуйте", "你好"],
      ["Thank you", "/ˈθæŋk juː/", "Спасибо", "谢谢"],
      ["How much is it?", "/haʊ ˈmʌtʃ ɪz ɪt/", "Сколько стоит?", "多少钱？"],
      ["Where is the toilet?", "/wɛr ɪz ðə ˈtɔɪlət/", "Где туалет?", "洗手间在哪？"],
      ["Very tasty!", "/ˈvɛri ˈteɪsti/", "Очень вкусно!", "非常好吃！"]
    ]
  },
  IS: {
    n3: "352", flag: "🇮🇸", en: "Iceland", ipa: "/ˈaɪslənd/", zh: "冰岛",
    local: "Ísland", lang: "is-IS", langZh: "冰岛语（英语通用）", langEn: "Icelandic (English widely spoken)",
    cur: ["ISK", "冰岛克朗", "Icelandic Króna", "kr"], plug: ["C / F", "230V"],
    visa: { zh: "需申根签证（冰岛属申根区）。", en: "Schengen visa required (Iceland is in Schengen)." },
    safety: { zh: "全球最安全国家之一；真正的风险是自然：自驾注意暴风雪与路况（road.is），黑沙滩观浪保持距离（离岸浪致命）。", en: "One of the safest countries; the real risks are natural — check storms/roads (road.is) when driving, and keep well back from sneaker waves at black-sand beaches." },
    taboo: { zh: "进泳池温泉前必须裸身彻底淋浴（有专人检查）；越野驾驶严重违法；勿踩踏采摘苔藓。", en: "You must shower naked before pools/hot springs (enforced); off-road driving is illegal; never trample or pick the moss." },
    cities: [
      ["Reykjavik", "/ˈreɪkjəvɪk/", "Reykjavík", "雷克雅未克"],
      ["Akureyri", "/ˌɑːkəˈreɪri/", "Akureyri", "阿克雷里"],
      ["Vik", "/viːk/", "Vík", "维克小镇"],
      ["Húsavík", "/ˈhuːsəviːk/", "Húsavík", "胡萨维克（观鲸小镇）"]
    ],
    sights: [
      ["Blue Lagoon", "/bluː ləˈɡuːn/", "Bláa lónið", "蓝湖温泉"],
      ["Golden Circle", "/ˈɡoʊldən ˈsɜːrkəl/", "Gullni hringurinn", "黄金圈"],
      ["Northern Lights", "/ˈnɔːrðərn laɪts/", "Norðurljós", "北极光"],
      ["Jökulsárlón Glacier Lagoon", "/ˌjɜːkʊlsɑːrˈloʊn ˈɡleɪʃər ləˈɡuːn/", "Jökulsárlón", "杰古沙龙冰河湖"]
    ],
    foods: [
      ["Lamb Soup", "/læm suːp/", "Kjötsúpa", "冰岛羊肉汤"],
      ["Skyr", "/skɪər/", "Skyr", "冰岛酸奶"],
      ["Icelandic Hot Dog", "/aɪsˈlændɪk hɒt dɒɡ/", "Pylsa", "冰岛热狗"],
      ["Fermented Shark", "/fərˈmɛntɪd ʃɑːrk/", "Hákarl", "发酵鲨鱼肉"]
    ],
    phrases: [
      ["Hello", "/həˈloʊ/", "Halló", "你好"],
      ["Thank you", "/ˈθæŋk juː/", "Takk", "谢谢"],
      ["How much is it?", "/haʊ ˈmʌtʃ ɪz ɪt/", "Hvað kostar þetta?", "多少钱？"],
      ["Where is the toilet?", "/wɛr ɪz ðə ˈtɔɪlət/", "Hvar er klósettið?", "洗手间在哪？"],
      ["Yummy!", "/ˈjʌmi/", "Namm!", "好吃！"]
    ]
  },
  EG: {
    n3: "818", flag: "🇪🇬", en: "Egypt", ipa: "/ˈiːdʒɪpt/", zh: "埃及",
    local: "مصر (Miṣr)", lang: "ar-EG", langZh: "阿拉伯语", langEn: "Arabic",
    cur: ["EGP", "埃及镑", "Egyptian Pound", "E£"], plug: ["C / F", "220V"],
    visa: { zh: "可在线办理电子签证；部分口岸有条件落地签，建议提前办好。", en: "E-visa available online; conditional visa on arrival at some ports — better to arrange in advance." },
    safety: { zh: "旅游区警力密集总体可控；防纠缠兜售与各种索要小费；女性避免单独夜行；打车用 Uber/Careem。", en: "Tourist areas are heavily policed; expect persistent vendors and tip requests; women should avoid walking alone at night; use Uber/Careem." },
    taboo: { zh: "小费文化（Baksheesh）无处不在，备好零钱；斋月白天勿当众饮食；进清真寺脱鞋；拍摄当地人先征得同意。", en: "Baksheesh (tipping) is everywhere — carry small bills; don't eat publicly in Ramadan daytime; remove shoes at mosques; ask before photographing people." },
    cities: [
      ["Cairo", "/ˈkaɪroʊ/", "القاهرة", "开罗"],
      ["Luxor", "/ˈlʌksɔːr/", "الأقصر", "卢克索"],
      ["Aswan", "/æsˈwɑːn/", "أسوان", "阿斯旺"],
      ["Hurghada", "/hʊrˈɡɑːdə/", "الغردقة", "洪加达"]
    ],
    sights: [
      ["Pyramids of Giza", "/ˈpɪrəmɪdz əv ˈɡiːzə/", "أهرامات الجيزة", "吉萨金字塔群"],
      ["The Sphinx", "/ðə sfɪŋks/", "أبو الهول", "狮身人面像"],
      ["Karnak Temple", "/ˈkɑːrnæk ˈtɛmpəl/", "معبد الكرنك", "卡尔纳克神庙"],
      ["Nile River", "/naɪl ˈrɪvər/", "نهر النيل", "尼罗河"]
    ],
    foods: [
      ["Koshari", "/ˈkoʊʃəri/", "كشري", "库莎丽（国民拌饭）"],
      ["Falafel", "/fəˈlɑːfəl/", "طعمية", "炸豆丸子"],
      ["Ful Medames", "/fuːl mɪˈdæmɪs/", "فول مدمس", "炖蚕豆"],
      ["Kebab", "/kɪˈbæb/", "كباب", "烤肉"]
    ],
    phrases: [
      ["Hello", "/həˈloʊ/", "السلام عليكم", "你好"],
      ["Thank you", "/ˈθæŋk juː/", "شكراً (Shukran)", "谢谢"],
      ["How much is this?", "/haʊ ˈmʌtʃ ɪz ðɪs/", "بكم ده؟", "这个多少钱？"],
      ["Where is the toilet?", "/wɛr ɪz ðə ˈtɔɪlət/", "فين الحمام؟", "洗手间在哪？"],
      ["Delicious!", "/dɪˈlɪʃəs/", "لذيذ!", "好吃！"]
    ]
  },
  MA: {
    n3: "504", flag: "🇲🇦", en: "Morocco", ipa: "/məˈrɒkoʊ/", zh: "摩洛哥",
    local: "المغرب (Al-Maghrib)", lang: "ar-MA", langZh: "阿拉伯语（法语通用）", langEn: "Arabic (French widely used)",
    cur: ["MAD", "摩洛哥迪拉姆", "Moroccan Dirham", "DH"], plug: ["C / E", "220V"],
    visa: { zh: "对中国公民免签，停留最长90天。", en: "Visa-free for Chinese citizens — up to 90 days." },
    safety: { zh: "总体安全；麦地那老城防「热心带路」索费骗局与扒手；单身女性可能遇到搭讪，坚定拒绝即可。", en: "Generally safe; in the medinas beware 'helpful guide' scams and pickpockets; solo women may face catcalling — a firm no works." },
    taboo: { zh: "拍摄当地人（尤其集市摊主）先征得同意；用右手递物；讨价还价是文化，从三分之一价开始；斋月注意礼仪。", en: "Ask before photographing people; use the right hand; haggling is expected — start around a third of the asking price; respect Ramadan." },
    cities: [
      ["Marrakech", "/ˌmærəˈkɛʃ/", "مراكش", "马拉喀什"],
      ["Casablanca", "/ˌkæsəˈblæŋkə/", "الدار البيضاء", "卡萨布兰卡"],
      ["Fes", "/fɛs/", "فاس", "非斯"],
      ["Chefchaouen", "/ʃɛfˈʃaʊən/", "شفشاون", "舍夫沙万（蓝城）"]
    ],
    sights: [
      ["Jemaa el-Fnaa", "/dʒəˌmɑː ɛl fəˈnɑː/", "ساحة جامع الفنا", "德吉玛广场"],
      ["Hassan II Mosque", "/ˈhæsən ðə ˈsɛkənd mɒsk/", "مسجد الحسن الثاني", "哈桑二世清真寺"],
      ["Sahara Desert", "/səˈhɑːrə ˈdɛzərt/", "الصحراء الكبرى", "撒哈拉沙漠"],
      ["Majorelle Garden", "/ˌmɑːʒəˈrɛl ˈɡɑːrdən/", "حديقة ماجوريل", "马若雷勒花园"]
    ],
    foods: [
      ["Tagine", "/tæˈʒiːn/", "طاجين", "塔吉锅"],
      ["Couscous", "/ˈkʊskʊs/", "كسكس", "库斯库斯"],
      ["Mint Tea", "/mɪnt tiː/", "أتاي بالنعناع", "薄荷茶"],
      ["Pastilla", "/pæsˈtiːjə/", "بسطيلة", "帕斯蒂拉酥皮派"]
    ],
    phrases: [
      ["Hello", "/həˈloʊ/", "سلام (Salam)", "你好"],
      ["Thank you", "/ˈθæŋk juː/", "شكراً (Shukran)", "谢谢"],
      ["How much?", "/haʊ ˈmʌtʃ/", "بشحال؟ (Bshhal?)", "多少钱？"],
      ["Where is the toilet?", "/wɛr ɪz ðə ˈtɔɪlət/", "فين كاين الطواليت؟", "洗手间在哪？"],
      ["Delicious!", "/dɪˈlɪʃəs/", "بنين! (Bnin!)", "好吃！"]
    ]
  },
  ZA: {
    n3: "710", flag: "🇿🇦", en: "South Africa", ipa: "/ˌsaʊθ ˈæfrɪkə/", zh: "南非",
    local: "South Africa", lang: "en-ZA", langZh: "英语（共11种官方语言）", langEn: "English (one of 11 official languages)",
    cur: ["ZAR", "南非兰特", "South African Rand", "R"], plug: ["C / D / M / N", "230V"],
    visa: { zh: "需提前办理签证。", en: "Visa required in advance." },
    safety: { zh: "治安需高度注意：夜间不要步行、贵重物品不外露、用 Uber 出行、车窗车门常锁；约翰内斯堡尤其谨慎。", en: "Exercise high caution: don't walk at night, keep valuables hidden, use Uber, keep car doors locked; be especially careful in Johannesburg." },
    taboo: { zh: "种族与种族隔离历史话题敏感；Safari 时听从向导、勿下车勿投喂野生动物。", en: "Race and apartheid history are sensitive topics; on safari follow your guide — never leave the vehicle or feed wildlife." },
    cities: [
      ["Cape Town", "/keɪp taʊn/", "Cape Town", "开普敦"],
      ["Johannesburg", "/dʒoʊˈhænɪsbɜːrɡ/", "Johannesburg", "约翰内斯堡"],
      ["Durban", "/ˈdɜːrbən/", "Durban", "德班"],
      ["Stellenbosch", "/ˈstɛlənbɒʃ/", "Stellenbosch", "斯泰伦博斯（酒乡）"]
    ],
    sights: [
      ["Table Mountain", "/ˈteɪbəl ˈmaʊntɪn/", "Table Mountain", "桌山"],
      ["Kruger National Park", "/ˈkruːɡər ˈnæʃənəl pɑːrk/", "Kruger National Park", "克鲁格国家公园"],
      ["Cape of Good Hope", "/keɪp əv ɡʊd hoʊp/", "Cape of Good Hope", "好望角"],
      ["Boulders Beach", "/ˈboʊldərz biːtʃ/", "Boulders Beach", "企鹅滩"]
    ],
    foods: [
      ["Braai (BBQ)", "/braɪ/", "Braai", "南非烤肉"],
      ["Biltong", "/ˈbɪltɒŋ/", "Biltong", "风干肉条"],
      ["Bobotie", "/bəˈbuːti/", "Bobotie", "咖喱肉末烘蛋"],
      ["Bunny Chow", "/ˈbʌni tʃaʊ/", "Bunny Chow", "面包咖喱盅"]
    ],
    phrases: [
      ["Hello", "/həˈloʊ/", "Hello / Howzit", "你好"],
      ["Thank you", "/ˈθæŋk juː/", "Thank you", "谢谢"],
      ["How much is it?", "/haʊ ˈmʌtʃ ɪz ɪt/", "How much is it?", "多少钱？"],
      ["Where is the toilet?", "/wɛr ɪz ðə ˈtɔɪlət/", "Where is the toilet?", "洗手间在哪？"],
      ["Lekker! (great)", "/ˈlɛkər/", "Lekker!", "太棒了/好吃（南非俚语）"]
    ]
  },
  KE: {
    n3: "404", flag: "🇰🇪", en: "Kenya", ipa: "/ˈkɛnjə/", zh: "肯尼亚",
    local: "Kenya", lang: "sw-KE", langZh: "斯瓦希里语（英语通用）", langEn: "Swahili (English widely used)",
    cur: ["KES", "肯尼亚先令", "Kenyan Shilling", "KSh"], plug: ["G", "240V"],
    visa: { zh: "需在线申请电子旅行许可（eTA）。", en: "Apply online for an Electronic Travel Authorisation (eTA)." },
    safety: { zh: "内罗毕注意治安，夜间乘车出行、勿在街头露财；Safari 全程听从向导指挥；提前接种/备好防疟措施。", en: "Use caution in Nairobi — travel by car at night, don't flash valuables; follow your safari guide at all times; prepare malaria precautions." },
    taboo: { zh: "拍摄马赛人需先征得同意并可能需付费；勿单独接近野生动物；公共场合着装保守为宜。", en: "Ask (and often pay) before photographing Maasai people; never approach wildlife alone; dress modestly in public." },
    cities: [
      ["Nairobi", "/naɪˈroʊbi/", "Nairobi", "内罗毕"],
      ["Mombasa", "/mɒmˈbɑːsə/", "Mombasa", "蒙巴萨"],
      ["Nakuru", "/nɑːˈkuːruː/", "Nakuru", "纳库鲁"],
      ["Narok (Mara gateway)", "/ˈnɑːrɒk/", "Narok", "纳罗克（马赛马拉门户）"]
    ],
    sights: [
      ["Maasai Mara", "/ˈmɑːsaɪ ˈmɑːrə/", "Maasai Mara", "马赛马拉国家保护区"],
      ["Amboseli National Park", "/ˌæmboʊˈseɪli ˈnæʃənəl pɑːrk/", "Amboseli", "安博塞利国家公园"],
      ["Lake Nakuru", "/leɪk nɑːˈkuːruː/", "Ziwa la Nakuru", "纳库鲁湖"],
      ["Great Rift Valley", "/ɡreɪt rɪft ˈvæli/", "Bonde la Ufa", "东非大裂谷"]
    ],
    foods: [
      ["Nyama Choma (grilled meat)", "/ˈnjɑːmə ˈtʃoʊmə/", "Nyama Choma", "烤肉"],
      ["Ugali", "/uːˈɡɑːli/", "Ugali", "乌咖喱玉米糊"],
      ["Chapati", "/tʃəˈpɑːti/", "Chapati", "东非煎饼"],
      ["Kenyan Tea", "/ˈkɛnjən tiː/", "Chai", "肯尼亚红茶"]
    ],
    phrases: [
      ["Hello", "/həˈloʊ/", "Jambo", "你好"],
      ["Thank you", "/ˈθæŋk juː/", "Asante", "谢谢"],
      ["How much is it?", "/haʊ ˈmʌtʃ ɪz ɪt/", "Bei gani?", "多少钱？"],
      ["Where is the toilet?", "/wɛr ɪz ðə ˈtɔɪlət/", "Choo kiko wapi?", "洗手间在哪？"],
      ["No problem", "/noʊ ˈprɒbləm/", "Hakuna matata", "没问题"]
    ]
  },
  US: {
    n3: "840", flag: "🇺🇸", en: "United States", ipa: "/juːˌnaɪtɪd ˈsteɪts/", zh: "美国",
    local: "United States", lang: "en-US", langZh: "英语", langEn: "English",
    cur: ["USD", "美元", "US Dollar", "$"], plug: ["A / B", "120V"],
    visa: { zh: "需面签 B1/B2 签证，并完成 EVUS 登记。", en: "B1/B2 visa (interview) required, plus EVUS enrollment." },
    safety: { zh: "总体安全但区域差异大：避开偏僻街区夜行，大城市防车窗砸抢（车内勿留物品）；紧急电话911。", en: "Generally safe but varies by area: avoid isolated neighborhoods at night, never leave items visible in parked cars; emergency number is 911." },
    taboo: { zh: "小费文化：堂食15-20%、出租车15%、行李员每件1-2美元；对安检人员勿开玩笑；尊重个人空间与排队距离。", en: "Tipping is expected: 15–20% at restaurants, 15% taxis, $1–2 per bag; never joke with TSA; respect personal space." },
    cities: [
      ["New York", "/njuː ˈjɔːrk/", "New York", "纽约"],
      ["Los Angeles", "/lɒs ˈændʒələs/", "Los Angeles", "洛杉矶"],
      ["San Francisco", "/ˌsæn frənˈsɪskoʊ/", "San Francisco", "旧金山"],
      ["Las Vegas", "/lɑːs ˈveɪɡəs/", "Las Vegas", "拉斯维加斯"]
    ],
    sights: [
      ["Statue of Liberty", "/ˈstætʃuː əv ˈlɪbərti/", "Statue of Liberty", "自由女神像"],
      ["Grand Canyon", "/ɡrænd ˈkænjən/", "Grand Canyon", "大峡谷"],
      ["Times Square", "/taɪmz skwɛr/", "Times Square", "时代广场"],
      ["Yellowstone National Park", "/ˈjɛloʊstoʊn ˈnæʃənəl pɑːrk/", "Yellowstone", "黄石国家公园"]
    ],
    foods: [
      ["Hamburger", "/ˈhæmbɜːrɡər/", "Hamburger", "汉堡"],
      ["Hot Dog", "/hɒt dɒɡ/", "Hot Dog", "热狗"],
      ["BBQ Ribs", "/ˌbɑːrbɪˈkjuː rɪbz/", "BBQ Ribs", "烤肋排"],
      ["Apple Pie", "/ˈæpəl paɪ/", "Apple Pie", "苹果派"]
    ],
    phrases: [
      ["Hi!", "/haɪ/", "Hi!", "你好"],
      ["Thanks a lot", "/ˈθæŋks ə lɒt/", "Thanks a lot", "多谢"],
      ["How much is this?", "/haʊ ˈmʌtʃ ɪz ðɪs/", "How much is this?", "这个多少钱？"],
      ["Where's the restroom?", "/wɛrz ðə ˈrɛstruːm/", "Where's the restroom?", "洗手间在哪（美式说法）？"],
      ["Check, please", "/tʃɛk pliːz/", "Check, please", "买单"]
    ]
  },
  CA: {
    n3: "124", flag: "🇨🇦", en: "Canada", ipa: "/ˈkænədə/", zh: "加拿大",
    local: "Canada", lang: "en-CA", langZh: "英语 / 法语", langEn: "English / French",
    cur: ["CAD", "加元", "Canadian Dollar", "C$"], plug: ["A / B", "120V"],
    visa: { zh: "需提前申请访客签证。", en: "Visitor visa required in advance." },
    safety: { zh: "非常安全；冬季注意极寒（-30°C）与冰雪路况；野外注意熊类，食物妥善存放。", en: "Very safe; beware extreme winter cold (-30°C) and icy roads; store food properly in bear country." },
    taboo: { zh: "小费文化同美国（15-18%）；魁北克以法语优先，先用 Bonjour 打招呼更受欢迎；尊重原住民文化。", en: "Tipping like the US (15–18%); in Quebec greet in French first; be respectful about Indigenous cultures." },
    cities: [
      ["Toronto", "/təˈrɒntoʊ/", "Toronto", "多伦多"],
      ["Vancouver", "/vænˈkuːvər/", "Vancouver", "温哥华"],
      ["Montreal", "/ˌmʌntriˈɔːl/", "Montréal", "蒙特利尔"],
      ["Banff", "/bæmf/", "Banff", "班夫"]
    ],
    sights: [
      ["Niagara Falls", "/naɪˈæɡrə fɔːlz/", "Niagara Falls / Chutes du Niagara", "尼亚加拉大瀑布"],
      ["Banff National Park", "/bæmf ˈnæʃənəl pɑːrk/", "Banff National Park", "班夫国家公园"],
      ["CN Tower", "/ˌsiː ˈɛn ˈtaʊər/", "CN Tower", "加拿大国家电视塔"],
      ["Old Quebec", "/oʊld kwɪˈbɛk/", "Vieux-Québec", "魁北克老城"]
    ],
    foods: [
      ["Poutine", "/puːˈtiːn/", "Poutine", "肉汁奶酪薯条"],
      ["Maple Syrup", "/ˈmeɪpəl ˈsɪrəp/", "Sirop d'érable", "枫糖浆"],
      ["Butter Tart", "/ˈbʌtər tɑːrt/", "Butter Tart", "黄油塔"],
      ["Nanaimo Bar", "/nəˈnaɪmoʊ bɑːr/", "Nanaimo Bar", "纳奈莫条"]
    ],
    phrases: [
      ["Hello", "/həˈloʊ/", "Hello / Bonjour", "你好"],
      ["Thank you", "/ˈθæŋk juː/", "Thank you / Merci", "谢谢"],
      ["How much is it?", "/haʊ ˈmʌtʃ ɪz ɪt/", "How much is it?", "多少钱？"],
      ["Where is the washroom?", "/wɛr ɪz ðə ˈwɒʃruːm/", "Where is the washroom?", "洗手间在哪（加式说法）？"],
      ["Sorry!", "/ˈsɒri/", "Sorry!", "不好意思（加拿大口头禅）"]
    ]
  },
  MX: {
    n3: "484", flag: "🇲🇽", en: "Mexico", ipa: "/ˈmɛksɪkoʊ/", zh: "墨西哥",
    local: "México", lang: "es-MX", langZh: "西班牙语", langEn: "Spanish",
    cur: ["MXN", "墨西哥比索", "Mexican Peso", "$"], plug: ["A / B", "127V"],
    visa: { zh: "持有效美国签证可免签入境；否则需办理墨西哥签证。", en: "Visa-free with a valid US visa; otherwise a Mexican visa is required." },
    safety: { zh: "坎昆等旅游区总体安全；避免夜间长途自驾，只用正规出租车或网约车；现金分开存放。", en: "Tourist zones like Cancún are generally safe; avoid long night drives, use registered taxis/rideshares, split your cash." },
    taboo: { zh: "毒品与治安话题避免深谈；教堂内保持安静着装得体；讲价温和进行；用「¿Mande?」而非「¿Qué?」更礼貌。", en: "Avoid dwelling on cartel topics; be quiet and modest in churches; bargain gently; '¿Mande?' is politer than '¿Qué?'." },
    cities: [
      ["Mexico City", "/ˈmɛksɪkoʊ ˈsɪti/", "Ciudad de México", "墨西哥城"],
      ["Cancun", "/kænˈkuːn/", "Cancún", "坎昆"],
      ["Guadalajara", "/ˌɡwɑːdələˈhɑːrə/", "Guadalajara", "瓜达拉哈拉"],
      ["Oaxaca", "/wəˈhɑːkə/", "Oaxaca", "瓦哈卡"]
    ],
    sights: [
      ["Chichen Itza", "/ˌtʃiːtʃɛn iːˈtsɑː/", "Chichén Itzá", "奇琴伊察"],
      ["Teotihuacan", "/ˌteɪoʊˌtiːwəˈkɑːn/", "Teotihuacán", "特奥蒂瓦坎"],
      ["Tulum", "/tuːˈluːm/", "Tulum", "图卢姆"],
      ["Frida Kahlo Museum", "/ˈfriːdə ˈkɑːloʊ mjuːˈziːəm/", "Museo Frida Kahlo", "弗里达·卡罗博物馆"]
    ],
    foods: [
      ["Taco", "/ˈtɑːkoʊ/", "Taco", "塔可"],
      ["Guacamole", "/ˌɡwɑːkəˈmoʊli/", "Guacamole", "牛油果酱"],
      ["Burrito", "/bəˈriːtoʊ/", "Burrito", "墨西哥卷饼"],
      ["Churros", "/ˈtʃʊroʊs/", "Churros", "吉事果"]
    ],
    phrases: [
      ["Hello", "/həˈloʊ/", "Hola", "你好"],
      ["Thank you", "/ˈθæŋk juː/", "Gracias", "谢谢"],
      ["How much is it?", "/haʊ ˈmʌtʃ ɪz ɪt/", "¿Cuánto cuesta?", "多少钱？"],
      ["Where is the toilet?", "/wɛr ɪz ðə ˈtɔɪlət/", "¿Dónde está el baño?", "洗手间在哪？"],
      ["How tasty!", "/haʊ ˈteɪsti/", "¡Qué rico!", "太好吃了！"]
    ]
  },
  BR: {
    n3: "076", flag: "🇧🇷", en: "Brazil", ipa: "/brəˈzɪl/", zh: "巴西",
    local: "Brasil", lang: "pt-BR", langZh: "葡萄牙语（巴西）", langEn: "Portuguese (Brazilian)",
    cur: ["BRL", "巴西雷亚尔", "Brazilian Real", "R$"], plug: ["C / N", "127V / 220V"],
    visa: { zh: "中巴互免签证已生效，持普通护照可免签入境（停留期以官方最新公告为准）。", en: "China–Brazil mutual visa exemption is in effect — visa-free entry on ordinary passports (check official sources for the allowed stay)." },
    safety: { zh: "里约等大城市注意抢劫：手机勿在街头外露、海滩勿带贵重物品、夜间乘车出行；跟紧人群密集的旅游区。", en: "In Rio and big cities guard against robbery: don't flash phones on the street, take nothing valuable to the beach, use cars at night." },
    taboo: { zh: "OK 手势在巴西是侮辱（用竖大拇指代替）；人际距离近、见面贴面拥抱是常态；聊足球慎选立场。", en: "The 'OK' hand sign is offensive (use thumbs-up); Brazilians greet with hugs/kisses and stand close; pick football sides carefully." },
    cities: [
      ["Rio de Janeiro", "/ˌriːoʊ deɪ ʒəˈnɛroʊ/", "Rio de Janeiro", "里约热内卢"],
      ["Sao Paulo", "/saʊ ˈpaʊloʊ/", "São Paulo", "圣保罗"],
      ["Salvador", "/ˈsælvədɔːr/", "Salvador", "萨尔瓦多"],
      ["Manaus (Amazon)", "/məˈnaʊs/", "Manaus", "玛瑙斯（亚马逊门户）"]
    ],
    sights: [
      ["Christ the Redeemer", "/kraɪst ðə rɪˈdiːmər/", "Cristo Redentor", "救世基督像"],
      ["Sugarloaf Mountain", "/ˈʃʊɡərloʊf ˈmaʊntɪn/", "Pão de Açúcar", "面包山"],
      ["Iguazu Falls", "/ˌiːɡwəˈsuː fɔːlz/", "Cataratas do Iguaçu", "伊瓜苏瀑布"],
      ["Copacabana Beach", "/ˌkoʊpəkəˈbænə biːtʃ/", "Praia de Copacabana", "科帕卡巴纳海滩"]
    ],
    foods: [
      ["Feijoada", "/ˌfeɪʒuˈɑːdə/", "Feijoada", "黑豆炖肉饭"],
      ["Churrasco", "/ʃʊˈrɑːskoʊ/", "Churrasco", "巴西烤肉"],
      ["Acai", "/ˌɑːsɑːˈiː/", "Açaí", "巴西莓"],
      ["Cheese Bread", "/tʃiːz brɛd/", "Pão de Queijo", "巴西芝士面包球"]
    ],
    phrases: [
      ["Hello", "/həˈloʊ/", "Olá / Oi", "你好"],
      ["Thank you", "/ˈθæŋk juː/", "Obrigado / Obrigada", "谢谢（男/女说法不同）"],
      ["How much is it?", "/haʊ ˈmʌtʃ ɪz ɪt/", "Quanto custa?", "多少钱？"],
      ["Where is the bathroom?", "/wɛr ɪz ðə ˈbæθruːm/", "Onde fica o banheiro?", "洗手间在哪？"],
      ["Delicious!", "/dɪˈlɪʃəs/", "Delicioso!", "好吃！"]
    ]
  },
  AR: {
    n3: "032", flag: "🇦🇷", en: "Argentina", ipa: "/ˌɑːrdʒənˈtiːnə/", zh: "阿根廷",
    local: "Argentina", lang: "es-AR", langZh: "西班牙语", langEn: "Spanish",
    cur: ["ARS", "阿根廷比索", "Argentine Peso", "$"], plug: ["C / I", "220V"],
    visa: { zh: "持有效美签或申根签可在线办电子许可（AVE）；否则需办理贴纸签证。", en: "With a valid US or Schengen visa, apply online for an AVE e-permit; otherwise a regular visa is required." },
    safety: { zh: "总体安全；布宜诺斯艾利斯防扒手与「鸟粪调包」经典骗局（有人帮你擦污渍时同伙偷包）。", en: "Generally safe; in Buenos Aires beware pickpockets and the classic 'bird poop' distraction scam." },
    taboo: { zh: "晚餐极晚（21-22点开始）；被递马黛茶是友谊象征，勿拒绝、勿动吸管；聊足球慎选梅西以外的立场。", en: "Dinner starts very late (9–10pm); shared mate tea is friendship — don't refuse or stir the straw; football loyalties run deep." },
    cities: [
      ["Buenos Aires", "/ˌbweɪnəs ˈaɪrɪz/", "Buenos Aires", "布宜诺斯艾利斯"],
      ["Mendoza", "/mɛnˈdoʊzə/", "Mendoza", "门多萨（酒乡）"],
      ["Bariloche", "/ˌbɑːrɪˈloʊtʃeɪ/", "Bariloche", "巴里洛切"],
      ["Ushuaia", "/uːˈswaɪə/", "Ushuaia", "乌斯怀亚（世界尽头）"]
    ],
    sights: [
      ["Iguazu Falls", "/ˌiːɡwəˈsuː fɔːlz/", "Cataratas del Iguazú", "伊瓜苏瀑布"],
      ["Perito Moreno Glacier", "/pəˌriːtoʊ məˈreɪnoʊ ˈɡleɪʃər/", "Glaciar Perito Moreno", "佩里托·莫雷诺冰川"],
      ["La Boca / Caminito", "/lɑː ˈboʊkə ˌkæmɪˈniːtoʊ/", "La Boca / Caminito", "博卡区彩色街"],
      ["The Obelisk", "/ði ˈɒbəlɪsk/", "El Obelisco", "方尖碑"]
    ],
    foods: [
      ["Asado (Argentine BBQ)", "/əˈsɑːdoʊ/", "Asado", "阿根廷烤肉"],
      ["Empanada", "/ˌɛmpəˈnɑːdə/", "Empanada", "馅饼"],
      ["Dulce de Leche", "/ˌduːlseɪ deɪ ˈleɪtʃeɪ/", "Dulce de Leche", "焦糖牛奶酱"],
      ["Mate", "/ˈmɑːteɪ/", "Mate", "马黛茶"]
    ],
    phrases: [
      ["Hello", "/həˈloʊ/", "Hola", "你好"],
      ["Thank you", "/ˈθæŋk juː/", "Gracias", "谢谢"],
      ["How much is it?", "/haʊ ˈmʌtʃ ɪz ɪt/", "¿Cuánto cuesta?", "多少钱？"],
      ["Where is the toilet?", "/wɛr ɪz ðə ˈtɔɪlət/", "¿Dónde está el baño?", "洗手间在哪？"],
      ["Very tasty!", "/ˈvɛri ˈteɪsti/", "¡Riquísimo!", "太好吃了！"]
    ]
  },
  PE: {
    n3: "604", flag: "🇵🇪", en: "Peru", ipa: "/pəˈruː/", zh: "秘鲁",
    local: "Perú", lang: "es-PE", langZh: "西班牙语", langEn: "Spanish",
    cur: ["PEN", "秘鲁索尔", "Peruvian Sol", "S/"], plug: ["A / B / C", "220V"],
    visa: { zh: "持有效美/加/英/澳或申根签证可免签90天；否则需办理签证。", en: "Visa-free for 90 days with a valid US/Canada/UK/Australia/Schengen visa; otherwise a visa is required." },
    safety: { zh: "总体安全；库斯科海拔3400米，抵达后先缓两天防高原反应；利马市区防扒手，用正规出租车。", en: "Generally safe; Cusco sits at 3,400m — acclimatize for two days; watch for pickpockets in Lima and use registered taxis." },
    taboo: { zh: "马丘比丘需实名预约限流、按时段入场；古柯茶当地合法可缓解高反，但严禁携带古柯叶出境。", en: "Machu Picchu requires timed, named tickets; coca tea is legal locally and helps altitude, but never take coca leaves out of the country." },
    cities: [
      ["Lima", "/ˈliːmə/", "Lima", "利马"],
      ["Cusco", "/ˈkuːskoʊ/", "Cusco", "库斯科"],
      ["Arequipa", "/ˌɑːrəˈkiːpə/", "Arequipa", "阿雷基帕"],
      ["Puno", "/ˈpuːnoʊ/", "Puno", "普诺（的的喀喀湖畔）"]
    ],
    sights: [
      ["Machu Picchu", "/ˌmɑːtʃuː ˈpiːktʃuː/", "Machu Picchu", "马丘比丘"],
      ["Sacred Valley", "/ˈseɪkrɪd ˈvæli/", "Valle Sagrado", "圣谷"],
      ["Lake Titicaca", "/leɪk ˌtɪtɪˈkɑːkə/", "Lago Titicaca", "的的喀喀湖"],
      ["Rainbow Mountain", "/ˈreɪnboʊ ˈmaʊntɪn/", "Vinicunca", "彩虹山"]
    ],
    foods: [
      ["Ceviche", "/səˈviːtʃeɪ/", "Ceviche", "酸橘汁腌鱼"],
      ["Lomo Saltado", "/ˈloʊmoʊ sɑːlˈtɑːdoʊ/", "Lomo Saltado", "秘鲁炒牛柳"],
      ["Cuy (guinea pig)", "/ˈkuːi/", "Cuy", "烤豚鼠"],
      ["Pisco Sour", "/ˈpɪskoʊ ˈsaʊər/", "Pisco Sour", "皮斯科酸酒"]
    ],
    phrases: [
      ["Hello", "/həˈloʊ/", "Hola", "你好"],
      ["Thank you", "/ˈθæŋk juː/", "Gracias", "谢谢"],
      ["How much is it?", "/haʊ ˈmʌtʃ ɪz ɪt/", "¿Cuánto cuesta?", "多少钱？"],
      ["Where is the toilet?", "/wɛr ɪz ðə ˈtɔɪlət/", "¿Dónde está el baño?", "洗手间在哪？"],
      ["Delicious!", "/dɪˈlɪʃəs/", "¡Delicioso!", "好吃！"]
    ]
  },
  AU: {
    n3: "036", flag: "🇦🇺", en: "Australia", ipa: "/ɒˈstreɪliə/", zh: "澳大利亚",
    local: "Australia", lang: "en-AU", langZh: "英语", langEn: "English",
    cur: ["AUD", "澳元", "Australian Dollar", "A$"], plug: ["I", "230V"],
    visa: { zh: "需在线申请访客签证（600类别）。", en: "Apply online for a Visitor visa (subclass 600)." },
    safety: { zh: "非常安全；真正的风险是自然：紫外线极强注意防晒，海滩在红黄旗之间游泳防离岸流，内陆自驾备足水油。", en: "Very safe; the real risks are natural — extreme UV, rip currents (swim between the flags), and remote outback drives need water and fuel planning." },
    taboo: { zh: "入境生物检疫极严：食品、木制品、泥土鞋底都要申报；打车可坐副驾（平等文化）；BBQ 聚会自带酒水。", en: "Biosecurity is strict — declare food, wooden items, dirty boots; riding shotgun in taxis is normal (egalitarian culture); BYO drinks to BBQs." },
    cities: [
      ["Sydney", "/ˈsɪdni/", "Sydney", "悉尼"],
      ["Melbourne", "/ˈmɛlbərn/", "Melbourne", "墨尔本"],
      ["Brisbane", "/ˈbrɪzbən/", "Brisbane", "布里斯班"],
      ["Cairns", "/kænz/", "Cairns", "凯恩斯"]
    ],
    sights: [
      ["Sydney Opera House", "/ˈsɪdni ˈɒpərə haʊs/", "Sydney Opera House", "悉尼歌剧院"],
      ["Great Barrier Reef", "/ɡreɪt ˈbæriər riːf/", "Great Barrier Reef", "大堡礁"],
      ["Uluru", "/ˌuːləˈruː/", "Uluru", "乌鲁鲁巨岩"],
      ["Great Ocean Road", "/ɡreɪt ˈoʊʃən roʊd/", "Great Ocean Road", "大洋路"]
    ],
    foods: [
      ["Meat Pie", "/miːt paɪ/", "Meat Pie", "肉派"],
      ["Vegemite", "/ˈvɛdʒɪmaɪt/", "Vegemite", "维吉麦酱"],
      ["Pavlova", "/pævˈloʊvə/", "Pavlova", "帕芙洛娃蛋糕"],
      ["Flat White", "/flæt waɪt/", "Flat White", "馥芮白咖啡"]
    ],
    phrases: [
      ["G'day!", "/ɡəˈdeɪ/", "G'day!", "你好（澳式）"],
      ["Ta / Cheers", "/tɑː/", "Ta / Cheers", "谢谢（口语）"],
      ["How much is it?", "/haʊ ˈmʌtʃ ɪz ɪt/", "How much is it?", "多少钱？"],
      ["Where's the toilet?", "/wɛrz ðə ˈtɔɪlət/", "Where's the toilet?", "洗手间在哪？"],
      ["No worries", "/noʊ ˈwʌriz/", "No worries", "没事儿/别客气"]
    ]
  },
  NZ: {
    n3: "554", flag: "🇳🇿", en: "New Zealand", ipa: "/njuː ˈziːlənd/", zh: "新西兰",
    local: "Aotearoa New Zealand", lang: "en-NZ", langZh: "英语 / 毛利语", langEn: "English / Māori",
    cur: ["NZD", "新西兰元", "New Zealand Dollar", "NZ$"], plug: ["I", "230V"],
    visa: { zh: "需提前申请访客签证并缴纳国际游客税（IVL）。", en: "Visitor visa required in advance, plus the International Visitor Levy (IVL)." },
    safety: { zh: "非常安全；户外活动注意天气突变，徒步前告知行程；开车靠左、乡间路况多弯。", en: "Very safe; weather changes fast outdoors — log your hiking plans; drive on the left and expect winding rural roads." },
    taboo: { zh: "生物检疫全球最严：入境严禁携带任何食品、蜂蜜、动植物制品（重罚）；尊重毛利文化，进 marae 会堂遵循礼仪。", en: "World's strictest biosecurity — declare/discard all food, honey, plant and animal products (heavy fines); respect Māori culture and marae protocol." },
    cities: [
      ["Auckland", "/ˈɔːklənd/", "Auckland / Tāmaki Makaurau", "奥克兰"],
      ["Queenstown", "/ˈkwiːnztaʊn/", "Queenstown", "皇后镇"],
      ["Wellington", "/ˈwɛlɪŋtən/", "Wellington", "惠灵顿"],
      ["Rotorua", "/ˌroʊtəˈruːə/", "Rotorua", "罗托鲁瓦"]
    ],
    sights: [
      ["Milford Sound", "/ˈmɪlfərd saʊnd/", "Milford Sound / Piopiotahi", "米尔福德峡湾"],
      ["Hobbiton", "/ˈhɒbɪtən/", "Hobbiton", "霍比屯"],
      ["Sky Tower", "/skaɪ ˈtaʊər/", "Sky Tower", "天空塔"],
      ["Tongariro Crossing", "/ˌtɒŋɡəˈrɪəroʊ ˈkrɔːsɪŋ/", "Tongariro Alpine Crossing", "汤加里罗高山步道"]
    ],
    foods: [
      ["Hangi (Maori earth oven)", "/ˈhɑːŋi/", "Hāngī", "毛利地炉大餐"],
      ["Fish and Chips", "/ˌfɪʃ ən ˈtʃɪps/", "Fish and Chips", "炸鱼薯条"],
      ["Pavlova", "/pævˈloʊvə/", "Pavlova", "帕芙洛娃蛋糕"],
      ["Hokey Pokey Ice Cream", "/ˈhoʊki ˈpoʊki aɪs kriːm/", "Hokey Pokey", "太妃脆冰淇淋"]
    ],
    phrases: [
      ["Kia ora (hello)", "/ˌkiːə ˈɔːrə/", "Kia ora", "你好（毛利语）"],
      ["Thank you", "/ˈθæŋk juː/", "Thank you / Ka pai", "谢谢"],
      ["How much is it?", "/haʊ ˈmʌtʃ ɪz ɪt/", "How much is it?", "多少钱？"],
      ["Where is the toilet?", "/wɛr ɪz ðə ˈtɔɪlət/", "Where is the toilet?", "洗手间在哪？"],
      ["Sweet as!", "/swiːt æz/", "Sweet as!", "棒极了（新西兰俚语）"]
    ]
  }
};

import { ndnDice } from "../commands/utils/dice.mjs"

export default async(message) => {
  if (message.content.match(/ぽてと|ポテト|じゃがいも|ジャガイモ|🥔|🍟/)) {
    await message.react("🥔");
  }
  
  // if (message.content.match(/にゃん|にゃーん|にゃ～ん/)) {
  //   await message.reply("にゃ～ん");
  // }
  
  if (message.content.match(/朝ごはん！/)) {
    await message.reply("ええ！朝ごはんを食べてるしゃみか〜！うらやましいしゃみ〜。みんなが美味しそうに朝ごはんを食べている写真を見せてほしいしゃみ〜！");
  }
  if (message.content.match(/Day1車割！/)) {
    await message.reply(`チームトヨタ：さーさん、すず、さく、チロル、きなこ\n`+`チームスズキ：あるちゃん、ばく、きぺお、まっすー、かめさん\n`+`チームグラセフ：きほもり、ゆっきー、あづき、うらっしゅ、ヨヨギ、きょーりゅー\n`+`チーム免許返納：もりね、あっぷる、みるく、あるが、さぁ坊、はーちぃ\n`+`チームキラー：ゆわ、しろ、なつつ、ありこ、ちゃんぽん、ゆるゆる\n`);
  }
  if (message.content.match(/昼ごはん！/)) {
    await message.reply("わ！昼ごはんを食べてるしゃみか〜！お腹すいたしゃみ〜。まるで自分で作ったかのようにご飯を紹介している写真を見せてほしいしゃみ〜！");
  }
    if (message.content.match(/Day1出発！/)) {
    await message.reply("ついにFlacation kmtが始めるしゃみ〜！！始まった感のある写真を見てみたいしゃみ！車ごとにチーム名も決めてほしいしゃみね！！");
  }
    if (message.content.match(/Day2出発！/)) {
    await message.reply("Day2が始めるしゃみ〜！！他の車を寄せ付けない躍動感のある写真を見てみたいしゃみ！車ごとにチーム名も決めてほしいしゃみね！！");
  }
    if (message.content.match(/Day3出発！/)) {
    await message.reply("最終日が始めるしゃみ〜！！バカみてーに怖いくらい笑ってる写真を見てみたいしゃみ！ひひひ");
  }
    if (message.content.match(/BeReal！/)) {
    await message.reply("⚠️BeRealの時間⚠️今の状況を雑談チャンネルに投稿しよう！しゃみ。");
  }
  if (message.content.match(/SA！/)) {
    await message.reply("サービスエリアについたしゃみね！ドライバーさんお疲れしゃみ！車に乗っているみんなでドライバーさんを労っている写真を見たいしゃみ！");
  }
  if (message.content.match(/ガス欠！/)) {
    await message.reply("あら〜！笑笑。ガソリンなくなっちゃったしゃみか？笑笑。ちゃんとガソリンの残りを確認しないとダメしゃみよ〜！笑笑。やっちまった感のある写真を見せて欲しいしゃみ〜！笑笑");
  }
  if (message.content.match(/到着！/)) {
    await message.reply("到着したしゃみか！うれしいしゃみね〜！目的地についたっぽい写真を見たいしゃみ！");
  }
  if (message.content.match(/アレルギー！/)) {
    await message.reply(`アレルギーはこんな感じしゃみ！気をつけてしゃみ〜！\n`+`くるみ、蕎麦、エビ、カニ、犬猫動物等の毛、皮脂、ハウスダスト、`);
  }
  
const mentors = [
    { name: "ゆっきー", leaders: "12期", course: "iPhone", region: "関東🏮", license: "勝者だが敗者（ペーパー）", springLove: "春服かわいい！", camera: "SONY" },
    { name: "あっぷる", leaders: "10期", course: "Webデザイン", region: "関東🏮", license: "敗者！助手席は任せてください", springLove: "森山直太朗", camera: "SONY" },
    { name: "みるく", leaders: "15期", course: "DTM", region: "関東🏮", license: "敗者！助手席は任せてください", springLove: "優しいところ", camera: "Nikon" },
    { name: "きょーりゅー", leaders: "13期", course: "iPhone", region: "関東🏮", license: "勝者", springLove: "桜餅", camera: "Leica" },
    { name: "ヨヨギ", leaders: "16期", course: "Unity", region: "関東🏮", license: "勝者だが敗者（ペーパー）", springLove: "桜と緑と花粉！", camera: "SONY" },
    { name: "うらっしゅ", leaders: "15期", course: "Minecraft", region: "関東🏮", license: "敗者！助手席は任せてください", springLove: "新しい感じがするところ！", camera: "Canon" },
    { name: "かめさん", leaders: "14期", course: "Android", region: "東海🥠", license: "敗者！助手席は任せてください", springLove: "気温がちょうどいい！", camera: "Nikon" },
    { name: "きなこ", leaders: "15期", course: "Minecraft", region: "関西🧆", license: "勝者だが敗者（ペーパー）", springLove: "桜がきれいなところ！", camera: "Canon" },
    { name: "ほしょ", leaders: "12期", course: "iPhone", region: "関西🧆", license: "勝者", springLove: "今回のアクティビティめっちゃ気になる〜", camera: "Canon" },
    { name: "KURO", leaders: "13期", course: "映像制作", region: "関西🧆", license: "勝者", springLove: "俺の誕生日があるところ", camera: "SONY" },
    { name: "ちゃんぽん", leaders: "12期", course: "Webデザイン", region: "関東🏮", license: "勝者だが敗者（ペーパー）", springLove: "祝日が地味に多い^^", camera: "Canon" },
    { name: "じゃぱお", leaders: "12期", course: "映像制作", region: "関東🏮", license: "勝者", springLove: "なにかがはじまるかんじ！", camera: "SONY" },
    { name: "まっすー", leaders: "16期", course: "映像制作", region: "東海🥠", license: "勝者だが敗者（ペーパー）", springLove: "桜！！！", camera: "FUJIFILM" },
    { name: "ありこ", leaders: "14期", course: "Android", region: "関東🏮", license: "勝者", springLove: "気温", camera: "SONY" },
    { name: "おまつ", leaders: "15期", course: "メディアアート", region: "関西🧆", license: "勝者だが敗者（ペーパー）", springLove: "桜🌸", camera: "Nikon" },
    { name: "ばく", leaders: "16期", course: "Webデザイン", region: "関西🧆", license: "敗者！助手席は任せてください", springLove: "さくら！！におい！！！出会い！！！！", camera: "Canon" },
    { name: "はーちぃ", leaders: "16期", course: "アニメーション", region: "関東🏮", license: "勝者だが敗者（ペーパー）", springLove: "三角チョコパイの季節🎶", camera: "Canon" },
    { name: "ゆわ", leaders: "16期", course: "アニメーション", region: "関東🏮", license: "敗者！助手席は任せてください", springLove: "〜ハワイだョ！全員集合〜", camera: "SONY" },
    { name: "しろ", leaders: "16期", course: "アニメーション", region: "関東🏮", license: "敗者！助手席は任せてください", springLove: "桜が咲くこと！", camera: "未定" },
    { name: "ゆるゆる", leaders: "12期", course: "Minecraft", region: "関東🏮", license: "敗者！助手席は任せてください", springLove: "植物の色味が全体的にいい感じ", camera: "Canon" },
    { name: "あるが", leaders: "13期", course: "Unity", region: "関東🏮", license: "勝者だが敗者（ペーパー）", springLove: "推しの誕生日があることですね", camera: "Canon" },
    { name: "さぁ坊", leaders: "16期", course: "メディアアート", region: "関東🏮", license: "敗者！助手席は任せてください", springLove: "ちょうどいい", camera: "Canon" },
    { name: "あるちゃん", leaders: "16期", course: "iPhone", region: "関西🧆", license: "勝者", springLove: "桜きれい", camera: "未定" },
    { name: "だす", leaders: "8期", course: "Android", region: "関東🏮", license: "勝者", springLove: "日が延びてくること", camera: "RICOH" },
    { name: "みぞ", leaders: "13期", course: "Unity", region: "関東🏮", license: "勝者だが敗者（ペーパー）", springLove: "花粉症だからない！あったかいところ行きたい", camera: "#N/A" },
    { name: "さーさん", leaders: "13期", course: "Unity", region: "東海🥠", license: "勝者", springLove: "4月生まれ！", camera: "Nikon" },
    { name: "なつつ", leaders: "14期", course: "Unity", region: "関東🏮", license: "勝者", springLove: "たんぽぽの綿毛飛ばせる", camera: "未定" },
    { name: "チロル", leaders: "16期", course: "映像制作", region: "東海🥠", license: "敗者！助手席は任せてください", springLove: "出会いと別れがあること", camera: "Canon" },
    { name: "あづき", leaders: "13期", course: "映像制作", region: "関東🏮", license: "勝者だが敗者（ペーパー）", springLove: "桜のフラペチーノが美味しい", camera: "Canon" },
    { name: "きほもり", leaders: "12期", course: "iPhone", region: "関東🏮", license: "勝者だが敗者（ペーパー）", springLove: "許さない‼️‼️原囿‼️", camera: "FUJIFILM" },
    { name: "もりね", leaders: "11期", course: "Webデザイン", region: "関東🏮", license: "勝者", springLove: "かわいいところ", camera: "Canon" },
    { name: "きぺお", leaders: "15期", course: "映像制作", region: "東海🥠", license: "勝者だが敗者（ペーパー）", springLove: "外でお昼寝しても気持ちいい温度なところ", camera: "Panasonic" },
    { name: "さく", leaders: "13期", course: "Unity", region: "東海🥠", license: "勝者だが敗者（ペーパー）", springLove: "アウターなしで夜散歩できるようになるのが嬉しい", camera: "SONY" },
    { name: "すず", leaders: "14期", course: "iPhone", region: "東海🥠", license: "勝者だが敗者（ペーパー）", springLove: "花粉が全力で攻めてきて『私らの存在感、見せてやる！』って気合い入れてくるところですかね。やつらの存在感に負けないように頑張ります！", camera: "Canon" },

];

for (const mentor of mentors) {
    if (message.content.match(new RegExp(`${mentor.name}！`))) {
        await message.reply(
            `メンター名👤：${mentor.name}\n` +
            `Leaders期🕶️：${mentor.leaders}\n` +
            `コース👾：${mentor.course}\n` +
            `どの地域から参加する？🗾：${mentor.region}\n` +
            `免許🚘：${mentor.license}\n` +
            `春の好きなところ！🌸：${mentor.springLove}\n` +
            `メイン機📸：${mentor.camera}`
        );
    }
}

  
  

//   if (message.content.match(/もりね！/)) {
//     await message.reply("みんなっしょ笑笑笑");
//   }
  
//   if (message.content.match(/Pino！/)) {
//     await message.reply("好きなアニメの聖地が名古屋なので名古屋大好きです！！");
// }

// if (message.content.match(/くっしー！/)) {
//     await message.reply("小倉トースト🍞🫘🫶🥰😋");
// }

// if (message.content.match(/さく！/)) {
//     await message.reply("冬の名古屋大好き！");
// }

// if (message.content.match(/はるっぺ！/)) {
//     await message.reply("名古屋最高なので参加！");
// }

// if (message.content.match(/チロル！/)) {
//     await message.reply("名古屋飯しか勝たん");
// }

// if (message.content.match(/KURO！/)) {
//     await message.reply("まっすーがいるとこ");
// }

// if (message.content.match(/やな！/)) {
//     await message.reply("名古屋は最強に住みやすくていいとこやぞ〜！！！！！👊👊👊");
// }

// if (message.content.match(/かめさん！/)) {
//     await message.reply("めしがうまい");
// }

// if (message.content.match(/じろけん！/)) {
//     await message.reply(`"私のこれまでの人生は名古屋と共にあります。生まれ自体は岐阜なのですが、私の家から名古屋まで東海道本線快速を使えば30分もかからないという立地に良さから幼少期から何をするにも名古屋に通っていました。大学生になってからはその名古屋との繋がりはより強固なものになりました。名古屋の大学に通いはじめ、東海メンターとなりました。何をするにも名古屋のために。その一心で一発ギャグを100人のメンバーの前でやったり、ゴー⭐︎ジャスになったりしました。高校を卒業したての若造には辛い時もありましたがそんな経験も糧となり、今の私の血肉となっています。つまり名古屋は私にとって第二の育ての親でもあるのです。そんな名古屋で私の大好きなコミュニティ、flashamiの1day eventがあると言うことで参加しない、そんなchoiceはありませんでした。名古屋を離れてしまった現在でも名古屋は私に成長の場を設けてくれている、その事実にimpressedされました。このチャンスをものにし、cameramanとしての大きな第一歩を踏み出したいのです！
// あと普通に名古屋に4年もいながら香嵐渓とか紅葉の名所行ってないの普通に損してる気がするから行きたいな。って気持ちです。"`);
// }

// if (message.content.match(/さりゅ！/)) {
//     await message.reply("いろんなメンターさんと仲良くなる！！💪");
// }

// if (message.content.match(/あるちゃん！/)) {
//     await message.reply("味噌カツだいすき");
// }

// if (message.content.match(/とろろ！/)) {
//     await message.reply("でかくていいところです");
// }

// if (message.content.match(/マエヒロ！/)) {
//     await message.reply("名古屋メシは三重のパクリ！天むす、ひつまぶし、味噌カツの発祥は三重！返してほしい！最近は長嶋も取ろうとしている！");
// }

// if (message.content.match(/さーさん！/)) {
//     await message.reply(`わしが名古屋来たんは、大学1年のときゃあ。徳島のどえりゃあ田舎から出てきてゃあ、都会のテーマパークやらレジャー施設に憧れとったんだわ。でら都会生活デビューだがや！って胸わくわくさせて来たんだに。

// 名古屋着いてみたら、名駅だけはまあでら都会でキラキラしとるけど、ちょっと離れりゃあすぐ田んぼと畑だがね。道歩いとっても、なんかようわからんモニュメントがニョキニョキ生えとるし、「おみゃあ、ここほんまに名古屋か？」って思たわ。

// 地下鉄も名駅からちょこっと伸びとるだけで、まんだまんだ田舎でかんわ。バスも来んし、車ないとどえりゃあ不便でかんわもんで、大学3年のときに車買ったんだわ。これでどこでも行けるがや！って思ったら、走れば走るほど田舎になるでかんわ。守山区とか緑区の方とか端っこは結局、徳島と変わらんやんけってツッコミ入れとうなったわ。

// でもな、そんなどえりゃあ田舎の名古屋にも、でらうみゃあ名古屋めしがあるんだわ。味噌カツやら手羽先やら、ひつまぶしやら、よーけ食べてゃあ、体が味噌になりそうだったわ。毎日味噌カツばっかやっとったら、体重も増えてまったんだわ！

// ほんでもって、道端にでっかい金の観音様がぽつんと立っとったり、わけわからんモニュメントがあったり、友達とよーけ集まって、「この先どえりゃあ面白いもんあるんじゃにゃあか？」ってワクワクしとったら、急にでかい招き猫が現れてびびったわ。

// そいで、名古屋で出会ったでら可愛い彼女がおったんだわ。でら惚れてまっとったんだけどよ、わしがぼーっとしとる間にサークルの先輩にしれっと持ってかれとったがね！「あんた、どえりゃあたわけだがや！」って叫びたかったけど、先輩もでらかっこええでかんから、しゃーないわ。

// 結局、わしの都会生活デビューも、恋も、ぜーんぶわやになってまったけど、今やこのでっかい田舎で味噌カツ食べて、手羽先かじって、謎スポット巡って、生きてくでかんわ！`); // 短縮
// }

// if (message.content.match(/パタパタ！/)) {
//     await message.reply("爺ちゃん家に毎年帰省してます！それ以外特に愛はない！");
// }

// if (message.content.match(/まっすー！/)) {
//     await message.reply("矢場とんは絶対！！！");
// }

// if (message.content.match(/みるく！/)) {
//     await message.reply("形がかわいい的な。");
// }

// if (message.content.match(/サップ！/)) {
//     await message.reply("久しぶりにやばとん食べたい気がします！");
// }

// if (message.content.match(/あやぽ！/)) {
//     await message.reply("なごやすみやすくてすき");
// }

// if (message.content.match(/ぱるてぃ！/)) {
//     await message.reply("名古屋ってやっぱ都会で何でも揃ってるからいい！");
// }

// if (message.content.match(/ペリー！/)) {
//     await message.reply("楽しみです");
// }

// if (message.content.match(/ぎふ！/)) {
//     await message.reply("手羽先");
// }

// if (message.content.match(/きゃんた！/)) {
//     await message.reply("きぺおさん大好き");
// }

// if (message.content.match(/はるちろ！/)) {
//     await message.reply("あーーーーーーーーーーーーーーいーーーーーーーーーーちーーーーーーーー");
// }

//   if (message.content.match(/ふらしゃみ君！/)) {
//     await message.reply("手が大きすぎてカメラを持てないしゃみ。");
//   }
//   if (message.content.match(/ひなぽん！/)) {
//     await message.reply("人生全部成功してる！");
//   }
//   if (message.content.match(/ぽにょ！/)) {
//     await message.reply("就活のグルディスで役職聞かれて、占い師って答えたこと");
//   }
//   if (message.content.match(/はっつん！/)) {
//     await message.reply("留学したと嘘をついてしまったこと。");
//   }
//   if (message.content.match(/まっすー！/)) {
//     await message.reply("ご飯代は込みですか？");
//   }
//   if (message.content.match(/ほのぴ！/)) {
//     await message.reply("iPod洗濯したこと！");
//   }
    
//   if (message.content.match(/らすかる！/)) {
//     await message.reply("失敗は捻じ曲げて成功にします");
//   }
//   if (message.content.match(/あるが！/)) {
//   await message.reply("車を運転する機会がないのに免許をとって、1回も運転しないまま免許を更新したこと！");
// }
  
//   if (message.content.match(/キティ！/)) {
//     await message.reply("ちゃんと計算してたのになぜか1万円だけ超えちゃった扶養！");
//   }
  
// if (message.content.match(/あづき！/)) {
//   await message.reply("失敗しすぎて選べません");
// }
//   if (message.content.match(/ピナ！/)) {
//     await message.reply("特に思いつかないこと！");
//   }
//   if (message.content.match(/コンテナ！/)) {
//     await message.reply("メンバー時代に一回しかキャンプに参加しなかったこと");
//   }
//   if (message.content.match(/さぁ坊！/)) {
//   await message.reply("初キャンの自己紹介上手くいかなかった");
//   } 
//   if (message.content.match(/きゃあ。！/)) {
//   await message.reply("バナナはおやつに含まれますか？");
//   } 
//   if (message.content.match(/KURO！/)) {
//   await message.reply("ない");
//   } 
  
//   if (message.content.match(/おまつ！/)) {
//   await message.reply("心から楽しみにしていたライブに身分証を忘れてしまい、入れてもらえなかったこと");
//   } 
  
//   if (message.content.match(/ほしょ！/)) {
//   await message.reply("やっぱ行く場所気になるな〜👀👀");
//   } 
  
//   if (message.content.match(/ゆーむ！/)) {
//   await message.reply("両親が離婚した時に父とついていったこと。");
//   } 
  
//   if (message.content.match(/カビゴン！/)) {
//   await message.reply("おいしいから");
//   } 
//   if (message.content.match(/スイッチロー！/)) {
//   await message.reply("たくさんスイッチあるじゃんか");
//   } 
//   if (message.content.match(/すず！/)) {
//   await message.reply("撮るちゃむ！");
//   } 
//   if (message.content.match(/きぺお！/)) {
//   await message.reply("沖縄で飛行機乗り遅れた");
//   } 
//   if (message.content.match(/まるぴ！/)) {
//     await message.reply("武井壮との飲み会に色々あって行けなかったこと");
//   }
//   if (message.content.match(/きほもり！/)) {
//     await message.reply("それなりに楽しく生きていく力強いので，失敗だと思ってることない");
//   }
//   if (message.content.match(/ちゃお！/)) {
//     await message.reply("大切な人をさ、とれたら幸せやん？笑");
//   }
//   if (message.content.match(/きなこ！/)) {
//     await message.reply("こにーさんの撮る写真、めちゃかっこいいのでカメラ憧れました！");
//   }
//   if (message.content.match(/ショコラ！/)) {
//     await message.reply("高校の時に空の写真が好きだからっていうふわっとした理由で写真部に入ったから");
//   }
//   if (message.content.match(/ゆーたーん！/)) {
//     await message.reply("思い出だいすき人間だから少しでも残したくて…！");
//   }
//   if (message.content.match(/ゆわ！/)) {
//     await message.reply("気がついたら写真が好きでした");
//   }
//   if (message.content.match(/チロル！/)) {
//     await message.reply("のぞいたファインダーの景色が好きだった！！");
//   }
//   if (message.content.match(/ちょす！/)) {
//     await message.reply(" ");
//   }
//   if (message.content.match(/あやのん！/)) {
//     await message.reply("なし");
//   }
//   if (message.content.match(/タキ！/)) {
//     await message.reply("🩵");
//   }
//   if (message.content.match(/さく！/)) {
//     await message.reply("#ファインダー越しの私の世界");
//   }
//   if (message.content.match(/やな！/)) {
//     await message.reply("シャッター音が好きで、一眼レフを持ってくと無限に写真撮っちゃいます！カメラについてもっと詳しくなりたいです！また、かっこいい構図や美しく人を撮るコツを知りたいですー！27日は参加できませんが、今後のイベントに参加できたら嬉しいです！🙌");
//   }
//   if (message.content.match(/アンビ！/)) {
//     await message.reply("一瞬の思い出を残したくて");
//   }
//   if (message.content.match(/くっしー！/)) {
//     await message.reply("空が綺麗だったから");
//   }
//   if (message.content.match(/あいりす！/)) {
//     await message.reply("写真がキラキラする🥺");
//   }
//   if (message.content.match(/うらっしゅ！/)) {
//     await message.reply("奥が深い…");
//   }
//   if (message.content.match(/はるちろ！/)) {
//     await message.reply("自分の見ているものを切り取って、思い出を残せるのはいいよね！！");
//   }
//   if (message.content.match(/ショーン！/)) {
//   await message.reply("以前、カメラやってる人とフォトウォークするのが楽しかったから。");
// }

// if (message.content.match(/まーぼー！/)) {
//   await message.reply("旅先でエモエモの写真を撮りたいです🤳");
// }

// if (message.content.match(/だーす！/)) {
//   await message.reply("そば");
// }

// if (message.content.match(/はーちぃ！/)) {
//   await message.reply("カメラはもう1人の私を写す鏡となっています。");
// }

// if (message.content.match(/あいうえお！/)) {
//   await message.reply("記憶力が無い私でも写真に残せば思い出せるから");
// }

// if (message.content.match(/じろけん！/)) {
//   await message.reply("もりねさんに憧れて！");
// }

// if (message.content.match(/ノース！/)) {
//   await message.reply("お父さんが使いこなせなくて持て余したカメラ持ってきます🙌🏻");
// }

// if (message.content.match(/ほのの！/)) {
//   await message.reply("早退後の資料などあれば後日共有していただけると嬉しいです！！");
// }

// if (message.content.match(/ゆー！/)) {
//   await message.reply("使う人によって撮れる写真がすごく変わるところ");
// }

// if (message.content.match(/かめさん！/)) {
//   await message.reply("最近めっちゃ暑いですよね");
// }


// if (message.content.match(/まえひろ！/)) {
//   await message.reply("ずっとうっすら興味があります");
// }

// if (message.content.match(/やすだ！/)) {
//   await message.reply("友達に誘われて");
// }

// if (message.content.match(/たくー！/)) {
//   await message.reply("いい自撮りほしいのでまた次回参加したい！！");
// }

// if (message.content.match(/あいあい！/)) {
//   await message.reply("友達が撮るの上手でいいなぁと思ってー！");
// }

// if (message.content.match(/とまと！/)) {
//   await message.reply("写真永遠に残って最高だからです!");
// }


// if (message.content.match(/なつみかん！/)) {
//   await message.reply("NikonのD500で撮られた写真に感動してからNikonの一眼レフがずっと相棒です！カメラもっとちゃんと使いこなしたいです〜！");
// }

// if (message.content.match(/ばもん！/)) {
//   await message.reply("父親の影響で昔一眼を触っていて楽しかったから！");
// }


// if (message.content.match(/わくわくさん！/)) {
//   await message.reply("大切な人との時間をおさめたい！！");
// }

// if (message.content.match(/ハク！/)) {
//   await message.reply("");
// }
//   if (message.content.match(/さーさん！/)) {
//   await message.reply("写真撮影およびカメラに対する愛着の理由は、さまざまな要素が絡み合っている。まず第一に、カメラを用いることによって、エフェメラルな瞬間や一過性の風景を永続的に保存することが可能である。これは、時間的制約を超越した形で視覚的記憶を固定化する行為であり、刹那性の捕捉と言える。この行為は瞬間を永遠にする力を持ち、個々の経験を超えて普遍的な価値を持つ。さらに、写真撮影は個々の審美的感性や視覚的認識を具現化する手段である。これにより、個人の内在するクリエイティビティが具体的に表出される。この創造的表現の具現化は、他者との感性の共有を促進し、視覚芸術としての写真が持つ独自の価値を高める。また、写真はノスタルジアを喚起し、過去の経験や人間関係を視覚的に再現することによって、時間の流れを越えて記憶を再生するツールとして機能する。これにより、記憶の永続化が可能となる。さらに、写真撮影技術の向上に伴う自己実現感やエフィカシーの向上は、個人の成長に寄与する。特に、美的評価を受けた際の自己肯定感は、個人の心理的成長を促進する要因となる。最後に、写真は視覚的コミュニケーションの媒体として、他者に感動や楽しさを伝達し、共感を生み出す力を持つ。この共感の創出により、社会的結束や感情の共有が促進される。これらの要素が相まって、写真撮影およびカメラに対する愛着が形成されるのである。");
// }

// if (message.content.match(/ミッキー！/)) {
//   await message.reply("ポライドカメラから興味持った");
// }

// if (message.content.match(/とぅい！/)) {
//   await message.reply("青い春がそこにあったから！");
// }
  
// if (message.content.match(/ぎふ！/)) {
//   await message.reply("車撮りたくて");
// }
  
// if (message.content.match(/さっぷ！/)) {
//   await message.reply("綺麗な写真撮りたいです！");
// }
  
  if (message.content.match(/^\d+d\d+$/)) {
    await message.reply(ndnDice(message.content));
  }
};

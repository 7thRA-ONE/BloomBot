//  ╔◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ ⒸBloomBot by magneum™ ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎"
//  ║⧉༻ 🤖𝐎𝐩𝐞𝐧𝐁𝐨𝐭😺𝐌𝐮𝐥𝐭𝐢-𝐃𝐞𝐯𝐢𝐜𝐞🤖
//  ║  𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞 - 𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧, 𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟐𝟎𝟎++ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!
//  ║
//  ║🌟 A versatile whatsApp multi-purpose bot designed for group management and user convenience.
//  ║🚀 Simplifies group management tasks and enhances the overall user experience.
//  ║⚠️ Please note: Engaging in spamming activities may lead to account suspension. Use responsibly!
//  ║🎉 BloomBot is intended for fun and convenience, but we're not responsible for account bans.
//  ║🔀 forking the repository is allowed, but customized versions or modified plugins are unsupported.
//  ║⚠️ Exercise caution and take responsibility for any modifications made to the bot.
//  ║📞 Need assistance or have issues? Contact our developers at +918436686758 and +918250889325.
//  ║🔄 We'll continue providing updates and support for the original version of the bot.
//  ║👉 Enjoy the features and functionality of BloomBot responsibly! Make the most out of your
//  ║   whatsApp group management experience! 🎉
//  ║
//  ║🐞 Developers: +918436686758, +918250889325
//  ╚◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ ⒸBloomBot by magneum™ ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎"
require("#/logger/config");
var ppth = require("path");
var tpth = ppth.basename(__filename);
var fpth = tpth.slice(0, -3).toLowerCase();
module.exports = async (BloomBot, vChat) => {
  if (!BloomBot.mentionByReply) {
    return vChat.reply(`*😥Apologies:* _${BloomBot.pushname || BloomBot.Tname}_ 

*❌Error* 
> _No query provided!_

*⚡Usage* 
> Reply-Person: _${BloomBot.prefix}${fpth} amount_`);
  }
  if (BloomBot.args.length === 0) {
    return vChat.reply(`*😥Apologies:* _${BloomBot.pushname || BloomBot.Tname}_ 

*❌Error* 
> _No query provided!_

*⚡Usage* 
> Reply-Person: _${BloomBot.prefix}${fpth} amount_`);
  }
  if (/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/.test(BloomBot.args[0])) {
    return vChat.reply(`*😥Apologies:* _${BloomBot.pushname || BloomBot.Tname}_ 

*❌Error* 
> _No query provided!_

*⚡Usage* 
> Reply-Person: _${BloomBot.prefix}${fpth} amount_`);
  }
  if (BloomBot.args[0].match(/[a-z]/i)) {
    return vChat.reply(`*😥Apologies:* _${BloomBot.pushname || BloomBot.Tname}_ 

*❌Error* 
> _No query provided!_

*⚡Usage* 
> Reply-Person: _${BloomBot.prefix}${fpth} amount_`);
  }

  if (BloomBot.mentionByReply) {
    receiver =
      BloomBot.mtype == "extendedTextMessage" &&
      BloomBot.message.extendedTextMessage.contextInfo != null
        ? BloomBot.message.extendedTextMessage.contextInfo.participant || ""
        : "";
    receiverName = await BloomBot.getName(receiver);
    if (receiver === vChat.sender) {
      return vChat.reply(`*😥Apologies:* _${BloomBot.pushname || BloomBot.Tname}_ 

*❌Error* 
> _Can't pay self account!_

*⚡Usage* 
> Reply-Person: _${BloomBot.prefix}${fpth} amount_`);
    }

    await BloomBot.Economy.findOne(
      {
        Id: vChat.sender,
      },
      async (error, uPayer) => {
        if (error) return BloomBot.handlerror(BloomBot, vChat, error);
        if (!uPayer) {
          new BloomBot.Economy({
            Id: vChat.sender,
            money: 0,
            daily: 0,
            timeout: 86400000,
            fishdone: 0,
            fishtimeout: 1800000,
            workdone: 0,
            worktimeout: 900000,
          })
            .save()
            .catch((error) => {
              return BloomBot.handlerror(BloomBot, vChat, error);
            });
          return vChat.reply(`*😥Apologies:* _${
            BloomBot.pushname || BloomBot.Tname
          }_ 

*❌Error* 
> _You Have 0-gold To Pay_

*⚡Usage* 
> Reply-Person: _${BloomBot.prefix}${fpth} amount_`);
        }

        if (parseInt(BloomBot.args[0]) > uPayer.money) {
          return vChat.reply(`*😥Apologies:* _${
            BloomBot.pushname || BloomBot.Tname
          }_ 

*❌Error* 
> _You Have 0-gold To Pay_

*💰Balance:*
>${uPayer.money}

*⚡Usage* 
> Reply-Person: _${BloomBot.prefix}${fpth} amount_`);
        } else {
          await BloomBot.Economy.findOne(
            {
              Id: receiver,
            },
            async (error, uBonus) => {
              if (error) return BloomBot.handlerror(BloomBot, vChat, error);
              if (!uBonus) {
                new BloomBot.Economy({
                  Id: receiver,
                  money: parseInt(BloomBot.args[0]),
                  daily: 0,
                  timeout: 86400000,
                  fishdone: 0,
                  fishtimeout: 1800000,
                  workdone: 0,
                  worktimeout: 900000,
                })
                  .save()
                  .catch((error) => {
                    return BloomBot.handlerror(BloomBot, vChat, error);
                  });
                uPayer.money = uPayer.money - parseInt(BloomBot.args[0]);
                uPayer.save().catch((error) => {
                  return BloomBot.handlerror(BloomBot, vChat, error);
                });
                return await BloomBot.imagebutton(
                  BloomBot,
                  vChat,
                  `*⚡Here, ${fpth} for ${BloomBot.pushname || BloomBot.Tname}:*

┌『 *📥Paying Account* 』
│║⦁ *💰Balance:* ${uPayer.money}
│║⦁ *🦚Account Holder:* ${BloomBot.pushname || BloomBot.Tname}
┕╚═══════⋑

┌『 *📥Receiver Account* 』
│║⦁ *💰Balance:* ${payGold}
│║⦁ *🐿️Account To Pay:* @${receiverName}
┕╚═══════⋑`,
                  BloomBot.display
                );
              }

              uPayer.money = uPayer.money - parseInt(BloomBot.args[0]);
              uPayer.save().catch((error) => {
                return BloomBot.handlerror(BloomBot, vChat, error);
              });
              uBonus.money = uBonus.money + parseInt(BloomBot.args[0]);
              uBonus.save().catch((error) => {
                return BloomBot.handlerror(BloomBot, vChat, error);
              });
              return await BloomBot.imagebutton(
                BloomBot,
                vChat,
                `*⚡Here, ${fpth} for ${BloomBot.pushname || BloomBot.Tname}:*

┌『 *📥Paying Account* 』
│║⦁ *💰Balance:* ${uPayer.money}
│║⦁ *🦚Account Holder:* ${BloomBot.pushname || BloomBot.Tname}
┕╚═══════⋑

┌『 *📥Receiver Account* 』
│║⦁ *💰Balance:* ${uBonus.money}
│║⦁ *🐿️Account To Pay:* @${receiverName}
┕╚═══════⋑`,
                BloomBot.display
              );
            }
          );
        }
      }
    );
  } else {
    return vChat.reply(`*😥Apologies:* _${BloomBot.pushname || BloomBot.Tname}_ 

*❌Error* 
> _No query provided!_

*⚡Usage* 
> Reply-Person: _${BloomBot.prefix}${fpth} amount_`);
  }
};

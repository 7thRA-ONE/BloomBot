require("../global.js");
database = require("../mongBase/dashboard");
dboard = async (νℓкуяє, vcнaт, udBase) => {
  await database.findOne(
    {
      ID: vcнaт.sender,
    },
    async (error, udBase) => {
      if (error) return νℓкуяє.grab(νℓкуяє, vcнaт, error);
      if (!udBase) {
        new database({
          ID: vcнaт.sender,
          bite: 0,
          blus: 0,
          bonk: 0,
          bored: 0,
          confused: 0,
          cry: 0,
          cuddle: 0,
          dance: 0,
          goodnight: 0,
          happy: 0,
          highfive: 0,
          hug: 0,
          kick: 0,
          kill: 0,
          kiss: 0,
          nervous: 0,
          pat: 0,
          poke: 0,
          poke: 0,
          punch: 0,
          sad: 0,
          scream: 0,
          slap: 0,
          smile: 0,
          stare: 0,
          wave: 0,
          wink: 0,
          yeet: 0,
          yes: 0,
          sticker: 0,
          tinyurl: 0,
          toimg: 0,
          tourl: 0,
          youtube: 0,
          bassbost: 0,
          echo: 0,
          flanger: 0,
          nightcore: 0,
          phaser: 0,
          reverse: 0,
          slow: 0,
          speed: 0,
          subboost: 0,
          superslow: 0,
          superspeed: 0,
          surround: 0,
          vaporwave: 0,
          vibrato: 0,
          balance: 0,
          buy: 0,
          daily: 0,
          fish: 0,
          gamble: 0,
          inv: 0,
          pay: 0,
          rob: 0,
          store: 0,
          work: 0,
          zoo: 0,
          antilink: 0,
          broadcast: 0,
          delete: 0,
          demote: 0,
          group: 0,
          promote: 0,
          remove: 0,
          setdesc: 0,
          seticon: 0,
          tagall: 0,
          image: 0,
          neko: 0,
          pinterest: 0,
          waifu: 0,
          wallpaper: 0,
          advice: 0,
          anime: 0,
          fact: 0,
          google: 0,
          joke: 0,
          manga: 0,
          meme: 0,
          quote: 0,
          reddit: 0,
          yt8d: 0,
          ytbassboost: 0,
          ytecho: 0,
          ytflanger: 0,
          ytnightcore: 0,
          ytphaser: 0,
          ytreverse: 0,
          ytslow: 0,
          ytspeed: 0,
          ytsubboost: 0,
          ytsuperslow: 0,
          ytsuperspeed: 0,
          ytsurround: 0,
          ytvaporwave: 0,
          ytvibrato: 0,
          help: 0,
          vlkyre: 0,
          _anime: 0,
          _download: 0,
          _filter: 0,
          _game: 0,
          _group: 0,
          _image: 0,
          _search: 0,
          _ytfilter: 0,
        })
          .save()
          .catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
        return udBase;
      } else {
        return udBase;
      }
    }
  );
};
module.exports = {
  dboard: dboard,
};

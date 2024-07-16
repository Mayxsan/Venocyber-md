//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "losrios755@gmail.com";
global.location = "Njombe,Tanzania.";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Dar es salaam";
global.github = process.env.GITHUB || "https://github.com/Kingjux/Venocyber-md";
global.gurl = process.env.GURL || "https://wa.me/message/SHUL2VJTYOORM1";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VagzM5RGk1Fq9b6BCO0q";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/12b0fb245e6b8ba4bf718.jpg";
global.devs = "2348125926761";
global.sudo = process.env.SUDO || "";
global.owner = process.env.OWNER_NUMBER || "2349016595825";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "true";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://rb.gy/3keql8";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZUFxaFQyY0hQbmtRNjRZVHp2K21aK0pXWWZhL01ac2hPaGx1M0xnaGNtOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiL0t6cFdpNG9TL1NzMEFBRW9hVE1sOHpRMSsvelFCejRKQ2VGRWwvakhBZz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ1TlZHSGJwcmFNanJNNHJJemZmRmRQUXN1VWhGVUliRnNUNjZoUGpQYlgwPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI2TTlKRklWQ1FWdlJRZzYweXVqdDFKVEx3UjVCREQyUTVvVllBZ01ma1VNPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjZPc2hlU1VMb3YydnJiL1c1c3IwMlJmUVUram4vaE5JdCtqVFBBUDdvRjQ9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlNEclJnSlNBV0ZqSVVlaWtRODVteUVnNGFEcnY3bHlvT3hrTjUvbjdzMDg9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMkFYTk1YNzB2dkxqUmdyaWJncUVuZ09WNUpYTG5nYkFrQ0JrWTlXSWFudz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWFVkZVJrMVY0Y1dIQVdLMFdNK1k5R1J1OVU0czhiWklZV2ZVK3lTODl4MD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlNxOVFpelJUTDcxV01vQVQ3ajJEVjcySk1MckN2Kyt6aDlBT1NzSmNiRjl1dnk3MklkZlorNnNDeExCRUtYUytGUUNPbDJJUEI4VHpWTm5VZ290WUF3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTk2LCJhZHZTZWNyZXRLZXkiOiJZajBrSTZnVWY2YmxIb2lWajRDdWxZTjY4V3hTNlRNM3RpMmovL1gyenBzPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiIyMkp1M1pRdVNWU3FXOEU3ejNmR1B3IiwicGhvbmVJZCI6ImYyNTllOGQ3LTZkNzItNDUyNC04OTMxLTNiNDE0MGU0Nzc5NSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI2NkhQRCtFQVdVK2F3V2xGNytyQ21OdEhmRUE9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieU4xK1h1ZERuQXZnUnJlMkZ2WG9MRTVBTUw0PSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IldTOVEzUkI1IiwibWUiOnsiaWQiOiIyMzQ5MDE2NTk1ODI1OjI2QHMud2hhdHNhcHAubmV0IiwibmFtZSI6Ik1BWVhTQU4gVFYifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0xtNXhJa0VFS1N5MnJRR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IkV3czdnQ0Z1aVFrT3U4d0RGNGdEdUpITUVMSWV1NHhvZ2NGNktsbjh1SHM9IiwiYWNjb3VudFNpZ25hdHVyZSI6InNnWjd6MUMwNlN2QlVhZEFmVTBtU21tb2x0cGlyRUpJdE5aY0Q3bTZ2T0EwL3pzcXZDUFdhaVh3SUwxZU5KRmZhUXJwS1JuelYyT0JmWXJ5dTd4Z0RnPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJ3V2VkdzJ4T0p5VEtXaHZoZ0Y5c0JETGo2T1I4ODVmOVF4RjRjVWhNZk9ZVVBGUXU0WENPZ1A1YUFwSzRoV1QxVU5Mcm8yOGxoQmN0THZIcVdoaHFDQT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjIzNDkwMTY1OTU4MjU6MjZAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCUk1MTzRBaGJva0pEcnZNQXhlSUE3aVJ6QkN5SHJ1TWFJSEJlaXBaL0xoNyJ9fV0sInBsYXRmb3JtIjoic21iYSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyMTE0NTY0OH0="
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ",",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "you've just been blessed by MAYXSAN |BOW OR BURN| This is MAYX-𝐌𝐃",
  author: process.env.PACK_AUTHER || "MAYX",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "MAYX-𝐌𝐃",
  ownername: process.env.OWNER_NAME || "MAYXSAN TV💅🏾✨",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "sk-proj-MLNkacQOWsMSwtBZZf0XT3BlbkFJqfgJYOOkiikW5Y4ynpM5",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "VENOCYBER").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});

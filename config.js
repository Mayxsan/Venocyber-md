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
global.sudo = process.env.SUDO || "2349016595825";
global.owner = process.env.OWNER_NUMBER || "2348106564711";
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
global.read_status = process.env.AUTO_READ_STATUS || "false";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://rb.gy/3keql8";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiS0VuTEpIUC9tL29uQk9WYlFpNW80Yk00cW1GaGhNWVkyOUF6bTZHRXFIaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiT0gyRjFhRXRsSmdZNDkvMmJmaFVqUDFDeER3QUVuYVlqUmF3THN3Z1ZHdz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJzQXExa1pmM21oRmtJZGYzakR5V01XUHBMY0pCUGttYjI0N2ZFK2hZOFdJPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI2MzBTYXVhOHlITmdXVHVZL1dzQXRoWW10czVuenljR0FCZUZPUVg2ZlVzPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlFDcmxPTWJWRVZFUGlEZ0daTkdZK2xBTTZqV05OczNack1oaWR0OHlVblU9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNwQlRwNk5oVWdyN2pWbitxYzRJeWJYL1B1VlFhYkVSV2h1aXdMR1V6V289In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSUcxUVhJOW01ZzNxS3Z3Y2N1cXMwZGxRQ2dWeVpvbXdWQ0NZcjZwc2VGaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiV2I5WFhWZDE2UkNYMFJ0djlrdnRRWUtVMjkzUFlBK1lHeTNSSFQ5aUFTND0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlhyMDNtQmN2QlJXN2RzYTFXYWpUam5VdnllNmpnTk1CUVpISU9WSGtNZ1Z1Y2JtK1kzMTFMVjNlTlgweVJhaTFoK2loZXMvSytsV0E1V2lYY2ZPVWpRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NzIsImFkdlNlY3JldEtleSI6IjVtWlgyVGhLRk4xT04vbHNvVlp1aXNWczZwQXZIQitWZzJpcG5maUl1K3M9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IlQzbzRzUjRuUUtxRHRXbWFvVGJicWciLCJwaG9uZUlkIjoiMjhjYjRlNGEtNDA0NC00Y2E5LTlkZGItZWUyMmU5MGZhZmEyIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjlaUG5iRW1TQ3pWQ083UjVFQ1VBalhpMXJsbz0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJBS05XV0YvUEFuQ2x4eHlMb2dPN2dLeEg1dWM9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiQzc0REtYR0QiLCJtZSI6eyJpZCI6IjIzNDgxMDY1NjQ3MTE6MUBzLndoYXRzYXBwLm5ldCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTDdvM1FVUTB0Tzl0UVlZQVNBQUtBQT0iLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiblN3QlRoRFlOMDArMWpiQ3loY1VHOURZTERxVVN2MnRIVTFHOWlOOGlCaz0iLCJhY2NvdW50U2lnbmF0dXJlIjoibTY1YmNxL0l6VUVtSGtuSWZnK1lKL3lpY1hRUEs3b2YyeStOWVhsVUVSOHdlVlJncWloZmFoREtMbTV4MUI4ZUFSS1U3aFptVVdONkJKOERBcVM5QlE9PSIsImRldmljZVNpZ25hdHVyZSI6Ilp1YjhUVUhmQ1dMMk1ZOTdhakFKV09wY3h5SzVNV0hRdVJTZkN6Zy9nUDU5OWtPV1RwaXlpdjNlK2hHMHMvQjBLTXVlTm9ZQW5JWFRMZkQzaWlQVml3PT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjM0ODEwNjU2NDcxMToxQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlowc0FVNFEyRGROUHRZMndzb1hGQnZRMkN3NmxFcjlyUjFOUnZZamZJZ1oifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MjI3NzE5MzV9"
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "you've just been blessed by MAYXSAN |BOW OR BURN| This is MAYX-𝐌𝐃",
  author: process.env.PACK_AUTHER || "MAYX-MD",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "Milestone-𝐌𝐃",
  ownername: process.env.OWNER_NAME || "Snr-milestone",
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

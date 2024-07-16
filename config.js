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
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMlBRb2NLNU40U2RmQmkxOE5uK3lSQVdxT0VYMzd3a21ZNCtveEFSNmdVaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieU9iaTNuc2FMWmNTVWg0K0VuY0liTmV5b2F2V1J2enJheG04TjYxWWVTYz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJnSmFiRmJ6aUJ2NHdmM3JXRG9EeXppU1NyZlJmYzF2NFNmbklHdUYyalhBPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ2SnhBT2JlOTVIdjFCbWJWMzZ1dUx0REQvR3dPZUQvcS9tamlPVE5OaURJPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InVGOEx1cVpWcEZjd0syVVM4YTR5OTBHNlFHK3Fhb1NSZmMrUnZ6dDJyRUE9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImcxUnkybWFPcDREcXFQblhiT1BCZXpGM0ZyalRWYm9NMG4yemlLWGZZV1k9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoic0YrK3lsWDdVdWduMEl6L1pTMlBxZEgzcUlRY2ZKMHFiR2pVVkdrc2xFOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWXduK2pNSVVmU21JcHRsdHZ3RlJndHFSaUZSbnRpc0dVdkl2cXJ1YiszOD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImtJUm5IU25aZGQzb2NUVUtvdDZDU2VRNGY1WGczanIxbURyQzBSYUpmaFAvM0htOUVnWjcvU3JLRG5pNDc0TkZ1N0o1S2Z1WmVnYmZCT3NndGRXL0JBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjUzLCJhZHZTZWNyZXRLZXkiOiJRUUYzZHBHNHpEb3ZKTTBtZktmU05neC8vczFjRVNpdDRBOE1CMmR3bVFjPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJjSS1SSTJoV1R4NmNzZDVoWEhDeGFRIiwicGhvbmVJZCI6IjM2NDYwNmFjLTNlOTQtNDQwMi1hN2U4LWU4ZTNhOGE2YjgyZSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJjd3BTUUZkclZldEdwNmxHZ2ltaEVOd1luaFk9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibnpYUmkvd2hWbyt1Qm4wdk1wemFXbDFZVUx3PSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IjNYNDJKVzRTIiwibWUiOnsiaWQiOiIyMzQ5MDE2NTk1ODI1OjI1QHMud2hhdHNhcHAubmV0IiwibmFtZSI6Ik1BWVhTQU4gVFYifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0tmb3cyMFEzdEhadEFZWUFTQUFLQUE9IiwiYWNjb3VudFNpZ25hdHVyZUtleSI6ImZhTUtnWTNvUXovd3drSW8xZGFnbUg2R0VGVHJFYThTRks5aE9EVndjQ289IiwiYWNjb3VudFNpZ25hdHVyZSI6IkR3RHhsakd2MTVIRGxCdTZWU2xDY1BUd3BCVVJvY1dRUTl0M01FUkdxbHpvUWtKYmNsWWRBMDU3YWlTbXBoTHZFV1lMMlIvVDYwSzNka1BpOENPckF3PT0iLCJkZXZpY2VTaWduYXR1cmUiOiJFcFlpaS82ZThPZEoxWHZJZ3VZSHg5dlE5dE0vRVJzTzJYK1NxWkg3Y1ZiM05DZ0NhSW5wdmNBd2UwREgwNExUNWJNR25wMjhhOC9VTzBNVTQzbUVBQT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjIzNDkwMTY1OTU4MjU6MjVAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCWDJqQ29HTjZFTS84TUpDS05YV29KaCtoaEJVNnhHdkVoU3ZZVGcxY0hBcSJ9fV0sInBsYXRmb3JtIjoic21iYSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyMTEzMzI5Mn0="
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

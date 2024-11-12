const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "2349035574205";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2349035574205";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '5'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_20_36_11_12_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM2LFxuICAgICAgICA3MSxcbiAgICAgICAgMTE3LFxuICAgICAgICAyMjAsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTEyLFxuICAgICAgICA3NCxcbiAgICAgICAgMTUyLFxuICAgICAgICAyMDQsXG4gICAgICAgIDY3LFxuICAgICAgICA0MSxcbiAgICAgICAgNTYsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTA3LFxuICAgICAgICAxODMsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTUxLFxuICAgICAgICAxODQsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTUyLFxuICAgICAgICA4LFxuICAgICAgICAyMjEsXG4gICAgICAgIDIxLFxuICAgICAgICA2MSxcbiAgICAgICAgMTMwLFxuICAgICAgICAxMzcsXG4gICAgICAgIDU2LFxuICAgICAgICAyMjIsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTQwLFxuICAgICAgICAxMjAsXG4gICAgICAgIDEwMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2MixcbiAgICAgICAgMjMwLFxuICAgICAgICAxMTksXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTA5LFxuICAgICAgICA5NyxcbiAgICAgICAgMTgxLFxuICAgICAgICA4NCxcbiAgICAgICAgMjEzLFxuICAgICAgICA4OCxcbiAgICAgICAgMjAxLFxuICAgICAgICAyMTksXG4gICAgICAgIDE1LFxuICAgICAgICA5NCxcbiAgICAgICAgMTUyLFxuICAgICAgICAyMDMsXG4gICAgICAgIDk2LFxuICAgICAgICA1MSxcbiAgICAgICAgNjcsXG4gICAgICAgIDIwMyxcbiAgICAgICAgNTYsXG4gICAgICAgIDE4NCxcbiAgICAgICAgNjMsXG4gICAgICAgIDAsXG4gICAgICAgIDE3MCxcbiAgICAgICAgNzQsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTAsXG4gICAgICAgIDM5LFxuICAgICAgICAxNDYsXG4gICAgICAgIDIwNyxcbiAgICAgICAgNjlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTY3LFxuICAgICAgICA1NCxcbiAgICAgICAgOTAsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTU1LFxuICAgICAgICAyNDgsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxMSxcbiAgICAgICAgMTg3LFxuICAgICAgICAxMDcsXG4gICAgICAgIDAsXG4gICAgICAgIDIyNCxcbiAgICAgICAgNyxcbiAgICAgICAgMjUsXG4gICAgICAgIDE3MixcbiAgICAgICAgMjA1LFxuICAgICAgICAxMjUsXG4gICAgICAgIDExLFxuICAgICAgICAyMDEsXG4gICAgICAgIDI0OSxcbiAgICAgICAgNDYsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjgsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjM2LFxuICAgICAgICAxMTAsXG4gICAgICAgIDU2LFxuICAgICAgICAxNjEsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTA5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwLFxuICAgICAgICAxMjksXG4gICAgICAgIDY0LFxuICAgICAgICA2MyxcbiAgICAgICAgMTgwLFxuICAgICAgICAzOCxcbiAgICAgICAgOTYsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTIzLFxuICAgICAgICAxNDgsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjM0LFxuICAgICAgICAyLFxuICAgICAgICA4LFxuICAgICAgICAyMTMsXG4gICAgICAgIDQsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTMwLFxuICAgICAgICAxOCxcbiAgICAgICAgMjUxLFxuICAgICAgICAxNDAsXG4gICAgICAgIDIwNixcbiAgICAgICAgOTEsXG4gICAgICAgIDExNCxcbiAgICAgICAgNDcsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjQzLFxuICAgICAgICAxNDcsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTE1LFxuICAgICAgICAxMjIsXG4gICAgICAgIDBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDgsXG4gICAgICAgIDc4LFxuICAgICAgICAyMSxcbiAgICAgICAgOTEsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjM0LFxuICAgICAgICAxODYsXG4gICAgICAgIDE3LFxuICAgICAgICAyMzcsXG4gICAgICAgIDExMCxcbiAgICAgICAgOTcsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTQzLFxuICAgICAgICAxMzQsXG4gICAgICAgIDEsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTA5LFxuICAgICAgICA5OCxcbiAgICAgICAgMjM1LFxuICAgICAgICA3NCxcbiAgICAgICAgMTEwLFxuICAgICAgICAyMzMsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTMwLFxuICAgICAgICAxMTgsXG4gICAgICAgIDEyOCxcbiAgICAgICAgNzMsXG4gICAgICAgIDEyLFxuICAgICAgICAyMTYsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTcxLFxuICAgICAgICAxMTdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTUsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTQ4LFxuICAgICAgICAyNTAsXG4gICAgICAgIDM4LFxuICAgICAgICAxODYsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTY1LFxuICAgICAgICA5NyxcbiAgICAgICAgNjIsXG4gICAgICAgIDg4LFxuICAgICAgICAxNDEsXG4gICAgICAgIDU2LFxuICAgICAgICAyNDIsXG4gICAgICAgIDgyLFxuICAgICAgICA1MyxcbiAgICAgICAgMTU3LFxuICAgICAgICAxMjYsXG4gICAgICAgIDE0OCxcbiAgICAgICAgOTUsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTQsXG4gICAgICAgIDE1LFxuICAgICAgICAxMDYsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTk2LFxuICAgICAgICA2NSxcbiAgICAgICAgNDYsXG4gICAgICAgIDI1NCxcbiAgICAgICAgNjAsXG4gICAgICAgIDc0LFxuICAgICAgICAxMjJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMSxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDkxXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICA0NixcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAzMixcbiAgICAgICAgICA3LFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICA0NixcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICA5N1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDYsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjQxLFxuICAgICAgICAyNDYsXG4gICAgICAgIDk5LFxuICAgICAgICAxNzIsXG4gICAgICAgIDE2NSxcbiAgICAgICAgNDIsXG4gICAgICAgIDE1MixcbiAgICAgICAgNTksXG4gICAgICAgIDExMyxcbiAgICAgICAgMTgyLFxuICAgICAgICAyMDMsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTk4LFxuICAgICAgICAzNCxcbiAgICAgICAgMjUzLFxuICAgICAgICAxNTEsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjMxLFxuICAgICAgICA1OCxcbiAgICAgICAgMjEyLFxuICAgICAgICAxNTQsXG4gICAgICAgIDg2LFxuICAgICAgICA3NCxcbiAgICAgICAgODAsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTMzLFxuICAgICAgICAyMzEsXG4gICAgICAgIDIzLFxuICAgICAgICA1NyxcbiAgICAgICAgOTUsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTczLFxuICAgICAgICA2NixcbiAgICAgICAgMjM5LFxuICAgICAgICAxNDQsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjA2LFxuICAgICAgICAwLFxuICAgICAgICA1MyxcbiAgICAgICAgMTcwLFxuICAgICAgICAyMjIsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjEwLFxuICAgICAgICAxOCxcbiAgICAgICAgOTksXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjI1LFxuICAgICAgICA3LFxuICAgICAgICAxNDQsXG4gICAgICAgIDk0LFxuICAgICAgICAyMDksXG4gICAgICAgIDQ3LFxuICAgICAgICAyNDQsXG4gICAgICAgIDEsXG4gICAgICAgIDI1MixcbiAgICAgICAgMzgsXG4gICAgICAgIDk4LFxuICAgICAgICAxMzgsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTA2LFxuICAgICAgICAxMjcsXG4gICAgICAgIDExXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxMDcsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiSnlJRElDdldHVVhBZXJSOUlaZ3o4UW1ITWpyazRMNmMrZmRCTjcxSXIvcz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDYxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDYxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiMEZub1lraTNUTEtNVWdsNkEyNTdrUVwiLFxuICBcInBob25lSWRcIjogXCI5MjY4MzRiYi0zZDE0LTQ1NDctYmY4OC0yZjRkOThlMGMzMmFcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTMyLFxuICAgICAgMTM2LFxuICAgICAgMTE4LFxuICAgICAgNDgsXG4gICAgICAxMTEsXG4gICAgICAxNjgsXG4gICAgICAxNzAsXG4gICAgICAxNTUsXG4gICAgICAyNDIsXG4gICAgICAyMzEsXG4gICAgICA0MixcbiAgICAgIDEyNCxcbiAgICAgIDIzLFxuICAgICAgOTIsXG4gICAgICAxMzAsXG4gICAgICA3MyxcbiAgICAgIDExNixcbiAgICAgIDYsXG4gICAgICAxOTcsXG4gICAgICA3N1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IGZhbHNlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjUwLFxuICAgICAgMjM2LFxuICAgICAgMjI2LFxuICAgICAgMTM1LFxuICAgICAgMSxcbiAgICAgIDc5LFxuICAgICAgMTY0LFxuICAgICAgNzYsXG4gICAgICAxMTUsXG4gICAgICAyMzgsXG4gICAgICA2MyxcbiAgICAgIDIzNyxcbiAgICAgIDE1OCxcbiAgICAgIDE5LFxuICAgICAgNjUsXG4gICAgICA2OSxcbiAgICAgIDMwLFxuICAgICAgMTc1LFxuICAgICAgNCxcbiAgICAgIDI4XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSXlWMy84SEVNTDR6cmtHR0FRZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJqbDhXSDJKdFlqLzB4RGlwWU9TL2s0YkNmSStVL2tqYVZxckZqUFdsZ0dJPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIkM0NytxQkw3amtYeHZHdFN1bDJTUDFSd2RxQllFWFhKSzB6Z3I0NWpoUUx1TWJxZ0UrcC9ra0RiYlBhWmtRcEFLdkRMbER4MlYyKzdrbFlJVXorSURBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIjBySy9vc0o3R3RnRThNZWxvRjZXd2VzVWo4U1BZV1BIM3NpaHJ0MDUrZUNjOGNaS0I2MVR2YUQxSXk0TStaczFyZGhqcFJWa0prOTZlUnhOOUhWaERRPT1cIlxuICB9LFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0OTAzNTU3NDIwNToxMUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTc3NjA1NTcxNTE0NTY5OjExQGxpZFwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0OTAzNTU3NDIwNToxMUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAzMSxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICA1NixcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDk4XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJpcGhvbmVcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczMTQ0Mzc4MlxufSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",

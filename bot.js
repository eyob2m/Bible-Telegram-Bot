const nodeHtmlToImage = require('node-html-to-image')
const cheerio = require('cheerio')
const express = require('express')
const later = require('later')
const {Telegraf} = require('telegraf')
const { default: axios } = require('axios')
const fs = require('fs')
require('dotenv').config()
const bot = new Telegraf("5758248073:AAHhRY67sCd7wDIbwTtJo6YMRNQFQfiE9dU", )
const runn = later.parse.recur().every(10).second()
const app = express()
app.get('/',(req,res)=>{ res.send("Bot is running")})
app.listen(3000)
const pages = [
  "01_salvation.htm"
  , "02_prayer.htm"
  , "03_praise.htm"
  , "04_faith.htm"
  , "05_love.htm"
  , "06_resting.htm"
  , "07_word.htm"
  , "08_fear.htm"
  , "09_supply.htm"
  , "10_forgiveness.htm"
  , "11_growth.htm"
  , "12_giving.htm"
  , "13_healing.htm"
  , "14_protection.htm"
  , "15_guidance.htm"
  , "16_fight.htm"
  , "17_happiness.htm"
  , "18_strength.htm"
  , "19_creation_evolution.htm"
  , "20_fight_for_you.htm"
  , "21_honesty.htm"
  , "22_discipline.htm"
  , "23_pregnancy.htm"
  , "24_abortion.htm"
  , "25_results.htm"
  , "26_peace.htm"
  , "27_rest.htm"
  , "28_dependency.htm"
  , "29_difficult.htm"
  , "30_wisdom.htm"
  , "31_boldness.htm"
  , "32_vice.htm"
  , "33_pride.htm"
  , "34_separation.htm"
  , "35_legalities.htm"
  , "36_perversion.htm"
  , "37_resisting.htm"
  , "38_claiming.htm"
  , "39_marriage_sex.htm"
  , "40_simplicity.htm"

]
bot.start(ctx=>ctx.reply("hello"))
  later.setInterval(()=>{
    (
      
      async () => {
        const page_index = Math.floor(Math.random() * pages.length + 1);



        const url = `https://www.wordproject.org/bibles/verses/amharic/${pages[page_index]}`
        const { data } = await axios.get(url)
        const $ = cheerio.load(data)
    
        const verse_index = Math.floor(Math.random() * $('ul').filter('#maintab').children().length + 1);
        let about = "@DawnLetters"
        versesArray = []
        $('ul').filter('#maintab').children().each((index, element) => {
          $(element).find('a').attr('style', 'color: rgba(172, 163, 255, 1); font-size: 24px;')
    
          versesArray.push($(element).html())
        })
        let verse = versesArray[verse_index]
        let post = true
        let verse_length  = verse.split(' ').length
        if (verse===undefined){
                post = false
        }
        else if(verse_length>70){
          post = false
          bot.telegram.sendMessage("@awaqiquiz",  v.text()+"\n@otBible")
    
        }
        !post ? null:  nodeHtmlToImage({
     
          output: './image.png',
          html: `  <html>
          <head>
            <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+Ethiopic&display=swap" rel="stylesheet">
            <style>
              body {
                font-famil*y: 'Noto Sans Ethiopic', sans-serif;
              }
            </style>
          </head>
          <body style="position: relative; font-family: 'Noto Sans Ethiopic', sans-serif;">
            <div style="color: rgb(105, 127, 179); font-size: 20px; position: absolute; bottom: 20px; right: 20px;">
              ${about}
            </div>
            <div style="color: rgba(172, 163, 255, 1); font-size: 1200px; position: absolute; top: -330px; left: -260px; opacity: .08">
              ✝️
            </div>
            <div style="font-size: 35px; height: 100%; color: rgb(210, 221, 247); display: flex; flex-direction: column; align-items: center; justify-content: center; padding: 50px; background: rgba(0, 2, 37, 1);">
              ${verse}
            </div>
          </body>
        </html>`,
    
        })
          .then(() => {console.log('The image was created successfully!');
          const v = cheerio.load(verse)

          bot.telegram.sendPhoto("@awaqiquiz", {source: "./image.png"}, {caption: v.text()+"\n@otBible"})})
       
      })()

    },runn)
bot.launch()
module.exports = bot
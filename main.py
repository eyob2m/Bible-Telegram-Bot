import os
import requests
from bs4 import BeautifulSoup
import random
import collections

full_url = [
"01_salvation.htm"
,"02_prayer.htm"
,"03_praise.htm"
,"04_faith.htm"
,"05_love.htm"
,"06_resting.htm"
,"07_word.htm"
,"08_fear.htm"
,"09_supply.htm"
,"10_forgiveness.htm"
,"11_growth.htm"
,"12_giving.htm"
,"13_healing.htm"
,"14_protection.htm"
,"15_guidance.htm"
,"16_fight.htm"
,"17_happiness.htm"
,"18_strength.htm"
,"19_creation_evolution.htm"
,"20_fight_for_you.htm"
,"21_honesty.htm"
,"22_discipline.htm"
,"23_pregnancy.htm"
,"24_abortion.htm"
,"25_results.htm"
,"26_peace.htm"
,"27_rest.htm"
,"28_dependency.htm"
,"29_difficult.htm"
,"30_wisdom.htm"
,"31_boldness.htm"
,"32_vice.htm"
,"33_pride.htm"
,"34_separation.htm"
,"35_legalities.htm"
,"36_perversion.htm"
,"37_resisting.htm"
,"38_claiming.htm"
,"39_marriage_sex.htm"
,"40_simplicity.htm"
    
]

num = random.randint(0,39)

url = requests.get("https://www.wordproject.org/bibles/verses/amharic/"+full_url[num])

soup = BeautifulSoup(url.content, "html.parser")
page = soup.find("ul", {"id":"maintab"})
line = page.find_all("li")
temp = 0
for verse in line:
    temp = temp+1
input = random.randint(0,temp)
extract = line[input].text

from PIL import Image,ImageFont,ImageDraw
import textwrap
import telebot
import schedule
import time
API_KEY ='5758248073:AAHhRY67sCd7wDIbwTtJo6YMRNQFQfiE9dU'
bot = telebot.TeleBot(API_KEY)
channel = "@DailyBibleVerse0"
print(num)
print(input)
def post():
    text = extract
    wan = text.split("\n")
    text = wan[2]
    srs = wan[4]
    para = textwrap.wrap(text, width=20)
    logo = "@DailyBibleVerse0"
 
    MAX_W, MAX_H = 2000, 2000
    
    image = Image.new('RGB', (MAX_W, MAX_H), (0, 0, 30, 0))

 
    draw = ImageDraw.Draw(image)
    font = ImageFont.truetype("AbyssinicaSIL-Connected-Regular.ttf", 120)
    fontso = ImageFont.truetype("AbyssinicaSIL-Connected-Regular.ttf", 70)
    fontsol = ImageFont.truetype("AbyssinicaSIL-Connected-Regular.ttf", 50)
    current_h, pad = 100, 10
    for line in para:
        w, h = draw.textsize(line, font=font)
        draw.text(((MAX_W - w) / 2, current_h), line, font=font)
        current_h += h + pad
    draw.text(((MAX_W - w) / 2, current_h), srs, font=fontso)
    draw.text((1500,1900), logo,(255,255,255), font=fontsol)
    image.save("teddxnnnnt.png")
    bot.send_photo(channel, image, caption=text +"\n   "+srs+'\n\U0001f31a | @DailyBibleVerse0') 

    
post();

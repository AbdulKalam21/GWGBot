import discord
from discord.ext import commands
from dotenv import load_dotenv
import os

#______________________________________________________________________________________________________________
# Logging
import logging

logger = logging.getLogger('discord')
logger.setLevel(logging.DEBUG)
handler = logging.FileHandler(filename='discord.log', encoding='utf-8', mode='w')
handler.setFormatter(logging.Formatter('%(asctime)s:%(levelname)s:%(name)s: %(message)s'))
logger.addHandler(handler)
#_______________________________________________________________________________________________________________
#Bot initialization and ready events
test_server=[868405594187518003]
bot = commands.Bot(command_prefix='>',
                slash_command_guilds=test_server,
                slash_commands=True,
                intents=discord.Intents.all())
                
bot.load_extension('commands.general')
@bot.event
async def on_ready():
    print("Bot online!")
    


#______________________________________________________________________________________________________________
#Bot Welcome, leave, Ghost Ping, Delete message events
@bot.event
async def on_member_join(member):
    embed=discord.Embed(title=f'Welcome to Games With Gabe `{member.name}`',
                        description='- read the rules at #rules \n \
                                    - Introduce yourself #introductions\n \
                                    - Get some roles self-roles',
                        color=discord.Colour.green_apple())
    embed.set_thumbnail(url=member.avatar_url)
    
    await member.guild.system_channel.send(embed=embed)

#_______________________________________________________________________________________________________________
#Bot runner
load_dotenv('.env')

bot.run(os.getenv('TOKEN'))

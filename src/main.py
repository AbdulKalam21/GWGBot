import discord
from discord.ext import commands
from dotenv import load_dotenv
import os
test_server=[868405594187518003]
import logging

logger = logging.getLogger('discord')
logger.setLevel(logging.DEBUG)
handler = logging.FileHandler(filename='discord.log', encoding='utf-8', mode='w')
handler.setFormatter(logging.Formatter('%(asctime)s:%(levelname)s:%(name)s: %(message)s'))
logger.addHandler(handler)

bot = commands.Bot(command_prefix='>',
                slash_command_guilds=test_server,
                slash_commands=True,
                intents=discord.Intents.all())

@bot.event
async def on_ready():
    print("Bot online!")
    bot.load_extension('commands.general')

@bot.event
async def on_member_join(member):
    embed=discord.Embed(title=f'Welcome to Games With Gabe `{member.name}`',
                        description='- read the rules at #rules \n \
                                    - Introduce yourself #introductions\n \
                                    - Get some roles self-roles',
                        color=discord.Colour.green_apple())
    embed.set_thumbnail(url=member.avatar_url)
    
    await member.guild.system_channel.send(embed=embed)

@bot.command()
async def ping(ctx: commands.Context):
    
        await ctx.send("Pong!")



load_dotenv('.env')

bot.run(os.getenv('TOKEN'))

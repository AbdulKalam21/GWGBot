import typing
import discord
from discord.ext import commands
from discord.ext.commands.core import Command
from dotenv import load_dotenv
import os
test_server=['846627800332500992']


bot = commands.Bot(command_prefix='>',slash_command_guilds=test_server,slash_commands=True,intents=discord.Intents.all())

@bot.event
async def on_ready():
    print("Bot online!")

@bot.command(description="Testing")
async def ping(ctx: commands.Context):
        await ctx.send(f"Pong!")



load_dotenv('.env')

bot.run(os.getenv('TOKEN'))
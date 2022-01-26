import typing
import discord
from discord.ext import commands
from discord.ext.commands.core import Command


test_server=['846627800332500992']


bot = commands.Bot(command_prefix='>',slash_command_guilds=test_server,slash_commands=True,intents=discord.Intents.all())

@bot.event
async def on_ready():
    print("Kittybot online!")

@bot.command(description="Meow")
async def ping(ctx: commands.Context):
        await ctx.send(f"Pong!")

#client = MyClient(intents=discord.Intents.all())
bot.run('token')
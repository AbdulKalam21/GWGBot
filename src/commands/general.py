import discord,random,os
from discord.ext import commands
import discord.utils
class general(commands.Cog):
    def __init__(self,bot) -> None:
        self.bot=bot
    @commands.command(name="honk")
    async def honk(self,ctx: commands.Context):
        await ctx.send("Pong!")
    
    @commands.command()
    async def suggest(self,ctx:commands.Context,*,msg):
        channel=discord.utils.get(ctx.guild.channels,id=868405594187518007)

        embed=discord.Embed(title=f'New Suggestion by {ctx.author.name}',
                        description=msg,
                        color=discord.Colour.yellow())
        await channel.send(embed=embed)
        
        

def setup(bot):
    bot.add_cog(general(bot))

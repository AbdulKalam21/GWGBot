import discord,random,os
from discord.ext import commands
import discord.utils

class general(commands.Cog):
    def __init__(self,bot) -> None:
        self.bot=bot
#_______________________________________________________________________________________________________________
# Ping command        
    @commands.command(name="ping")
    async def ping(self,ctx: commands.Context):
        await ctx.send("Pong!")

#_______________________________________________________________________________________________________________
# Suggest command   
    @commands.command()
    async def suggest(self,ctx:commands.Context,*,msg):
        #Suggest channel stuff
        channel=discord.utils.get(ctx.guild.channels,id=868405594187518007)

        embed=discord.Embed(title=f'New Suggestion by {ctx.author.name}',
                        description=msg,
                        color=discord.Colour.yellow())
        await channel.send(embed=embed)
        #Replying to suggestor
        await ctx.send("Idea suggested successfully!")

        
#_______________________________________________________________________________________________________________
# Bot setup       
def setup(bot):
    bot.add_cog(general(bot))

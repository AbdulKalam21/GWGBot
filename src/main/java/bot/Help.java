package bot;

import net.dv8tion.jda.api.EmbedBuilder;
import net.dv8tion.jda.api.entities.Message;
import net.dv8tion.jda.api.events.message.MessageReceivedEvent;
import net.dv8tion.jda.api.hooks.SubscribeEvent;

import java.awt.*;


public class Help {
    @SubscribeEvent
    public void eightBall(MessageReceivedEvent event){
        /*Code is self explanatory*/
        Message msg = event.getMessage();
        EmbedBuilder embed=new EmbedBuilder();
        embed.setTitle("Help");
        embed.setColor(Color.GREEN);
        embed.setDescription(config.PREFIX+"   to invoke the commands");
        /*
        embed.addfield has three fields
        name:To show a title
        value:To show a description
        inline: A boolean value for determining if the field should be in the same line as other fields
         */
        embed.addField("ping","Shows the ping",false);
        embed.addField("8ball <Question to ask>","Replies with a yes or no",false);
        if(msg.getContentRaw().startsWith(config.PREFIX + "help")) {//updated to startsWith so that if some weirdo adds messages after the command it still works

            msg.getChannel().sendMessage(embed.build()).queue() ;
        }
    }
}

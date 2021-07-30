package bot;

import java.awt.Color;
import net.dv8tion.jda.api.EmbedBuilder;
import net.dv8tion.jda.api.entities.Message;
import net.dv8tion.jda.api.events.message.MessageReceivedEvent;
import net.dv8tion.jda.api.hooks.SubscribeEvent;

public class Help {

    @SubscribeEvent
    public void help(MessageReceivedEvent event){
        if(event.getMessage().getContentRaw().startsWith(Config.PREFIX + "help")){
            Message msg = event.getMessage();
            EmbedBuilder embed = new EmbedBuilder();
            embed.setTitle("Help");
            embed.setColor(Color.GREEN);
            embed.addField(Config.PREFIX + "help", "Show this", false);
            embed.addField(Config.PREFIX + "ping","Shows the ping",false);
            embed.addField(Config.PREFIX + "8ball <Question to ask>","Replies with a yes or no",false);
            msg.getChannel().sendMessageEmbeds(embed.build()).queue();
        }
    }
}

package GWG;

import java.awt.Color;
import net.dv8tion.jda.api.EmbedBuilder;
import net.dv8tion.jda.api.entities.Message;

public class help{

    public help(Message msg){
        if(msg.getContentRaw().startsWith(config.PREFIX + "help")){
            EmbedBuilder embed = new EmbedBuilder();
            embed.setTitle("Help");
            embed.setColor(Color.GREEN);
            embed.addField(config.PREFIX + "help", "Show this", false);
            embed.addField(config.PREFIX + "ping","Shows the ping",false);
            embed.addField(config.PREFIX + "8ball <Question to ask>","Replies with a yes or no",false);
            msg.getChannel().sendMessageEmbeds(embed.build()).queue();
        }
    }
}

package bot;

import java.awt.Color;
import net.dv8tion.jda.api.EmbedBuilder;
import net.dv8tion.jda.api.entities.Message;
import net.dv8tion.jda.api.events.message.MessageReceivedEvent;
import net.dv8tion.jda.api.hooks.SubscribeEvent;

public class help {

    @SubscribeEvent
    public void eightBall(MessageReceivedEvent event){
        if(event.getMessage().getContentRaw().startsWith(config.PREFIX + "help")){
            Message msg = event.getMessage();
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

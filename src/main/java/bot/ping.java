package bot;

import net.dv8tion.jda.api.events.message.MessageReceivedEvent;
import net.dv8tion.jda.api.hooks.SubscribeEvent;
import net.dv8tion.jda.api.entities.Message;

public class Ping{

    @SubscribeEvent
    public void ping(MessageReceivedEvent event){
        Message msg = event.getMessage();
        if(msg.getContentRaw().startsWith(Config.PREFIX + "ping")){
            long time = System.currentTimeMillis();
            msg.getChannel().sendMessage("Pong!").queue(
                response-> { response.editMessageFormat("Pong: %d ms", System.currentTimeMillis() - time).queue(); 
            });
        }
    }
}

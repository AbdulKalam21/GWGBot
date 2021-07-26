package bot;

import net.dv8tion.jda.api.events.message.MessageReceivedEvent;
import net.dv8tion.jda.api.hooks.SubscribeEvent;
import net.dv8tion.jda.api.entities.Message;

public class ping{

    @SubscribeEvent
    public void PingPong(MessageReceivedEvent event){
        Message msg = event.getMessage();
        if(msg.getContentRaw().startsWith(config.PREFIX + "ping")) {//updated to startsWith so that if some weirdo adds messages after the command it still works
            long time = System.currentTimeMillis();
            msg.getChannel().sendMessage("Pong!").queue(response-> { response.editMessageFormat("Pong: %d ms", System.currentTimeMillis() - time).queue(); });
        }
    }
}

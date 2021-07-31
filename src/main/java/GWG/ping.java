package GWG;

import net.dv8tion.jda.api.entities.Message;

public class ping{

    public ping(Message msg){

        if(msg.getContentRaw().startsWith(config.PREFIX + "ping")){
            long time = System.currentTimeMillis();
            msg.getChannel().sendMessage("Pong!").queue(
            response-> { response.editMessageFormat("Pong: %d ms", System.currentTimeMillis() - time).queue();
            });
        }
    }

}

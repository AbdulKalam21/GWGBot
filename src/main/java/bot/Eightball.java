package bot;

import net.dv8tion.jda.api.entities.Message;
import net.dv8tion.jda.api.events.message.MessageReceivedEvent;
import net.dv8tion.jda.api.hooks.SubscribeEvent;

import java.util.Random;

public class Eightball {
    String[] r={"Yes","No"};
    @SubscribeEvent
    public void eightBall(MessageReceivedEvent event){
        Message msg = event.getMessage();
        Random rand=new Random();
        if(msg.getContentRaw().startsWith(config.PREFIX + "8ball")) {//updated to startsWith so that if some weirdo adds messages after the command it still works

            int i=rand.nextInt(r.length-1);//randomly selecting between the indices
            msg.getChannel().sendMessage(r[1]).queue() ;
        }
    }
}

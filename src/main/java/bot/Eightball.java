
package bot;

import net.dv8tion.jda.api.entities.Message;
import net.dv8tion.jda.api.events.message.MessageReceivedEvent;
import net.dv8tion.jda.api.hooks.SubscribeEvent;
import java.util.Random;

public class eightball {

    String[] ball ={"Yes","No"};

    @SubscribeEvent
    public void eightball(MessageReceivedEvent event){
        if(event.getMessage().getContentRaw().startsWith(config.PREFIX + "8ball")){
            Message msg = event.getMessage();
            Random random = new Random();
            int i = random.nextInt(ball.length);
            msg.getChannel().sendMessage(ball[i]).queue() ;
        }
    }
}

package GWG;

import java.util.Random;
import net.dv8tion.jda.api.entities.Message;

public class eightball{
    String[] ball ={"Yes","No"};

    public eightball(Message msg){
        if(msg.getContentRaw().startsWith(config.PREFIX + "8ball")){
            Random random = new Random();
            int i = random.nextInt(ball.length);
            msg.getChannel().sendMessage(ball[i]).queue() ;
        }
    }

}

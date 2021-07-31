package GWG;

import net.dv8tion.jda.api.events.message.MessageReceivedEvent;
import net.dv8tion.jda.api.hooks.ListenerAdapter;
import net.dv8tion.jda.api.JDABuilder;
import net.dv8tion.jda.api.entities.Message;
import javax.security.auth.login.LoginException;

public class bot extends ListenerAdapter {

    public static void main(String[] args) throws LoginException {
        JDABuilder jda = JDABuilder.createDefault(config.TOKEN);
        jda.addEventListeners(new bot());
        jda.build();
    }

    @Override
    public void onMessageReceived(MessageReceivedEvent  event){
        Message msg = event.getMessage();

        new ping(msg);
        new help(msg);
        new eightball(msg);
    }

}

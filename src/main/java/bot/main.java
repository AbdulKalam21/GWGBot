package bot;

import java.io.IOException;
import net.dv8tion.jda.api.hooks.AnnotatedEventManager;
import javax.security.auth.login.LoginException;
import net.dv8tion.jda.api.JDABuilder;

public class main {

    public static void main(String[] args) throws LoginException{
        JDABuilder jda = JDABuilder.createDefault(config.TOKEN);                //Creates an Instance of JDABuilder
        jda.setEventManager(new AnnotatedEventManager());                       // Sets the evenmanager as AnnotatedEventManager
        jda.addEventListeners(new ping());                                      // Adds the ping class to the EventListeners
        jda.build();                                                            // Builds the JDA
    }
}

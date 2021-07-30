package bot;

import net.dv8tion.jda.api.hooks.AnnotatedEventManager;
import net.dv8tion.jda.api.JDABuilder;
import javax.security.auth.login.LoginException;

public class Main {

    public static void main(String[] args) throws LoginException{
        JDABuilder jda = JDABuilder.createDefault(Config.TOKEN);                //Creates an Instance of JDABuilder
        jda.setEventManager(new AnnotatedEventManager());                       // Sets the evenmanager as AnnotatedEventManager
        jda.addEventListeners(new Ping());                                      // Adds the ping class to the EventListeners
        jda.addEventListeners(new Eightball());                                 // Adds the eightBall class to the EventListeners
        jda.addEventListeners(new Help());                                      // Adds the help class to the EventListeners
        jda.build();                                                            // Builds the JDA to the EventListeners
    }
}

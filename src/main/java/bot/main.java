package bot;

import net.dv8tion.jda.api.hooks.AnnotatedEventManager;
import net.dv8tion.jda.api.JDABuilder;
import javax.security.auth.login.LoginException;

public class Main {

    public static void main(String[] args) throws LoginException{
        JDABuilder jda = JDABuilder.createDefault(config.TOKEN);                //Creates an Instance of JDABuilder
        jda.setEventManager(new AnnotatedEventManager());                       // Sets the evenmanager as AnnotatedEventManager
        jda.addEventListeners(new ping());                                      // Adds the ping class to the EventListeners
        jda.addEventListeners(new eightball());                                 // Adds the eightBall class to the EventListeners
        jda.addEventListeners(new help());                                      // Adds the help class to the EventListeners
        jda.build();                                                            // Builds the JDA to the EventListeners
    }
}

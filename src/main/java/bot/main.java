package bot;

import java.io.IOException;
import net.dv8tion.jda.api.hooks.*;
import javax.security.auth.login.LoginException;

import net.dv8tion.jda.api.*;
public class main {

    public static void main(String[] args) throws LoginException{
        JDABuilder jda = JDABuilder.createDefault(config.TOKEN);                //Creates an Instance of JDABuilder
        jda.setEventManager(new AnnotatedEventManager());                       // Sets the evenmanager as AnnotatedEventManager
        jda.addEventListeners(new ping());                                      // Adds the ping class to the EventListeners
        jda.addEventListeners(new Eightball());                                 //Adds 8ball class
        jda.addEventListeners(new Help());                                      //Help class
        jda.build();                                                            // Builds the JDA

        try{
            webpage webpage = new webpage();                                    // Creates an Instance of the class webpage
        }catch(IOException e){

        }
    }
}

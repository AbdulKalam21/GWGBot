package GWGBot;

import javax.security.auth.login.LoginException;

import net.dv8tion.jda.api.JDABuilder;
import net.dv8tion.jda.api.entities.Message;
import net.dv8tion.jda.api.events.message.MessageReceivedEvent;
import net.dv8tion.jda.api.hooks.ListenerAdapter;

public class GWGBot extends ListenerAdapter {


    public static void main(String[] args) {

    	JDABuilder jda = JDABuilder.createDefault(Constants.BOT_TOKEN);
    	jda.addEventListeners(new GWGBot());
    	
    	try {
			jda.build();
		} catch (LoginException e) {
			e.printStackTrace();
		}
    	
    }
    
    @Override
    public void onMessageReceived(MessageReceivedEvent event){
    	
    	Message msg = event.getMessage();
    	
    	if(msg.getContentRaw().startsWith(Constants.PREFIX + "ping")) {
    		new Ping(msg);
    	}
    	
    	
    }
    
}
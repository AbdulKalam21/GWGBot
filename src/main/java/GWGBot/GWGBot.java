package GWGBot;

import javax.security.auth.login.LoginException;

import net.dv8tion.jda.api.JDA;
import net.dv8tion.jda.api.JDABuilder;
import net.dv8tion.jda.api.entities.Guild;
import net.dv8tion.jda.api.entities.Message;
import net.dv8tion.jda.api.entities.ThreadChannel;
import net.dv8tion.jda.api.events.guild.member.GuildMemberJoinEvent;
import net.dv8tion.jda.api.events.interaction.SlashCommandEvent;
import net.dv8tion.jda.api.events.message.MessageReceivedEvent;
import net.dv8tion.jda.api.hooks.ListenerAdapter;
import net.dv8tion.jda.api.requests.GatewayIntent;

public class GWGBot extends ListenerAdapter {


    public static void main(String[] args) {

    	try {
			JDA jda = JDABuilder.createDefault(Constants.BOT_TOKEN).addEventListeners(new GWGBot()).enableIntents(GatewayIntent.GUILD_MEMBERS).build().awaitReady();
			jda.getGuildById(Constants.GUILD_ID).upsertCommand("ping", "Shows the ping of the bot").queue();
			
		} catch (LoginException e) {
			e.printStackTrace();
		} catch (InterruptedException e) {
			e.printStackTrace();
		}
    	
    	
    }
    
    @Override
    public void onSlashCommand(SlashCommandEvent event) {
    	
        if(event.getName().equals("ping")) {
        	new Ping(event);
        }
    }
    
    @Override
    public void onMessageReceived(MessageReceivedEvent event){

    	Message message = event.getMessage() ;
    	    	
    	if(message.getChannel().getId().equals(Constants.SERVER_FEEDBACK_CHANNEL_ID)) {
    		new SFReaction(message);
    	}
    	
    }
    	
    @Override
    public void onGuildMemberJoin(GuildMemberJoinEvent event) {
    	new Welcome(event.getMember());
    }
    
}